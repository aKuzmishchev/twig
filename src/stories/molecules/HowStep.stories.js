const icons = {
  connect: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M6 8H5a4 4 0 0 0 0 8h1"/><line x1="8" y1="12" x2="16" y2="12"/><path d="M9 4v4M15 4v4M9 16v4M15 16v4"/></svg>`,
  analyze: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></svg>`,
  act:     `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
};

export default {
  title: 'Molecules/HowStep',
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'page' } },
  argTypes: {
    num:   { control: 'text' },
    title: { control: 'text' },
    desc:  { control: 'text' },
    icon:  { control: 'select', options: ['connect', 'analyze', 'act'] },
  },
  args: { num: '01', title: 'Connect', desc: 'Plug in your existing POS, inventory, and finance systems in minutes.', icon: 'connect' },
};

const render = ({ num, title, desc, icon }) => {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'padding:24px;max-width:280px;';
  wrap.innerHTML = `
    <div class="how-step">
      <div class="how-step__icon">${icons[icon] || icons.connect}</div>
      <div class="how-step__num">${num}</div>
      <h3 class="how-step__title">${title}</h3>
      <p class="how-step__desc">${desc}</p>
    </div>`;
  return wrap;
};

export const Connect = { render };
export const Analyze = { render, args: { num: '02', title: 'Unify & Analyze', desc: "AI processes your data in real time to surface what matters and spot what's going wrong.", icon: 'analyze' } };
export const Act     = { render, args: { num: '03', title: 'Act & Optimize',  desc: 'Twig executes decisions autonomously — continuously improving outcomes.', icon: 'act' } };
