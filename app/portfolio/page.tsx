import portfilio from "#portfolio";
import MDXContent from "@/components/mdx-components";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

async function getPortfolioData() {
  return portfilio[0];
}

export async function generateMetadata(): Promise<Metadata> {
  const portfilio = await getPortfolioData();

  if (!portfilio) {
    return {};
  }

  return {
    title: portfilio.title,
    description: portfilio.description,
    authors: {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    openGraph: {
      title: portfilio.title,
      description: portfilio.description,
      type: "website",
      url: siteConfig.author.url,
      images: [
        {
          url: `/api/og/g`,
          width: 1200,
          height: 630,
          alt: portfilio.title,
        },
      ],
    },
  };
}

export default async function Page() {
  const myPortfolio = await getPortfolioData();

  if (!myPortfolio.content) {
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
