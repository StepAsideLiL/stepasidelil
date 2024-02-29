import {
  about,
  courses,
  education,
  interestedTechnologies,
  projects,
  skills,
  socialLinks,
} from "@/components/portfolio-infos/infos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CopyEmail } from "@/components/uis/client-components";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container min-h-screen space-y-10 py-20">
      {/* Short Introduction */}
      <section className="space-y-2 text-center">
        <h1 className="text-3xl font-medium md:text-6xl">
          Hi 👋, I am Rifat Khan
        </h1>
        <p className="text-base text-muted-foreground md:text-xl">
          A JavaScript and Nextjs Developer from Bangladesh
        </p>
      </section>
      {/* Short Introduction End */}

      {/* Profile Picture and Avatar */}
      <section className="mx-auto w-32">
        <Image
          src={"/profile-avater.png"}
          alt="Profile Avatar"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </section>
      {/* Profile Picture and Avatar End */}

      {/* About */}
      <section className="mx-auto max-w-4xl">
        <p className="text-xl md:text-3xl">{about}</p>
      </section>
      {/* About End */}

      {/* Contact Info */}
      <section className="mx-auto max-w-4xl space-y-6 pt-20">
        <h1 className="text-3xl font-semibold text-[#00f8ff]">
          Contact Me Through
        </h1>

        <CopyEmail className="text-xl" />

        <div className="flex gap-5">
          {socialLinks.map((item, i) => (
            <Button key={i} size={"icon"} variant={"ghost"} asChild>
              <Link href={item.href}>{item.icon}</Link>
            </Button>
          ))}
        </div>
      </section>
      {/* Contact Info End */}

      {/* Skills */}
      <section className="mx-auto max-w-4xl space-y-6 pt-20">
        <h1 className="text-3xl font-semibold text-[#00f8ff]">Skills</h1>

        {/* Hard skills */}
        <section className="grid grid-cols-4 gap-2">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold">Hard Skills</h2>
          </div>

          <div className="col-span-3 space-y-4">
            {/* Expertise skills */}
            <section className="space-y-3">
              <div className="flex items-end">
                <h1 className="text-lg font-semibold">Expertise</h1>
                <Separator className="flex-1 bg-foreground" />
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.experties.map((skill, i) => (
                  <p key={i}>
                    <span>{skill.title} </span>
                    {i !== skills.experties.length - 1 && <span>&bull;</span>}
                  </p>
                ))}
              </div>
            </section>

            {/* Comfortable skills */}
            <section className="space-y-3">
              <div className="flex items-end">
                <h1 className="text-lg font-semibold">Comfortable</h1>
                <Separator className="flex-1 bg-foreground" />
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.comfortable.map((skill, i) => (
                  <p key={i}>
                    <span>{skill.title} </span>
                    {i !== skills.comfortable.length - 1 && <span>&bull;</span>}
                  </p>
                ))}
              </div>
            </section>

            {/* Familiar skills */}
            <section className="space-y-3">
              <div className="flex items-end">
                <h1 className="text-lg font-semibold">Familiar</h1>
                <Separator className="flex-1 bg-foreground" />
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.familiar.map((skill, i) => (
                  <p key={i}>
                    <span>{skill.title} </span>
                    {i !== skills.familiar.length - 1 && <span>&bull;</span>}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </section>
        {/* Hard skills End */}

        <Separator />

        <section className="grid grid-cols-4 gap-2">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold">Soft Skills</h2>
          </div>
          <div className="col-span-3 flex flex-wrap gap-2">
            {skills.softSkills.map((skill, i) => (
              <p key={i}>
                <span>{skill.title} </span>
                {i !== skills.softSkills.length - 1 && <span>&bull;</span>}
              </p>
            ))}
          </div>
        </section>
      </section>
      {/* Skills End */}

      {/* Projects */}
      <section className="mx-auto max-w-4xl space-y-6 pt-20">
        <h1 className="text-3xl font-semibold text-[#00f8ff]">Projects</h1>

        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  <Link href={item.href} className="hover:underline">
                    GitHub Link
                  </Link>
                </CardDescription>
              </CardHeader>

              <CardContent>{item.description}</CardContent>

              <CardFooter className="flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <Badge key={i}>{tech}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </section>
      </section>
      {/* Projects End */}

      {/* Eduction */}
      <section className="mx-auto max-w-4xl space-y-6 pt-20">
        <h1 className="text-3xl font-semibold text-[#00f8ff]">
          Education and Courses
        </h1>

        <section>
          <p className="text-muted-foreground">{education[0].date}</p>
          <h3 className="text-xl font-semibold">
            {`${education[0].degree} in ${education[0].fieldOfStudy}`}
          </h3>
          <p className="text-muted-foreground">{education[0].institution}</p>
        </section>

        {courses.map((item, i) => (
          <section key={i}>
            <p className="text-muted-foreground">{item.date}</p>
            <h3 className="text-xl font-semibold">{item.courseTitle}</h3>
            <p className="text-muted-foreground">{item.institution}</p>
          </section>
        ))}
      </section>
      {/* Eduction End */}

      {/* Interested In */}
      <section className="mx-auto max-w-4xl space-y-6 py-20">
        <h1 className="text-3xl font-semibold text-[#00f8ff]">
          Technologies I Will Be Learning
        </h1>

        <section>
          {interestedTechnologies.map((item, i) => (
            <p key={i}>{item.title}</p>
          ))}
        </section>
      </section>
      {/* Interested In End */}
    </main>
  );
}
