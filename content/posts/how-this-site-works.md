---
title: "How This Site Works"
date: "2026-10-21"
excerpt: "A quick look under the hood: how posts are written and how the site is structured."
---

This site keeps things simple on purpose:

- **Blog posts** are Markdown files in `content/posts/`, each with a `title`, `date`, and optional `excerpt` in their frontmatter.
- The **home page** lists all posts, newest first, pulled from those files at build time.
- Each post gets its own page at `/blog/<filename>`.
- A **games** section at `/games` is reserved for future interactive additions — small browser games or links to other web apps I build.

There's no database and no admin panel. To publish something new, I add a Markdown file and deploy. That keeps the public site entirely read-only while still being easy for me to update.
