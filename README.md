# Personal Site

A personal blog and future home for small interactive web games, built with
[Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).

- The home page shows a short welcome message and a list of blog post titles.
- Clicking a title opens that post's page at `/blog/<slug>`.
- `/games` is a placeholder page for future interactive web games or links to
  other web apps.
- Everything is statically generated at build time — the deployed site is
  read-only. There is no admin UI or database.

## Adding a new blog post

1. Create a new Markdown file in `content/posts/`, e.g.
   `content/posts/my-new-post.md`. The filename becomes the URL slug
   (`/blog/my-new-post`).
2. Add frontmatter at the top of the file:

   ```markdown
   ---
   title: "My New Post"
   date: "2026-11-01"
   excerpt: "One sentence describing the post."
   ---

   Your post content, written in Markdown, goes here.
   ```

3. Commit and push. Vercel will rebuild the site and the new post will appear
   on the home page (newest first, by `date`) and at `/blog/my-new-post`.

## Adding a game or linked web app

Edit `lib/games.ts` and add an entry to the `games` array:

```ts
export const games: GameEntry[] = [
  {
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    description: "A quick game of tic-tac-toe.",
    href: "/games/tic-tac-toe",
  },
];
```

For a built-in game, add a route under `app/games/<slug>/page.tsx` with the
game's UI and point `href` at `/games/<slug>`. For a link to an external app,
just set `href` to its full URL.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

Push this repository to GitHub (or GitLab/Bitbucket), then
[import it on Vercel](https://vercel.com/new). Vercel auto-detects Next.js —
no extra configuration is needed. Every push to the main branch triggers a
new deployment.
