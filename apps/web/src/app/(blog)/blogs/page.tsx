import { yesevaOne } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import blogs from "#blogs";
import { format } from "date-fns";
import { Metadata } from "next";
import nextMetadata from "@/lib/next-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return nextMetadata("Blogs", "Read Blogs by Rifat Khan");
}

export default function Page() {
  return (
    <>
      {blogs.map((blog) => (
        <Link
          key={blog.slug}
          href={blog.permalink}
          className="text-muted-foreground/60 hover:text-foreground block space-y-1 py-3 transition-colors"
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
