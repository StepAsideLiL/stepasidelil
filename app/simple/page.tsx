import Image from "next/image";

export default function Page() {
  return (
    <main className="container min-h-screen py-20 space-y-10">
      <section className="text-center space-y-2">
        <h1 className="text-2xl font-medium">Hi 👋, I am Rifat Khan</h1>
        <p>A JavaScript and Nextjs Developer from Bangladesh</p>
      </section>

      <section className="flex justify-center">
        <div className="w-32">
          <Image
            src={"/profile-avater.png"}
            alt="Profile Avatar"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
