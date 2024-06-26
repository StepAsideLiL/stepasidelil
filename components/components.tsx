import Link from "next/link";
import { ModeSwitch } from "./client-components";

export function SimplePageNavbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-10 py-5">
        <div></div>

        <ModeSwitch />
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
