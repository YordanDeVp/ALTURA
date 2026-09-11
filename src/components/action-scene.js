"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/icons";

export default function ActionScene({ products, onSelect }) {
  const sectionRef = useRef(null);
  const [activeId, setActiveId] = useState(products[0].id);
  const active = products.find((product) => product.id === activeId);

  useEffect(() => {
    const section = sectionRef.current;
    const preference = window.matchMedia("(min-width: 1024px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let lastProgress = -1;

    function update() {
      frame = 0;
      const travel = section.offsetHeight - window.innerHeight;
      const progress = preference.matches && travel > 0 ? Math.max(0, Math.min(1, -section.getBoundingClientRect().top / travel)) : 0;
      if (progress === lastProgress) return;
      lastProgress = progress;
      section.style.setProperty("--scene-progress", progress.toFixed(4));
      section.style.setProperty("--scene-scale", (1 + Math.sin(progress * Math.PI) * 0.1).toFixed(4));
      section.dataset.stage = progress > 0.2 && progress < 0.85 ? "detail" : "wide";
    }

    function queueUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    queueUpdate();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    preference.addEventListener("change", queueUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      preference.removeEventListener("change", queueUpdate);
    };
  }, []);

  function closeQuickView() {
    document.getElementById(`action-product-${activeId}`)?.focus();
    setActiveId(null);
  }

  return (
    <section id="en-accion" ref={sectionRef} className="action-scene" aria-labelledby="action-heading">
      <div className="action-sticky">
        <div className="action-visual">
          <div className="action-image-canvas">
            <Image src="/images/snowboard-action.png" alt="Snowboarder en pleno salto con la tabla en diagonal y una cordillera nevada al fondo" fill sizes="100vw" />
            {products.map((product) => (
              <button key={product.id} className="product-hotspot" style={{ left: `${product.point.x}%`, top: `${product.point.y}%` }} aria-label={`Explorar ${product.name}`} aria-pressed={activeId === product.id} onClick={() => setActiveId(product.id)}>{product.number}</button>
            ))}
          </div>
          <div className="action-shade" />
          <div className="action-heading section-shell">
            <p className="eyebrow eyebrow-light"><span>04</span> EN PLENA ACCIÓN</p>
            <h2 id="action-heading" className="display-heading">Todo cambia.<br />Tu foco, no.</h2>
          </div>
        </div>
        <div className="action-bottom section-shell">
          <div className="quick-view-slot">
            {active && (
              <div className="quick-view">
                <button className="quick-view-close" aria-label="Cerrar detalle rápido" onClick={closeQuickView}>×</button>
                <span className="eyebrow">{active.number} / {active.category}</span>
                <h3>{active.name}</h3>
                <a href="#detalles" onClick={(event) => { event.preventDefault(); onSelect(active.id); }}>Ver detalles <ArrowIcon /></a>
              </div>
            )}
          </div>
          <div className="action-product-controls" aria-label="Productos en esta escena">
            {products.map((product) => (
              <button id={`action-product-${product.id}`} key={product.id} aria-pressed={activeId === product.id} onClick={() => setActiveId(product.id)}><span>{product.number}</span>{product.shortName}</button>
            ))}
          </div>
        </div>
        <div className="scene-progress" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}
