/* ==========================================================================
   Kashaf Gafoor — Portfolio interactions (vanilla ES6+, no dependencies)
   This file is loaded in <head>: the theme is applied immediately to avoid
   a flash of the wrong theme; everything else runs on DOMContentLoaded.
   ========================================================================== */

(() => {
  'use strict';

  const root = document.documentElement;
  const THEME_KEY = 'kg-theme';
  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Safe storage (private mode / blocked storage) ---------- */
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } },
  };

  /* ---------- Theme: apply before first paint ---------- */
  const savedTheme = storage.get(THEME_KEY);
  root.dataset.theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  root.classList.add('js');

  /* ======================================================================
     Theme toggle
     ====================================================================== */
  function initThemeToggle() {
    const button = document.getElementById('theme-toggle');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!button) return;

    const sync = () => {
      const isDark = root.dataset.theme === 'dark';
      button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      if (metaTheme) metaTheme.setAttribute('content', isDark ? '#0C140C' : '#F1F6F2');
    };

    const apply = (theme) => {
      root.dataset.theme = theme;
      storage.set(THEME_KEY, theme);
      sync();
    };

    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';

      if (prefersReducedMotion()) { apply(next); return; }

      // Prefer a circular reveal from the toggle where the View Transitions API exists.
      if (document.startViewTransition) {
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
        const transition = document.startViewTransition(() => apply(next));
        transition.ready.then(() => {
          root.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 650, easing: 'cubic-bezier(.22,.61,.36,1)', pseudoElement: '::view-transition-new(root)' }
          );
        }).catch(() => {});
        return;
      }

      // Fallback: brief global colour transition.
      root.classList.add('theme-anim');
      apply(next);
      window.setTimeout(() => root.classList.remove('theme-anim'), 550);
    });

    sync();
  }

  /* ======================================================================
     Navigation: scrolled state, mobile menu, active section highlight
     ====================================================================== */
  function initNavigation() {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('nav-burger');
    const menu = document.getElementById('nav-menu');
    const links = Array.from(document.querySelectorAll('.nav__link'));
    if (!nav) return;

    // Glass background once the page has scrolled.
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu
    const mobileQuery = window.matchMedia('(max-width: 960px)');
    const setMenu = (open) => {
      nav.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) links[0]?.focus({ preventScroll: true });
    };

    burger?.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    links.forEach((link) => link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) setMenu(false);
    }));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); burger.focus(); }
    });
    mobileQuery.addEventListener?.('change', (e) => { if (!e.matches) setMenu(false); });

    // Keep keyboard focus inside the open mobile menu.
    nav.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !nav.classList.contains('is-open')) return;
      const focusables = [...links, document.getElementById('theme-toggle'), burger].filter(Boolean);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    // Hide the off-canvas menu from assistive tech while closed on mobile.
    const syncInert = () => {
      if (!menu) return;
      const hidden = mobileQuery.matches && !nav.classList.contains('is-open');
      menu.toggleAttribute('inert', hidden);
    };
    new MutationObserver(syncInert).observe(nav, { attributes: true, attributeFilter: ['class'] });
    mobileQuery.addEventListener?.('change', syncInert);
    syncInert();

    // Active link based on the section currently in view.
    const linkFor = new Map(links.map((l) => [l.getAttribute('href').slice(1), l]));
    // Education has no nav item; highlight its neighbour (Certifications) instead.
    const aliases = { education: 'certifications' };
    const sections = Array.from(document.querySelectorAll('main section[id]'));

    const setActive = (id) => {
      const target = linkFor.get(aliases[id] || id);
      links.forEach((l) => {
        const active = l === target;
        l.classList.toggle('is-active', active);
        if (active) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
      });
    };

    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* ======================================================================
     Scroll reveal (Intersection Observer)
     ====================================================================== */
  function initReveal() {
    const targets = document.querySelectorAll('.reveal, .feature');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    targets.forEach((el) => io.observe(el));
  }

  /* ======================================================================
     Count-up for the learning metrics (real values from the profile)
     ====================================================================== */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length || prefersReducedMotion() || !('IntersectionObserver' in window)) return;

    const animate = (el) => {
      const target = Number(el.dataset.count);
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.6 });

    counters.forEach((el) => { el.textContent = '0'; io.observe(el); });
  }

  /* ======================================================================
     Timeline progress line (only computed while the timeline is on screen)
     ====================================================================== */
  function initTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    if (prefersReducedMotion()) { timeline.style.setProperty('--progress', 1); return; }

    let ticking = false;
    let inView = false;

    const update = () => {
      ticking = false;
      const rect = timeline.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
      timeline.style.setProperty('--progress', progress.toFixed(3));
    };
    const onScroll = () => {
      if (!inView || ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) update();
    }).observe(timeline);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }

  /* ======================================================================
     Cursor-following glow (desktop, fine pointer, motion allowed)
     ====================================================================== */
  function initCursorGlow() {
    const glow = document.querySelector('.cursor-glow');
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!glow || !canHover || prefersReducedMotion()) return;

    let x = 0, y = 0, frame = null;
    const render = () => {
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = null;
    };
    window.addEventListener('pointermove', (e) => {
      x = e.clientX; y = e.clientY;
      glow.classList.add('is-active');
      if (!frame) frame = requestAnimationFrame(render);
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => glow.classList.remove('is-active'));
  }

  /* ======================================================================
     Portrait: show the elegant placeholder until a real photo exists
     ====================================================================== */
  function initPortrait() {
    const figure = document.getElementById('portrait');
    const img = figure?.querySelector('.portrait__img');
    if (!img) return;
    const fallback = () => figure.classList.add('no-image');
    if (img.complete && img.naturalWidth === 0) fallback();
    img.addEventListener('error', fallback, { once: true });
  }

  /* ======================================================================
     Copy email to clipboard
     ====================================================================== */
  function initCopyEmail() {
    const btn = document.getElementById('copy-email');
    if (!btn) return;
    const label = btn.querySelector('.copy-btn__label');
    const value = btn.dataset.copy;

    const fallbackCopy = (text) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch { ok = false; }
      ta.remove();
      return ok;
    };

    btn.addEventListener('click', async () => {
      let ok = false;
      try {
        await navigator.clipboard.writeText(value);
        ok = true;
      } catch {
        ok = fallbackCopy(value);
      }
      label.textContent = ok ? 'Copied' : 'Press Ctrl+C';
      btn.classList.toggle('is-copied', ok);
      window.setTimeout(() => { label.textContent = 'Copy'; btn.classList.remove('is-copied'); }, 2200);
    });
  }

  /* ======================================================================
     Footer year
     ====================================================================== */
  function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavigation();
    initPortrait();
    initReveal();
    initCounters();
    initTimeline();
    initCursorGlow();
    initCopyEmail();
    initYear();

    // Trigger the hero entrance on the next frame so the initial state paints first.
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-loaded')));
  });
})();
