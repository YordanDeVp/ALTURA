"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/icons";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") { closeMenu(); document.getElementById("menu-toggle")?.focus(); } }}>
      <div className="site-header-inner section-shell">
        <a href="#inicio" className="wordmark" aria-label="ALTURA, volver al inicio" onClick={closeMenu}>ALTURA</a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#preparacion">La experiencia</a>
          <a href="#coleccion">Colección</a>
          <a href="#disciplinas">Deportes</a>
          <a href="#detalles">Los detalles</a>
        </nav>
        <a className="nav-collection" href="#coleccion">Explorar colección <ArrowIcon /></a>
        <button id="menu-toggle" className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Cerrar" : "Menú"}<span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navegación móvil" hidden={!menuOpen}>
        <a href="#preparacion" onClick={closeMenu}>La experiencia</a>
        <a href="#coleccion" onClick={closeMenu}>Colección</a>
        <a href="#disciplinas" onClick={closeMenu}>Deportes</a>
        <a href="#detalles" onClick={closeMenu}>Los detalles</a>
      </nav>
    </header>
  );
}
