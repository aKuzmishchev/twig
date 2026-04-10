export default {
  title: 'Organisms/Hero',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'page' } },
  argTypes: {
    badge:    { control: 'text' },
    headline: { control: 'text' },
    sub:      { control: 'text' },
    ctaPrimary:   { control: 'text' },
    ctaSecondary: { control: 'text' },
  },
  args: {
    badge:        'AI Operating System for Restaurants',
    headline:     'Turn fragmented ops into <em>measurable profit</em>',
    sub:          'Twig unifies your restaurant data into an AI layer that doesn\'t just analyze operations — it runs them.',
    ctaPrimary:   'Get a demo',
    ctaSecondary: 'See how it works',
  },
};

const render = ({ badge, headline, sub, ctaPrimary, ctaSecondary }) => {
  const el = document.createElement('section');
  el.className = 'hero';
  el.innerHTML = `
    <div class="container">
      <div class="hero__content">
        <div class="hero__badge is-visible">
          <span class="hero__badge-dot"></span>
          <span>${badge}</span>
        </div>
        <h1 class="hero__headline is-visible">${headline}</h1>
        <p class="hero__sub is-visible">${sub}</p>
        <div class="hero__actions is-visible">
          <a href="#" class="btn btn--primary btn--lg">${ctaPrimary}</a>
          <a href="#" class="btn btn--secondary btn--lg">${ctaSecondary}</a>
        </div>
      </div>
    </div>
    <div class="hero__deco" aria-hidden="true">
      <div class="hero__deco-circle hero__deco-circle--1"></div>
      <div class="hero__deco-circle hero__deco-circle--2"></div>
    </div>`;
  return el;
};

export const Default = { render };
