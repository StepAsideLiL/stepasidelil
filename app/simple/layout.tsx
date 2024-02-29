import {
  SimplePageFooter,
  SimplePageNavbar,
} from "@/components/uis/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimplePageNavbar />

      {children}

      <SimplePageFooter />
    </>
  );
}
