import { cn } from "@workspace/design-system/lib/utils";
import * as runtime from "react/jsx-runtime";
import {
  Contact,
  Education,
  InterestedIn,
  Introduction,
  Projects,
  TopSkills,
} from "@/components/portfolio-info-ui";
import { isValidElement, ReactElement } from "react";
import CopyButton from "@/components/CopyButton";
import Icons from "@workspace/design-system/icons";

type MdxProps = {
  content: string;
};

function HeaderLinkIcon({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <Icons.Lucide.Link
      size={size}
      className={cn(
        "text-muted-foreground opacity-0 peer-hover:opacity-100",
        className
      )}
    />
  );
}

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 mb-5 flex w-fit scroll-m-20 items-center gap-2 text-5xl font-bold",
        className
      )}
      {...props}
    >
      {props.children}

      <HeaderLinkIcon size={36} />
    </h1>
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-2 mb-5 flex w-fit scroll-m-20 items-center gap-2 text-4xl font-bold",
        className
      )}
      {...props}
    >
      {props.children}

      <HeaderLinkIcon size={26} />
    </h2>
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "group mt-2 mb-5 flex scroll-m-20 items-center gap-2 text-3xl font-bold",
        className
      )}
      {...props}
    >
      {props.children}

      <HeaderLinkIcon size={20} />
    </h3>
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "group mt-2 mb-5 flex scroll-m-20 items-center gap-2 text-2xl font-bold",
        className
      )}
      {...props}
    >
      {props.children}

      <HeaderLinkIcon size={18} />
    </h4>
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "group mt-2 mb-5 flex scroll-m-20 items-center gap-2 text-xl font-bold",
        className
      )}
      {...props}
    >
      {props.children}

      <HeaderLinkIcon size={16} />
    </h5>
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "group mt-2 mb-5 flex scroll-m-20 items-center gap-2 text-lg font-bold",
        className
      )}
      {...props}
    >
      {props.children}

      <HeaderLinkIcon size={14} />
    </h6>
  ),
  a: ({
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (props.href?.startsWith("#")) {
      return <a className={cn("peer", className)} {...props} />;
    }

    return (
      <a
        className={cn("underline underline-offset-4", className)}
        target="_blank"
        {...props}
      />
    );
  },
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("text-muted-foreground my-5 leading-6", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ol
      className={cn(
        "text-muted-foreground list-inside list-decimal",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("text-muted-foreground list-inside list-disc", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "bg-muted text-foreground rounded-xs px-1 py-0.5 font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    const child = props.children as React.ReactElement;

    let codeText = "";

    if (isValidElement(child)) {
      const codeElement = child as ReactElement<{ children: string }>;

      if (typeof codeElement.props.children === "string") {
        codeText = codeElement.props.children;
      }
    }

    return (
      <pre
        className={cn(
          "bg-muted my-2 flex items-center justify-between overflow-x-auto px-5 py-2",
          className
        )}
        {...props}
      >
        {props.children}

        <CopyButton copyText={codeText} />
      </pre>
    );
  },
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
