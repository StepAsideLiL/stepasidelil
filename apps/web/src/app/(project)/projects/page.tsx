import data from "@/lib/data";
import { yesevaOne } from "@/lib/fonts";
import nextMetadata from "@/lib/next-metadata";
import { cn } from "@workspace/design-system/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return nextMetadata("Projects", "List of Projects by Rifat Khan");
}

export default async function Page() {
  if (data.projects.length === 0) {
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
      {data.projects.map((project) => (
        <Link
          key={project.slug}
          href={project.permalink}
          className="text-muted-foreground/60 hover:text-foreground block space-y-1 py-3 transition-colors"
        >
          <h1 className={cn("text-4xl", yesevaOne.className)}>
            {project.title}
          </h1>

          <p className={cn(yesevaOne.className)}>
            {/* {date.format(new Date(blog.date), "dd MMMM, yyyy")} */}
            {project.description}
          </p>
        </Link>
      ))}
    </>
  );
}
