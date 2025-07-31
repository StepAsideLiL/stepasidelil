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
  const projects = data.getProjects();

  if (projects.length === 0) {
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
      <div className="col-span-4 md:col-span-3 lg:col-span-2 lg:col-start-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slugAsParams}`}
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
      </div>
    </div>
  );
}
