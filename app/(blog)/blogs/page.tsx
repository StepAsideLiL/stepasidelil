import { yesevaOne } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import blogs from "#blogs";
import { format } from "date-fns";

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
