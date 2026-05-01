import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { WhatsAppButton } from "./WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

export function AppLayout() {
  return (
    <div className="relative min-h-screen pb-28">
      <Header />
      <main className="mx-auto max-w-md px-4 pt-4 animate-fade-in">
        <Outlet />
      </main>
      <WhatsAppButton />
      <BottomNav />
      <Toaster position="top-center" />
    </div>
  );
}
