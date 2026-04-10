/**
 * Полная страница лендинга — собрана из organisms.
 * Показывает финальный результат без JS-анимаций (все элементы is-visible).
 */
export default {
  title: 'Pages/Landing',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'page' },
    options: { showPanel: false },
  },
};

export const Default = {
  name: 'Landing Page',
  render: () => {
    const iframe = document.createElement('iframe');
    iframe.src = '/landing.html';
    iframe.style.cssText = 'width:100%;height:100vh;border:none;display:block;';
    iframe.title = 'Twig AI Landing Page';
    return iframe;
  },
};
