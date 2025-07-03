#!/usr/bin/env node

import { Command } from "commander";
import prompts from "prompts";
import packageJSON from "../package.json";
import { basename, resolve } from "path";
import { validatePackageName } from "@/lib/validate-package-name";
import util from "util";
import ora from "ora";
import fs from "fs";
import { filesToModify, littleProjRepoURL, projectInfo } from "@/lib/constent";
import pc from "picocolors";

const handleSigTerm = () => process.exit(0);

process.on("SIGINT", handleSigTerm);
process.on("SIGTERM", handleSigTerm);

// Cli command
const program = new Command(packageJSON.name)
  .version(
    packageJSON.version,
    "-v, --version",
    "Current version of create-little-proj"
  )
  .helpOption("-h, --help", "Display help for command")
  .argument("[dir]", "Project directory")
  .usage("[dir] [opts]")
  .option("-t, --site-title <title>", "Site title")
  .option("-d, --site-description <description>", "Site description")
  .parse(process.argv);

const programOptions: {
  projectDir?: string;
  siteTitle?: string;
  siteDescription?: string;
} = program.opts();
const { args } = program;

/**
 * Run cli
 */
async function runCli() {
  // Set project name
  if (args.length === 0 || args[0] === undefined) {
    const { projectName } = await prompts({
      name: "projectName",
      type: "text",
      message: "Project name",
      initial: projectInfo.projectName,
      validate: (value) => {
        const validate = validatePackageName(basename(resolve(value)));
        if (validate.isValid) {
          return true;
        }
        return "Invalid project name: " + pc.red(validate.error.join(",\n"));
      },
    });

    if (typeof projectName === "string") {
      projectInfo.projectName = projectName.trim();
    }
  } else {
    if (args[0] === ".") {
      const validate = validatePackageName(basename(process.cwd()));
      if (!validate.isValid) {
        console.error(pc.red(validate.error.join(",\n")));
        process.exit(1);
      }
    }

    projectInfo.projectName = args[0];
  }

  // Set site title
  if (programOptions.siteTitle === undefined) {
    const { siteTitle } = await prompts({
      name: "siteTitle",
      type: "text",
      message: "Site title",
      initial: projectInfo.siteTitle,
    });

    if (typeof siteTitle === "string") {
      projectInfo.siteTitle = siteTitle.trim();
    }
  } else {
    projectInfo.siteTitle = programOptions.siteTitle;
  }

  // Set site description
  if (programOptions.siteDescription === undefined) {
    const { siteDescription } = await prompts({
      name: "siteDescription",
      type: "text",
      message: "Site description",
      initial: projectInfo.siteDescription,
    });

    if (typeof siteDescription === "string") {
      projectInfo.siteDescription = siteDescription.trim();
    }
  } else {
    projectInfo.siteDescription = programOptions.siteDescription;
  }

  // Clone little-proj
  const exec = util.promisify((await import("child_process")).exec);

  const gitExistSpinner = ora("Checking for Git...").start();
  await exec("git --version")
    .then((res) => {
      gitExistSpinner.succeed(" Git found");
    })
    .catch((error) => {
      gitExistSpinner.fail(pc.red(" Git not found"));
      console.error(error);
      process.exit(1);
    });

  const gitCloneSpinner = ora("Cloning little-proj...").start();
  await exec(`git clone ${littleProjRepoURL} ${projectInfo.projectName}`)
    .then((res) => {
      gitCloneSpinner.succeed(
        ` Cloned little-proj to ${projectInfo.projectName}`
      );
    })
    .catch((error) => {
      gitCloneSpinner.fail(pc.red(" Failed to clone little-proj"));
      console.error(error);
      process.exit(1);
    });

  // Modify files
  const modifyFilesSpinner = ora("Modifying files...").start();
  Promise.all(
    filesToModify.map((file) => {
      const absoluteFilePath = resolve(projectInfo.projectName, file.filePath);
      fs.readFile(absoluteFilePath, "utf8", (err, data) => {
        if (err) {
          modifyFilesSpinner.fail(pc.red(" Failed to read file"));
          console.error(err);
          process.exit(1);
        }

        let content = data;

        file.replace.forEach((replace) => {
          if (
            replace.optionName === "projectName" &&
            projectInfo.projectName === "."
          ) {
            content = content.replace(replace.target, basename(process.cwd()));
          } else {
            content = content.replace(
              replace.target,
              projectInfo[replace.optionName]
            );
          }
        });

        fs.writeFile(absoluteFilePath, content, (err) => {
          if (err) {
            modifyFilesSpinner.fail(pc.red(" Failed to write file"));
            console.error(err);
            process.exit(1);
          }
        });
      });
    })
  )
    .then(() => {
      modifyFilesSpinner.succeed(" Files modified");
    })
    .catch((error) => {
      gitCloneSpinner.fail(pc.red(" Failed to modify"));
      console.error(error);
      process.exit(1);
    });
}

runCli();
