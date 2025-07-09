// export const projects = [
//   {
//     title: "Effects",
//     description: "Copy-paste beautiful UI with your Shadcn/UI.",
//     technologies: ["Nextjs", "Shadcn/ui", "Framer Motion"],
//     href: "https://github.com/StepAsideLiL/effects",
//   },
//   {
//     title: "Front Mart",
//     description: "E-commerce website with user profile and admin dashboard.",
//     technologies: ["Nextjs", "Shadcn/ui", "Prisma", "Clerk"],
//     href: "https://github.com/StepAsideLiL/front-mart",
//   },
//   {
//     title: "Tiny Blog",
//     description: "A blogging site like twitter with Rich Text editor.",
//     technologies: ["Nextjs", "Shadcn/ui", "Prisma", "Clerk"],
//     href: "https://github.com/StepAsideLiL/tiny-blog",
//   },
//   {
//     title: "Leitmotiv Academy",
//     description: "A learning platform for enrolling to filmmaking courses.",
//     technologies: [
//       "React",
//       "DaisyUI",
//       "Express",
//       "Nodejs",
//       "MongoDB",
//       "Firebase Auth",
//     ],
//     href: "https://github.com/StepAsideLiL/leitmotiv-academy",
//   },
// ];

import data from "../data";

export const projects = ["print-med-prescription", "create-little-proj"].map(
  (slug) => data.getProjectBySlug(slug)
);
