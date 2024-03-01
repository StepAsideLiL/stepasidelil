"use client";

import { cn } from "@/lib/utils";
import { email } from "@/components/portfolio-infos/infos";
import { useState } from "react";
import { Check, Copy, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navMenus = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Education",
    href: "#education",
  },
  {
    title: "Interested",
    href: "#interested",
  },
];

export function ModeSwitch() {
  const { theme, setTheme } = useTheme();

  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Button onClick={() => changeTheme()}>
      {theme === "dark" ? (
        <Sun className="mr-2 h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="mr-2 h-[1.2rem] w-[1.2rem]" />
      )}
      {theme === "dark" ? `Switch to Light` : "Switch to Dark"}
    </Button>
  );
}

export function CopyEmail({ className }: { className?: string }) {
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

export function Menus({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center gap-2", className)}>
      {navMenus.map((menu) => (
        <Link key={menu.href} href={menu.href} className="hover:underline">
          {menu.title}
        </Link>
      ))}
    </nav>
  );
}

export function SimpleNavMenuSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>

      <SheetContent className="space-y-3">
        <div className="h-10"></div>

        <nav className="flex flex-col gap-2">
          {navMenus.map((menu) => (
            <Link
              key={menu.href}
              href={`${menu.href}`}
              onClick={() => setOpen(false)}
            >
              {menu.title}
            </Link>
          ))}
        </nav>

        <Button variant={"secondary"}>
          <Link href={"/"}>Fancy Portfolio</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
