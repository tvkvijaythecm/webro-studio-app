import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-sm rounded-3xl p-8 text-center">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="mt-3 text-muted-foreground">Page not found</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full gradient-bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow tap-scale"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#5b5bf0" },
      { title: "Webro Solution" },
      {
        name: "description",
        content: "Stunning websites, mobile apps, and UI/UX design — built by Webro Solution.",
      },
      { property: "og:title", content: "Webro Solution" },
      { property: "og:description", content: "A modern, mobile-style web app showcasing web design and development services with a vibrant, user-friendly interface." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Webro Solution" },
      { name: "description", content: "A modern, mobile-style web app showcasing web design and development services with a vibrant, user-friendly interface." },
      { name: "twitter:description", content: "A modern, mobile-style web app showcasing web design and development services with a vibrant, user-friendly interface." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da22859e-a42a-44f2-a7e8-6b420fd21ea9/id-preview-70e36da4--dde0cf04-e212-44dc-98a2-6f1214a257a3.lovable.app-1777620327812.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/da22859e-a42a-44f2-a7e8-6b420fd21ea9/id-preview-70e36da4--dde0cf04-e212-44dc-98a2-6f1214a257a3.lovable.app-1777620327812.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "icon", href: "/icon-192.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
