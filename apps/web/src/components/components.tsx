import Link from "next/link";
import { ModeSwitch, NavMenu } from "./client-components";
import ProfileImage from "./ProfileImage";

export function MainNavbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-10 py-5">
        <div className="flex items-center gap-5">
          <Link href={"/"}>
            <ProfileImage size={30} />
          </Link>

          <NavMenu />
        </div>

        <ModeSwitch />
      </div>
    </header>
  );
}

export function MainFooter() {
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
