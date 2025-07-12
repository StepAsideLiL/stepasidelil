import MDXContent from "@/components/mdx-components";
import TableOfContents from "@/components/TableOfContents";
import data from "@/lib/data";
import { yesevaOne } from "@/lib/fonts";
import nextMetadata from "@/lib/next-metadata";
import { cn } from "@workspace/design-system/lib/utils";
import { Badge } from "@workspace/design-system/ui/badge";
import { Metadata } from "next";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const blog = data.getProjectBySlug((await params).slug);

  return blog
    ? nextMetadata(blog.title, blog.description)
    : nextMetadata("No Blog Found");
}

export default async function Page({ params }: ProjectPageProps) {
  const project = data.getProjectBySlug((await params).slug);

  if (!project) {
    return (
      <div className="mx-auto w-full max-w-3xl py-10">
        <h1 className="text-muted-foreground text-center text-2xl">
          No Project Found!
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5 py-10">
      <div className="col-span-4 col-start-1 md:col-span-3 lg:col-span-2 lg:col-start-2">
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant={"secondary"}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <h1 className={cn("py-3 text-5xl font-bold", yesevaOne.className)}>
          {project.title}
        </h1>
        <div className="">
          <MDXContent content={project.content} />
        </div>
      </div>

      <div className="col-span-1 hidden md:block">
        <TableOfContents toc={project.toc} />
      </div>
    </div>
  );
}
