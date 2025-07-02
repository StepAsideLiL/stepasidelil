import { TFilesToModify, TProjectInfo } from "@/lib/types";

export const littleProjRepoURL =
  "https://github.com/StepAsideLiL/little-proj.git";

export const projectInfo: TProjectInfo = {
  projectName: "my-little-proj",
  siteTitle: "My Little Website",
  siteDescription: "Site Description of My Little Website",
};

export const filesToModify: TFilesToModify[] = [
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
