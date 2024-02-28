import { about, skills } from "@/components/portfolio-infos/infos";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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

      {/* Skills */}
      <section className="mx-auto max-w-4xl space-y-3 pt-40">
        <h1 className="text-3xl font-semibold">Skills</h1>

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
      </section>
      {/* Skills End */}
    </main>
  );
}
