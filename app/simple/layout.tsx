import SimplePageFooter from "@/components/uis/simple-page-footer";
import SimplePageNavbar from "@/components/uis/simple-page-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimplePageNavbar />

      {children}

      <SimplePageFooter />
    </>
  );
}
