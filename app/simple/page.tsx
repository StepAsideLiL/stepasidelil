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
    </main>
  );
}
