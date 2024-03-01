import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menus, ModeSwitch, SimpleNavMenuSheet } from "./client-components";

export function SimplePageNavbar() {
  return (
    <header>
      <div className="hidden items-center justify-center gap-2 py-5 md:flex">
        <Menus />

        <Button variant={"secondary"}>
          <Link href={"/"}>Fancy Portfolio</Link>
        </Button>

        <ModeSwitch />
      </div>

      <div className="container flex justify-end py-5 md:hidden">
        <SimpleNavMenuSheet />
      </div>
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
