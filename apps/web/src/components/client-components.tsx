"use client";

import { cn } from "@workspace/design-system/lib/utils";
import { useState } from "react";
import { Check, Copy, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@workspace/design-system/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ModeSwitch() {
  const { theme, systemTheme, setTheme } = useTheme();

  function changeTheme() {
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    const newThemeMatchesSystem = newTheme === systemTheme;
    setTheme(newThemeMatchesSystem ? "system" : newTheme);
  }

  return (
    <Button onClick={() => changeTheme()} className="w-fit">
      <Sun className="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function CopyEmail({
  className,
  email,
}: {
  className?: string;
  email: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      className={cn("flex cursor-pointer items-center gap-2", className)}
      onClick={() => copyToClipboard()}
    >
      <p>{email}</p>
      <span>{!copied ? <Copy size={16} /> : <Check size={16} />}</span>
    </div>
  );
}

export function NavMenu() {
  const navList = [
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
  ];

  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-5">
        {navList.map((list) => (
          <li key={list.href}>
            <Link
              href={list.href}
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                pathname === list.href && "text-foreground underline"
              )}
            >
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
