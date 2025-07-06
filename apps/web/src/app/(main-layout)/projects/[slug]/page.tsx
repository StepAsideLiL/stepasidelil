import MDXContent from "@/components/mdx-components";
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
      <div>
        <h1 className="text-muted-foreground text-center text-2xl">
          No Project Found!
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        {/* <p>{format(new Date(blog.date), "dd MMMM, yyyy")}</p> */}

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
    </>
  );
}
