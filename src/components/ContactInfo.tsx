import type { CSSProperties } from "react";

interface ContactInfoProps {
  label: string;
  value: string;
  link: string;
  newTab?: boolean;
  style?: CSSProperties;
  className?: string;
}

export default function ContactInfo({
  label,
  value,
  link,
  newTab = true,
  style = {},
  className = "",
}: ContactInfoProps) {
  return (
    <div
      style={style}
      className={`flex w-full border-2 border-green-950 rounded-lg shadow-md hover:[&_a]:decoration-current ${className}`}
    >
      <p className="w-21 shrink-0 bg-green-900 px-2 py-1 rounded-s-[calc(var(--radius-lg)-2px)] border-e-2 border-green-950">
        {label}
      </p>
      <p className="w-full min-w-0 break-all bg-green-800 px-2 py-1 rounded-e-[calc(var(--radius-lg)-2px)]">
        <a
          href={link}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="underline decoration-2 decoration-transparent underline-offset-4 cursor-pointer"
        >
          {value}
        </a>
      </p>
    </div>
  );
}
