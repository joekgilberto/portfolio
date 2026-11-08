import type { CSSProperties, ReactNode } from "react";

interface ChipProps {
  icon?: ReactNode;
  text: string;
  style?: CSSProperties;
  className?: string;
}

export default function Chip({ icon, text, style, className = "" }: ChipProps) {
  return (
    <div
      style={style}
      className={`px-2 bg-green-900 border-2 border-green-950 shadow-md rounded-xl text-sm flex gap-2 items-center ${className}`}
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}
