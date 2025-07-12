import MDXContent from "@/components/mdx-components";
import { Badge } from "@workspace/design-system/ui/badge";
import data from "@/lib/data";
import { yesevaOne } from "@/lib/fonts";
import nextMetadata from "@/lib/next-metadata";
import { cn } from "@workspace/design-system/lib/utils";
import { format } from "date-fns";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

type BlogPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = data.getBlogBySlug((await params).slug);

  return blog
    ? nextMetadata(blog.title, blog.description)
    : nextMetadata("No Blog Found");
}

export default async function Page({ params }: BlogPageProps) {
  const blog = data.getBlogBySlug((await params).slug);

  if (!blog) {
    return (
      <div>
        <h1 className="text-muted-foreground text-center text-2xl">
          No Blog Found!
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5 py-10">
      <div className="col-span-4 col-start-1 md:col-span-3 lg:col-span-2 lg:col-start-2">
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
      </div>

      <div className="col-span-1 hidden md:block">
        <TableOfContents toc={blog.toc} />
      </div>
    </div>
  );
}
