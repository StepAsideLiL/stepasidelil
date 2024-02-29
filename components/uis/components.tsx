import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menus } from "./client-components";

export function SimplePageNavbar() {
  return (
    <header>
      <div className="hidden items-center justify-center gap-2 py-5 md:flex">
        <Menus />

        <Button variant={"secondary"}>
          <Link href={"/"}>Styled Page</Link>
        </Button>
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
