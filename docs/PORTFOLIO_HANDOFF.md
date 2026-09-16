# Prajwal M — Portfolio Site Overview

**Purpose of this document:** Hand-off summary of everything currently built in the portfolio repo, so another AI (e.g. ChatGPT) or collaborator can continue work without guessing.

**Repo:** `portfoilo` (typo in GitHub name)  
**Owner:** Prajwal M (`prajj07`)  
**Live (Vercel):** historically `portfoilo-vert.vercel.app` / Vercel project `portfolio`  
**Local path:** `/Users/prajwal/Documents/pr-github/portfoilo`  
**Branch:** `main`  
**Last known remote commits:** Next.js 15.5.24 upgrade + profile path fix.  
**Local uncommitted work (as of this doc):** intro loader, full-bleed 3D hero, FDE experience role, transparent profile PNG, Next config turbopack root, etc.

---

## 1. What this site is

A **single-page developer portfolio** for:

- **Public brand:** Software Engineer  
- **Positioning:** Full-stack / backend / mobile / LLM application integration  
- **Employer:** Dataequinox  
- **Tone:** Editorial, dark-first, minimal, technical — not a generic “junior template” look  
- **Content rule:** Do **not** invent companies, metrics, client names, or technologies. Client work stays anonymized.

Core message:

> Can take a product from idea → frontend/mobile → backend → database → cloud → AI integration → production.

---

## 2. Tech stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js 15.5.24** (App Router) |
| UI | **React 19** |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS v4** + custom OKLCH tokens in `app/globals.css` |
| Components | shadcn-style `Button` + `cn()` utility |
| Icons | Lucide React |
| 3D | **three** + **@react-three/fiber** + **@react-three/drei** |
| Forms | API route → Formspree (`app/api/submit-form/route.ts`) |
| Deploy targets | Vercel (primary recently); Netlify packages still in `package.json` |
| Fonts | **Sora** (display), **IBM Plex Sans** (body), **IBM Plex Mono** (labels) |

Scripts:

```bash
npm run dev    # next dev --turbopack
npm run build
npm run start
npm run lint
```

---

## 3. Page structure (current)

Order in `app/page.tsx`:

1. **IntroLoader** — first-visit countdown loader (Zero University–inspired)
2. Skip link (a11y)
3. **Navbar** — sticky, quiet; sections Home → Contact; dark-only (no light toggle)
4. **Hero** — full-bleed 3D background + editorial copy + transparent profile cutout
5. **About**
6. **Experience** — two roles at Dataequinox + selected client work + education/leadership
7. **Projects** — anonymized client case studies + smaller personal “Experiments”
8. **Skills** — typographic category rows (no logo bars)
9. **Contact** — statement + form + links
10. **Footer**

**Removed earlier (intentionally shortened):** What I Build, Architecture, Workflow, SystemArtifact, resume download / light mode toggle.

Nav (`data/navigation.ts`): Home · About · Experience · Projects · Skills · Contact

---

## 4. Design system / art direction

- **Theme:** Dark only (`html` class `dark`)
- **Canvas:** Graphite/charcoal background (`#12110f` / OKLCH tokens)
- **Text:** Warm ivory
- **Accent:** Muted teal / electric green (`--primary`)
- **Radius:** Zero (sharp / editorial)
- **Motion:** Subtle fade-up; respects `prefers-reduced-motion`
- **Inspiration for loader:** [why.zero.university](https://why.zero.university/) — seamless first paint (no white flash), large counter, then handoff

### Intro loader behavior (`components/intro/IntroLoader.tsx` + `app/layout.tsx`)

1. Pre-paint CSS shell + static **“99”** in `#pre-loader-shell` (instant paint)
2. React loader counts **99 → 00**, then fades out
3. Shown **once per session** (`sessionStorage` key `pm-intro-seen`)
4. Skipped for `prefers-reduced-motion`
5. **Hydration-safe:** early script only sets `style.display` on the shell; does **not** mutate `<html className>` before hydration; `suppressHydrationWarning` on `<html>` / shell

### Hero 3D (`components/hero/HeroScene.tsx`)

- Full-bleed absolute Canvas behind hero content
- Abstract “systems” sculpture: icosahedron + rotating torus rings
- Cursor parallax; soft left veil for text readability
- Dynamically imported with `ssr: false`
- Portrait sits as editorial element on the right (`public/profile.png` transparent cutout)

---

## 5. Content model (data files)

All copy lives in typed `data/*` files (UI stays dumb):

| File | Contents |
|------|----------|
| `data/profile.ts` | Name, brand, headline, summary, email, GitHub, LinkedIn, about statement/paragraphs |
| `data/experience.ts` | Roles array, selected client work, education, leadership |
| `data/projects.ts` | Client projects (anonymized) + personal experiments |
| `data/skills.ts` | Skill groups |
| `data/navigation.ts` | Section anchors |

### Experience (current)

1. **FDE — Forward Deployed Engineer 1** · Dataequinox · `2026 — Present`  
   Customer-facing / embed-with-client / full-lifecycle delivery framing  
2. **Junior Software Developer** · Dataequinox · `2025 — 2026`  
   Earlier production delivery role  

Selected client work (anonymized titles only under Experience; full detail under Projects):

- AI-Powered Mobile & Real-Time Communication Platform  
- Omnichannel Communication & Messaging Platform  

Education: B.Tech — Computer Science, School of Engineering, CUSAT  
Leadership: ACES, CUSAT — Secretary · Vice President  

### Profile contact

- Email: `prajwalvm10@gmail.com`
- GitHub: `https://github.com/prajj07`
- LinkedIn: `https://linkedin.com/in/prajwalm07/`

---

## 6. Key file map

```
app/
  layout.tsx          # fonts, metadata, OG, pre-loader shell, dark theme
  page.tsx            # section composition + IntroLoader (client)
  globals.css         # tokens, intro/hero-scene CSS, animations
  api/submit-form/    # Formspree proxy + validation
  robots.ts / sitemap.ts
components/
  intro/IntroLoader.tsx
  hero/Hero.tsx
  hero/HeroScene.tsx
  navbar/Navbar.tsx
  about/About.tsx
  experience/Experience.tsx
  projects/Projects.tsx
  skills/Skills.tsx
  contact/Contact.tsx
  footer/Footer.tsx
  shared/Container.tsx, SectionHeading.tsx
  ui/button.tsx
data/                 # all content
public/
  profile.png         # transparent cutout (preferred older photo)
  travel.jpg, workflow.jpg
  favicon.ico / favicon.svg
  Resume_prajwal.pdf  # exists but resume download UI removed
next.config.ts        # turbopack.root + outputFileTracingRoot; localStorage stub cleanup
instrumentation.ts
```

---

## 7. Important product / engineering decisions already made

1. **Dark mode only** — light toggle removed  
2. **No resume download button** in UI (PDF may still exist in `public/`)  
3. **Client names never exposed** — SheTalks / Telinfy etc. anonymized as confidential client work  
4. **AI framing** = LLM / Gemini **application integration**, not ML research claims  
5. **Short focused page** — dropped What I Build / Architecture / Workflow  
6. **Next.js upgraded to 15.5.24** because Vercel blocked vulnerable 15.3.1  
7. **Profile asset** = transparent PNG cutout of the **older** photo (newer photo was tried then reverted)  
8. **Hero** = cinematic full-bleed 3D + text + cutout portrait (not left-text/right-card template)

---

## 8. Known issues / caveats

- GitHub repo name misspelled: `portfoilo`  
- `npm run build` while `next dev` is running can corrupt `.next` → `ENOENT build-manifest` → fix: stop servers, `rm -rf .next`, restart `npm run dev`  
- Parent folder lockfile `/Users/prajwal/package-lock.json` confused Turbopack root → mitigated via `turbopack.root` / `outputFileTracingRoot` in `next.config.ts`  
- Intro loader hydration was fixed after early scripts mutated `<html className>`; do not reintroduce that pattern  
- Some portfolio changes may still be **uncommitted / unpushed** relative to `origin/main`  
- Deploy previously failed on vulnerable Next; upgrade commit exists — confirm Vercel deploy green after push  
- SheTalks Admin iOS push investigation was a **separate** project (`shetalks-admin`); not part of this portfolio repo (docs were written there)

---

## 9. What “done” looks like for a visitor (20s check)

1. Instant dark paint + optional **99→00** intro (first session)  
2. Name **Prajwal M** reads as hero brand  
3. Full-bleed 3D rings/core behind hero; portrait cutout without black box  
4. Clear Software Engineer positioning  
5. Experience shows **FDE** current + **Junior** previous at Dataequinox  
6. Projects show real anonymized client engineering work  
7. Skills / Contact / form work  
8. Mobile layout usable; motion not noisy; a11y skip link present  

---

## 10. Suggested next work (optional)

- Commit & push local intro/3D/FDE/profile changes; verify Vercel  
- Tune FDE dates if exact months available  
- Polish 3D (performance on mobile, optional pause when offscreen)  
- Custom domain / OG image refresh with transparent portrait on branded bg  
- Remove dead Netlify deps if fully on Vercel  
- If continuing design: keep editorial restraint — avoid purple AI-template aesthetics and card grids  

---

## 11. Commands cheat sheet

```bash
cd /Users/prajwal/Documents/pr-github/portfoilo
npm install
npm run dev          # http://localhost:3000
npm run build
npm run lint

# Replay intro loader in browser console:
sessionStorage.removeItem('pm-intro-seen')
location.reload()

# Fix corrupted .next:
rm -rf .next && npm run dev
```

---

## 12. Content integrity reminder for any AI continuing this work

- Never invent metrics, employers, client names, or tools not actually used  
- Prefer shortening UI over fabricating copy  
- Keep confidential client work anonymized  
- Prefer editing `data/*.ts` for content; components for presentation only  

---

*Generated as a hand-off snapshot of the current portfolio build.*
