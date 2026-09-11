# ALTURA

Base de la landing de snowboard definida en [DESIGN.md](./DESIGN.md).

## Tecnologías

- Next.js con App Router.
- JavaScript y JSX; configuración de imports en `jsconfig.json`.
- Tailwind CSS 4 mediante `@tailwindcss/postcss` y configuración en CSS.
- ESLint con las reglas Core Web Vitals de Next.js.
- npm y `package-lock.json` para instalaciones reproducibles.

## Desarrollo local

Se recomienda Node.js 24, indicado en `.nvmrc`. El mínimo declarado es Node.js 20.9.
No se requieren variables de entorno para esta base.

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
    page.js           Página inicial de la base
  lib/
    site.js           Nombre, descripción y configuración del sitio
  styles/
    tokens.css        Tokens canónicos de ALTURA tomados de DESIGN.md
public/
  images/             Imágenes futuras del hero y de los productos
  videos/             Videos futuros del bloque de acción
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

## Alcance de esta base

La página inicial permite comprobar Next.js, JavaScript y los estilos de
ALTURA. Todavía no implementa la landing completa, sus imágenes ni el
scrollytelling. La construcción seguirá este orden:

1. Hero nuevo en la cresta de la montaña.
2. Preparación.
3. Colección e imágenes de los productos.
4. Snowboarder en acción y animación.
5. Detalles de producto y cierre.

Esta configuración no publica el sitio ni incluye compra, cuentas o servicios
externos. Mantener fuera de Git `.next`, `node_modules` y los archivos `.env`.

## Documentación consultada

- [Instalación de Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS con Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Variables de tema de Tailwind CSS](https://tailwindcss.com/docs/theme)
- [Configuración de ESLint para Next.js](https://nextjs.org/docs/app/api-reference/config/eslint)
