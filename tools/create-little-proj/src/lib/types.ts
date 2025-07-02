export type TProjectInfo = {
  projectName: string;
  siteTitle: string;
  siteDescription: string;
};

export type TFilesToModify = {
  filePath: string;
  replace: {
    optionName: keyof TProjectInfo;
    target: string;
  }[];
};
