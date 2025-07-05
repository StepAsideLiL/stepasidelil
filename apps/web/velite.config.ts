import { defineConfig, defineCollection, s } from "velite";

const blogs = defineCollection({
  name: "Blog",
  pattern: "blogs/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      slug: s.path(), // auto generate slug from file path
      description: s.string().max(999).optional(),
      date: s.isodate(), // input Date-like string, output ISO Date string.
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      excerpt: s.excerpt(), // excerpt of markdown content
      content: s.mdx(),
      toc: s.toc(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split("/").slice(1).join("/"),
      permalink: `/${data.slug}`,
    })),
});

const portfolio = defineCollection({
  name: "Portfolio",
  pattern: "portfolio/portfolio.mdx",
  schema: s.object({
    title: s.string(),
    slug: s.path(),
    description: s.string().max(999).optional(),
    metadata: s.metadata(),
    excerpt: s.excerpt(),
    content: s.mdx(),
    toc: s.toc(),
  }),
  single: true,
});

const projects = defineCollection({
  name: "Projects",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      title: s.string(),
      slug: s.path(),
      description: s.string().max(999).optional(),
      githubLink: s.string().optional(),
      tags: s.array(s.string()).optional(),
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      excerpt: s.excerpt(), // excerpt of markdown content
      content: s.mdx(),
      toc: s.toc(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split("/").slice(1).join("/"),
      permalink: `/${data.slug}`,
    })),
});

export default defineConfig({
  root: "src/content",
  output: {
    data: "./.velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blogs, portfolio, projects },
});
