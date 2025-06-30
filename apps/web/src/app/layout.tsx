import type { Metadata } from "next";
import "@workspace/design-system/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { robotoMono } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Rifat Khan (StepAsideLiL)",
  description: "Protfolio of Rifat Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={robotoMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
