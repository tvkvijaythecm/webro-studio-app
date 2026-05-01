import { Moon, Sun, Download } from "lucide-react";
import logo from "@/assets/webro-logo.png";
import { useTheme } from "@/hooks/use-theme";
import { useInstallPrompt } from "@/hooks/use-install-prompt";
import { toast } from "sonner";

export function Header() {
  const { theme, toggle } = useTheme();
  const { canInstall, promptInstall } = useInstallPrompt();

  const handleInstall = async () => {
    const ok = await promptInstall();
    if (ok) toast.success("App installed!");
    else toast("Install: open browser menu → 'Add to Home Screen'");
  };

  return (
    <header className="sticky top-0 z-30 px-3 pt-3">
      <div className="glass mx-auto flex max-w-md items-center justify-between rounded-2xl px-3 py-2">
        <img src={logo} alt="Webro Solution" className="h-8 w-auto" width={120} height={32} />
        <div className="flex items-center gap-1">
          {canInstall && (
            <button
              onClick={handleInstall}
              className="tap-scale flex items-center gap-1 rounded-full gradient-bg-warm px-3 py-1.5 text-xs font-semibold text-white shadow-soft"
              aria-label="Install app"
            >
              <Download className="h-3.5 w-3.5" />
              Install
            </button>
          )}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="tap-scale flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
