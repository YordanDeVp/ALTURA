# ALTURA

Preview funcional de la landing de snowboard definida en [DESIGN.md](./DESIGN.md).

## Tecnologías

- Next.js con App Router.
- JavaScript y JSX; configuración de imports en `jsconfig.json`.
- Tailwind CSS 4 mediante `@tailwindcss/postcss` y configuración en CSS.
- ESLint con las reglas Core Web Vitals de Next.js.
- npm y `package-lock.json` para instalaciones reproducibles.

## Desarrollo local

Se recomienda Node.js 24, indicado en `.nvmrc`. El mínimo declarado es Node.js 20.9.
No se requieren variables de entorno para esta preview.

```sh
npm ci
npm run dev
```

Abrir [localhost:3000](http://localhost:3000).

## Comprobaciones y producción

```sh
npm run lint
npm run build
npm run start
```

`npm run lint:fix` aplica las correcciones automáticas disponibles. El lint se
ejecuta por separado del build.

ESLint está fijado en la rama 9 porque los plugins de React, imports y
accesibilidad instalados con `eslint-config-next` todavía declaran compatibilidad
hasta esa versión. npm avisa de que esa rama ha dejado de tener soporte; su
actualización debe hacerse junto con plugins compatibles, sin forzar los peers.

## Estructura

```text
src/
  app/
    globals.css       Integración de Tailwind 4 y estilos base
    layout.js         Layout raíz, idioma español y metadata
    page.js           Hero, preparación y composición de la landing
  components/
    hero-media.js     Video con pausa y fallback de imagen
    site-header.js    Navegación adaptable y menú móvil
    action-scene.js   Escena vinculada al scroll y puntos de producto
    product-experience.js  Colección, detalles y ampliación de imágenes
    icons.js          Iconos de interfaz
  lib/
    products.js       Datos y rutas de las tres piezas conceptuales
    site.js           Nombre, descripción y configuración del sitio
  styles/
    tokens.css        Tokens canónicos de ALTURA tomados de DESIGN.md
    landing.css       Composición editorial y estilos responsive
public/
  images/             Fotos de producto, poster y escena de acción
  videos/             Video del hero
```

El alias `@/` apunta a `src/`. Los componentes son de servidor por defecto;
añadir `"use client"` únicamente donde se necesite interacción de navegador.

## Diseño y Tailwind 4

`DESIGN.md` es la referencia de diseño. Los valores de color, tipografía,
espaciado y movimiento se mantienen en `src/styles/tokens.css`.
`src/app/globals.css` los conecta a utilidades semánticas con `@theme inline`:
`bg-background`, `text-foreground`, `text-muted`, `bg-accent`, `font-heading`,
`text-display`, `text-copy`, `px-gutter` y `rounded-control`.

No se necesita `tailwind.config.js` para esta configuración. Tampoco se usan
las directivas de Tailwind 3 ni un plugin separado de Autoprefixer.
Las fuentes actuales son alternativas de sistema; las fuentes finales se
incorporarán cuando se aprueben los archivos correspondientes.

## Recorrido e interacciones

1. Hero independiente con el video aportado, poster, reproducción silenciosa en
   loop y control de pausa. Se pausa al salir de la vista o esconder la pestaña.
2. Preparación con recortes editoriales de la chaqueta y las gafas.
3. Colección con las tres imágenes de producto y accesos a sus detalles.
4. Snowboarder en pleno salto: escena fija temporalmente en escritorio, zoom de
   ida y vuelta vinculado al scroll y puntos interactivos de producto.
5. Detalles con selector de pieza, acordeones, ampliación de foto y cierre visual.

En móvil, la cuarta sección permanece en el flujo normal sin una secuencia
fija prolongada. Con `prefers-reduced-motion`, se desactiva el movimiento ligado
al scroll y el video no arranca automáticamente; puede iniciarse manualmente.
La navegación, los selectores y la ampliación funcionan con teclado. Escape
cierra el menú móvil o la imagen ampliada.

La escena de acción usa una imagen animada mediante CSS, no un segundo video ni
una secuencia de fotogramas. La preview no incluye compra, cuentas ni servicios
externos. Los nombres y textos son conceptuales: no se presentan precios ni
prestaciones técnicas sin un catálogo validado.

## Archivos multimedia

- `public/images/hero-poster.jpeg`: poster del hero y panorama del cierre.
- `public/videos/hero.mp4`: video del hero.
- `public/images/jacket.jpeg`: chaqueta Ridge.
- `public/images/pants.jpeg`: pantalón Line.
- `public/images/glasses.jpeg`: gafas Vision.
- `public/images/snowboard-action.png`: imagen de referencia del salto.

El poster se normalizó desde `hero-poster.webp.jpeg` a `.jpeg`, su formato real.
Las imágenes se sirven con `next/image` y carga diferida salvo el poster del hero.
Para cambiar un producto, actualizar su entrada en `src/lib/products.js`,
incluidos dimensiones y texto alternativo. Para sustituir el video, conservar
su ruta o actualizar `src/components/hero-media.js`.

El servidor de desarrollo es una preview local, no un despliegue público.
Mantener fuera de Git `.next`, `node_modules` y los archivos `.env`.

## Documentación consultada

- [Instalación de Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS con Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Variables de tema de Tailwind CSS](https://tailwindcss.com/docs/theme)
- [Configuración de ESLint para Next.js](https://nextjs.org/docs/app/api-reference/config/eslint)
