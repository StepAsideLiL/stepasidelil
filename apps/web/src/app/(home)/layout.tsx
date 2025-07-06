export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen p-5 lg:p-10 xl:p-20">{children}</main>
  );
}
