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
    <div className="py-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={project.githubLink}
            className="text-muted-foreground/60 hover:text-foreground block space-y-1 border p-5 py-3 transition-colors"
          >
            <h1 className={cn("text-4xl", yesevaOne.className)}>
              {project.title}
            </h1>

            <p className={cn(yesevaOne.className)}>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
