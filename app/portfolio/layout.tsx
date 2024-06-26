import { SimplePageFooter, SimplePageNavbar } from "@/components/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SimplePageNavbar />

      {children}

      <SimplePageFooter />
    </>
  );
}
