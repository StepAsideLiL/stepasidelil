"use client";

import { cn } from "@workspace/design-system/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-5">
        {navList.map((list) => (
          <li key={list.href}>
            <Link
              href={list.href}
              className={cn(
                "border-muted-foreground text-muted-foreground hover:border-foreground rounded-xs border border-b-2 px-2 transition-colors",
                pathname === list.href && "text-foreground border-foreground"
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
