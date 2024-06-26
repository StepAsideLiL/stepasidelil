import { MainFooter, MainNavbar } from "@/components/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNavbar />

      {children}

      <MainFooter />
    </>
  );
}
