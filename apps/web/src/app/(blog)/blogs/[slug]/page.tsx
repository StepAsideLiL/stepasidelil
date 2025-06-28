import blogs from "#blogs";
import MDXContent from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { yesevaOne } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Metadata } from "next";

type BlogPageProps = { params: { slug: string } };

async function getBlogsFromSlug(slug: string) {
  const blog = blogs.find((blog) => blog.slugAsParams === slug);

  return blog;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogsFromSlug(params.slug);

  if (!blog) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", blog.title);

  return {
    title: blog.title,
    description: blog.description,
    authors: {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "website",
      url: siteConfig.author.url,
      images: [
        {
          url: `/api/og/g?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: "Blogs by Rifat Khan",
        },
      ],
    },
  };
}

export default async function Page({ params }: BlogPageProps) {
  const blog = await getBlogsFromSlug(params.slug);

  if (!blog) {
    return <main>Lost</main>;
  }

  return (
    <>
      <div className="space-y-2">
        <p>{format(new Date(blog.date), "dd MMMM, yyyy")}</p>

        {blog.tags.map((tag, i) => (
          <Badge key={i} variant={"secondary"}>
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className={cn("py-3 text-5xl font-bold", yesevaOne.className)}>
        {blog.title}
      </h1>
      <div className="">
        <MDXContent content={blog.content} />
      </div>
    </>
  );
}
