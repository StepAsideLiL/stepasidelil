import { CopyEmail } from "@/components/client-components";
import { email, socialLinks } from "@/components/portfolio-info-ui";
import ProfileImage from "@/components/ProfileImage";
import nextMetadata from "@/lib/next-metadata";
import Icons from "@workspace/design-system/icons";
import { cn } from "@workspace/design-system/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return nextMetadata("Home Page");
}

export default function Page() {
  return (
    <div className="grid w-full flex-grow grid-cols-2 gap-0 lg:grid-cols-3 xl:gap-10">
      <Card className="col-span-2 flex-col md:flex-row lg:col-span-1 lg:flex-col">
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-5">
            <ProfileImage size={60} />

            <div>
              <h3 className="text-2xl font-semibold">Rifat Khan</h3>
              <p className="text-muted-foreground">Web Developer</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <CopyEmail email={email} />

          <div className="flex flex-col gap-2">
            {socialLinks.map((list) => (
              <span key={list.href} className="flex items-center gap-2">
                <list.icon size={20} />
                <Link
                  href={list.href}
                  className="hover:underline"
                  target="_blank"
                >
                  {list.username}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </Card>

      <Card href="/portfolio" className="col-span-2 md:col-span-1">
        <div className="flex-1">
          <div className="flex items-center justify-end gap-4">
            <CardTitle className="">Portfolio</CardTitle>
            <span className="inline-block md:hidden">
              <Icons.Lucide.SquareArrowOutUpRight size={20} />
            </span>
          </div>
        </div>

        <CardSubtitle>
          If your are interested to know about me, you can check my portfolio.
        </CardSubtitle>
      </Card>

      <div className="col-span-2 flex flex-col gap-0 md:col-span-1 lg:flex-col xl:gap-10">
        <Card href="/blogs">
          <div className="flex-1">
            <div className="flex items-center justify-end gap-4">
              <CardTitle className="">Blogs</CardTitle>
              <span className="inline-block md:hidden">
                <Icons.Lucide.SquareArrowOutUpRight size={20} />
              </span>
            </div>
          </div>

          <CardSubtitle>
            If your are interested in my opinions, check out my blogs. I mainly
            talk about Web Development. But who knows, maybe I will talk about
            something else.
          </CardSubtitle>
        </Card>

        <Card href="/projects">
          <CardTitle>
            <div className="flex items-center justify-end gap-4">
              Pojects
              <span className="inline-block lg:hidden">
                <Icons.Lucide.SquareArrowOutUpRight />
              </span>
            </div>
          </CardTitle>

          <CardSubtitle>
            If your are interested in my projects, here is a list of interesting
            projects that you may find interesting.
          </CardSubtitle>
        </Card>
      </div>
    </div>
  );
}

function Card({
  children,
  className,
  href = "",
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}) {
  if (!href) {
    return (
      <div
        className={cn(
          "hover:bg-foreground hover:text-background flex w-full flex-1 flex-col gap-10 border p-10 transition-colors",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-foreground hover:text-background flex w-full flex-1 flex-col gap-10 border p-10 transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}

function CardTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-right text-3xl font-bold md:text-5xl", className)}>
      {children}
    </h1>
  );
}

function CardSubtitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("text-sm", className)}>{children}</p>;
}
