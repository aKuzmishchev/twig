export default {
  title: 'Tokens/Colors',
  parameters: { options: { showPanel: false }, layout: 'fullscreen' },
};

// Read the live CSS variable value so swatches always match tokens.css
const cssVal = (varName) =>
  getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

const swatch = (label, varName) => {
  const value = cssVal(varName);
  return `
    <div style="display:flex;align-items:center;gap:16px;padding:10px 0;border-bottom:1px solid #f0f0f0;">
      <div style="width:48px;height:48px;border-radius:8px;background:var(${varName});border:1px solid rgba(0,0,0,.08);flex-shrink:0;"></div>
      <div>
        <div style="font-size:13px;font-weight:600;color:#111;">${label}</div>
        <div style="font-size:11px;color:#bbb;margin-top:2px;font-family:monospace;">${varName}</div>
        <div style="font-size:12px;color:#888;margin-top:1px;">${value}</div>
      </div>
    </div>`;
};

const group = (title, items) => `
  <div style="margin-bottom:40px;">
    <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#aaa;margin-bottom:12px;">${title}</div>
    ${items.map(([label, varName]) => swatch(label, varName)).join('')}
  </div>`;

const page = (...sections) => {
  const el = document.createElement('div');
  el.style.cssText = 'font-family:Inter,sans-serif;padding:40px;max-width:640px;';
  el.innerHTML = sections.join('');
  return el;
};

// ─── Semantic ──────────────────────────────────────────────────────────────
export const Semantic = {
  render: () => page(
    group('Brand', [
      ['Brand Default (CTA, links, accents)', '--twig-color-brand-default'],
      ['Brand Hover',                          '--twig-color-brand-hover'],
      ['Brand Subtle (tags, badges, tints)',   '--twig-color-brand-subtle'],
    ]),
    group('Background', [
      ['Page background',   '--twig-color-bg-page'],
      ['Surface (cards, inputs)', '--twig-color-bg-surface'],
      ['Elevated',          '--twig-color-bg-elevated'],
      ['Overlay (tooltip)', '--twig-color-bg-overlay'],
    ]),
    group('Text', [
      ['Primary',           '--twig-color-text-primary'],
      ['Secondary',         '--twig-color-text-secondary'],
      ['Disabled / placeholder', '--twig-color-text-disabled'],
      ['Inverse (on dark)', '--twig-color-text-inverse'],
      ['Brand',             '--twig-color-text-brand'],
    ]),
    group('Border', [
      ['Default divider',   '--twig-color-border-default'],
      ['Brand / active',    '--twig-color-border-brand'],
      ['Focus ring',        '--twig-color-border-focus'],
    ]),
    group('Status — Success', [
      ['Success',           '--twig-color-status-success'],
      ['Success Subtle',    '--twig-color-status-success-subtle'],
    ]),
    group('Status — Warning', [
      ['Warning',           '--twig-color-status-warning'],
      ['Warning Subtle',    '--twig-color-status-warning-subtle'],
    ]),
    group('Status — Error', [
      ['Error',             '--twig-color-status-error'],
      ['Error Subtle',      '--twig-color-status-error-subtle'],
    ]),
  ),
};

// ─── Primitives ────────────────────────────────────────────────────────────
export const Primitives = {
  render: () => page(
    group('Purple', [
      ['Purple 50',  '--twig-purple-50'],
      ['Purple 100', '--twig-purple-100'],
      ['Purple 600', '--twig-purple-600'],
      ['Purple 700', '--twig-purple-700'],
      ['Purple 800', '--twig-purple-800'],
      ['Purple 900', '--twig-purple-900'],
    ]),
    group('Neutral', [
      ['Neutral 0 — White',      '--twig-neutral-0'],
      ['Neutral 50 — Alabaster', '--twig-neutral-50'],
      ['Neutral 100 — Page BG',  '--twig-neutral-100'],
      ['Neutral 200 — Borders',  '--twig-neutral-200'],
      ['Neutral 400 — Disabled', '--twig-neutral-400'],
      ['Neutral 600 — Secondary','--twig-neutral-600'],
      ['Neutral 800 — Overlay',  '--twig-neutral-800'],
      ['Neutral 950 — Text',     '--twig-neutral-950'],
    ]),
    group('Green', [
      ['Green 100', '--twig-green-100'],
      ['Green 700', '--twig-green-700'],
    ]),
    group('Orange', [
      ['Orange 100', '--twig-orange-100'],
      ['Orange 500', '--twig-orange-500'],
    ]),
    group('Red', [
      ['Red 100', '--twig-red-100'],
      ['Red 600', '--twig-red-600'],
    ]),
  ),
};

// ─── Chart Colors ──────────────────────────────────────────────────────────
export const Chart = {
  name: 'Chart Colors',
  render: () => page(
    group('Data Visualization only — do not use in UI components', [
      ['Yellow',     '--twig-twig-grph-colors-yellow'],
      ['Pink',       '--twig-twig-grph-colors-pink'],
      ['Blue',       '--twig-twig-grph-colors-blue'],
      ['Green Soft', '--twig-twig-grph-colors-green-soft'],
      ['Silver',     '--twig-twig-grph-colors-silver'],
    ]),
  ),
};
