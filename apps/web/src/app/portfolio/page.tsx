import MDXContent from "@/components/mdx-components";
import data from "@/lib/data";
import nextMetadata from "@/lib/next-metadata";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const portfilio = data.getPortfolio();

  return !portfilio || portfilio === undefined
    ? nextMetadata("No Portfolio")
    : nextMetadata(portfilio.title, portfilio.description);
}

export default async function Page() {
  const portfolio = data.getPortfolio();

  if (!portfolio) {
    return (
      <main className={cn("mx-auto max-w-3xl px-10 py-10")}>
        <h1 className="text-center text-2xl">No Portfolio 🥺</h1>
      </main>
    );
  }

  return (
    <main className={cn("mx-auto max-w-3xl px-10 py-10")}>
      <MDXContent content={portfolio.content} />
    </main>
  );
}
