import { CopyEmail } from "@/components/client-components";
import { email, socialLinks } from "@/components/portfolio-info-ui";
import ProfileSvg from "@/components/profile-svg";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", "Home Page");

  return {
    title: siteConfig.name,
    description: siteConfig.description,
    authors: {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      type: "website",
      url: siteConfig.author.url,
      images: [
        {
          url: `/api/og/g?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
  };
}

export default function Page() {
  return (
    <main className="flex min-h-screen p-10 lg:p-20">
      <div className="flex w-full flex-grow flex-col gap-10 lg:flex-row">
        <Card className="cursor-default">
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-5">
              <ProfileSvg size={70} />

              <div>
                <h3 className="text-2xl font-semibold">Rifat Khan</h3>
                <p className="text-muted-foreground">Web Developer</p>
              </div>
            </div>
          </div>

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
        </Card>

        <Card href="/portfolio">
          <CardTitle>
            <div className="flex items-center justify-end gap-4">
              Portfolio
              <span className="inline-block lg:hidden">
                <SquareArrowOutUpRight />
              </span>
            </div>
          </CardTitle>

          <CardSubtitle>
            If your are interested to know about me, you can check my portfolio.
          </CardSubtitle>
        </Card>

        <Card href="/blogs">
          <CardTitle>
            <div className="flex items-center justify-end gap-4">
              Blogs
              <span className="inline-block lg:hidden">
                <SquareArrowOutUpRight />
              </span>
            </div>
          </CardTitle>

          <CardSubtitle>
            If your are interested in my opinions, check out my blogs. I mainly
            talk about Web Development. But who knows, maybe I will talk about
            something else.
          </CardSubtitle>
        </Card>
      </div>
    </main>
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
  return (
    <Link
      href={href}
      className={cn(
        "flex w-full flex-1 flex-col gap-10 border p-10 transition-colors hover:bg-foreground hover:text-background",
        className,
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
    <h1
      className={cn(
        "flex-1 text-right text-3xl font-bold lg:text-5xl",
        className,
      )}
    >
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
