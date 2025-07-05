import data from "@/lib/data";
import nextMetadata from "@/lib/next-metadata";
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

  return <div>Page</div>;
}
