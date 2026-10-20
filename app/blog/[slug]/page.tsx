import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-sm text-black/60 dark:text-white/60 hover:underline underline-offset-4"
      >
        &larr; Back home
      </Link>

      <h1 className="text-2xl font-semibold mt-4 mb-1">{post.title}</h1>
      {post.date && (
        <p className="text-xs text-black/50 dark:text-white/50 mb-8">
          {formatPostDate(post.date)}
        </p>
      )}

      <div
        className="prose prose-neutral dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
