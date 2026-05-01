import { createFileRoute, Link } from "@tanstack/react-router";
import { Palette, Code2, Smartphone, Star, ArrowRight, Zap } from "lucide-react";

export const Route = createFileRoute("/_app/home")({
  head: () => ({
    meta: [
      { title: "Home — Webro Solution" },
      { name: "description", content: "Build stunning websites & apps with Webro Solution." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces", gradient: "gradient-bg-warm" },
  { icon: Code2, title: "Web Development", desc: "Fast, modern, scalable sites", gradient: "gradient-bg-cool" },
  { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android experiences", gradient: "gradient-bg-primary" },
];

const stats = [
  { value: "120+", label: "Projects" },
  { value: "98%", label: "Happy Clients" },
  { value: "5★", label: "Avg Rating" },
];

function HomePage() {
  return (
    <div className="space-y-6">
      <section className="glass relative overflow-hidden rounded-3xl p-6 animate-slide-up">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full gradient-bg-hero opacity-30 blur-2xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
            <Zap className="h-3 w-3" /> Webro Solution
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight">
            Build <span className="gradient-text">Stunning</span> Websites & Apps
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Premium design and development for ambitious brands.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              to="/contact"
              className="flex items-center gap-1.5 rounded-full gradient-bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow tap-scale"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/showcase"
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold tap-scale"
            >
              View Showcase
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-3 text-center">
            <div className="text-lg font-bold gradient-text">{s.value}</div>
            <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-3 px-1 text-lg font-bold">What we do</h2>
        <div className="space-y-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="glass flex items-center gap-4 rounded-2xl p-4 tap-scale"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${f.gradient} shadow-soft`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="glass rounded-2xl p-4">
        <div className="flex items-center gap-1 text-accent">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-2 text-sm">
          “Webro built our entire platform in 4 weeks. Insanely good design and code quality.”
        </p>
        <p className="mt-2 text-xs text-muted-foreground">— Sarah L., Founder @ NovaApp</p>
      </section>
    </div>
  );
}
