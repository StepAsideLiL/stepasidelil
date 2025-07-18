import { cn } from "@workspace/design-system/lib/utils";
import Link from "next/link";
import { format } from "date-fns";
import { Metadata } from "next";
import nextMetadata from "@/lib/next-metadata";
import data from "@/lib/data";
import { yesevaOne } from "@/lib/fonts";

export async function generateMetadata(): Promise<Metadata> {
  return nextMetadata("Blogs", "Read Blogs by Rifat Khan");
}

export default function Page() {
  if (data.blogs.length === 0) {
    return (
      <div>
        <h1 className="text-muted-foreground text-center text-2xl">
          No Blogs Are Written
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5 py-10">
      <div className="col-span-4 md:col-span-3 lg:col-span-2 lg:col-start-2">
        {data.blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slugAsParams}`}
            className="text-muted-foreground/60 hover:text-foreground block space-y-1 py-3 transition-colors"
          >
            <h1 className={cn("text-4xl", yesevaOne.className)}>
              {blog.title}
            </h1>

            <p className={cn(yesevaOne.className)}>
              {format(new Date(blog.date), "dd MMMM, yyyy")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
