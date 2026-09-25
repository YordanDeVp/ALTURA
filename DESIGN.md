# ALTURA — Cinematic Extreme Sports Apparel

> Elige tu línea. A quiet moment on the ridge, equipment worth examining, and a suspended jump that brings the collection to life.

**Theme:** mixed — snow-white editorial commerce, charcoal technical detail, alpine photography, and a restrained lime accent.

**Status:** working design specification for the implemented preview. ALTURA and all product names are provisional. Product imagery is conceptual until matched to a real catalog; technical performance and purchase flow remain undefined.

**Language:** design instructions and generation prompts in English; all customer-facing website copy in Spanish.

**Implementation stack:** Next.js with App Router, JavaScript/JSX, and Tailwind CSS 4. Application source lives in `src/`, with `@/` as its import alias. Keep the canonical design values in `src/styles/tokens.css` and map them to Tailwind utilities through `@theme inline` in `src/app/globals.css`. Use the PostCSS integration for Tailwind 4.

## 1. Approved direction and scope

This specification replaces the previous aviation design system. Retain its editorial confidence, generous space, and restrained use of color, but replace its industry references, terracotta accent, pill buttons, imagery, and typography hierarchy with an alpine sportswear identity.

The earlier landing mockup is a reference for art direction, not the final section order. The user's later decisions take precedence:

1. A **new hero image** introduces the mountain before the descent.
2. A short preparation scene bridges emotion and equipment.
3. **Product images and the snowboard collection appear in the third section, followed by six additional sportswear pieces.**
4. **The existing airborne snowboarder image and animation appear in the fourth section.**
5. Product details, selection, and the closing invitation complete the experience.

Do not use the existing airborne image as the hero. Do not delay the collection until after the action sequence.

Build one coherent landing page. Search, accounts, checkout, newsletter forms, promotions, testimonials, and additional routes are outside the current concept. Add commerce integrations only when the catalog and intended purchase flow are supplied.

## 2. Creative concept

The emotional arc is **anticipation → preparation → discovery → action → informed choice**.

The new hero establishes scale and silence. Preparation introduces tactile detail. Products become visible before the most animated scene. The jump then demonstrates how those pieces fit together visually. The final section gives visitors enough room to examine individual items.

Use motion to direct attention between these moments. During product reading and comparison, prioritize stable imagery, ordinary scrolling, and legible controls.

### Visual signature

- Monumental condensed headlines paired with calm, readable body text.
- Mountain photography and full-size garments carry the composition.
- Snow-white, near-black, and neutral studio-gray surfaces create alternating chapters.
- Lime marks primary actions, active states, and occasional chapter numbers.
- Olive fabric and reflective blue lenses remain colors within the photography, not additional interface accents.
- Square editorial panels and nearly square buttons; circles reserved for hotspots, swatches, and compact indicators.
- Flat surfaces, thin rules, minimal icons, and generous breathing room.

## 3. Page architecture and approved copy

### Global navigation

- Small ALTURA wordmark, not a giant logo competing with the hero headline.
- Links: **La experiencia** → `#preparacion`, **Colección** → `#coleccion`, **Detalles** → `#detalles`.
- The primary commerce entry throughout the page is **Explorar colección** → `#coleccion`.
- Navigation is transparent only when contrast over photography is reliable. Switch to an opaque contrasting surface when needed, including when the page is first loaded at a deep link.
- Use a compact mobile menu with an obvious close control and keyboard support.
- Anchor destinations account for the navigation height. Direct navigation must bypass the narrative without requiring visitors to complete any animation.

### 01 — Before the first turn · `#inicio`

**Purpose:** establish anticipation and introduce the brand with a new image.

**Imagery:** a rider seen from behind on a snowy ridge, holding a snowboard and looking toward the descent. Match the olive-brown jacket, charcoal pants, black helmet, and blue-lens equipment language of the reference. Use pale alpine light, atmospheric distance, and clear negative space for text. The rider is grounded on the ridge rather than airborne.

**Composition:** full-width photograph; headline in a safe text area, rider separated from the typography. The image should work with a desktop landscape crop and a separately composed mobile crop. Preserve important body and board details.

**Copy:**

- Eyebrow: **ALTURA / SNOW COLLECTION**.
- Headline: **Toda línea empieza con una decisión.**
- Supporting line: **La montaña pone el terreno. Tú eliges cómo recorrerlo.**
- Primary action: **Explorar colección**.
- Secondary action: **Descubrir la experiencia** → `#preparacion`.

**Motion:** optional subtle atmospheric movement or a restrained image drift. Keep the headline readable. A still hero is a complete and acceptable first version; the existing jump video is not a substitute for the new hero.

**Height:** approximately one small viewport height, with content allowed to grow on short screens. Do not clip text or controls to enforce a fixed hero height.

### 02 — Preparation · `#preparacion`

**Purpose:** connect the mountain setting to the equipment without creating another long introduction.

**Composition:** short snow-white editorial band; large text on one side, one preparation photograph or two complementary garment details on the other. Vary scale rather than stacking identical cards.

**Copy:**

- Chapter label: **02 — ANTES DEL DESCENSO**.
- Headline: **Prepárate para tu próxima línea.**
- Supporting line: **Cada pieza forma parte del recorrido.**

**Imagery:** a glove adjusting a cuff, a jacket zipper, or goggles being positioned. Show visible construction details without implying tested waterproofing, insulation, or safety performance.

**Motion:** one short reveal as the section enters view. No pinned sequence here. Keep the collection close to the beginning of the page.

### 03 — Collection first · `#coleccion`

**Purpose:** let visitors see and explore the products before the cinematic action chapter.

**Copy:**

- Chapter label: **03 — LA COLECCIÓN**.
- Headline: **Equipa tu próxima línea.**
- Supporting line: **Tres piezas. Una línea alpina.**

**Concept products:**

- **Chaqueta Ridge** — olive-brown technical snow jacket inspired by the reference outfit.
- **Pantalón Line** — charcoal snow pants with a silhouette consistent with the rider.
- **Gafas Vision** — dark frame, reflective blue lens, and a light strap.

Generate separate, original product photographs. The product images embedded in the earlier landing mockup are design references, not finished catalog assets.

**Presentation:** three open product columns on desktop, two where space requires, and one on narrow mobile screens. Use a consistent 4:5 product canvas, matched studio lighting, and comparable visual scale. Keep each garment fully visible. Show product name, a short category label, and **Ver detalles**.

**Interaction:** selecting **Ver detalles** selects that item in section 05, scrolls to the detail heading, and gives keyboard users a clear focus destination. The initial detail view defaults to Chaqueta Ridge.

Only render color choices when there are corresponding approved images or actual variants. Do not use decorative swatches that imply unavailable products. Omit price, availability, sizing, and purchase controls until those facts and workflows exist.

**Motion:** a gentle entrance reveal at most. Product names and actions never depend on hover. All three products must be discoverable without a carousel.

### 03+ — Other lines · `#disciplinas`

**Purpose:** extend the snowboard collection into six additional extreme sports without changing the alpine hero or the fourth chapter's snowboard action scene.

**Copy:** **NUEVAS LÍNEAS** and **Cada terreno. Su propia línea.**

**Concept garments:** Sudadera Street for skateboarding, Chaqueta Coastline for longboard, Traje Break for surf, Shorts Current for wakeboard, Chaqueta Summit for skiing, and Camiseta Drift for kitesurf. These are apparel concepts, not replacements for each sport's board, helmet, protective gear, flotation equipment, or other essential equipment.

Use six separate studio product photographs with the same calm gray background and full-garment framing as the alpine line. Each card names the sport, the garment and its visible color, then links to the shared detail section. Keep the six cards readable without a carousel. Do not imply tested safety or performance specifications.

### 04 — The jump · `#en-accion`

**Purpose:** reconnect the visible collection with the original sports photograph.

**Imagery:** the previously generated airborne snowboarder and its eventual animation. Preserve the rider, outfit, bindings, board geometry, lighting, and alpine environment.

**Copy:**

- Chapter label: **04 — EN PLENA ACCIÓN**.
- Headline: **Todo cambia. Tu foco, no.**
- Brief invitation: **Descubre las piezas de esta línea.**

**Desktop choreography:**

1. **Establish:** show the complete rider and snowboard with the headline.
2. **Discover:** reduce the text and guide attention toward the jacket, pants, and goggles. Use restrained framing changes and show one primary product callout at a time.
3. **Release:** return to the wider composition and allow the page to continue into product detail.

Use one bounded pinned section. Start with a total section height near `240svh`, including a `100svh` sticky scene; this gives roughly `140svh` of scroll travel, not 240 additional screens or percent of the entire page. These are initial tuning values, not fixed requirements.

**Hotspots:** visible numbered buttons identify the three products. Selecting one reveals a compact quick-view panel with its name, a short factual or explicitly conceptual description, and **Ver detalles**. Closing the panel returns focus to its trigger. The panel must stay inside a readable safe area.

Hotspots must follow the item as framing or video position changes. Use tracked positions or stage-specific placement; if reliable tracking is unavailable, put the product controls alongside the image with clear labels. Do not leave static dots drifting away from moving garments.

**Mobile:** show the action in a stable, suitably framed image or short loop with the three product controls below it. Disable the extended pinned sequence. A 16:9 image can sit within a neutral surface to keep the full board visible instead of forcing a destructive portrait crop.

### 05 — Product detail and closing · `#detalles`

**Purpose:** support examination and comparison after the action.

**Composition:** near-black technical-detail band. A large light studio image occupies approximately half the desktop width; the other half contains the selected product name, description, detail controls, and grouped navigation between the nine garments. On mobile, put imagery before the text and remove sticky behavior.

**Initial copy:**

- Chapter label: **05 — LOS DETALLES**.
- Default product: **Chaqueta Ridge**.
- Editorial headline: **Hecha para seguirte.**
- Supporting line: **Mira de cerca cada detalle.**

Use product-specific copy when the selection changes. Do not reuse jacket descriptions for pants or goggles.

**Detail groups:** materials and construction, fit and movement, and visible design details. Populate only from supplied product data or clearly identified concept descriptions. Do not manufacture membrane names, waterproof ratings, breathability values, temperature ranges, lens protection, certifications, sustainability claims, or test results.

Allow image enlargement with a clear close action. Product selectors and expandable detail rows must work by keyboard and touch. Empty information groups are omitted from the visible page; missing catalog information belongs in project notes.

The section ends with a short panoramic mountain image and the copy **Tu próxima línea empieza aquí.** The action **Explorar colección** returns to section 03. Treat this closing image as part of section 05, not another prolonged story chapter.

Finish with a compact ALTURA footer. While the experience remains conceptual, display **Concepto de diseño · Productos referenciales**. Add legal, contact, or social links only when real destinations are provided.

## 4. Color, typography, spacing, and shapes

### Color roles

- **Ink — `#111411`:** primary text, dark surfaces, and text on lime actions.
- **Snow — `#F5F6F2`:** primary light canvas and text on dark surfaces.
- **White — `#FFFFFF`:** selected image surfaces and high-contrast text where required.
- **Studio — `#E8EBE5`:** neutral product photography surround and subtle surface alternation.
- **Muted on light — `#596057`:** secondary copy on Snow or White.
- **Muted on dark — `#B6BDB2`:** secondary copy on Ink or Panel.
- **Rule on light — `#CCD2C7`:** structural dividers; not a sufficient boundary for every interactive control.
- **Rule on dark — `#444C41`:** structural dividers on dark sections.
- **Control border on light — `#7A8376`:** stronger boundary for outlined controls.
- **Control border on dark — `#899282`:** stronger boundary for outlined controls.
- **Panel — `#1C231B`:** differentiated dark panels without shadows.
- **Lime — `#D3FF3F`:** primary action fill, selected indicators, and restrained chapter accents.

Use Ink text on Lime. Avoid lime text on snow-white and white text on lime. Active states on light surfaces should combine dark text with an accent fill, rule, or marker. Verify text and control contrast in the final rendered design, including over photographs.

### Typography

Use one condensed display family for major headings and one neutral sans-serif family for body copy and controls. The exact licensed font assets remain to be selected; system fallbacks must preserve usable layout. Do not require the previous HelveticaNowDisplay asset.

- **Hero:** responsive 56–136px, heavy weight, line-height approximately 0.95, tight but legible tracking. Scale down further where a narrow viewport or text zoom requires it.
- **Section display:** responsive 40–88px, line-height 1.0.
- **Product/detail heading:** responsive 28–44px, line-height 1.1.
- **Body:** 16–18px, line-height 1.55–1.65, generally no more than 60 characters per line.
- **Navigation and controls:** 14–16px, medium or semibold, never compressed to compensate for crowded layout.
- **Chapter labels:** 12–13px, uppercase with approximately 0.12em tracking. Essential information must remain readable without these labels.

Use uppercase for short display statements, sentence case for product information, and correct Spanish accents. Do not force long headings into fixed line breaks across every viewport. The wordmark stays small enough to let photography and the headline lead.

### Layout and shapes

- Base spacing unit: 4px, using a regular scale rather than arbitrary extracted measurements.
- Content max-width: 1440px; photography may bleed to the viewport edges.
- Page gutter: responsive 20–72px.
- Section padding: responsive 56–112px; shorter for the preparation bridge and closing strip.
- Grid: up to 12 columns on desktop, collapsing to content-driven tablet and mobile layouts.
- Product columns: generous 24–32px gaps.
- Buttons: 2px radius, at least 48px tall, approximately 24px horizontal padding.
- Editorial and image panels: 0px radius.
- Hotspots and swatches: circular, with at least a 44×44px interactive target even when the visible marker is smaller.
- No card or button shadows. Add a restrained photographic scrim only where necessary for legibility; avoid decorative interface gradients.

### Canonical CSS tokens

This block is the single token source. Framework integrations should map to it rather than duplicate conflicting values. Unitless line heights are ratios, not extracted pixel counts.

```css
:root {
  color-scheme: light;

  --color-ink: #111411;
  --color-snow: #f5f6f2;
  --color-white: #ffffff;
  --color-studio: #e8ebe5;
  --color-muted-light: #596057;
  --color-muted-dark: #b6bdb2;
  --color-rule-light: #ccd2c7;
  --color-rule-dark: #444c41;
  --color-control-light: #7a8376;
  --color-control-dark: #899282;
  --color-panel: #1c231b;
  --color-lime: #d3ff3f;

  --surface-page: var(--color-snow);
  --surface-product: var(--color-studio);
  --surface-dark: var(--color-ink);
  --surface-dark-raised: var(--color-panel);
  --text-primary: var(--color-ink);
  --text-secondary: var(--color-muted-light);
  --text-inverse: var(--color-snow);
  --action-fill: var(--color-lime);
  --action-text: var(--color-ink);
  --focus-on-light: var(--color-ink);
  --focus-on-dark: var(--color-lime);

  /* Replace with approved font assets when available. */
  --font-display: 'Arial Narrow', Impact, sans-serif;
  --font-body: Arial, 'Helvetica Neue', system-ui, sans-serif;
  --weight-regular: 400;
  --weight-medium: 600;
  --weight-display: 700;
  --text-caption: 0.8125rem;
  --text-nav: 0.9375rem;
  --text-body: clamp(1rem, 0.95rem + 0.2vw, 1.125rem);
  --text-product: clamp(1.75rem, 1.2rem + 1.6vw, 2.75rem);
  --text-section: clamp(2.5rem, 1.3rem + 4vw, 5.5rem);
  --text-hero: clamp(3.5rem, 1.5rem + 7vw, 8.5rem);
  --leading-hero: 0.95;
  --leading-heading: 1.05;
  --leading-body: 1.6;
  --tracking-display: -0.025em;
  --tracking-label: 0.12em;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-28: 112px;

  --content-max: 1440px;
  --page-gutter: clamp(20px, 5vw, 72px);
  --section-padding: clamp(56px, 8vw, 112px);
  --grid-gap: clamp(24px, 2.2vw, 32px);
  --nav-height: 72px;
  --radius-button: 2px;
  --radius-panel: 0px;
  --radius-circle: 50%;
  --control-height: 48px;
  --touch-target: 44px;

  --duration-fast: 160ms;
  --duration-reveal: 420ms;
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 47.99rem) {
  :root {
    --nav-height: 64px;
  }
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-reveal: 0ms;
  }
  /* Also disable autoplay, pinning, parallax, and scroll scrubbing
     in the relevant components; token changes alone are insufficient. */
}
```

## 5. Components and interaction rules

### Primary action

Lime fill, Ink text, nearly square corners, clear label, and an optional small arrow. Use **Explorar colección** for the main navigation action and **Ver detalles** for product exploration. Hover can change emphasis slightly; focus must have a visible contrasting outline. Never replace readable text with an icon-only shopping action.

### Secondary action

Dark text with a restrained underline on light surfaces, or light text on dark imagery. Use a sufficiently contrasting border when rendered as a button. Avoid the previous pill treatment.

### Product tile

An open image-and-caption composition with no heavy container. Show a consistent image canvas, name, category, and detail link. Secondary images may appear on explicit selection or hover, but the primary information remains visible on touch devices.

### Product selector and detail rows

Keep the three snowboard choices and six additional sports visible in grouped detail controls. The selected-state semantics must be clear. Use genuine buttons for expandable detail rows, with expanded-state information and stable focus. Do not open every row by default into a long block of speculative specifications.

### Image enlargement and quick view

Open only on a deliberate interaction. Provide a close button and Escape support. A modal version manages focus and restores it on close; an inline version keeps the normal reading order. Closing a view must not reset the visitor's scroll position or product selection.

### Chapter progress

Optional and unobtrusive. A small progress rail may be used on wide screens, but it must not obscure products or become the only navigation method. Remove it on narrow screens.

## 6. Imagery and asset plan

### Existing reference assets

- [Generated airborne snowboarder](C:/Users/YRSM/.codex/generated_images/01a08eaa-0880-7a02-9b98-d0d559ef941b/exec-1b91a888-7d6f-40f7-9dc1-daab247eee59.png) — available reference for section 04 and video generation. Verify actual dimensions before exporting derivatives; 16:9 is the intended composition.
- [Earlier landing mockup](C:/Users/YRSM/.codex/generated_images/01a08eaa-0880-7a02-9b98-d0d559ef941b/exec-98ea7d17-5cef-45b7-8272-9a799ec1cf81.png) — available visual reference only. Its original hero and product order are superseded by this document.

These are local reference links, not production website URLs. When implementing, copy selected source assets into the project and create appropriately sized web derivatives. Keep originals intact.

### Multisport concept photographs

The six new catalog images live in `public/images/`. They were created with the built-in image generation tool using this shared prompt direction: **product-mockup for the ALTURA landing; one unbranded sports garment, fully visible from the front; premium realistic apparel photography; vertical 4:5 framing on a soft light-gray studio background with natural shadow and generous margins; rugged, restrained outdoor-sports styling; visible fabric texture and seams; no person, equipment, text, logo, watermark, collage, or extra garments.**

Subject and palette per image:

- `skate-hoodie.png`: oversized charcoal skate hoodie with olive side panels.
- `longboard-windbreaker.png`: relaxed terracotta longboard windbreaker with charcoal sleeves and hood.
- `surf-wetsuit.png`: full-length graphite surf wetsuit with slate-blue shoulder panels.
- `wakeboard-shorts.png`: graphite knee-length wakeboard shorts with petrol-blue side panels.
- `ski-jacket.png`: olive ski jacket with cream shoulder panels and charcoal trim.
- `kitesurf-top.png`: fitted deep-teal long-sleeve kitesurf top with graphite sleeves and olive seam detailing.

### Assets still to produce

- New ridge hero: desktop landscape composition plus a deliberate mobile composition.
- Preparation photograph or two coherent detail crops.
- Chaqueta Ridge: full garment view, complementary rear or side view, and one meaningful construction close-up.
- Pantalón Line: full garment view, complementary rear or side view, and one meaningful construction close-up.
- Gafas Vision: front three-quarter view, complementary angle, and one strap or frame close-up.
- Optional short jump loop and, only if needed, a separate scroll-ready sequence.
- Closing mountain panorama, using a suitable existing crop when it works rather than generating an unrelated scene.

Never present the individual product assets or the videos as complete until they have actually been generated and checked. Never publish the entire mockup as a substitute for a working page.

### Product art direction

Use the same lighting direction, neutral studio background, visual scale, color treatment, and garment construction across all views. Jackets and pants should have natural volume without visible mannequins. Goggles should retain plausible frame thickness, strap attachment, and reflections.

Match the reference outfit closely enough to connect the collection to section 04. Avoid adding a backpack or harness to the jacket packshot: those are separate pieces of equipment in the action photograph. No third-party logos, typography, watermarks, badges, invented certification labels, or exaggerated weatherproof demonstrations.

Generate the primary view first. Use the approved primary image as the reference for secondary angles and detail images to reduce product drift. Do not independently redesign pockets, zippers, panel seams, or lens shape between views.

### English image-generation briefs

**New hero**

```text
Create a photorealistic cinematic alpine sportswear photograph for the opening
hero of ALTURA. Show a snowboarder from behind, standing securely on a snowy
mountain ridge, holding a snowboard and looking toward the descent. Use the
provided snowboard image as a wardrobe and photographic-style reference only.
Keep the olive-brown jacket, charcoal pants, dark helmet, and blue-lens visual
language. This is a new grounded scene, not the airborne jump. Use cold daylight
with subtle warm highlights and atmospheric mountain depth. Compose a wide
landscape image with a clear text-safe area to the left and the rider toward
the right. Keep the entire rider and board readable. Natural textures,
realistic anatomy, restrained color grading. No text, logos, or watermark.
Create a separately composed mobile variant when the desktop crop cannot
preserve both the subject and the text-safe area.
```

**Shared product direction — apply separately to each product**

```text
Create a high-end photorealistic product photograph for a conceptual snowboard
apparel collection. Use the supplied reference for the specific product's
appearance. Isolate one product on a light neutral studio background with soft
directional light, realistic material texture, natural volume, and a subtle
contact shadow. Center the complete product within a 4:5 canvas with generous
margins. Preserve a consistent camera angle and lighting across the collection.
No person, visible mannequin, accessories from other products, text, logos,
performance badges, or watermark. This is a conceptual product visualization,
not evidence of tested technical performance.

JACKET VARIANT: an olive-brown camouflage hooded snow jacket inspired by the
rider's jacket; preserve plausible seams, pockets, cuffs, and zipper details.
Exclude the rider's backpack and chest harness.

PANTS VARIANT: charcoal snow pants inspired by the rider's pants; show a clean,
complete garment with plausible articulated shape and visible construction.

GOGGLES VARIANT: a dark-frame snow goggle with a reflective blue lens and light
strap; show plausible lens curvature, frame thickness, and strap attachments.

Generate one selected variant per image, not a collage. For additional views,
use the approved primary product image as the reference and preserve its exact
construction and color.
```

## 7. Motion system: loop and scrollytelling

The looping clip and the scroll-driven experience are separate behaviors. Choose the behavior supported by the available assets; do not make one media timeline obey autoplay and scroll simultaneously.

### Recommended initial implementation: loop plus scroll composition

Use the still photograph until a usable video exists. If the 8-second loop is available, play it independently in section 04 while scroll controls the framing, text, and callout stages. Keep framing changes restrained so the rider and board remain readable. The hero uses its own image.

Provide a visible pause/play control for ambient looping video. Start muted and without audio. If autoplay is blocked, retain a clean poster and allow deliberate playback. Pause offscreen media and when the page is not visible.

### Optional advanced implementation: dedicated scroll-ready sequence

Use a purpose-made sequence only when it can support reliable seeking and device performance. Scroll position controls media progress in both directions. The sequence does not autoplay while scrubbing. A linear sequence can establish the jump, expose product detail, and return to a wide shot; it does not need to loop.

If seeking, loading, or tracking is unreliable, use the original still image and controlled composition changes. Essential content must not depend on video decoding or a particular animation library.

### General movement rules

- No scroll interception, forced snapping, mandatory horizontal gestures, or repeated long pinning.
- Animate mainly opacity and transforms; do not animate layout dimensions every frame.
- Keep the next destination and product access clear throughout the scene.
- Reduced motion disables automatic video, parallax, scrubbing, and prolonged pinning. Render content directly in normal reading order with the same product links.
- Fallback states must be designed: readable poster, visible product controls, and complete text.

### English animation prompt — seamless loop

```text
Animate the reference image into an 8-second photorealistic cinematic video,
in landscape 16:9 format, at the highest available quality.

Preserve the same snowboarder, clothing, helmet, goggles, snowboard, bindings,
and mountain landscape. Maintain the original proportions, colors, and light.

The rider is suspended near the highest point of the jump in extreme slow
motion. Make a gentle, controlled turn approximately 25 degrees toward the left
side of the frame. The torso, hips, and snowboard move together naturally,
while the arms make subtle balance adjustments. Then return smoothly to the
original orientation. Keep the camera steady and the entire rider and board
inside the frame. Add restrained fabric movement and fine drifting snow.

SEAMLESS LOOP: the first and last frames must visually match in composition,
pose, position, and lighting. Motion should be continuous and cyclical, with
smooth transitions, no noticeable pause, and no rewind or boomerang effect.
Snow particles must not reveal the loop boundary.

Maintain consistent anatomy, secure boots and bindings, and rigid snowboard
geometry. Avoid full rotations, morphing, wardrobe changes, camera cuts, new
objects, text, and watermarks.
```

The prompt describes the target, not a guaranteed generation result. Inspect the loop boundary, anatomy, bindings, board shape, and outfit continuity before using the clip.

## 8. Responsive behavior, accessibility, and delivery quality

### Responsive design

- Start with mobile content order; preserve the same five sections at every size.
- Use content-driven breakpoints. A single-column layout below roughly 768px and a wider editorial layout above roughly 1024px are starting points.
- Keep full garments visible using suitable image framing; do not crop product photos to fill arbitrary panels.
- Remove prolonged pinning on narrow or short screens. Test headline wrapping, navigation, and product controls at small viewport heights as well as widths.
- Preserve content at browser text zoom and avoid horizontal page overflow.

### Accessibility

- One page-level heading, logical section headings, a skip link, and semantic landmarks.
- Use links for navigation and buttons for actions. Provide accessible names for hotspots and icon controls, such as **Ver Chaqueta Ridge**.
- Design normal text for at least 4.5:1 contrast and large text for at least 3:1; interactive boundaries and indicators must also remain distinguishable.
- Provide visible focus states and sufficiently large touch targets. Never communicate selection through color alone.
- Write concise Spanish alternative text for informative images; use empty alternatives for redundant decorative images.
- Ensure overlays can be closed, keyboard focus is restored, and no information is available only by hovering.
- A paused or missing animation must not remove product information or navigation.

### Performance and resilience

- Load the new hero image first and reserve image dimensions to avoid layout shifts.
- Defer section 04 video and below-fold media. Avoid loading a large video before the hero is usable.
- Serve responsive web image sizes while retaining the high-resolution originals separately.
- Do not preload every frame of a large image sequence without measuring its memory and bandwidth cost.
- Keep the initial text and navigation usable independently of animation initialization. If scripts or media fail, preserve a meaningful static reading experience.
- Treat a fast visible hero, stable layout, responsive input, and smooth scene transitions as acceptance goals. Do not report performance scores without measurement.

## 9. English implementation prompt

```text
Design and build a premium snowboard apparel landing page for the provisional
brand ALTURA using this DESIGN.md as the design specification. All visible
website copy must be in Spanish. Keep the scope to one coherent landing page.

Use snow-white and charcoal surfaces, restrained lime accents, large condensed
headlines, clean product photography, and generous editorial spacing.

Preserve this exact structure:
1. A NEW ridge hero: a grounded rider seen from behind, looking toward the
   descent. Headline: “Toda línea empieza con una decisión.” Primary action:
   “Explorar colección”. Do not reuse the airborne image here.
2. A short preparation section with tactile equipment details and the headline
   “Prepárate para tu próxima línea.”
3. The product collection, BEFORE the action sequence. Generate separate,
   coherent concept images for Chaqueta Ridge, Pantalón Line, and Gafas Vision
   using the provided sports reference. Show full products and working detail
   controls. Do not invent prices, ratings, specifications, or availability.
4. The existing airborne snowboarder image and its eventual animation in a
   brief cinematic section. Establish the full jump, guide attention to the
   equipment, then release the scroll into product detail. Keep product links
   accessible throughout. A loop plays independently while scroll changes
   composition; a dedicated scrub sequence follows scroll and does not autoplay.
5. Detailed product exploration with enlarged imagery, product selection, and
   factual or clearly conceptual information. End with a short mountain image,
   “Tu próxima línea empieza aquí.”, and a link back to the collection.

Use ordinary scrolling for product browsing. Keep the long pinned scene off
mobile and provide a complete reduced-motion experience. Implement keyboard
and touch interactions, readable contrast, visible focus, video pause controls,
responsive images, and media failure fallbacks.

Treat the existing landing mockup as a visual reference only: its original
section order has been superseded. New product images and videos are pending
assets, not existing deliverables. Keep concept status visible until a real
catalog is available. Do not add checkout, accounts, fabricated testimonials,
newsletter forms, or unrelated pages.
```

## 10. Review checklist

- [ ] The new ridge image opens the page; the airborne image appears only in section 04.
- [ ] Products are visible in section 03 and accessible directly from the navigation.
- [ ] All five sections follow the approved order, with a short preparation bridge.
- [ ] New product images are separate assets and consistent across views and with the action reference.
- [ ] No aviation imagery, terracotta accents, pill-button system, or previous brand copy remains in the design.
- [ ] Buttons, selectors, image enlargement, hotspots, and detail navigation behave coherently.
- [ ] Product callouts stay attached to the correct item or use the labeled-control fallback.
- [ ] Looping and scroll-controlled playback are not competing for the same media timeline.
- [ ] The loop has been visually checked if a generated video is supplied.
- [ ] Mobile, reduced-motion, media-failure, and keyboard experiences retain all essential content.
- [ ] Typography, controls, and image overlays have been checked for contrast and overflow.
- [ ] Copy is Spanish, product facts are supported, and concept status is visible where appropriate.
- [ ] No unimplemented commerce controls, empty content panels, or fictitious review/performance claims appear.
- [ ] Performance or accessibility results are reported only after actual verification.

## 11. Remaining inputs before a commercial release

The concept can be prototyped with the reference assets and newly generated images. Commercial publication additionally needs an approved brand identity, actual product data and photography decisions, real variants and prices if displayed, the intended purchase destination, and any required contact or legal content.

These are future release inputs, not a reason to invent data or block the visual proposal. This document does not authorize publication or additional external actions by itself.
