import portfilio from "#portfolio";
import MDXContent from "@/components/mdx-components";
import nextMetadata from "@/lib/next-metadata";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

async function getPortfolioData() {
  return portfilio[0];
}

export async function generateMetadata(): Promise<Metadata> {
  const portfilio = await getPortfolioData();

  if (!portfilio || portfilio === undefined) {
    return {};
  }

  return nextMetadata(portfilio.title, portfilio.description);
}

export default async function Page() {
  const myPortfolio = await getPortfolioData();

  if (!myPortfolio) {
    return (
      <main className={cn("mx-auto max-w-3xl px-10 py-10")}>
        <h1 className="text-center text-2xl">🥺</h1>
      </main>
    );
  }

  return (
    <main className={cn("mx-auto max-w-3xl px-10 py-10")}>
      <MDXContent content={myPortfolio.content} />
    </main>
  );
}
