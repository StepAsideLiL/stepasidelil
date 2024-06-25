import { cn } from "@/lib/utils";
import {
  SiAmazonaws,
  SiDocker,
  SiElectron,
  SiExpo,
  SiGithub,
  SiGo,
  SiInstagram,
  SiJavascript,
  SiLinkedin,
  SiNextdotjs,
  SiNodedotjs,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CopyEmail } from "@/components/uis/client-components";

export const about =
  "I am a passionate web developer building cool projects with Nextjs and other JavaScript-based libraries. With a background in Engineering, I bring well-rounded problem-solving skills for developing websites and web apps with a sharp eye for UI/UX design.";

export const email = "rifat6633@gmail.com";

export const socialLinks = [
  {
    title: "GitHub",
    icon: SiGithub,
    href: "https://github.com/StepAsideLiL",
  },
  {
    title: "LinkedIn",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/mdabdullahrifatkhan/",
  },
  {
    title: "Twitter",
    icon: SiX,
    href: "https://twitter.com/StepAsideLiL",
  },
  {
    title: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/stepasidelil",
  },
];

export const skills = {
  topSkills: [
    {
      title: "JavaScript",
      icon: SiJavascript,
    },
    {
      title: "TypeScript",
      icon: SiTypescript,
    },
    {
      title: "Nextjs",
      icon: SiNextdotjs,
    },
    {
      title: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      title: "Nodejs",
      icon: SiNodedotjs,
    },
  ],
  experties: [
    {
      title: "HTML",
      icon: "",
    },
    {
      title: "CSS",
      icon: "",
    },
    {
      title: "Bootstrap",
      icon: "",
    },
    {
      title: "TailwindCSS",
      icon: "",
    },
    {
      title: "JavaScript",
      icon: "",
    },
    {
      title: "TypeScript",
      icon: "",
    },
    {
      title: "React",
      icon: "",
    },
    {
      title: "Nextjs",
      icon: "",
    },
    {
      title: "Nodejs",
      icon: "",
    },
    {
      title: "Express",
      icon: "",
    },
    {
      title: "MongoDB",
      icon: "",
    },
  ],
  comfortable: [
    {
      title: "Prisma",
      icon: "",
    },
    {
      title: "SQL",
      icon: "",
    },
    {
      title: "Redux",
      icon: "",
    },
    {
      title: "REST api",
      icon: "",
    },
    {
      title: "JWT",
      icon: "",
    },
    {
      title: "Stripe",
      icon: "",
    },
    {
      title: "Git",
      icon: "",
    },
    {
      title: "Clerk Auth",
      icon: "",
    },
    {
      title: "Firebase Auth",
      icon: "",
    },
    {
      title: "Firebase Hosting",
      icon: "",
    },
    {
      title: "Netlify",
      icon: "",
    },
    {
      title: "Vercel",
      icon: "",
    },
  ],
  familiar: [
    {
      title: "React Native",
      icon: "",
    },
    {
      title: "Electronjs",
      icon: "",
    },
    {
      title: "Redis",
      icon: "",
    },
    {
      title: "Docker",
      icon: "",
    },
    {
      title: "Kubernetes",
      icon: "",
    },
    {
      title: "AWS",
      icon: "",
    },
    {
      title: "WordPress",
      icon: "",
    },
  ],
  softSkills: [
    {
      title: "Communication",
    },
    {
      title: "Leadership",
    },
    {
      title: "Research",
    },
    {
      title: "Document Writing",
    },
    {
      title: "Project Planning",
    },
    {
      title: "Presentation",
    },
  ],
  interestedTechnologies: [
    {
      title: "Expo",
      icon: SiExpo,
    },
    {
      title: "Electronjs",
      icon: SiElectron,
    },
    {
      title: "Rust",
      icon: SiRust,
    },
    {
      title: "Go",
      icon: SiGo,
    },
    {
      title: "Docker",
      icon: SiDocker,
    },
    {
      title: "AWS",
      icon: SiAmazonaws,
    },
  ],
};

export const projects = [
  {
    title: "Effects",
    description: "Copy-paste beautiful UI with your Shadcn/UI.",
    technologies: ["Nextjs", "Shadcn/ui", "Framer Motion"],
    href: "https://github.com/StepAsideLiL/effects",
  },
  {
    title: "Front Mart",
    description: "E-commerce website with user profile and admin dashboard.",
    technologies: ["Nextjs", "Shadcn/ui", "Prisma", "Clerk"],
    href: "https://github.com/StepAsideLiL/front-mart",
  },
  {
    title: "Tiny Blog",
    description: "A blogging site like twitter with Rich Text editor.",
    technologies: ["Nextjs", "Shadcn/ui", "Prisma", "Clerk"],
    href: "https://github.com/StepAsideLiL/tiny-blog",
  },
  {
    title: "Leitmotiv Academy",
    description: "A learning platform for enrolling to filmmaking courses.",
    technologies: [
      "React",
      "DaisyUI",
      "Express",
      "Nodejs",
      "MongoDB",
      "Firebase Auth",
    ],
    href: "https://github.com/StepAsideLiL/leitmotiv-academy",
  },
];

export const education = [
  {
    degree: "Bachelor of Science (B.Sc. engg)",
    fieldOfStudy: "Electrical and Electronic Engineering",
    institution: "Jatiya Kabi Kazi Nazrul Islam University",
    gpa: "3.22 out of 4",
    date: "Feb 2017 - May 2023",
  },
];

export const courses = [
  {
    institution: "Programming Hero",
    courseTitle: "Complete Web Development Course",
    date: "Jan 2023 - Aug 2023",
  },
  {
    institution: "Bangladesh Youth Leadership Center",
    courseTitle: "BYLC Development Sector Career Bootcamp 2022",
    date: "July 2022 - Aug 2022",
  },
];

export function Introduction({ className }: { className?: string }) {
  return <p className={cn(className)}>{about}</p>;
}

export function TopSkills() {
  return (
    <div className="flex items-center gap-2">
      {skills.topSkills.map((skill, i, arr) => (
        <span key={i}>
          {skill.title}
          {i < arr.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}

export function Contact() {
  return (
    <div className="space-y-2">
      <CopyEmail email={email} />

      <div>
        {socialLinks.map((link, i, arr) => (
          <>
            <Link
              key={i}
              href={link.href}
              target="_blank"
              className="hover:underline"
            >
              {link.title}
            </Link>
            {i < arr.length - 1 && ", "}
          </>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
      {projects.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-lg md:text-2xl">{item.title}</CardTitle>
            <CardDescription>
              <Link href={item.href} className="hover:underline">
                GitHub Link
              </Link>
            </CardDescription>
          </CardHeader>

          <CardContent>{item.description}</CardContent>

          <CardFooter className="flex flex-wrap gap-2">
            {item.technologies.map((tech, i) => (
              <Badge key={i}>{tech}</Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export function Education() {
  return (
    <div className="space-y-10">
      <div>
        {education.map((item, i) => (
          <div key={i}>
            <p className="text-muted-foreground">{item.date}</p>
            <h3 className="text-lg font-semibold">
              {`${item.degree} in ${item.fieldOfStudy}`}
            </h3>
            <p className="text-muted-foreground">{item.institution}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {courses.map((item, i) => (
          <div key={i}>
            <p className="text-muted-foreground">{item.date}</p>
            <h3 className="text-lg font-semibold">{item.courseTitle}</h3>
            <p className="text-muted-foreground">{item.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InterestedIn() {
  return (
    <div>
      {skills.interestedTechnologies.map((skill, i, arr) => (
        <span key={i}>
          {skill.title}
          {i < arr.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}
