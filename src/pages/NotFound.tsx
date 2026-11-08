import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <article className="motion-safe:animate-slow-fade-in font-display flex flex-col flex-1 justify-center items-center text-center text-shadow-md mt-17.5 px-4">
      <h1 className="font-fancy text-[2rem]">Page Not Found</h1>
      <h2 className="font-display text-lg pt-3">
        This page doesn't exist.{" "}
        <Link
          to="/"
          className="underline decoration-2 underline-offset-4 decoration-transparent transition-colors duration-300 hover:decoration-current"
        >
          Head home
        </Link>
        .
      </h2>
    </article>
  );
}
