export default {
  title: 'Atoms/Badge',
  tags: ['autodocs'],
  argTypes: {
    label:   { control: 'text' },
    variant: { control: 'select', options: ['green', 'purple', 'red'] },
  },
  args: { label: 'Active', variant: 'green' },
};

const render = ({ label, variant }) => {
  const el = document.createElement('span');
  el.className = `p-card__badge p-card__badge--${variant}`;
  el.textContent = label;
  return el;
};

export const Green  = { render, args: { label: 'Active',  variant: 'green'  } };
export const Purple = { render, args: { label: 'AI',      variant: 'purple' } };
export const Red    = { render, args: { label: 'Alert',   variant: 'red'    } };

export const AllVariants = {
  name: 'All variants',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:8px;padding:16px;align-items:center;';
    [['green','Active'],['purple','AI Insight'],['red','Urgent']].forEach(([v,l]) => {
      const el = document.createElement('span');
      el.className = `p-card__badge p-card__badge--${v}`; el.textContent = l;
      wrap.appendChild(el);
    });
    return wrap;
  },
};
