import ProfileImage from "@/components/ProfileImage";
import data from "@/lib/data";
import portfoilioInfo from "@/lib/portfolio-info";
import Icons from "@workspace/design-system/icons";
import Link from "next/link";
import * as fDate from "date-fns";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 py-20">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <ProfileImage size={40} />
          <h1 className="text-3xl font-bold">Rifat Khan</h1>
        </div>

        <div className="flex items-center gap-5">
          <Link href={portfoilioInfo.social.github.href}>
            <portfoilioInfo.social.github.icon size={28} />
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-foreground/80">
          👋 hello, I am Rifat - software engineer building small and awesome
          apps.
        </h2>
      </section>

      <section>
        <div className="text-muted-foreground flex items-center gap-2">
          <Icons.Lucide.MapPin size={16} />
          <span>Dhaka, Bangladesh</span>
        </div>

        <div className="text-muted-foreground flex items-center gap-2">
          <Icons.Lucide.GraduationCap size={16} />
          <span>
            B.Sc. in Electrical and Electronic Engineering from JKKNIU
          </span>
        </div>
      </section>

      <section>
        <p className="text-foreground/80">
          I am javascript and typescript developer. I love to build small apps
          with web technology. Interested in Rust and Go lang too.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-muted-foreground/80">Projects</h3>

        <div className="grid grid-cols-2 gap-5">
          {data.getProjects().map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slugAsParams}`}
              className="group space-y-1"
            >
              <h2 className="group-hover:underline">{project.title}</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-muted-foreground/80">Blogs</h3>

        <div className="space-y-1">
          {data.blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slugAsParams}`}
              className="group bg-muted flex items-center justify-between space-y-1 px-2 py-1"
            >
              <h2 className="group-hover:underline">{blog.title}</h2>
              <p className="text-muted-foreground">
                {fDate.format(blog.date, "LLLL d, yyyy")}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
