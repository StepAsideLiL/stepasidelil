import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SimplePageNavbar() {
  return (
    <header className="py-10 flex justify-center items-center">
      <Button variant={"secondary"}>
        <Link href={"/"}>Styled Page</Link>
      </Button>
    </header>
  );
}
