export default {
  title: 'Organisms/Stats',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', backgrounds: { default: 'brand' } },
};

export const Default = {
  render: () => {
    const el = document.createElement('section');
    el.className = 'stats';
    el.innerHTML = `
      <div class="container">
        <div class="section-intro section-intro--center is-visible">
          <span class="section-label section-label--light">By the numbers</span>
          <h2 class="section-heading section-heading--light">The cost of staying fragmented</h2>
        </div>
        <div class="stats__grid">
          <div class="stats__item is-visible">
            <div class="stats__value">81%</div>
            <p class="stats__desc">of operators plan to increase AI investment in the next fiscal year</p>
            <cite class="stats__source">Deloitte State of AI in Restaurants, Q4 2024</cite>
          </div>
          <div class="stats__item is-visible">
            <div class="stats__value">56%</div>
            <p class="stats__desc">of restaurants saw revenue growth after adopting AI tools</p>
            <cite class="stats__source">Toast AI in Restaurants Survey, 2025</cite>
          </div>
          <div class="stats__item is-visible">
            <div class="stats__value">$162B</div>
            <p class="stats__desc">lost to food waste annually in US restaurants</p>
            <cite class="stats__source">EPA / RestaurantHQ, 2025</cite>
          </div>
          <div class="stats__item is-visible">
            <div class="stats__value">94%</div>
            <p class="stats__desc">of restaurant managers say AI is key to remaining competitive</p>
            <cite class="stats__source">Deloitte, 2024</cite>
          </div>
        </div>
      </div>`;
    return el;
  },
};
