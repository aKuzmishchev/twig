const alertIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;

const pillars = [
  {
    num: '01', label: 'Profits',
    heading: 'Drive revenue growth and margin expansion',
    sub: 'AI-driven optimization that turns every insight into profit. Continuous, measurable, and compounding.',
    bullets: ['Increase revenue via AI-driven pricing, marketing, and guest targeting', 'Improve margins through automated cost control and waste reduction', 'Deliver predictable outcomes through continuous optimization'],
    areas: 'Revenue Optimization · Cost &amp; Margin Optimization · Forecasting Intelligence',
    visual: `
      <div class="p-deco-num">01</div>
      <div class="p-card">
        <div class="p-card__head">Revenue this month <span class="p-card__badge p-card__badge--green">↑ 12.4%</span></div>
        <div class="p-card__value">$284,500</div>
        <div class="p-card__bars">
          <span style="height:35%"></span><span style="height:52%"></span><span style="height:44%"></span>
          <span style="height:68%"></span><span style="height:58%"></span><span style="height:82%"></span>
          <span class="active" style="height:100%"></span>
        </div>
      </div>
      <div class="p-tags"><span class="p-tag">Revenue Optimization</span><span class="p-tag">Cost Control</span><span class="p-tag">Forecasting</span></div>`,
  },
  {
    num: '02', label: 'Autonomous Decisions',
    heading: 'From dashboards to execution — automatically',
    sub: 'Stop reviewing reports. Start getting results. Twig turns insights into actions with one click or fully autonomously.',
    bullets: ['AI recommendations directly tied to execution', 'One-click or fully autonomous workflows', 'Continuous loop: analyze → decide → act → learn'],
    areas: 'AI Copilot · Execution Engine · Autonomous Agents',
    visual: `
      <div class="p-deco-num">02</div>
      <div class="p-card">
        <div class="p-card__head">AI Recommendation <span class="p-card__badge p-card__badge--purple">Auto</span></div>
        <div class="p-card__action-text">Adjust dinner menu pricing based on tonight's demand forecast</div>
        <div class="p-card__status">Executed automatically · 3 min ago</div>
      </div>
      <div class="p-tags"><span class="p-tag">AI Copilot</span><span class="p-tag">Execution Engine</span><span class="p-tag">Autonomous Agents</span></div>`,
  },
  {
    num: '03', label: 'Real-Time Visibility',
    heading: 'See your entire operation in real time',
    sub: 'Unified live view across POS, staff, inventory, and finance. No delays, no manual reports. AI surfaces what matters.',
    bullets: ['Unified live view across POS, staff, inventory, and finance', 'No delays, no manual reporting', 'AI surfaces what matters, not just raw data'],
    areas: 'Unified Data Layer · Real-Time Analytics',
    visual: `
      <div class="p-deco-num">03</div>
      <div class="p-card">
        <div class="p-card__head">Live Operations <div class="p-card__live"><span class="p-card__live-dot"></span>Live</div></div>
        <div class="p-card__metrics">
          <div class="p-metric"><span class="p-metric__label">Sales today</span><span class="p-metric__val">$4,820</span></div>
          <div class="p-metric"><span class="p-metric__label">Open orders</span><span class="p-metric__val">47</span></div>
          <div class="p-metric"><span class="p-metric__label">Staff on shift</span><span class="p-metric__val">12</span></div>
        </div>
      </div>
      <div class="p-tags"><span class="p-tag">Unified Data</span><span class="p-tag">Real-Time Analytics</span><span class="p-tag">Live View</span></div>`,
  },
  {
    num: '04', label: 'Financial Control',
    heading: 'Eliminate costly mistakes with AI-driven control',
    sub: 'Detect anomalies, prevent revenue leakage, and ensure data integrity across every location — in real time.',
    bullets: ['Detect anomalies (fraud, write-offs, inconsistencies) in real time', 'Ensure accurate inventory and cost tracking', 'Prevent revenue leakage and hidden losses'],
    areas: 'Anomaly Detection &amp; Risk Monitoring · Financial Integrity &amp; Control',
    visual: `
      <div class="p-deco-num">04</div>
      <div class="p-card p-card--alert">
        <div class="p-card__head">
          <span class="p-card__alert-title">${alertIcon} Anomaly Detected</span>
          <span class="p-card__badge p-card__badge--red">Risk: High</span>
        </div>
        <div class="p-card__alert-desc">Void rate at Bar Station 3 exceeded threshold by 340%</div>
        <div class="p-card__status p-card__status--action">Flagged for review</div>
      </div>
      <div class="p-tags"><span class="p-tag">Anomaly Detection</span><span class="p-tag">Risk Monitoring</span><span class="p-tag">Financial Control</span></div>`,
  },
];

const panelHtml = (p) => `
  <div style="padding:40px 0;">
    <div class="pillar-panel__inner">
      <div class="pillar-panel__content">
        <div class="pillar-panel__meta">
          <span class="pillar-panel__number">${p.num}</span>
          <span class="pillar-panel__label">${p.label}</span>
        </div>
        <h2 class="pillar-panel__heading">${p.heading}</h2>
        <p class="pillar-panel__sub">${p.sub}</p>
        <ul class="pillar-panel__bullets">${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        <div class="pillar-panel__areas">${p.areas}</div>
      </div>
      <div class="pillar-panel__visual">${p.visual}</div>
    </div>
  </div>`;

export default {
  title: 'Organisms/Pillars',
  parameters: { layout: 'fullscreen', backgrounds: { default: 'white' } },
};

export const Profits             = { name: '01 — Profits',              render: () => { const el = document.createElement('div'); el.className = 'container'; el.innerHTML = panelHtml(pillars[0]); return el; } };
export const AutonomousDecisions = { name: '02 — Autonomous Decisions', render: () => { const el = document.createElement('div'); el.className = 'container'; el.innerHTML = panelHtml(pillars[1]); return el; } };
export const RealTimeVisibility  = { name: '03 — Real-Time Visibility', render: () => { const el = document.createElement('div'); el.className = 'container'; el.innerHTML = panelHtml(pillars[2]); return el; } };
export const FinancialControl    = { name: '04 — Financial Control',    render: () => { const el = document.createElement('div'); el.className = 'container'; el.innerHTML = panelHtml(pillars[3]); return el; } };

export const AllPanels = {
  name: 'All panels (stacked)',
  render: () => {
    const el = document.createElement('div');
    el.style.borderTop = '1px solid var(--c-warm-gray)';
    pillars.forEach((p, i) => {
      const section = document.createElement('div');
      section.style.cssText = 'border-bottom:1px solid var(--c-warm-gray);';
      const inner = document.createElement('div');
      inner.className = 'container';
      inner.innerHTML = panelHtml(p);
      section.appendChild(inner);
      el.appendChild(section);
    });
    return el;
  },
};
