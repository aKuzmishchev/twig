export default {
  title: 'Atoms/Tag',
  tags: ['autodocs'],
  argTypes: { label: { control: 'text' } },
  args: { label: 'Revenue Optimization' },
};

const render = ({ label }) => {
  const el = document.createElement('span');
  el.className = 'p-tag'; el.textContent = label;
  return el;
};

export const Default = { render };

export const Group = {
  name: 'Tag group',
  render: () => {
    const wrap = document.createElement('div');
    wrap.className = 'p-tags';
    wrap.style.padding = '16px';
    ['Revenue Optimization', 'Cost Control', 'Forecasting', 'AI Copilot', 'Anomaly Detection'].forEach(l => {
      const el = document.createElement('span');
      el.className = 'p-tag'; el.textContent = l;
      wrap.appendChild(el);
    });
    return wrap;
  },
};
