import Link from "next/link";
import { games } from "@/lib/games";

export const metadata = {
  title: "Placeholder Title",
  description: "Placeholder Description",
};

export default function GamesPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-sm text-black/60 dark:text-white/60 hover:underline underline-offset-4"
      >
        &larr; Back home
      </Link>

      <h1 className="text-2xl font-semibold mt-4 mb-6">Placeholder Title</h1>

      {games.length === 0 ? (
        <p className="text-black/60 dark:text-white/60">
          Placeholder Description
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {games.map((game) => (
            <li key={game.slug}>
              <a
                href={game.href}
                className="group block"
                target={game.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  game.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span className="font-medium group-hover:underline underline-offset-4">
                  {game.title}
                </span>
                <span className="block text-sm text-black/70 dark:text-white/70 mt-1">
                  {game.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
