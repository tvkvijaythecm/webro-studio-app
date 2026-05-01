import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/_app/showcase")({
  head: () => ({
    meta: [
      { title: "Showcase — Webro Solution" },
      { name: "description", content: "Explore our recent web, app, and UI projects." },
    ],
  }),
  component: ShowcasePage,
});

type Cat = "All" | "Web" | "App" | "UI";

const items = [
  { title: "Nova Banking", desc: "Fintech mobile app", cat: "App", color: "from-violet-500 to-fuchsia-500" },
  { title: "Pulse SaaS", desc: "Marketing website", cat: "Web", color: "from-blue-500 to-cyan-500" },
  { title: "Glow Cosmetics", desc: "E-commerce platform", cat: "Web", color: "from-pink-500 to-rose-500" },
  { title: "Trail Tracker", desc: "Fitness app design", cat: "UI", color: "from-emerald-500 to-teal-500" },
  { title: "FoodieGo", desc: "Delivery app", cat: "App", color: "from-orange-500 to-amber-500" },
  { title: "StudioOS", desc: "Dashboard concept", cat: "UI", color: "from-indigo-500 to-purple-500" },
] as const;

const cats: Cat[] = ["All", "Web", "App", "UI"];

function ShowcasePage() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold">Showcase</h1>
        <p className="text-sm text-muted-foreground">A selection of recent work.</p>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold tap-scale transition-all ${
              cat === c
                ? "gradient-bg-primary text-primary-foreground shadow-glow"
                : "glass text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filtered.map((it, i) => (
          <article
            key={it.title}
            className="glass overflow-hidden rounded-2xl tap-scale animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div
              className={`relative h-28 bg-gradient-to-br ${it.color} flex items-center justify-center`}
            >
              <span className="text-xl font-bold text-white drop-shadow">
                {it.title.charAt(0)}
              </span>
              <span className="absolute right-2 top-2 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                {it.cat}
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">{it.title}</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">{it.desc}</p>
              <button className="mt-2 flex items-center gap-1 text-xs font-medium text-primary">
                View <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
