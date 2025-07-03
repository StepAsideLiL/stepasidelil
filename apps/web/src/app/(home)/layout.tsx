export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="flex min-h-screen p-10 lg:p-20">{children}</main>;
}
