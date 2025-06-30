import { Metadata } from "next";
import siteConfig from "@/lib/site-config";
import baseUrl from "@/lib/base-url";

export default function nextMetadata(
  title: string,
  description?: string
): Metadata {
  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", title);

  return {
    title: title ? `${title} - ${siteConfig.name}` : siteConfig.name,
    description: description ? description : siteConfig.description,
    authors: siteConfig.author,
    metadataBase: new URL(baseUrl),
    icons: {
      icon: [
        { url: "/favicon.ico" },
        new URL("/favicon.ico", baseUrl),
        { url: "/favicon-16x16.png", sizes: "16x16" },
        { url: "/favicon-32x32.png", sizes: "32x32" },
      ],
    },
    manifest: "/site.webmanifest",
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      type: "website",
      url: siteConfig.author.url,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
  };
}
