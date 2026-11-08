import type { ReactNode } from "react";

interface AttributionInfoProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export default function AttributionInfo({
  icon,
  title,
  children,
}: AttributionInfoProps) {
  return (
    <div className="flex w-full bg-green-800 rounded-lg flex-col border-2 border-green-950 shadow-md hover:[&_a]:underline">
      <div className="flex items-center gap-1 px-3 py-2 bg-green-900 border-b-2 border-green-950 rounded-t-[calc(var(--radius-lg)-2px)]">
        {icon} {title}
      </div>
      <div className="flex flex-col px-3 py-2 ">{children}</div>
    </div>
  );
}
