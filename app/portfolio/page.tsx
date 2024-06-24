import portfilio from "#portfolio";
import MDXContent from "@/components/mdx-components";
import { robotoMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Page() {
  const myPortfolio = portfilio[0];

  if (!myPortfolio.content) {
    return (
      <main
        className={cn("mx-auto max-w-3xl px-10 py-10", robotoMono.className)}
      >
        <h1 className="text-center text-2xl">🥺</h1>
      </main>
    );
  }

  return (
    <main className={cn("mx-auto max-w-3xl px-10 py-10", robotoMono.className)}>
      <MDXContent content={myPortfolio.content} />
    </main>
  );
}
