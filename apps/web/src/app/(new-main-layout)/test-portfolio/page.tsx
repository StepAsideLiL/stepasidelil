import CopyEmail from "@/components/CopyEmail";
import portfoilioInfo from "@/lib/portfolio-info";
import Icons from "@workspace/design-system/icons";
import { cn } from "@workspace/design-system/lib/utils";
import { Badge } from "@workspace/design-system/ui/badge";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5 py-2">
      <Fieldset
        title={portfoilioInfo.introduction.title}
        className="col-span-1"
        center
      >
        <div>{portfoilioInfo.introduction.content}</div>
      </Fieldset>

      <Fieldset title="Projects" className="col-span-1 row-span-2">
        <div className="space-y-5">
          {portfoilioInfo.projects.map((list) => (
            <div key={list?.slugAsParams} className="space-y-2">
              <Link
                href={`/projects/${list?.slugAsParams}`}
                className="flex items-center gap-2 hover:underline"
                target="_blank"
              >
                <h1 className="text-xl">{list?.title}</h1>
                <Icons.Lucide.SquareArrowOutUpRight size={20} />
              </Link>

              <div className="flex items-center gap-2">
                {list?.tags.map((tag) => (
                  <Badge key={tag} className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Fieldset>

      <Fieldset title="Contact">
        <div className="flex flex-col gap-2">
          <CopyEmail email={portfoilioInfo.email} />

          <div className="flex flex-col gap-2">
            {portfoilioInfo.socialLinks.map((list) => (
              <Link
                key={list.href}
                href={list.href}
                target="_blank"
                className="flex w-fit items-center gap-2 hover:underline"
              >
                <list.icon size={16} />
                <span>{list.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </Fieldset>

      <Fieldset title="Techinologies I Am Using">
        <div className="flex gap-2">
          {portfoilioInfo.skills.topSkills.map((list) => (
            <span key={list.title}>
              {list.color === "#000000" || list.color === "#ffffff" ? (
                <list.icon
                  size={44}
                  className={cn(
                    list.color === "#000000" ||
                      (list.color === "#ffffff" && "text-black dark:text-white")
                  )}
                />
              ) : (
                <list.icon size={44} color={list.color} />
              )}
            </span>
          ))}
        </div>
      </Fieldset>

      <Fieldset title="Techinologies I Am Interested In">
        <div className="flex gap-2">
          {portfoilioInfo.skills.technologiesIInterestedIn.map((list) => (
            <span key={list.title}>
              {list.color === "#000000" || list.color === "#ffffff" ? (
                <list.icon
                  size={44}
                  className={cn(
                    list.color === "#000000" ||
                      (list.color === "#ffffff" && "text-black dark:text-white")
                  )}
                />
              ) : (
                <list.icon size={44} color={list.color} />
              )}
            </span>
          ))}
        </div>
      </Fieldset>

      <Fieldset title="Education" className="col-span-3">
        <div className="space-y-5">
          {portfoilioInfo.educations.universities.map((list, i) => (
            <div key={i} className="space-y-2">
              <p className="text-muted-foreground text-sm">{list.date}</p>
              <h2 className="text-lg font-semibold">
                <span>{list.degree}</span>{" "}
                <span className="text-muted-foreground">in</span>{" "}
                <span>{list.fieldOfStudy}</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                {list.institution}
              </p>
            </div>
          ))}

          {portfoilioInfo.educations.courses.map((list, i) => (
            <div key={i} className="space-y-2">
              <p className="text-muted-foreground text-sm">{list.date}</p>
              <h2 className="text-lg font-semibold">
                <span>{list.courseTitle}</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                {list.institution}
              </p>
            </div>
          ))}
        </div>
      </Fieldset>
    </div>
  );
}

function Fieldset({
  title,
  center = false,
  className = "",
  children,
}: {
  title: string;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset
      className={cn(
        "border p-5 px-10",
        center && "flex flex-col items-center justify-center",
        className
      )}
    >
      <legend
        className={cn(
          "flex border px-5 py-2",
          center ? "text-center" : "text-left"
        )}
      >
        <h1 className="text-xl font-semibold">{title}</h1>
      </legend>

      {children}
    </fieldset>
  );
}
