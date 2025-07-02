import validateProjectName from "validate-npm-package-name";

type ValidateNpmNameResult =
  | {
      isValid: true;
    }
  | {
      isValid: false;
      error: string[];
    };

export function validatePackageName(name: string): ValidateNpmNameResult {
  const validate = validateProjectName(name);
  if (validate.validForNewPackages) {
    return { isValid: true };
  }

  return {
    isValid: false,
    error: validate.errors || [],
  };
}
