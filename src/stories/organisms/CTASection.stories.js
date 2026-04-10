export default {
  title: 'Organisms/CTASection',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'page' } },
  argTypes: {
    heading:  { control: 'text' },
    sub:      { control: 'text' },
    primary:  { control: 'text' },
    secondary:{ control: 'text' },
  },
  args: {
    heading:   'Ready to run your restaurants on AI?',
    sub:       'Join operators who are turning fragmented operations into measurable profit with Twig.',
    primary:   'Request a demo',
    secondary: 'Learn more',
  },
};

const render = ({ heading, sub, primary, secondary }) => {
  const el = document.createElement('section');
  el.className = 'cta-section';
  el.innerHTML = `
    <div class="container">
      <div class="cta-section__inner is-visible">
        <h2 class="cta-section__heading">${heading}</h2>
        <p class="cta-section__sub">${sub}</p>
        <div class="cta-section__actions">
          <a href="#" class="btn btn--primary btn--lg">${primary}</a>
          <a href="#" class="btn btn--secondary btn--lg">${secondary}</a>
        </div>
      </div>
    </div>`;
  return el;
};

export const Default = { render };
