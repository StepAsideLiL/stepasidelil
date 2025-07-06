import MDXContent from "@/components/mdx-components";
import data from "@/lib/data";
import nextMetadata from "@/lib/next-metadata";
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
    return <h1 className="text-center text-2xl">No Portfolio 🥺</h1>;
  }

  return <MDXContent content={portfolio.content} />;
}
