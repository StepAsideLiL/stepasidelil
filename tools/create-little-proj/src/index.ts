#!/usr/bin/env node

import { Command } from "commander";
import prompts from "prompts";
import packageJSON from "../package.json";
import { basename, resolve } from "path";
import { validatePackageName } from "@/helpers/validate-package-name";
import util from "util";
import ora from "ora";
import fs from "fs";

const handleSigTerm = () => process.exit(0);

process.on("SIGINT", handleSigTerm);
process.on("SIGTERM", handleSigTerm);

const projectInfo = {
  projectName: "my-little-proj",
  siteTitle: "My Little Website",
  siteDescription: "Site Description of My Little Website",
};
const littleProjRepoURL = "https://github.com/StepAsideLiL/little-proj.git";
type FilesToModify = {
  filePath: string;
  replace: {
    optionName: keyof typeof projectInfo;
    target: string;
  }[];
};
const filesToModify: FilesToModify[] = [
  {
    filePath: "package.json",
    replace: [
      {
        optionName: "projectName",
        target: "little-proj",
      },
    ],
  },
  {
    filePath: "apps/web/src/lib/site-config/index.ts",
    replace: [
      {
        optionName: "siteTitle",
        target: "Little Proj",
      },
      {
        optionName: "siteDescription",
        target: "Minimalistic Starter Kit for Next.js",
      },
    ],
  },
];

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
        return "Invalid project name: " + validate.error.join(",\n");
      },
    });

    if (typeof projectName === "string") {
      projectInfo.projectName = projectName.trim();
    }
  } else {
    projectInfo.projectName = args[0];
  }

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

  console.log(projectInfo, process.cwd());

  const exec = util.promisify((await import("child_process")).exec);

  const gitExistSpinner = ora("Checking for Git...").start();
  await exec("git --version")
    .then((res) => {
      gitExistSpinner.succeed(" Git found");
    })
    .catch((error) => {
      gitExistSpinner.fail(" Git not found");
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
      gitCloneSpinner.fail(" Failed to clone little-proj");
      console.error(error);
      process.exit(1);
    });

  const modifyFilesSpinner = ora("Modifying files...").start();
  Promise.all(
    filesToModify.map((file) => {
      const absoluteFilePath = resolve(projectInfo.projectName, file.filePath);
      fs.readFile(absoluteFilePath, "utf8", (err, data) => {
        if (err) {
          modifyFilesSpinner.fail(" Failed to read file");
          console.error(err);
          process.exit(1);
        }

        let content = data;

        file.replace.forEach((replace) => {
          content = content.replace(
            replace.target,
            projectInfo[replace.optionName]
          );
        });

        fs.writeFile(absoluteFilePath, content, (err) => {
          if (err) {
            modifyFilesSpinner.fail(" Failed to write file");
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
      gitCloneSpinner.fail(" Failed to modify");
      console.error(error);
      process.exit(1);
    });
}

runCli();
