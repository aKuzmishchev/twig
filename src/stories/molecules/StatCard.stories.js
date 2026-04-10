export default {
  title: 'Molecules/StatCard',
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'page' } },
  argTypes: {
    stat:   { control: 'text' },
    label:  { control: 'text' },
    desc:   { control: 'text' },
    source: { control: 'text' },
  },
  args: {
    stat:   '3–5%',
    label:  'average profit margin',
    desc:   'The industry average leaves almost no room for costly mistakes or operational waste.',
    source: 'Toast, 2025',
  },
};

const render = ({ stat, label, desc, source }) => {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'padding:24px;max-width:360px;';
  wrap.innerHTML = `
    <article class="stat-card">
      <div class="stat-card__stat">${stat}</div>
      <div class="stat-card__label">${label}</div>
      <p class="stat-card__desc">${desc}</p>
      <cite class="stat-card__source">${source}</cite>
    </article>`;
  return wrap;
};

export const Default    = { render };
export const FoodWaste  = { render, args: { stat: '$162B', label: 'lost to food waste annually',            desc: 'US restaurants waste 4–10% of purchased food. Each $1 saved creates $14 in additional revenue.', source: 'EPA / RestaurantHQ, 2025' } };
export const LaborCosts = { render, args: { stat: '98%',   label: 'of operators cite labor costs as critical', desc: 'Labor consumes 28–36% of revenue. Fragmented systems make optimization nearly impossible.',         source: 'NRA, 2024' } };
