import blogs from "#blogs";
import MDXContent from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { yesevaOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

async function getBlogsFromSlug(slug: string) {
  const blog = blogs.find((blog) => blog.slugAsParams === slug);

  return blog;
}

export default async function Page({ params }: { params: { slug: string } }) {
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
