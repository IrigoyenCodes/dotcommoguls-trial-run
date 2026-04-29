import Link from "next/link";
import { MiniDashboard } from "@/components/Landing/MiniDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Analytics — Data Dashboard for Modern Teams",
  description:
    "Powerful, real-time data dashboards for modern teams. Visualize metrics, track KPIs, and make data-driven decisions with Nova Analytics.",
};

import { User } from "@supabase/supabase-js";
import { ScrollReveal } from "@/components/Landing/ScrollReveal";

function Navbar({ user }: { user: User | null }) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a1a12]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="8" fill="#4A7C59" />
            <path
              d="M8 22L13 14L17 18L24 10"
              stroke="#FDF8F0"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="10" r="2.5" fill="#FDF8F0" />
          </svg>
          <span className="text-xl font-bold text-white">
            Nova<span className="text-[#6B9E7B]"> Analytics</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
          >
            Features
          </a>
          <a
            href="#dashboard"
            className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
          >
            Reviews
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
          >
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="hidden text-sm font-medium text-gray-300 md:block">
                {user.email}
              </span>
              <Link
                href="/dashboard"
                className="group flex items-center gap-2 rounded-lg bg-[#4A7C59]/10 px-5 py-2.5 text-sm font-semibold text-[#6B9E7B] border border-[#4A7C59]/30 transition hover:bg-[#4A7C59]/20 hover:text-white"
              >
                Go to Dashboard
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ) : (
            <>
              <Link
                href="/auth/sign-in"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/auth/sign-up"
                className="rounded-lg bg-[#4A7C59] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#4A7C59]/25 transition hover:bg-[#3A6347] hover:shadow-[#4A7C59]/40"
              >
                Get Started Free
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#4A7C59]/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#6B9E7B]/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4A7C59]/10 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <ScrollReveal delay={100}>
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4A7C59]/30 bg-[#4A7C59]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#6B9E7B] animate-pulse" />
            <span className="text-xs font-medium text-[#6B9E7B]">
              Now with real-time analytics
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Data insights that{" "}
            <span className="nova-gradient-text">
              drive decisions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
            Nova Analytics transforms your raw data into actionable insights.
            Beautiful dashboards, real-time metrics, and powerful reporting — all
            in one platform.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/auth/sign-up"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-[#4A7C59] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[#4A7C59]/30 transition-all hover:bg-[#3A6347] hover:shadow-[#4A7C59]/50 hover:-translate-y-0.5"
          >
            Start Free Trial
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="#dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
          >
            View Live Demo
          </Link>
        </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={500}>
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-12 md:mx-auto md:max-w-xl">
          <div>
            <div className="text-2xl font-bold text-white md:text-3xl">10K+</div>
            <div className="mt-1 text-sm text-gray-500">Active Users</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white md:text-3xl">99.9%</div>
            <div className="mt-1 text-sm text-gray-500">Uptime SLA</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white md:text-3xl">50M+</div>
            <div className="mt-1 text-sm text-gray-500">Data Points</div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Your data, beautifully{" "}
              <span className="text-[#6B9E7B]">visualized</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Get a complete overview of your business metrics with our
              intuitive dashboard. From revenue tracking to user analytics.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative mt-16">
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4A7C59]/30 to-[#6B9E7B]/20 blur-3xl" />

            <div className="relative">
              <MiniDashboard />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Real-Time Analytics",
    description:
      "Monitor your KPIs in real-time with live-updating charts and metrics. Never miss a trend again.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Advanced Reporting",
    description:
      "Generate comprehensive reports with drill-down capabilities. Export to PDF, CSV, or share directly.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with role-based access controls, SSO integration, and end-to-end encryption.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "API & Integrations",
    description:
      "Connect with 50+ data sources including Stripe, Shopify, Google Analytics, and custom APIs.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Team Collaboration",
    description:
      "Share dashboards, create team workspaces, and set up automated alerts for your entire organization.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile Responsive",
    description:
      "Access your analytics on any device. Our dashboard is fully responsive and optimized for mobile viewing.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4A7C59]/30 bg-[#4A7C59]/10 px-4 py-1.5">
            <span className="text-xs font-medium text-[#6B9E7B]">
              Features
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Everything you need to{" "}
            <span className="text-[#6B9E7B]">scale</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Built for teams that need reliable, fast, and beautiful analytics.
            From startups to enterprise.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-[#4A7C59]/30 hover:bg-white/[0.04] h-full"
              >
                <div className="mb-5 inline-flex rounded-xl bg-[#4A7C59]/10 p-3 text-[#6B9E7B] transition-colors group-hover:bg-[#4A7C59]/20">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "Nova Analytics transformed how our team understands user behavior. The real-time dashboards are a game-changer — we went from guessing to knowing overnight.",
    name: "Sarah Chen",
    role: "VP of Product",
    company: "TechFlow Inc.",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "We tried 4 analytics platforms before Nova. Nothing else comes close to the speed, design, and ease-of-use. Our entire C-suite uses it daily now.",
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "ScaleUp Labs",
    avatar: "MR",
    rating: 5,
  },
  {
    quote: "The API integrations saved us months of engineering time. We had our entire data pipeline visualized in Nova within a single afternoon. Incredible product.",
    name: "Emily Watson",
    role: "Head of Data",
    company: "Meridian Health",
    avatar: "EW",
    rating: 5,
  },
  {
    quote: "Our investors were blown away when we demoed Nova at our board meeting. The visual quality and real-time updates made our metrics come alive.",
    name: "James Park",
    role: "CEO & Founder",
    company: "Nexus Commerce",
    avatar: "JP",
    rating: 5,
  },
  {
    quote: "Switching from our legacy BI tool to Nova cut our reporting time by 80%. The team actually enjoys looking at data now — that's never happened before.",
    name: "Aisha Patel",
    role: "Director of Operations",
    company: "Lumina Education",
    avatar: "AP",
    rating: 5,
  },
  {
    quote: "Nova's security features gave our compliance team peace of mind. SOC 2 compliant out of the box, with role-based access that just works. Exactly what enterprise needs.",
    name: "David Kim",
    role: "CISO",
    company: "Fortress Financial",
    avatar: "DK",
    rating: 5,
  },
];

function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4A7C59]/30 bg-[#4A7C59]/10 px-4 py-1.5">
            <span className="text-xs font-medium text-[#6B9E7B]">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Loved by teams{" "}
            <span className="nova-gradient-text">everywhere</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            See why thousands of data-driven teams trust Nova Analytics
            to power their decision-making.
          </p>
        </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#4A7C59]/20 hover:bg-white/[0.04] h-full"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-[#6B9E7B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 text-sm leading-relaxed text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A7C59]/20 text-sm font-bold text-[#6B9E7B]">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="pricing" className="relative py-20 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4A7C59]/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Ready to transform your{" "}
          <span className="nova-gradient-text">
            data strategy
          </span>
          ?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
          Join thousands of teams already using Nova Analytics to make
          smarter, data-driven decisions. Start free, no credit card required.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/auth/sign-up"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-[#4A7C59] px-10 py-4 text-base font-semibold text-white shadow-2xl shadow-[#4A7C59]/30 transition-all hover:bg-[#3A6347] hover:shadow-[#4A7C59]/50 hover:-translate-y-0.5"
          >
            Get Started Free
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Free 14-day trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060f0a] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="#4A7C59" />
              <path
                d="M8 22L13 14L17 18L24 10"
                stroke="#FDF8F0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="10" r="2.5" fill="#FDF8F0" />
            </svg>
            <span className="font-semibold text-white">
              Nova Analytics
            </span>
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#features" className="transition hover:text-gray-300">Features</a>
            <a href="#dashboard" className="transition hover:text-gray-300">Dashboard</a>
            <a href="#reviews" className="transition hover:text-gray-300">Reviews</a>
            <a href="#pricing" className="transition hover:text-gray-300">Pricing</a>
          </div>

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Nova Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { createClient } from "@/lib/supabase/server";

export default async function LandingPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden bg-gradient-to-b from-[#0a1a12] via-[#060f0a] to-[#0a1a12]">
      <Navbar user={user} />
      <HeroSection />
      <DashboardPreview />
      <FeaturesSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
