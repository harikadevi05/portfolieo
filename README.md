# Jakka Harika Devi – Ultra-Premium Next.js 15 Personal Portfolio

A production-level, responsive, and ultra-modern personal portfolio website designed for software engineers and data engineering professionals targeting top tech companies (Google, Microsoft, Amazon, Meta, Stripe, etc.).

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lucide Icons**, **React Hook Form**, and **Zod**.

---

## 🌟 Key Features & Highlights

* **Single Source of Truth**: Edit all developer bio, skills, experience, projects, education, certifications, and contact details from a single central file (`src/data/portfolioData.ts`).
* **Dark Mode Default & Theme Switcher**: Sleek dark mode by default inspired by Linear, Stripe, and Apple design aesthetics, with seamless light mode toggling using `next-themes`.
* **Smooth Micro-Animations**: Interactive scroll reveals, floating badge animations, skill progress bars, and modal details powered by `framer-motion`.
* **Interactive Particle Background**: High-performance HTML5 Canvas mesh background with subtle ambient color glows.
* **Filterable Projects Showcase**: Category tabs for Data Science & AI, Cloud & Web, and Database Analytics with detailed pop-up modals.
* **Timeline Experience & Education**: Structured vertical timeline layout for internships, AWS cloud work, and university achievements.
* **Form Validation & Celebration**: Contact form powered by `react-hook-form` + `zod` schema, firing confetti effects (`canvas-confetti`) and custom toast alerts.
* **Vercel & SEO Ready**: Configured with Next.js dynamic `sitemap.ts`, `robots.ts`, OpenGraph metadata tags, and SVG favicons.

---

## 📁 Project Structure

```text
c:\Users\HP\Desktop\workshop/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with ThemeProvider, fonts & SEO
│   │   ├── page.tsx               # Main portfolio page uniting all sections
│   │   ├── globals.css            # Custom CSS variables, glassmorphism & scrollbars
│   │   ├── sitemap.ts             # Dynamic sitemap generator
│   │   ├── robots.ts              # Robots.txt generator
│   │   └── api/
│   │       └── contact/route.ts   # Contact API handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Floating glass header with active section scrollspy
│   │   │   ├── Footer.tsx         # Footer with social links & navigation
│   │   │   ├── ScrollProgress.tsx # Top scroll progress indicator
│   │   │   ├── BackToTop.tsx      # Smooth scroll-to-top button
│   │   │   └── BackgroundCanvas.tsx # Particle network canvas
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx    # Hero text, CTAs, avatar & float badges
│   │   │   ├── AboutSection.tsx   # Bio, stats counters, career objective
│   │   │   ├── SkillsSection.tsx  # Categorized skill cards & progress bars
│   │   │   ├── ProjectsSection.tsx# Filterable projects grid & detail modal
│   │   │   ├── ExperienceSection.tsx# Career timeline layout
│   │   │   ├── EducationSection.tsx# Academic credentials & CGPA badges
│   │   │   ├── CertificationsSection.tsx # Verified certificate cards
│   │   │   ├── AchievementsSection.tsx # Honors & coding profiles
│   │   │   ├── TestimonialsSection.tsx # Endorsements & quotes
│   │   │   └── ContactSection.tsx # Contact form with Zod & Toast
│   │   └── ui/
│   │       ├── ThemeToggle.tsx    # Light/Dark mode toggle
│   │       ├── SectionHeader.tsx  # Reusable section title with badge
│   │       └── CustomToast.tsx    # Success/Error notification alerts
│   ├── data/
│   │   └── portfolioData.ts       # Central content configuration file
│   ├── hooks/
│   │   └── useScrollSpy.ts        # Active scroll section observer
│   ├── lib/
│   │   ├── utils.ts               # Tailwind class merging utility
│   │   └── validators.ts          # Zod schema definitions
│   └── types/
│       └── portfolio.ts           # TypeScript data interfaces
├── public/
│   ├── favicon.svg                # Vector logo favicon
│   └── resume.pdf                 # Resume download asset
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🛠️ Quick Start & Local Setup

### Prerequisites
* **Node.js**: v18.17.0 or higher
* **npm**: v9.0.0 or higher

### Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Customizing Portfolio Data

To update any content (name, social links, skills, projects, experience, education, etc.), simply open:
`src/data/portfolioData.ts`

Modify the JSON object properties. The entire website updates automatically across all sections and SEO metadata.

---

## 🚀 Deployment to Vercel

This application is 100% compliant with Vercel deployment standards.

1. Push this repository to GitHub/GitLab.
2. Import the repository into your **Vercel Dashboard**.
3. Select **Next.js** as the Framework Preset.
4. Click **Deploy**. No custom build settings or environment variables are required!

---

## ⚡ Verification & Build Check

To verify the production build locally:
```bash
npm run build
```
This executes Next.js static analysis, TypeScript type checking, and outputs optimized serverless/static pages.
