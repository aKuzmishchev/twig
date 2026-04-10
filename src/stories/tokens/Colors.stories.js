export default {
  title: 'Tokens/Colors',
  parameters: { options: { showPanel: false }, layout: 'fullscreen' },
};

const swatch = (label, value, varName) => `
  <div style="display:flex;align-items:center;gap:16px;padding:10px 0;border-bottom:1px solid #f0f0f0;">
    <div style="width:48px;height:48px;border-radius:8px;background:${value};border:1px solid rgba(0,0,0,.08);flex-shrink:0;"></div>
    <div>
      <div style="font-size:13px;font-weight:600;color:#111;">${label}</div>
      <div style="font-size:12px;color:#888;margin-top:2px;">${value}</div>
      <div style="font-size:11px;color:#bbb;margin-top:1px;">${varName}</div>
    </div>
  </div>`;

const group = (title, items) => `
  <div style="margin-bottom:40px;">
    <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#aaa;margin-bottom:12px;">${title}</div>
    ${items.map(i => swatch(...i)).join('')}
  </div>`;

const page = (sections) => {
  const el = document.createElement('div');
  el.style.cssText = 'font-family:Inter,sans-serif;padding:40px;max-width:600px;';
  el.innerHTML = sections.join('');
  return el;
};

export const Primitives = {
  render: () => page([
    group('Purple', [
      ['Purple 50',  '#FAF7FF', '--twig-primitives-purple-50'],
      ['Purple 100', '#F0E9FB', '--twig-primitives-purple-100'],
      ['Purple 600', '#7C35EB', '--twig-primitives-purple-600'],
      ['Purple 700', '#6D28D9', '--twig-primitives-purple-700'],
      ['Purple 800', '#4E22B0', '--twig-primitives-purple-800'],
      ['Purple 900', '#3B1A8A', '--twig-primitives-purple-900'],
    ]),
    group('Neutral', [
      ['Neutral 0 — White',      '#FFFFFF', '--twig-primitives-neutral-0'],
      ['Neutral 50 — Alabaster', '#FCFCFC', '--twig-primitives-neutral-50'],
      ['Neutral 100 — Page BG',  '#F7F8FA', '--twig-primitives-neutral-100'],
      ['Neutral 200 — Borders',  '#EBEBEB', '--twig-primitives-neutral-200'],
      ['Neutral 400 — Disabled', '#AEAEAE', '--twig-primitives-neutral-400'],
      ['Neutral 600 — Storm',    '#6B7280', '--twig-primitives-neutral-600'],
      ['Neutral 950 — Text',     '#111111', '--twig-primitives-neutral-950'],
    ]),
    group('Green', [
      ['Green 100', '#DCFCE7', '--twig-primitives-green-100'],
      ['Green 700', '#15803D', '--twig-primitives-green-700'],
    ]),
    group('Red', [
      ['Red 100', '#FFE4E1', '--twig-primitives-red-100'],
      ['Red 600', '#DC2626', '--twig-primitives-red-600'],
    ]),
  ]),
};

export const Semantic = {
  render: () => page([
    group('Semantic aliases', [
      ['Primary',       '#6D28D9', '--c-primary'],
      ['Primary Hover', '#7C35EB', '--c-primary-hover'],
      ['Primary Light', '#F0E9FB', '--c-primary-light'],
      ['White',         '#FFFFFF', '--c-white'],
      ['BG (page)',     '#F7F8FA', '--c-bg'],
      ['Warm Gray',     '#EBEBEB', '--c-warm-gray'],
      ['Soft Gray',     '#AEAEAE', '--c-soft-gray'],
      ['Storm Gray',    '#6B7280', '--c-storm-gray'],
      ['Text',          '#111111', '--c-text'],
      ['Success',       '#15803D', '--c-success'],
    ]),
  ]),
};
