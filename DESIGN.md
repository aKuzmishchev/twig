# Design System: TWIG AI

## 1. Visual Theme & Atmosphere

Clean, modern, and intelligent. TWIG AI projects confidence and clarity — a product-grade aesthetic that feels precise without being cold. Light surfaces dominate the interface, with rich purple accents creating moments of energy and focus. The overall density is balanced: generous whitespace paired with purposeful structure. The mood is professional yet approachable, suited for a productivity or AI-assistant product.

---

## 2. Color Palette & Roles

### Primary Brand
- **Purple Heart** `#6D28D9` — Primary brand color. Used for CTAs, active states, key interactive elements, and highlights.
- **Purple Darkmode** `#7C35EB` — Slightly elevated purple for dark mode surfaces and hover states.
- **Purple Light** `#F0E9FB` — Soft lavender background for tags, badges, and selected states.

### Neutrals (Light Mode)
- **Pure White** `#FFFFFF` — Card backgrounds, modal surfaces, input fields.
- **Alabaster** `#FCFCFC` — Primary text on dark backgrounds; near-white contrast text.
- **Shatlevka** `#F7F8FA` — Main page/app background. Slightly warm off-white.
- **Warm Gray** `#EBEBEB` — Dividers, borders, subtle separators.
- **Soft Gray** `#AEAEAE` — Placeholder text, disabled states, secondary icons.
- **Storm Gray** `#717182` — Secondary and supporting body text.
- **PopUp Gray** `#1E1E1E` — Tooltip and popup backgrounds; near-black surfaces.
- **Cod Gray** `#0A0A0A` — Primary body text. Almost pure black, softened for readability.

### Semantic / Functional Colors
- **Persian Green** `#009689` — Success states, confirmations, positive indicators.
- **Persian Light** `#DCFCE7` — Success background tints.
- **California** `#FE9A00` — Warning states, attention-required indicators.
- **California Light** `#FFEDD4` — Warning background tints.
- **Vermilion** `#F54900` — Error states, destructive actions, critical alerts.
- **Vermilion Light** `#FFDDDB` — Error background tints.

### Chart / Data Visualization Colors
- **Yellow** `#FDD835`
- **Pink** `#EC407A`
- **Blue** `#42A5F5`
- **Green Soft** `#9CCC65`
- **Silver** `#B0BEC5`

---

## 3. Typography Rules

**Font family:** Inter (all weights)  
**Character:** Clean, geometric, highly legible. Slightly tight letter-spacing on chat/interactive elements (-4% tracking) for a modern, compact feel.

| Role | Weight | Size | Line Height |
|---|---|---|---|
| Display / Hero heading | Extra Bold | 28px | 36px |
| Section heading | Semi Bold | 32px | 38px |
| Large body / emphasis | Medium | 20px | 30px |
| Subheading | Medium | 18px | 27px |
| Body default | Medium | 16px | 24px |
| Body small | Medium | 14px | 21px |
| Caption / label | Medium | 12px | 18px |
| Body regular | Regular | 16px | 24px |
| Body regular small | Regular | 14px | 21px |
| Micro text | Regular | 12px | 16px |
| Tiny / legal | Regular | 10px | 15px |
| Chat messages | Regular | 16px | 22px, -4% tracking |
| Chat placeholders | Regular | 14px | 18px, -4% tracking |

---

## 4. Component Stylings

### Buttons
- **Primary:** Solid Purple Heart (`#6D28D9`) fill, white text, generously rounded corners (8–12px radius). Medium weight, 14–16px.
- **Secondary:** Transparent with a Warm Gray (`#EBEBEB`) border, Cod Gray text. Same rounding as primary.
- **Ghost / Text:** No border, no background. Purple Heart text color, underline or icon on hover.
- **Destructive:** Vermilion (`#F54900`) fill or border for delete/remove actions.
- **Disabled:** Soft Gray fill (`#AEAEAE`), reduced opacity.

### Cards / Containers
- **Background:** Pure White (`#FFFFFF`) on Shatlevka page background.
- **Border:** Warm Gray (`#EBEBEB`), 1px, subtly rounded (8–12px).
- **Shadow:** Soft, low-spread drop shadow using Black at 20% opacity — adds depth without heaviness.
- **Brand shadow:** Purple-tinted shadow for highlighted or featured cards.

### Inputs / Forms
- **Background:** Pure White (`#FFFFFF`).
- **Border:** Warm Gray (`#EBEBEB`) default; Purple Heart (`#6D28D9`) on focus.
- **Placeholder text:** Soft Gray (`#AEAEAE`).
- **Input text:** Cod Gray (`#0A0A0A`).
- **Border radius:** 8px, slightly rounded.

### Tags / Badges
- **Default:** Purple Light background (`#F0E9FB`), Purple Heart text.
- **Success:** Persian Light (`#DCFCE7`) background, Persian Green (`#009689`) text.
- **Warning:** California Light (`#FFEDD4`) background, California (`#FE9A00`) text.
- **Error:** Vermilion Light (`#FFDDDB`) background, Vermilion (`#F54900`) text.

### Tooltips / Popups
- **Background:** PopUp Gray (`#1E1E1E`).
- **Text:** Alabaster (`#FCFCFC`).
- **Border radius:** 6–8px.

---

## 5. Layout Principles

- **Page background:** Shatlevka (`#F7F8FA`) — a barely-there warm off-white that keeps the UI feeling open.
- **Spacing rhythm:** 4px base unit. Common spacings: 8, 12, 16, 24, 32, 48px.
- **Content width:** Centered layout with generous horizontal padding. Max-width ~1200px for desktop.
- **Section separation:** Prefer whitespace and subtle background shifts over heavy dividers. Use Warm Gray (`#EBEBEB`) lines only when separation is strictly needed.
- **Alignment:** Left-aligned text content. Center-aligned only for hero/marketing sections.
- **Hierarchy:** Visual weight through color and font size — not borders or shadows. Purple accents draw the eye to the most important actions.

---

## 6. Do's and Don'ts

✅ Use Purple Heart as the single dominant accent — one clear action per view.  
✅ Keep backgrounds light and airy — Shatlevka as the default, White for elevated surfaces.  
✅ Use semantic colors (green/orange/red) only for their intended meaning — never decoratively.  
✅ Prefer Inter Medium for most UI text — Regular for body copy, Extra Bold only for hero moments.  

❌ Don't use multiple competing accent colors in the same section.  
❌ Don't use Cod Gray (`#0A0A0A`) as a background — it's text-only.  
❌ Don't mix chart colors into UI components — they're data-only.  
❌ Don't use tight letter-spacing (-4%) outside of chat interface contexts.
