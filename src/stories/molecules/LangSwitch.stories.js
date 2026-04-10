export default {
  title: 'Molecules/LangSwitch',
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'white' } },
  argTypes: { active: { control: 'select', options: ['en', 'ru'] } },
  args: { active: 'en' },
};

const render = ({ active }) => {
  const wrap = document.createElement('div');
  wrap.style.padding = '24px';
  wrap.innerHTML = `
    <div class="lang-switch" role="group" aria-label="Language selector">
      <button class="lang-btn${active === 'en' ? ' active' : ''}">EN</button>
      <button class="lang-btn${active === 'ru' ? ' active' : ''}">RU</button>
    </div>`;
  return wrap;
};

export const English = { render };
export const Russian = { render, args: { active: 'ru' } };
