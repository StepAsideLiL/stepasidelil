"use client";

import Icons from "@workspace/design-system/icons";
import { Button } from "@workspace/design-system/ui/button";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, systemTheme, setTheme } = useTheme();

  function changeTheme() {
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    const newThemeMatchesSystem = newTheme === systemTheme;
    setTheme(newThemeMatchesSystem ? "system" : newTheme);
  }

  return (
    <Button onClick={() => changeTheme()} className="w-fit">
      <Icons.Lucide.Sun className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <Icons.Lucide.Moon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
