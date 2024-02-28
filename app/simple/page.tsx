import { about } from "@/components/portfolio-infos/infos";
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
    </main>
  );
}
