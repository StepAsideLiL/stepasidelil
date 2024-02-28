import Image from "next/image";

export default function Page() {
  return (
    <main className="container min-h-screen py-20 space-y-10">
      <section className="text-center space-y-2">
        <h1 className="text-2xl font-medium">Hi 👋, I am Rifat Khan</h1>
        <p className="text-muted-foreground">
          A JavaScript and Nextjs Developer from Bangladesh
        </p>
      </section>

      <section className="w-32 mx-auto">
        <Image
          src={"/profile-avater.png"}
          alt="Profile Avatar"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </section>

      <section className="max-w-4xl mx-auto">
        <p className="text-3xl">
          A passionate web developer building cool projects with Nextjs and
          other JavaScript-based libraries. With a background in Engineering, I
          bring well-rounded problem-solving skills for developing websites and
          web apps with a sharp eye for UI/UX design.
        </p>
      </section>
    </main>
  );
}
