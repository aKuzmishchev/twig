export default {
  title: 'Molecules/PCard',
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'white' } },
};

export const Revenue = {
  name: 'Revenue chart',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:360px;';
    wrap.innerHTML = `
      <div class="p-card">
        <div class="p-card__head">Revenue this month <span class="p-card__badge p-card__badge--green">↑ 12.4%</span></div>
        <div class="p-card__value">$284,500</div>
        <div class="p-card__bars">
          <span style="height:35%"></span><span style="height:52%"></span><span style="height:44%"></span>
          <span style="height:68%"></span><span style="height:58%"></span><span style="height:82%"></span>
          <span class="active" style="height:100%"></span>
        </div>
      </div>`;
    return wrap;
  },
};

export const AIAction = {
  name: 'AI action',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:360px;';
    wrap.innerHTML = `
      <div class="p-card">
        <div class="p-card__head">AI Recommendation <span class="p-card__badge p-card__badge--purple">Auto</span></div>
        <div class="p-card__action-text">Adjust dinner menu pricing based on tonight's demand forecast</div>
        <div class="p-card__status">Executed automatically · 3 min ago</div>
      </div>`;
    return wrap;
  },
};

export const LiveMetrics = {
  name: 'Live metrics',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:360px;';
    wrap.innerHTML = `
      <div class="p-card">
        <div class="p-card__head">Live Operations
          <div class="p-card__live"><span class="p-card__live-dot"></span>Live</div>
        </div>
        <div class="p-card__metrics">
          <div class="p-metric"><span class="p-metric__label">Sales today</span><span class="p-metric__val">$4,820</span></div>
          <div class="p-metric"><span class="p-metric__label">Open orders</span><span class="p-metric__val">47</span></div>
          <div class="p-metric"><span class="p-metric__label">Staff on shift</span><span class="p-metric__val">12</span></div>
        </div>
      </div>`;
    return wrap;
  },
};

export const Alert = {
  name: 'Alert (risk)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:24px;max-width:360px;';
    wrap.innerHTML = `
      <div class="p-card p-card--alert">
        <div class="p-card__head">
          <span class="p-card__alert-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Anomaly Detected
          </span>
          <span class="p-card__badge p-card__badge--red">Risk: High</span>
        </div>
        <div class="p-card__alert-desc">Void rate at Bar Station 3 exceeded threshold by 340%</div>
        <div class="p-card__status p-card__status--action">Flagged for review</div>
      </div>`;
    return wrap;
  },
};
