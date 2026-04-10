export default {
  title: 'Organisms/Problem',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'white' } },
};

export const Default = {
  render: () => {
    const el = document.createElement('section');
    el.className = 'problem';
    el.innerHTML = `
      <div class="container">
        <div class="section-intro is-visible">
          <span class="section-label">The Problem</span>
          <h2 class="section-heading">Restaurants run on razor-thin margins</h2>
          <p class="section-sub">Fragmented systems, invisible losses, and operational inefficiencies hit directly where it hurts most — your bottom line.</p>
        </div>
        <div class="problem__grid">
          <article class="stat-card is-visible">
            <div class="stat-card__stat">3–5%</div>
            <div class="stat-card__label">average profit margin</div>
            <p class="stat-card__desc">The industry average leaves almost no room for costly mistakes or operational waste.</p>
            <cite class="stat-card__source">Toast, 2025</cite>
          </article>
          <article class="stat-card is-visible">
            <div class="stat-card__stat">$162B</div>
            <div class="stat-card__label">lost to food waste annually</div>
            <p class="stat-card__desc">US restaurants waste 4–10% of purchased food. Each $1 saved creates $14 in additional revenue.</p>
            <cite class="stat-card__source">EPA / RestaurantHQ, 2025</cite>
          </article>
          <article class="stat-card is-visible">
            <div class="stat-card__stat">98%</div>
            <div class="stat-card__label">of operators cite labor costs as critical</div>
            <p class="stat-card__desc">Labor consumes 28–36% of revenue. Fragmented systems make optimization nearly impossible.</p>
            <cite class="stat-card__source">NRA, 2024</cite>
          </article>
        </div>
      </div>`;
    return el;
  },
};
