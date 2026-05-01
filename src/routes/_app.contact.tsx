import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Webro Solution" },
      { name: "description", content: "Get in touch with Webro Solution." },
    ],
  }),
  component: ContactPage,
});

const PHONE = "60104368680";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    const text = `Hi Webro!\n\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Opening WhatsApp…");
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold">Get in touch</h1>
        <p className="text-sm text-muted-foreground">We'd love to hear about your project.</p>
      </header>

      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:+${PHONE}`}
          className="glass flex flex-col items-center gap-1 rounded-2xl p-3 tap-scale"
        >
          <Phone className="h-4 w-4 text-primary" />
          <span className="text-[10px] text-muted-foreground">Call</span>
        </a>
        <a
          href="mailto:hello@webro.my"
          className="glass flex flex-col items-center gap-1 rounded-2xl p-3 tap-scale"
        >
          <Mail className="h-4 w-4 text-primary" />
          <span className="text-[10px] text-muted-foreground">Email</span>
        </a>
        <div className="glass flex flex-col items-center gap-1 rounded-2xl p-3">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-[10px] text-muted-foreground">Malaysia</span>
        </div>
      </div>

      <form onSubmit={submit} className="glass space-y-3 rounded-3xl p-5">
        <div>
          <label className="mb-1 block text-xs font-medium">Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
            placeholder="Your name"
            className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            rows={4}
            placeholder="Tell us about your project…"
            className="w-full resize-none rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-full gradient-bg-primary py-3.5 font-semibold text-primary-foreground shadow-glow tap-scale disabled:opacity-60"
        >
          {loading ? "Sending…" : (<>Send message <Send className="h-4 w-4" /></>)}
        </button>
      </form>

      <div className="flex justify-center gap-3">
        {[Instagram, Facebook, Linkedin].map((Icon, i) => (
          <a
            key={i}
            href="#"
            aria-label="Social"
            className="glass flex h-11 w-11 items-center justify-center rounded-full tap-scale"
          >
            <Icon className="h-4 w-4 text-primary" />
          </a>
        ))}
      </div>
    </div>
  );
}
