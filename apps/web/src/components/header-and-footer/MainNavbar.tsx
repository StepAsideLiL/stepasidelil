import ProfileImage from "@/components/ProfileImage";
import NavMenu from "@/components/header-and-footer/NavMenu";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <header>
      <div className="flex items-center justify-between gap-5 p-5">
        <div className="flex items-center gap-5">
          <Link href={"/"}>
            <ProfileImage size={30} />
          </Link>

          <NavMenu />
        </div>

        <ThemeSwitch />
      </div>
    </header>
  );
}
