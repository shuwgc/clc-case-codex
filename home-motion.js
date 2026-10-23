'use strict';
(() => {
  const hero = document.querySelector('.intro-hero');
  if (!hero) return;
  // Keep an initial team deep link aligned as the release list and fonts settle.
  if (location.hash === '#about' && document.getElementById('about')) {
    let untouched = true;
    const stopAligning = () => { untouched = false; };
    ['pointerdown', 'wheel', 'touchstart', 'keydown'].forEach(type =>
      addEventListener(type, stopAligning, {once: true, passive: true}));
    const alignTeam = () => {
      if (untouched && location.hash === '#about') requestAnimationFrame(() =>
        document.getElementById('about').scrollIntoView({block: 'start', behavior: 'instant'}));
    };
    document.addEventListener('clc-release-ready', alignTeam, {once: true});
    addEventListener('load', alignTeam, {once: true});
    document.fonts.ready.then(alignTeam);
  }
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const gallery = hero.querySelector('.hero-gallery');
  const photo = gallery.querySelector('.hero-photo');
  const image = gallery.querySelector('#hero-image');
  const incoming = gallery.querySelector('.hero-image-incoming');
  const status = gallery.querySelector('.hero-status');
  // The six static case figures are also the source of truth for the hero.
  const scenes = [...document.querySelectorAll('.case-figure [data-scene]')].map(button => ({
    src: button.dataset.photo,
    alt: button.querySelector('img').alt,
    place: button.dataset.place,
    caption: button.dataset.heroCaption,
    theme: button.dataset.scene,
    position: button.dataset.position || 'center',
    source: button.closest('.case-figure').querySelector('.source-link').href
  }));
  let current = 0;
  let requested = 0;
  let sequence = 0;
  let fade;
  const finishFade = () => {
    if (fade) { fade.cancel(); fade = null; }
    incoming.hidden = true;
    incoming.style.opacity = '0';
  };
  function preload(src) {
    return new Promise((resolve, reject) => {
      const probe = new Image();
      const timeout = setTimeout(() => { probe.onload = probe.onerror = null; reject(new Error('timeout')); }, 12000);
      probe.onload = () => { clearTimeout(timeout); resolve(); };
      probe.onerror = () => { clearTimeout(timeout); reject(new Error('image')); };
      probe.src = src;
    });
  }
  async function selectScene(index, direction = 1) {
    requested = (index + scenes.length) % scenes.length;
    const target = requested;
    const ticket = ++sequence;
    if (target === current) {
      photo.removeAttribute('aria-busy');
      status.classList.remove('has-error');
      status.textContent = '';
      return;
    }
    photo.setAttribute('aria-busy', 'true');
    status.classList.remove('has-error');
    status.textContent = '正在载入案例照片…';
    try {
      await preload(scenes[target].src);
      if (ticket !== sequence) return;
      finishFade();
      const scene = scenes[target];
      // Keep the prior image visible behind the incoming frame until it settles.
      incoming.src = scene.src;
      incoming.style.objectPosition = scene.position;
      incoming.hidden = false;
      const oldSrc = image.src;
      image.src = scene.src;
      image.alt = scene.alt;
      image.style.objectPosition = scene.position;
      if (!reducedMotion.matches && incoming.animate) {
        incoming.src = oldSrc;
        incoming.style.objectPosition = scenes[current].position;
        fade = incoming.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${-direction * 10}px)`}],{duration:420,easing:'cubic-bezier(.2,.65,.25,1)',fill:'forwards'});
        const activeFade = fade;
        activeFade.finished.then(() => { if (fade === activeFade) finishFade(); }).catch(() => {});
      } else finishFade();
      current = target;
      hero.dataset.scene = scene.theme;
      gallery.querySelector('#hero-place').textContent = scene.place;
      gallery.querySelector('#hero-caption').textContent = '项目收录实例 / ' + scene.caption;
      gallery.querySelector('#hero-source').href = scene.source;
      gallery.querySelector('#hero-count').textContent = String(target + 1).padStart(2, '0') + ' / 06';
      gallery.querySelectorAll('[data-hero-pick]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.heroPick) === target)));
      photo.removeAttribute('aria-busy');
      status.textContent = `第${target + 1}张，共${scenes.length}张：${scene.place}，${scene.caption}`;
    } catch {
      if (ticket !== sequence) return;
      requested = current;
      photo.removeAttribute('aria-busy');
      status.classList.add('has-error');
      status.textContent = '照片暂时无法载入，请点击案例名称重试。';
    }
  }
  if (scenes.length === 6) {
    gallery.querySelector('.hero-gallery-controls').hidden = false;
    gallery.querySelectorAll('[data-hero-step]').forEach(button => button.addEventListener('click', () => selectScene(requested + Number(button.dataset.heroStep), Number(button.dataset.heroStep))));
    gallery.querySelectorAll('[data-hero-pick]').forEach(button => button.addEventListener('click', () => selectScene(Number(button.dataset.heroPick), Number(button.dataset.heroPick) >= current ? 1 : -1)));
    gallery.addEventListener('keydown', event => {
      if (!event.target.closest('button') || event.altKey || event.ctrlKey || event.metaKey) return;
      const key = event.key;
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) return;
      event.preventDefault();
      selectScene(key === 'Home' ? 0 : key === 'End' ? scenes.length - 1 : requested + (key === 'ArrowRight' ? 1 : -1), key === 'ArrowLeft' ? -1 : 1);
    });
  }
  const revealTargets = [...document.querySelectorAll('.hero-panel > *, .hero-gallery, .definition-grid > div, .task-list > li, .case-essay-head, .case-figure, .research-lead > *, .research-questions > li, .framework-strip, .path-heading, .path-step, .section-heading > *, .showcase-layout, .showcase-tail, .paper-layout > *, .download-layout > *, .recent-archive-head, .team-intro, .team-work-title, .team-member, .team-shared')];
  let observer;
  const showAll = () => {
    observer?.disconnect();
    revealTargets.forEach(target => target.classList.remove('reveal-pending', 'reveal-ready'));
    finishFade();
  };
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    try {
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }, {threshold: 0, rootMargin: '0px 0px -30px 0px'});
      revealTargets.forEach((target, index) => {
        target.classList.add('reveal-pending');
        target.style.setProperty('--reveal-delay', `${target.closest('.hero-panel') ? Math.min(index * 60, 240) : (index % 3) * 65}ms`);
      });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        revealTargets.forEach(target => { target.classList.add('reveal-ready'); observer.observe(target); });
      }));
    } catch { showAll(); }
  }
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) showAll(); });
})();
