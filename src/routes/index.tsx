import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, Rocket, Palette, ArrowRight } from "lucide-react";
import logo from "@/assets/webro-logo.png";

export const Route = createFileRoute("/")({
  component: Onboarding,
});

const slides = [
  {
    icon: Sparkles,
    title: "Welcome to Webro",
    desc: "Your partner for stunning websites and mobile apps that convert.",
    gradient: "gradient-bg-cool",
  },
  {
    icon: Palette,
    title: "Beautiful UI/UX",
    desc: "Pixel-perfect designs crafted with passion and care for every detail.",
    gradient: "gradient-bg-warm",
  },
  {
    icon: Rocket,
    title: "Built to Launch",
    desc: "Modern tech stack, blazing performance, and SEO-ready from day one.",
    gradient: "gradient-bg-primary",
  },
];

function Onboarding() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("onboarded") === "1") {
      navigate({ to: "/home" });
    }
  }, [navigate]);

  const isLast = index === slides.length - 1;
  const slide = slides[index];
  const Icon = slide.icon;

  const finish = () => {
    localStorage.setItem("onboarded", "1");
    navigate({ to: "/home" });
  };

  return (
    <div className="flex min-h-screen flex-col px-6 py-8">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Webro" className="h-8 w-auto" width={120} height={32} />
        {!isLast && (
          <button
            onClick={finish}
            className="text-sm font-medium text-muted-foreground tap-scale"
          >
            Skip
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div
          key={index}
          className={`mb-8 flex h-44 w-44 items-center justify-center rounded-[2.5rem] ${slide.gradient} shadow-glow animate-scale-in`}
        >
          <Icon className="h-20 w-20 text-white animate-float" strokeWidth={1.5} />
        </div>

        <h1 key={`t-${index}`} className="text-3xl font-bold tracking-tight animate-slide-up">
          {slide.title}
        </h1>
        <p
          key={`d-${index}`}
          className="mt-3 max-w-xs text-base text-muted-foreground animate-fade-in"
        >
          {slide.desc}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 pb-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 gradient-bg-primary" : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium tap-scale disabled:opacity-0"
        >
          Back
        </button>
        {isLast ? (
          <button
            onClick={finish}
            className="flex flex-1 items-center justify-center gap-2 rounded-full gradient-bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow tap-scale"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={() => setIndex((i) => i + 1)}
            className="flex flex-1 items-center justify-center gap-2 rounded-full gradient-bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow tap-scale"
          >
            Next <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Already onboarded?{" "}
        <Link to="/home" className="font-semibold text-primary">
          Go to app
        </Link>
      </p>
    </div>
  );
}
