import type { ReactNode } from "react";

interface ContentProps {
  title: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}

export default function Content({
  title,
  image,
  imageAlt,
  children,
}: ContentProps) {
  return (
    <article className="flex flex-col w-full max-w-4xl flex-1 min-h-0 mt-6 mb-4 px-4 sm:mt-8 sm:px-8">
      <div className="motion-safe:animate-slow-fade-in flex flex-col shrink-0 text-shadow-md bg-green-950/85 px-2 py-1 rounded-lg sm:bg-transparent sm:px-0 sm:py-0">
        <h3 className="font-fancy text-[1rem]">Joe Gilberto's</h3>
        <h2 className="text-[2rem] leading-[2.25rem] pl-4 sm:text-[2.25rem] sm:leading-[2.5rem]">
          {title}
        </h2>
      </div>
      <section className="flex min-h-0 mt-2 max-[750px]:flex-col max-[750px]:overflow-y-auto min-[750px]:max-h-95">
        <div className="flex flex-col shrink-0 gap-4 px-3 py-3 text-[0.9rem] wrap-break-word bg-green-700/85 shadow-md sm:px-4 max-[750px]:rounded-t-lg min-[750px]:shrink min-[750px]:rounded-s-lg min-[750px]:overflow-y-auto">
          {children}
        </div>
        <img
          src={image}
          alt={imageAlt}
          className="object-cover shrink-0 bg-green-900 max-[750px]:w-full max-[750px]:aspect-[4/3] max-[750px]:rounded-b-lg min-[750px]:w-50 min-[900px]:w-60 min-[1080px]:w-80 min-[750px]:rounded-e-lg"
        />
      </section>
    </article>
  );
}
