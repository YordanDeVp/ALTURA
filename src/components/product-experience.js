"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ActionScene from "@/components/action-scene";
import { ArrowIcon, ExpandIcon } from "@/components/icons";

export default function ProductExperience({ products }) {
  const [selectedId, setSelectedId] = useState(products[0].id);
  const selected = products.find((product) => product.id === selectedId);
  const dialogRef = useRef(null);

  function selectProduct(id) {
    setSelectedId(id);
    window.requestAnimationFrame(() => {
      const heading = document.getElementById("detail-heading");
      const section = document.getElementById("detalles");
      heading?.focus({ preventScroll: true });
      section?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }

  return (
    <>
      <section id="coleccion" className="collection-section section-shell" aria-labelledby="collection-heading">
        <div className="section-intro">
          <div>
            <p className="eyebrow"><span>03</span> LA COLECCIÓN</p>
            <h2 id="collection-heading" className="display-heading">Equipa tu<br />próxima línea.</h2>
          </div>
          <p className="section-aside">Tres piezas.<br />Una misma dirección.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <a className="product-image" href="#detalles" aria-label={`Ver detalles de ${product.name}`} onClick={(event) => { event.preventDefault(); selectProduct(product.id); }}>
                <Image src={product.image} alt={product.alt} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw" />
                <span className="product-index">{product.number} / ALTURA</span>
                <span className="product-arrow"><ArrowIcon diagonal /></span>
              </a>
              <div className="product-card-heading"><h3>{product.name}</h3><span>{product.color}</span></div>
              <p className="product-category">{product.category}</p>
              <a className="text-link" href="#detalles" onClick={(event) => { event.preventDefault(); selectProduct(product.id); }}>Ver detalles <ArrowIcon diagonal /></a>
            </article>
          ))}
        </div>
      </section>

      <ActionScene products={products} onSelect={selectProduct} />

      <section id="detalles" className="product-detail-section" aria-labelledby="detail-heading">
        <div className="product-detail-inner section-shell">
          <div className="detail-media">
            <Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 767px) 90vw, 48vw" />
            <span className="detail-image-label">{selected.number} / VISTA DE PRODUCTO</span>
            <button className="enlarge-button" onClick={() => dialogRef.current.showModal()}><ExpandIcon /><span>Ampliar imagen</span></button>
          </div>
          <div className="detail-copy">
            <p className="eyebrow eyebrow-light"><span>05</span> LOS DETALLES</p>
            <div className="product-switcher" aria-label="Seleccionar producto">
              {products.map((product) => <button key={product.id} aria-pressed={selectedId === product.id} onClick={() => setSelectedId(product.id)}>{product.shortName}</button>)}
            </div>
            <p className="selected-product-name" aria-live="polite">{selected.name}</p>
            <h2 id="detail-heading" tabIndex={-1} className="display-heading">{selected.headline}</h2>
            <p className="detail-description">{selected.description}</p>
            <div className="detail-accordions" key={selected.id}>
              {selected.details.map(([title, description]) => (
                <details key={title} name="product-details">
                  <summary>{title}<span aria-hidden="true">+</span></summary>
                  <p>{description}</p>
                </details>
              ))}
            </div>
            <p className="concept-note">Producto conceptual. Las características técnicas se definirán con el catálogo final.</p>
            <a className="button button-lime" href="#coleccion">Volver a la colección <ArrowIcon /></a>
          </div>
        </div>

        <div className="closing-scene">
          <Image src="/images/hero-poster.jpeg" alt="" fill sizes="100vw" />
          <div className="closing-content section-shell">
            <p className="eyebrow eyebrow-light">LA MONTAÑA TE ESPERA</p>
            <h2 className="display-heading">Tu próxima línea<br />empieza aquí.</h2>
            <a className="button button-lime" href="#coleccion">Explorar colección <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <dialog ref={dialogRef} className="product-dialog" aria-label={`Imagen ampliada de ${selected.name}`} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close(); }}>
        <div className="product-dialog-inner">
          <button className="dialog-close" aria-label="Cerrar imagen ampliada" onClick={() => dialogRef.current.close()}>Cerrar <span aria-hidden="true">×</span></button>
          <Image src={selected.image} alt={selected.alt} width={selected.width} height={selected.height} sizes="(max-width: 767px) 90vw, 70vw" />
          <p>{selected.name} / {selected.color}</p>
        </div>
      </dialog>
    </>
  );
}
