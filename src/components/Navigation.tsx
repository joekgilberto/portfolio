import { Link } from "react-router-dom";
import {
  FaCircleInfo,
  FaComputer,
  FaGamepad,
  FaHouseChimney,
  FaVoicemail,
} from "react-icons/fa6";
import type { ReactNode } from "react";

interface NavLink {
  label: string;
  path: string;
  icon: ReactNode;
}

const LINKS: NavLink[] = [
  {
    label: "Welcome",
    path: "/",
    icon: <FaHouseChimney className="size-5 sm:hidden" aria-hidden />,
  },
  {
    label: "Work",
    path: "/work",
    icon: <FaComputer className="size-5 sm:hidden" aria-hidden />,
  },
  {
    label: "Hobbies",
    path: "/hobbies",
    icon: <FaGamepad className="size-5 sm:hidden" aria-hidden />,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <FaVoicemail className="size-5 sm:hidden" aria-hidden />,
  },
  {
    label: "Attribution",
    path: "/attribution",
    icon: <FaCircleInfo className="size-5 sm:hidden" aria-hidden />,
  },
];

export default function Navigation() {
  return (
    <nav className="font-display bg-green-700/85 flex shrink-0 gap-3 px-3 py-1 sm:gap-5 sm:px-5 rounded-xl mb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-md overflow-hidden whitespace-nowrap sm:motion-safe:animate-nav-expand">
      {LINKS.map(({ label, path, icon }, i) => (
        <Link
          key={path}
          to={path}
          aria-label={label}
          style={{ animationDelay: `${600 + i * 200}ms` }}
          className="p-2 sm:p-0 underline decoration-2 decoration-transparent underline-offset-4 transition-colors duration-300 hover:decoration-current cursor-pointer motion-safe:animate-link-fade-in"
        >
          {icon}
          <span className="hidden sm:inline">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
