# Dnyaneshwar Gaikwad — Professional Portfolio

A modern, responsive, production-ready portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, **MongoDB**, **Vercel** and **Netlify**.

## ✨ Highlights

- Dark, glassmorphic design with animated gradients, marquee and scroll-reveal animations
- Fully responsive — mobile, tablet and desktop
- SEO-ready: metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.json`
- Contact form with server-side validation and optional MongoDB persistence
- Graceful demo mode when no database is configured
- Accessibility-conscious (keyboard focus states, reduced-motion support, labelled form fields)
- Deployment configs included for both **Vercel** and **Netlify**

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run build      # production build
npm start          # serve production build
npm run typecheck  # TypeScript check
```

## 🗄️ MongoDB setup (contact form)

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a database user and allow network access (`0.0.0.0/0` is easiest for serverless).
3. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

4. Fill in your connection string:

```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=portfolio
```

Messages are stored in the `messages` collection. Without `MONGODB_URI`, the API still returns success and the UI shows a note that persistence is disabled.

Never commit `.env.local` — it is already in `.gitignore`.

## ▲ Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Add `MONGODB_URI` and `MONGODB_DB` under **Project → Settings → Environment Variables** if you want contact messages saved.
5. Update `site.url` in `src/lib/data.ts` to your Vercel domain for correct canonical URLs and sitemap.

## 🌐 Deploy to Netlify

1. Import the repository in Netlify (**Add new site → Import an existing project**).
2. Build settings are preconfigured in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Plugin: `@netlify/plugin-nextjs`
3. Add `MONGODB_URI` and `MONGODB_DB` under **Site settings → Environment variables**.
4. Update `site.url` in `src/lib/data.ts` to your Netlify domain.

## ✏️ Customising content

All site content lives in **`src/lib/data.ts`**:

- `site` — name, email, resume, GitHub, LinkedIn, canonical URL
- `about` — intro text and stats
- `skillGroups` — skill categories and levels
- `projects` — project cards, features, tech and live links
- `timeline` — journey entries
- `navLinks` — navigation items

Project screenshots and the profile photo are in `public/images/`. The original static React build is preserved in `legacy-static-build/` for reference.

## 📁 Structure

```text
src/
├── app/
│   ├── api/contact/route.ts   # contact API + MongoDB
│   ├── globals.css            # Tailwind + custom styles
│   ├── layout.tsx             # metadata, navbar, footer
│   ├── page.tsx               # section composition
│   ├── robots.ts
│   └── sitemap.ts
├── components/                # Hero, About, Skills, Projects, Journey, Contact, etc.
└── lib/
    ├── data.ts                # all site content
    └── mongodb.ts             # cached Mongo client
```

Built with ♥ using Next.js, TypeScript, Tailwind CSS and MongoDB.
