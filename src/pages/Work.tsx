import Content from "../components/Content";
import workImage from "../assets/work.jpeg";
import Chip from "../components/Chip";
import type { ReactNode } from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { PiFileCSharp } from "react-icons/pi";
import { SiCraftcms, SiJira, SiMui, SiRedux } from "react-icons/si";

interface Skill {
  icon: ReactNode;
  skill: string;
}

const SKILLS: Skill[] = [
  { icon: <BiLogoTypescript />, skill: "TypeScript" },
  { icon: <PiFileCSharp />, skill: "C#" },
  { icon: <FaJs />, skill: "JavaScript" },
  { icon: <FaReact />, skill: "React" },
  { icon: <SiRedux />, skill: "Redux" },
  { icon: <SiMui />, skill: "Material UI" },
  { icon: <BiLogoTailwindCss />, skill: "Tailwind CSS" },
  { icon: <FaBootstrap />, skill: "Bootstrap" },
  { icon: <FaHtml5 />, skill: "HTML" },
  { icon: <FaCss3Alt />, skill: "CSS" },
  { icon: <FaDatabase />, skill: "SQL" },
  { icon: <SiCraftcms />, skill: "Craft CMS" },
  { icon: <FaGithub />, skill: "GitHub" },
  { icon: <FaGitAlt />, skill: "Git" },
  { icon: <SiJira />, skill: "Jira" },
];

export default function Work() {
  return (
    <Content title="Work" image={workImage} imageAlt="Joe Gilberto in suit.">
      <p>
        I’m a versatile software engineer with a passion for creative
        problem-solving and collaboration. My journey into software development
        is informed by a background in project planning and fueled by a passion
        for hands-on contribution to thoughtful user experiences.
      </p>
      <div className="flex gap-2 justify-center items-center flex-wrap">
        {SKILLS.map(({ icon, skill }, i) => (
          <Chip
            style={{ animationDelay: `${i * 150}ms` }}
            className="motion-safe:animate-link-fade-in"
            icon={icon}
            text={skill}
            key={i}
          />
        ))}
      </div>
      <p>
        I have been working professionally as a software engineer since 2024,
        spanning a variety of projects that have honed a frontend/full-stack
        skillset. My work has included building TypeScript React applications
        with Redux stores, writing in C# for ASP.NET APIs, and maintaining
        PHP-based CMS websites.
      </p>
      <p>
        Very excited to keep learning, keep growing, and keep contributing to
        codebases!
      </p>
    </Content>
  );
}
