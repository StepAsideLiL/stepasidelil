import { yesevaOne } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const blogs = [
  {
    title: "Is MERN stack still relevant!",
    href: "/blogs/is-mern-stack-still-relevant",
  },
];

export default function Page() {
  return (
    <>
      {blogs.map((blog) => (
        <Link
          key={blog.href}
          href={blog.href}
          className={cn(
            "block py-3 text-4xl text-muted transition-colors hover:text-foreground",
            yesevaOne.className,
          )}
        >
          {blog.title}
        </Link>
      ))}
    </>
  );
}
