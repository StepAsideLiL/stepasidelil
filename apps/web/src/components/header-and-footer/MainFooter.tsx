import Link from "next/link";

export default function MainFooter() {
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
