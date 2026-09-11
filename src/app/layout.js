import { site } from "@/lib/site";
import "./globals.css";

export const metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={site.locale}>
      <body className="min-h-svh bg-background font-sans text-foreground antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-control focus:bg-accent focus:px-6 focus:py-3 focus:text-accent-foreground"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
