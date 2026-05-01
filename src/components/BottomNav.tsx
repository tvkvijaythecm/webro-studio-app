import { Link, useRouterState } from "@tanstack/react-router";
import { Home, LayoutGrid, Tag, Mail } from "lucide-react";

const tabs = [
  { to: "/home", icon: Home, label: "Home" },
  { to: "/showcase", icon: LayoutGrid, label: "Showcase" },
  { to: "/pricing", icon: Tag, label: "Pricing" },
  { to: "/contact", icon: Mail, label: "Contact" },
] as const;

export function BottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2 pointer-events-none">
      <div className="mx-auto max-w-md rounded-3xl border border-border bg-card px-2 py-2 pointer-events-auto shadow-soft">
        <ul className="flex items-center justify-around">
          {tabs.map(({ to, icon: Icon, label }) => {
            const active = path === to || (to === "/home" && path === "/home");
            return (
              <li key={to} className="flex-1">
                <Link
                  to={to}
                  className="tap-scale group relative flex flex-col items-center gap-1 rounded-2xl px-2 py-2 transition-all hover:bg-primary/10"
                >
                  {active && (
                    <span className="absolute inset-0 -z-10 gradient-bg-primary rounded-2xl opacity-90 shadow-glow animate-scale-in" />
                  )}
                  <Icon
                    className={`h-5 w-5 transition-colors ${active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}`}
                    strokeWidth={active ? 2.5 : 2}
                  />
                  <span
                    className={`text-[10px] font-medium transition-colors ${active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}`}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
