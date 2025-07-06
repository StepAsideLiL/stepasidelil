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

      <main className={"mx-auto max-w-3xl flex-1 px-10 py-10"}>{children}</main>

      <MainFooter />
    </div>
  );
}
