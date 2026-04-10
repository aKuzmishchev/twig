const logoSvg = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 15C3 15 6.5 10 9 8C11.5 6 15 3 15 3" stroke="white" stroke-width="2.2" stroke-linecap="round"/><path d="M9 8C9 8 11.5 5.5 13.5 5.5" stroke="white" stroke-width="2.2" stroke-linecap="round"/></svg>`;

export default {
  title: 'Organisms/Nav',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'white' } },
  argTypes: {
    scrolled:   { control: 'boolean' },
    activeLang: { control: 'select', options: ['en', 'ru'] },
  },
  args: { scrolled: false, activeLang: 'en' },
};

const render = ({ scrolled, activeLang }) => {
  const el = document.createElement('header');
  el.className = `nav${scrolled ? ' nav--scrolled' : ''}`;
  el.innerHTML = `
    <div class="container">
      <nav class="nav__inner" aria-label="Main navigation">
        <a href="#" class="nav__logo">
          <div class="nav__logo-mark">${logoSvg}</div>
          <span class="nav__logo-text">Twig <span>AI</span></span>
        </a>
        <div class="nav__right">
          <div class="lang-switch" role="group">
            <button class="lang-btn${activeLang === 'en' ? ' active' : ''}">EN</button>
            <button class="lang-btn${activeLang === 'ru' ? ' active' : ''}">RU</button>
          </div>
          <a href="#" class="btn btn--primary btn--sm">Get a demo</a>
        </div>
      </nav>
    </div>`;
  return el;
};

export const Default  = { render };
export const Scrolled = { render, args: { scrolled: true } };
export const Russian  = { render, args: { activeLang: 'ru' } };
