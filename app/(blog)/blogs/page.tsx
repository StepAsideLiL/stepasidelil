import { yesevaOne } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import blogs from "#blogs";
import { format } from "date-fns";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  if (blogs.length === 0) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", "Blogs by Rifat Khan");

  return {
    title: "Blogs by Rifat Khan",
    description: "Read Blogs on Web Development and Nextjs",
    authors: {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    openGraph: {
      title: "Blogs by Rifat Khan",
      description: "Read Blogs on Web Development and Nextjs",
      type: "website",
      url: siteConfig.author.url,
      images: [
        {
          url: `/api/og/g${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: "Blogs by Rifat Khan",
        },
      ],
    },
  };
}

export default function Page() {
  return (
    <>
      {blogs.map((blog) => (
        <Link
          key={blog.slug}
          href={blog.permalink}
          className="block space-y-1 py-3 text-muted transition-colors hover:text-foreground"
        >
          <h1 className={cn("text-4xl", yesevaOne.className)}>{blog.title}</h1>

          <p className={cn(yesevaOne.className)}>
            {format(new Date(blog.date), "dd MMMM, yyyy")}
          </p>
        </Link>
      ))}
    </>
  );
}
