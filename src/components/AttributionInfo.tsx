import type { CSSProperties, ReactNode } from "react";

interface AttributionInfoProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function AttributionInfo({
  icon,
  title,
  children,
  style = {},
  className = "",
}: AttributionInfoProps) {
  return (
    <div
      style={style}
      className={`flex w-full bg-green-800 rounded-lg flex-col border-2 border-green-950 shadow-md hover:[&_a]:underline ${className}`}
    >
      <div className="flex items-center gap-1 px-3 py-2 bg-green-900 border-b-2 border-green-950 rounded-t-[calc(var(--radius-lg)-2px)]">
        {icon} {title}
      </div>
      <div className="flex flex-col px-3 py-2 ">{children}</div>
    </div>
  );
}
