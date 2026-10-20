import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-3">Hi, welcome to my site</h1>
        <p className="text-black/70 dark:text-white/70">
          This is where I write about things I&apos;m working on and, eventually,
          where I&apos;ll host a few small interactive web games. Have a look
          around.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Blog posts</h2>
        {posts.length === 0 ? (
          <p className="text-black/60 dark:text-white/60">
            No posts yet &mdash; check back soon.
          </p>
        ) : (
          <ul className="flex flex-col gap-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <span className="font-medium group-hover:underline underline-offset-4">
                    {post.title}
                  </span>
                  {post.date && (
                    <span className="block text-xs text-black/50 dark:text-white/50 mt-0.5">
                      {formatPostDate(post.date)}
                    </span>
                  )}
                  {post.excerpt && (
                    <span className="block text-sm text-black/70 dark:text-white/70 mt-1">
                      {post.excerpt}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
