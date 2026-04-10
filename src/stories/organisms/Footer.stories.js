const logoSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 14C2 14 5 9 8 7C11 5 14 2 14 2" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M8 7C8 7 10 4.5 12 4.5" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`;

export default {
  title: 'Organisms/Footer',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'white' } },
};

export const Default = {
  render: () => {
    const el = document.createElement('footer');
    el.className = 'footer';
    el.innerHTML = `
      <div class="container">
        <div class="footer__inner">
          <div class="footer__brand">
            <div class="footer__logo-mark">${logoSvg}</div>
            <div>
              <div class="footer__brand-name">Twig <span>AI</span></div>
              <div class="footer__tagline">AI Operating System for Restaurants</div>
            </div>
          </div>
          <ul class="footer__links">
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <p class="footer__copy">© 2026 Twig AI. All rights reserved.</p>
      </div>`;
    return el;
  },
};
