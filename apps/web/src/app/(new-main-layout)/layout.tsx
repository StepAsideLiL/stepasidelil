import MainFooter from "@/components/header-and-footer/MainFooter";
import MainNavbar from "@/components/header-and-footer/MainNavbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavbar />

      <main className={"flex-1 px-5"}>{children}</main>

      <MainFooter />
    </div>
  );
}
