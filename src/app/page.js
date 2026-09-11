import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-content flex-col px-gutter">
      <header className="flex min-h-nav items-center border-b border-divider py-6">
        <span className="text-lg font-semibold tracking-[0.3em]">
          {site.name}
        </span>
      </header>

      <main
        id="contenido"
        tabIndex={-1}
        className="flex flex-1 flex-col justify-center py-section"
      >
        <p className="mb-6 text-eyebrow font-semibold tracking-chapter uppercase">
          Snow collection
        </p>
        <h1 className="max-w-[14ch] font-heading text-display font-bold uppercase">
          Toda línea empieza con una decisión.
        </h1>
        <div aria-hidden="true" className="mt-8 h-2 w-20 bg-accent" />
        <p className="mt-8 max-w-lg text-copy text-muted">
          La montaña pone el terreno. Tú eliges cómo recorrerlo.
        </p>
      </main>

      <footer className="border-t border-divider py-6 text-sm text-muted">
        Concepto de diseño · Productos referenciales
      </footer>
    </div>
  );
}
