# omprakash-portfolio

Source of https://omprakash.gautamlabs.io, a static Astro site.

- Content lives in `src/consts.ts` (name, links, stats, career) and `src/content/work/*.md` (case studies).
- The home page pulls the latest three posts from the WordPress blog (`https://blogs.gautamlabs.io`) at build time. If the blog is down the section is simply left out.
- The contact form posts to Formspree. Set the real form ID in `SITE.formAction`.
- `npm install`, then `npm run dev` / `npm run build`. Node 22.12 or newer.
