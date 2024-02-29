import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SimplePageNavbar() {
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

  return (
    <header className="flex items-center justify-center py-5">
      <Button variant={"secondary"}>
        <Link href={"/"}>Styled Page</Link>
      </Button>
    </header>
  );
}

export function SimplePageFooter() {
  return (
    <footer className="border-t py-10">
      <p className="text-center">
        Portfolio of{" "}
        <Link href={"https://github.com/StepAsideLiL"} className="underline">
          Rifat Khan
        </Link>
      </p>
    </footer>
  );
}
