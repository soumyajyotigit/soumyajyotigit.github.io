# Soumyajyoti — Platform & Full-Stack Developer Portfolio

A premium, high-performance developer portfolio built with **Next.js 14**, **TypeScript**, **Framer Motion**, and **TailwindCSS**. This project showcases verified credentials, deep-dive architectural case studies, interactive developer tools, and an integrated system console.

---

## 🚀 Visual Features & Core Components

1. **Interactive Linux-Style Terminal**
   - A custom interactive console simulating a Bash shell environment.
   - Supports active commands like `help`, `neofetch`, `skills`, `docker ps`, `projects`, `clear`, and secret triggers.
   - Built with a custom input handler and autofocus management for a distraction-free page load.

2. **Core Toolkit & Engineering Dashboard**
   - High-density, responsive 3-column capability grid featuring custom brand-colored icons from `react-icons/si` and `react-icons/fa`.
   - Organizes 30+ core proficiencies across Languages, Frontend, Backend, Databases, Cloud/DevOps, AI/ML, System Architecture, and Core Concepts.
   - Styled highlights track summarizing systems platforms, runtime layers, and database architectures.

3. **Systems Architecture Case Studies**
   - Expandable, detailed project profiles including engineering challenges, layout-aware solutions, and performance metrics.
   - Custom terminal console blocks rendering multi-stage `Dockerfiles`, `docker-compose.yaml` specifications, and `systemd` configurations.

4. **Credentials & Competitions Monitor**
   - Verified certification cards (Harvard University, Udemy).
   - Live metrics trackers for competitive programming stats across LeetCode, Codeforces, CodeChef, and HackerRank.

5. **Premium Design System**
   - Dark-mode aesthetics with glassmorphic panels, glowing radial gradients, and subtle hover animations.
   - Custom rounded dark-indigo scrollbars (`globals.css`) that unify browser scrollbars, terminals, and code-blocks.
   - Responsive layouts optimized fluidly for mobile, tablet, laptop, and 4K displays.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Data Structuring**: MDX & Static TS Collections

---

## 💻 Local Development

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) installed.

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/soumyajyotigit/soumyajyotigit.github.io.git
cd soumyajyotigit.github.io
npm install
```

### 2. Start the Development Server
```bash
npm run dev
# The server will spin up on http://localhost:3000 (or http://localhost:3001 if port 3000 is occupied)
```

### 3. Build & Export for Production
```bash
npm run build
# Generates a fully optimized, statically exported build inside the out/ or .next/ directory
```

---

## 📁 Directory Structure

```
├── app/                  # Next.js App Router (Layouts, Routing, Styles)
│   ├── (routes)/         # Core application pages (Home, About, Blog, Projects)
│   ├── globals.css       # Core Tailwind variables & custom scrollbar classes
│   └── layout.tsx        # Global page layouts & SEO meta tags
├── components/           # Reusable UI & Layout Components
│   ├── animations/       # Framer Motion animations & Background canvas particles
│   ├── sections/         # Visual sections (Hero, Credentials, Projects, Dashboard)
│   └── ui/               # Base visual atoms (Buttons, Navbar, Footer)
├── data/                 # Static TS collections (Projects, Skills, Profiles)
├── content/              # Blog posts and markdown MDX contents
└── public/               # Static assets (images, icons, and system files)
```

---

## 📝 License
Licensed under the [MIT License](LICENSE). Built with ☕ and care by **Soumyajyoti**.
