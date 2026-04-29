# Nova Analytics Dashboard

A whitelabeled data analytics dashboard built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **Supabase Authentication**. Originally forked from [NextAdminHQ/nextjs-admin-dashboard](https://github.com/NextAdminHQ/nextjs-admin-dashboard) and rebranded as **Nova Analytics** for a fictional client.

## 🚀 Live Demo

- **Landing Page**: [Your Deployment URL]
- **Sign up** with any valid email to create an account, or use the test credentials below:

### Test Credentials
- **Email:** `dotcommedia@example.com`
- **Password:** `dotcom123`

## ✨ Features

- **Premium Landing Page** — Responsive, modern landing page with hero section, animated gradients, feature cards, testimonials, dashboard preview, and CTA
- **Real Authentication** — Supabase-powered sign-up/sign-in with session management and route protection
- **200+ Dashboard Components** — Charts, tables, forms, calendars, and UI elements
- **Cream-Green Brand Identity** — Cohesive color palette with `#4A7C59` primary and `#FDF8F0` cream accents
- **Dark Mode Support** — Full dark/light theme toggle
- **Responsive Design** — Mobile-first, fully responsive on all screen sizes
- **Route Protection** — Next.js middleware protects dashboard routes, redirects unauthenticated users
- **CI/CD Pipeline** — Automated testing, linting, and build validation via GitHub Actions (Extra Credit)

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | React framework with SSR/SSG |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS 3 | Utility-first CSS |
| Supabase | Auth (email/password) |
| ApexCharts | Dashboard charts |
| Vercel | Deployment (recommended) |

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- A [Supabase](https://supabase.com) project (free tier works)

### 1. Clone the repository
```bash
git clone https://github.com/IrigoyenCodes/dotcommoguls-trial-run.git
cd dotcommoguls-trial-run
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy the example env file and fill in your Supabase credentials:
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

You can find these in your Supabase project: **Settings → API**.

### 4. Set up Supabase Auth
In your Supabase dashboard:
1. Go to **Authentication → Providers**
2. Ensure **Email** provider is enabled
3. (Optional) Disable email confirmation for testing: **Authentication → Settings → Confirm email** → toggle off

### 5. Create a test user
Either sign up through the app's registration page, or create a user manually in the Supabase dashboard under **Authentication → Users**.

### 6. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

## 🗂 Project Structure

```
src/
├── app/
│   ├── (public)/          # Public routes (landing page, auth)
│   │   ├── page.tsx       # Landing page
│   │   └── auth/          # Sign-in & Sign-up pages
│   ├── (dashboard)/       # Protected routes (requires auth)
│   │   ├── layout.tsx     # Dashboard layout with Sidebar + Header
│   │   ├── dashboard/     # Main dashboard view
│   │   ├── calendar/      # Calendar page
│   │   ├── charts/        # Charts page
│   │   ├── forms/         # Form pages
│   │   ├── profile/       # User profile
│   │   └── tables/        # Data tables
│   ├── api/auth/          # Auth API routes
│   ├── layout.tsx         # Root layout (minimal shell)
│   └── providers.tsx      # Theme + Sidebar context providers
├── components/            # Reusable UI components
├── lib/supabase/          # Supabase client configurations
├── middleware.ts           # Auth middleware for route protection
└── css/                   # Global styles
```

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key |

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add environment variables in Vercel's dashboard
4. Deploy!

### Manual Build
```bash
npm run build
npm run start
```

## 📝 Known Limitations & Shortcuts Taken

**Limitations & Shortcuts:**
- Google OAuth sign-in button is removed (only email/password auth is functional for this trial)
- Dashboard data is sample/mock data from the original template
- No database integration for dashboard data (charts use hardcoded sample data)
- We opted to scope CSS overrides to a `.dashboard-theme` class rather than completely rewriting all core components, saving significant development time while ensuring visual isolation.

**What I would improve with more time:**
- **Add E2E Testing:** Set up Cypress or Playwright to test the full auth flow (landing page -> sign up -> dashboard).
- **Backend Integration:** Replace the static dashboard charts with live Supabase database queries.
- **Analytics:** Implement a tool like Plausible or PostHog to track conversion rates on the landing page hero section.

## 🎥 Video Walkthrough

[Link to walkthrough video]

---

Built with ❤️ using AI-assisted development.
