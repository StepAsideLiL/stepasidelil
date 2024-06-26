import { MainFooter, MainNavbar } from "@/components/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNavbar />

      <main className="mx-auto min-h-screen max-w-3xl px-10 py-10">
        {children}
      </main>

      <MainFooter />
    </>
  );
}
