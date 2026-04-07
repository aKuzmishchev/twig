'use strict';

// ─────────────────────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────────────────────
const i18n = {
  en: {
    'nav.cta': 'Get a demo',

    'hero.badge': 'AI Operating System for Restaurants',
    'hero.headline': 'Turn fragmented ops into<br><em>measurable profit</em>',
    'hero.sub': "Twig unifies your restaurant data into an AI layer that doesn't just analyze operations — it runs them.",
    'hero.cta.primary': 'Get a demo',
    'hero.cta.secondary': 'See how it works',

    'problem.label': 'The Problem',
    'problem.heading': 'Restaurants run on razor-thin margins',
    'problem.sub': 'Fragmented systems, invisible losses, and operational inefficiencies hit directly where it hurts most — your bottom line.',
    'prob.s1.stat': '3–5%',
    'prob.s1.label': 'average profit margin',
    'prob.s1.desc': 'The industry average leaves almost no room for costly mistakes or operational waste.',
    'prob.s1.source': 'Toast, 2025',
    'prob.s2.stat': '$162B',
    'prob.s2.label': 'lost to food waste annually',
    'prob.s2.desc': 'US restaurants waste 4–10% of purchased food. Each $1 saved creates $14 in additional revenue.',
    'prob.s2.source': 'EPA / RestaurantHQ, 2025',
    'prob.s3.stat': '98%',
    'prob.s3.label': 'of operators cite labor costs as critical',
    'prob.s3.desc': 'Labor consumes 28–36% of revenue. Fragmented systems make optimization nearly impossible.',
    'prob.s3.source': 'NRA, 2024',

    'how.label': 'How it works',
    'how.heading': 'One AI layer. Unified data.<br>Continuous execution.',
    'how.sub': "Twig connects your POS, inventory, staff scheduling, and finance into a single intelligence layer that acts — not just reports.",
    'how.s1.title': 'Connect',
    'how.s1.desc': 'Plug in your existing POS, inventory, and finance systems in minutes.',
    'how.s2.title': 'Unify & Analyze',
    'how.s2.desc': "AI processes your data in real time to surface what matters and spot what's going wrong.",
    'how.s3.title': 'Act & Optimize',
    'how.s3.desc': 'Twig executes decisions autonomously — continuously improving outcomes.',

    'pillars.label': 'What Twig delivers',
    'pillars.hint': 'Scroll to explore →',

    'p1.number': '01',
    'p1.label': 'Profits',
    'p1.heading': 'Drive revenue growth and margin expansion',
    'p1.sub': 'AI-driven optimization that turns every insight into profit. Continuous, measurable, and compounding.',
    'p1.b1': 'Increase revenue via AI-driven pricing, marketing, and guest targeting',
    'p1.b2': 'Improve margins through automated cost control and waste reduction',
    'p1.b3': 'Deliver predictable outcomes through continuous optimization',
    'p1.areas': 'Revenue Optimization · Cost & Margin Optimization · Forecasting Intelligence',

    'p2.number': '02',
    'p2.label': 'Autonomous Decisions',
    'p2.heading': 'From dashboards to execution — automatically',
    'p2.sub': 'Stop reviewing reports. Start getting results. Twig turns insights into actions with one click or fully autonomously.',
    'p2.b1': 'AI recommendations directly tied to execution',
    'p2.b2': 'One-click or fully autonomous workflows',
    'p2.b3': 'Continuous loop: analyze → decide → act → learn',
    'p2.areas': 'AI Copilot · Execution Engine · Autonomous Agents',

    'p3.number': '03',
    'p3.label': 'Real-Time Visibility',
    'p3.heading': 'See your entire operation in real time',
    'p3.sub': 'Unified live view across POS, staff, inventory, and finance. No delays, no manual reports. AI surfaces what matters.',
    'p3.b1': 'Unified live view across POS, staff, inventory, and finance',
    'p3.b2': 'No delays, no manual reporting',
    'p3.b3': 'AI surfaces what matters, not just raw data',
    'p3.areas': 'Unified Data Layer · Real-Time Analytics',

    'p4.number': '04',
    'p4.label': 'Financial Control',
    'p4.heading': 'Eliminate costly mistakes with AI-driven control',
    'p4.sub': 'Detect anomalies, prevent revenue leakage, and ensure data integrity across every location — in real time.',
    'p4.b1': 'Detect anomalies (fraud, write-offs, inconsistencies) in real time',
    'p4.b2': 'Ensure accurate inventory and cost tracking',
    'p4.b3': 'Prevent revenue leakage and hidden losses',
    'p4.areas': 'Anomaly Detection & Risk Monitoring · Financial Integrity & Control',

    'stats.label': 'By the numbers',
    'stats.heading': 'The cost of staying fragmented',
    'st.s1.value': '81%',
    'st.s1.desc': 'of operators plan to increase AI investment in the next fiscal year',
    'st.s1.src': 'Deloitte State of AI in Restaurants, Q4 2024',
    'st.s2.value': '56%',
    'st.s2.desc': 'of restaurants saw revenue growth after adopting AI tools',
    'st.s2.src': 'Toast AI in Restaurants Survey, 2025',
    'st.s3.value': '$162B',
    'st.s3.desc': 'lost to food waste annually in US restaurants',
    'st.s3.src': 'EPA / RestaurantHQ, 2025',
    'st.s4.value': '94%',
    'st.s4.desc': 'of restaurant managers say AI is key to remaining competitive',
    'st.s4.src': 'Deloitte, 2024',

    'cta.heading': 'Ready to run your restaurants on AI?',
    'cta.sub': 'Join operators who are turning fragmented operations into measurable profit with Twig.',
    'cta.primary': 'Request a demo',
    'cta.secondary': 'Learn more',

    'footer.tagline': 'AI Operating System for Restaurants',
    'footer.product': 'Product',
    'footer.pricing': 'Pricing',
    'footer.docs': 'Docs',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.copy': '© 2026 Twig AI. All rights reserved.',

    // Product card visuals (UI mockup text — intentionally English in both langs)
    'pv1.title': 'Revenue this month',
    'pv1.trend': '↑ 12.4%',
    'pv1.value': '$284,500',
    'pv1.tag1': 'Revenue Optimization',
    'pv1.tag2': 'Cost Control',
    'pv1.tag3': 'Forecasting',
    'pv2.title': 'AI Recommendation',
    'pv2.badge': 'Auto',
    'pv2.action': "Adjust dinner menu pricing based on tonight's demand forecast",
    'pv2.status': 'Executed automatically · 3 min ago',
    'pv2.tag1': 'AI Copilot',
    'pv2.tag2': 'Execution Engine',
    'pv2.tag3': 'Autonomous Agents',
    'pv3.title': 'Live Operations',
    'pv3.m1.label': 'Sales today',
    'pv3.m1.value': '$4,820',
    'pv3.m2.label': 'Open orders',
    'pv3.m2.value': '47',
    'pv3.m3.label': 'Staff on shift',
    'pv3.m3.value': '12',
    'pv3.tag1': 'Unified Data',
    'pv3.tag2': 'Real-Time Analytics',
    'pv3.tag3': 'Live View',
    'pv4.title': 'Anomaly Detected',
    'pv4.desc': 'Void rate at Bar Station 3 exceeded threshold by 340%',
    'pv4.risk': 'Risk: High',
    'pv4.action': 'Flagged for review',
    'pv4.tag1': 'Anomaly Detection',
    'pv4.tag2': 'Risk Monitoring',
    'pv4.tag3': 'Financial Control',
  },

  ru: {
    'nav.cta': 'Запросить демо',

    'hero.badge': 'AI-операционная система для ресторанов',
    'hero.headline': 'Превращаем разрозненные операции<br>в <em>измеримую прибыль</em>',
    'hero.sub': 'Twig объединяет данные ресторана в единый AI-слой, который не просто анализирует операции — он управляет ими.',
    'hero.cta.primary': 'Запросить демо',
    'hero.cta.secondary': 'Как это работает',

    'problem.label': 'Проблема',
    'problem.heading': 'Рестораны работают на грани',
    'problem.sub': 'Разрозненные системы, скрытые потери и операционная неэффективность бьют напрямую по главному — прибыли.',
    'prob.s1.stat': '3–5%',
    'prob.s1.label': 'средняя маржа ресторана',
    'prob.s1.desc': 'Отраслевой стандарт почти не оставляет места для ошибок и операционных потерь.',
    'prob.s1.source': 'Toast, 2025',
    'prob.s2.stat': '$162 млрд',
    'prob.s2.label': 'теряется на food waste ежегодно',
    'prob.s2.desc': 'Рестораны США теряют 4–10% закупленных продуктов. Каждый сэкономленный $1 создаёт $14 выручки.',
    'prob.s2.source': 'EPA / RestaurantHQ, 2025',
    'prob.s3.stat': '98%',
    'prob.s3.label': 'операторов считают затраты на персонал критическими',
    'prob.s3.desc': 'Персонал забирает 28–36% выручки. Разрозненные системы делают оптимизацию почти невозможной.',
    'prob.s3.source': 'NRA, 2024',

    'how.label': 'Как это работает',
    'how.heading': 'Один AI-слой. Единые данные.<br>Непрерывное исполнение.',
    'how.sub': 'Twig подключает вашу POS-систему, склад, расписание персонала и финансы в единый интеллект, который действует — не просто отчитывается.',
    'how.s1.title': 'Подключение',
    'how.s1.desc': 'Подключите существующие POS, склад и финансовые системы за несколько минут.',
    'how.s2.title': 'Анализ',
    'how.s2.desc': 'AI обрабатывает данные в реальном времени, выделяя главное и обнаруживая отклонения.',
    'how.s3.title': 'Действие',
    'how.s3.desc': 'Twig исполняет решения автономно — непрерывно улучшая результаты.',

    'pillars.label': 'Что даёт Twig',
    'pillars.hint': 'Листайте вниз →',

    'p1.number': '01',
    'p1.label': 'Прибыль',
    'p1.heading': 'Рост выручки и маржинальности через AI',
    'p1.sub': 'AI-оптимизация операций, превращающая каждый инсайт в прибыль. Непрерывно, измеримо, с накопительным эффектом.',
    'p1.b1': 'Рост выручки через AI-управление ценами, маркетингом и работой с гостями',
    'p1.b2': 'Рост маржи через автоматизированный контроль затрат и сокращение потерь',
    'p1.b3': 'Предсказуемые результаты через непрерывную оптимизацию',
    'p1.areas': 'Оптимизация выручки · Оптимизация затрат и маржи · Интеллект прогнозирования',

    'p2.number': '02',
    'p2.label': 'Автономные решения',
    'p2.heading': 'От дашбордов к действиям — автоматически',
    'p2.sub': 'Хватит читать отчёты. Twig превращает инсайты в действия — в один клик или полностью автономно.',
    'p2.b1': 'AI-рекомендации, напрямую связанные с исполнением',
    'p2.b2': 'Исполнение в один клик или полностью автономные процессы',
    'p2.b3': 'Непрерывный цикл: анализ → решение → действие → обучение',
    'p2.areas': 'AI-ассистент · Система исполнения · Автономные агенты',

    'p3.number': '03',
    'p3.label': 'Прозрачность в реальном времени',
    'p3.heading': 'Полная картина бизнеса в реальном времени',
    'p3.sub': 'Единый live-обзор: POS, персонал, склад и финансы. Без задержек, без ручной отчётности. AI выделяет главное.',
    'p3.b1': 'Единый live-обзор POS, персонала, склада и финансов',
    'p3.b2': 'Без задержек и ручной отчётности',
    'p3.b3': 'AI выделяет ключевые сигналы, а не просто показывает данные',
    'p3.areas': 'Единый слой данных · Аналитика в реальном времени',

    'p4.number': '04',
    'p4.label': 'Финансовый контроль',
    'p4.heading': 'Устраняем дорогостоящие ошибки с AI-контролем',
    'p4.sub': 'Обнаруживайте аномалии, предотвращайте утечки выручки и обеспечивайте целостность данных по всем точкам.',
    'p4.b1': 'Обнаружение аномалий (фрод, списания, расхождения) в реальном времени',
    'p4.b2': 'Точный учёт запасов и себестоимости',
    'p4.b3': 'Предотвращение утечек выручки и скрытых потерь',
    'p4.areas': 'Мониторинг аномалий и рисков · Финансовая целостность и контроль',

    'stats.label': 'Цифры',
    'stats.heading': 'Цена разрозненности',
    'st.s1.value': '81%',
    'st.s1.desc': 'операторов планируют увеличить инвестиции в AI в следующем финансовом году',
    'st.s1.src': 'Deloitte State of AI in Restaurants, Q4 2024',
    'st.s2.value': '56%',
    'st.s2.desc': 'ресторанов зафиксировали рост выручки после внедрения AI-инструментов',
    'st.s2.src': 'Toast AI in Restaurants Survey, 2025',
    'st.s3.value': '$162 млрд',
    'st.s3.desc': 'ежегодно теряется на food waste только в ресторанах США',
    'st.s3.src': 'EPA / RestaurantHQ, 2025',
    'st.s4.value': '94%',
    'st.s4.desc': 'менеджеров считают AI ключом к конкурентоспособности',
    'st.s4.src': 'Deloitte, 2024',

    'cta.heading': 'Готовы управлять ресторанами на AI?',
    'cta.sub': 'Присоединяйтесь к операторам, которые превращают разрозненные операции в измеримую прибыль с Twig.',
    'cta.primary': 'Запросить демо',
    'cta.secondary': 'Узнать больше',

    'footer.tagline': 'AI-операционная система для ресторанов',
    'footer.product': 'Продукт',
    'footer.pricing': 'Цены',
    'footer.docs': 'Документация',
    'footer.privacy': 'Конфиденциальность',
    'footer.terms': 'Условия',
    'footer.copy': '© 2026 Twig AI. Все права защищены.',

    // Product card visuals — kept in English as UI mockup
    'pv1.title': 'Revenue this month',
    'pv1.trend': '↑ 12.4%',
    'pv1.value': '$284,500',
    'pv1.tag1': 'Revenue Optimization',
    'pv1.tag2': 'Cost Control',
    'pv1.tag3': 'Forecasting',
    'pv2.title': 'AI Recommendation',
    'pv2.badge': 'Auto',
    'pv2.action': "Adjust dinner menu pricing based on tonight's demand forecast",
    'pv2.status': 'Executed automatically · 3 min ago',
    'pv2.tag1': 'AI Copilot',
    'pv2.tag2': 'Execution Engine',
    'pv2.tag3': 'Autonomous Agents',
    'pv3.title': 'Live Operations',
    'pv3.m1.label': 'Sales today',
    'pv3.m1.value': '$4,820',
    'pv3.m2.label': 'Open orders',
    'pv3.m2.value': '47',
    'pv3.m3.label': 'Staff on shift',
    'pv3.m3.value': '12',
    'pv3.tag1': 'Unified Data',
    'pv3.tag2': 'Real-Time Analytics',
    'pv3.tag3': 'Live View',
    'pv4.title': 'Anomaly Detected',
    'pv4.desc': 'Void rate at Bar Station 3 exceeded threshold by 340%',
    'pv4.risk': 'Risk: High',
    'pv4.action': 'Flagged for review',
    'pv4.tag1': 'Anomaly Detection',
    'pv4.tag2': 'Risk Monitoring',
    'pv4.tag3': 'Financial Control',
  },
};

// ─────────────────────────────────────────────────────────────
// LANGUAGE SWITCHER
// ─────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('twig-lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('twig-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    var active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-current', active ? 'true' : 'false');
  });
}

document.querySelectorAll('.lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.dataset.lang !== currentLang) applyLang(btn.dataset.lang);
  });
});

// ─────────────────────────────────────────────────────────────
// STICKY HORIZONTAL SCROLL — PILLARS
// ─────────────────────────────────────────────────────────────
var pillarsSection = document.getElementById('pillars');
var pillarsTrack = document.getElementById('pillars-track');
var pillarDots = document.querySelectorAll('.pillars__dot');
var pillarCounter = document.getElementById('pillar-counter');
var progressBar = document.getElementById('pillars-progress');
var NUM_PILLARS = 4;

function updatePillars() {
  if (!pillarsSection || !pillarsTrack) return;
  if (window.innerWidth < 768) return; // mobile: vertical stack

  var rect = pillarsSection.getBoundingClientRect();
  var totalScroll = pillarsSection.offsetHeight - window.innerHeight;
  var progress = Math.max(0, Math.min(1, -rect.top / totalScroll));

  var tx = progress * (NUM_PILLARS - 1) * window.innerWidth;
  pillarsTrack.style.transform = 'translateX(-' + tx + 'px)';

  var idx = Math.round(progress * (NUM_PILLARS - 1));
  pillarDots.forEach(function (dot, i) {
    var active = i === idx;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  if (pillarCounter) {
    pillarCounter.textContent =
      '0' + (idx + 1) + ' / 0' + NUM_PILLARS;
  }

  if (progressBar) {
    progressBar.style.width = progress * 100 + '%';
  }
}

// Clicking a dot scrolls to that pillar
pillarDots.forEach(function (dot, i) {
  dot.addEventListener('click', function () {
    if (!pillarsSection) return;
    var totalScroll = pillarsSection.offsetHeight - window.innerHeight;
    var targetProgress = i / (NUM_PILLARS - 1);
    var targetScrollY =
      pillarsSection.offsetTop + targetProgress * totalScroll;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  });
});

// ─────────────────────────────────────────────────────────────
// NAV SHADOW ON SCROLL
// ─────────────────────────────────────────────────────────────
var navEl = document.getElementById('nav');

function updateNav() {
  if (navEl) navEl.classList.toggle('nav--scrolled', window.scrollY > 8);
}

// ─────────────────────────────────────────────────────────────
// FADE-IN ANIMATIONS — INTERSECTION OBSERVER
// ─────────────────────────────────────────────────────────────
var fadeObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.anim').forEach(function (el) {
  fadeObserver.observe(el);
});

// ─────────────────────────────────────────────────────────────
// SCROLL HANDLER
// ─────────────────────────────────────────────────────────────
window.addEventListener(
  'scroll',
  function () {
    updatePillars();
    updateNav();
  },
  { passive: true }
);

window.addEventListener('resize', updatePillars);

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────
applyLang(currentLang);
updatePillars();
updateNav();
