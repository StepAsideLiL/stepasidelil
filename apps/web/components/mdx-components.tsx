import { cn } from "@/lib/utils";
import * as runtime from "react/jsx-runtime";
import {
  Contact,
  Education,
  InterestedIn,
  Introduction,
  Projects,
  TopSkills,
} from "@/components/portfolio-info-ui";

type MdxProps = {
  content: string;
};

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("underline underline-offset-4", className)}
      target="_blank"
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  Introduction,
  Contact,
  TopSkills,
  Projects,
  Education,
  InterestedIn,
};

const useMDXComponents = (content: string) => {
  const fn = new Function(content);
  return fn({ ...runtime }).default;
};

export default function MDXContent({ content }: MdxProps) {
  const Component = useMDXComponents(content);
  return <Component components={{ ...components }} />;
}
