export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto max-w-3xl py-10">{children}</main>
    </>
  );
}
