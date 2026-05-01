import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/_app/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Webro Solution" },
      { name: "description", content: "Transparent pricing for web design and development." },
    ],
  }),
  component: PricingPage,
});

const PHONE = "60104368680";
const tiers = [
  {
    name: "Basic",
    price: "RM 999",
    period: "/project",
    features: ["1-page website", "Mobile responsive", "Basic SEO", "1 revision"],
    popular: false,
  },
  {
    name: "Pro",
    price: "RM 2,499",
    period: "/project",
    features: ["Up to 5 pages", "CMS integration", "Advanced SEO", "3 revisions", "30-day support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "RM 4,999",
    period: "/project",
    features: ["Unlimited pages", "Custom features", "E-commerce ready", "Unlimited revisions", "90-day support", "Priority delivery"],
    popular: false,
  },
];

function PricingPage() {
  const choose = (name: string) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hi Webro, I'd like the ${name} plan.`)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold">Pricing</h1>
        <p className="text-sm text-muted-foreground">Simple plans, real results.</p>
      </header>

      <div className="space-y-4">
        {tiers.map((t, i) => (
          <div
            key={t.name}
            className={`relative rounded-3xl p-5 animate-slide-up ${
              t.popular
                ? "gradient-bg-primary text-primary-foreground shadow-glow"
                : "glass"
            }`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {t.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-soft flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> Most Popular
              </div>
            )}
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-bold">{t.name}</h3>
              <div>
                <span className="text-2xl font-bold">{t.price}</span>
                <span className={`text-xs ${t.popular ? "opacity-80" : "text-muted-foreground"}`}>
                  {t.period}
                </span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check
                    className={`h-4 w-4 shrink-0 mt-0.5 ${t.popular ? "text-white" : "text-primary"}`}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => choose(t.name)}
              className={`mt-5 w-full rounded-full py-3 text-sm font-semibold tap-scale ${
                t.popular
                  ? "bg-white text-primary shadow-soft"
                  : "gradient-bg-primary text-primary-foreground shadow-glow"
              }`}
            >
              Choose {t.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
