export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    label:   { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size:    { control: 'select', options: ['lg', 'sm'] },
  },
  args: { label: 'Get a demo', variant: 'primary', size: 'lg' },
};

const render = ({ label, variant, size }) => {
  const el = document.createElement('a');
  el.href = '#';
  el.className = `btn btn--${variant} btn--${size}`;
  el.textContent = label;
  return el;
};

export const Primary        = { render, args: { variant: 'primary',   size: 'lg', label: 'Get a demo' } };
export const Secondary      = { render, args: { variant: 'secondary', size: 'lg', label: 'See how it works' } };
export const PrimarySmall   = { name: 'Primary (Small)',   render, args: { variant: 'primary',   size: 'sm', label: 'Get a demo' } };
export const SecondarySmall = { name: 'Secondary (Small)', render, args: { variant: 'secondary', size: 'sm', label: 'Learn more' } };

export const AllVariants = {
  name: 'All variants',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:12px;align-items:center;padding:16px;';
    [['primary','lg','Primary Large'],['secondary','lg','Secondary Large'],['primary','sm','Primary Small'],['secondary','sm','Secondary Small']]
      .forEach(([v,s,l]) => {
        const el = document.createElement('a');
        el.href = '#'; el.className = `btn btn--${v} btn--${s}`; el.textContent = l;
        wrap.appendChild(el);
      });
    return wrap;
  },
};
