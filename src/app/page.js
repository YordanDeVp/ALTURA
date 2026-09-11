import Image from "next/image";
import SiteHeader from "@/components/site-header";
import HeroMedia from "@/components/hero-media";
import ProductExperience from "@/components/product-experience";
import { ArrowIcon } from "@/components/icons";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <section id="inicio" className="hero-section" aria-labelledby="hero-heading">
          <HeroMedia />
          <div className="hero-shade" />
          <div className="hero-content section-shell">
            <p className="eyebrow eyebrow-light hero-eyebrow"><span /> COLECCIÓN ALPINA / ALTURA</p>
            <h1 id="hero-heading">Toda línea<br />empieza con<br />una decisión.</h1>
            <p className="hero-description">La montaña pone el terreno.<br />Tú eliges cómo recorrerlo.</p>
            <div className="hero-actions">
              <a href="#coleccion" className="button button-lime">Explorar colección <ArrowIcon /></a>
              <a href="#preparacion" className="hero-secondary">Descubrir la experiencia</a>
            </div>
          </div>
          <div className="hero-bottom section-shell">
            <span><b>01</b> EL PUNTO DE PARTIDA</span>
            <a href="#preparacion" aria-label="Bajar a la siguiente sección">Desliza para descubrir <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section id="preparacion" className="preparation-section section-shell" aria-labelledby="preparation-heading">
          <div className="preparation-copy">
            <p className="eyebrow"><span>02</span> ANTES DEL DESCENSO</p>
            <h2 id="preparation-heading" className="display-heading">Prepárate para<br />tu próxima línea.</h2>
            <p className="body-copy">La chaqueta. El ajuste. La mirada.<br />El recorrido empieza en los detalles.</p>
            <a href="#coleccion" className="text-link">Conoce las piezas <ArrowIcon diagonal /></a>
          </div>
          <div className="preparation-images">
            <figure className="preparation-jacket">
              <div><Image src="/images/jacket.jpeg" alt="Detalle de la capucha y del cierre de la chaqueta Ridge" fill sizes="(max-width: 767px) 55vw, 25vw" /></div>
              <figcaption>01 / CADA CAPA CUENTA</figcaption>
            </figure>
            <figure className="preparation-goggles">
              <div><Image src="/images/glasses.jpeg" alt="Lente azul reflectante de las gafas Vision" fill sizes="(max-width: 767px) 40vw, 19vw" /></div>
              <figcaption>02 / OTRA PERSPECTIVA</figcaption>
            </figure>
          </div>
        </section>

        <ProductExperience products={products} />
      </main>
      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="wordmark" href="#inicio" aria-label="ALTURA, volver al inicio">ALTURA</a>
          <p>Concepto de diseño · Productos referenciales</p>
          <a className="footer-top" href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  );
}
