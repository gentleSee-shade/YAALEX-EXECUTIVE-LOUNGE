import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Reset focus to main landmark or body on route change
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.setAttribute('tabindex', '-1');
      mainEl.focus({ preventScroll: true });
      mainEl.removeAttribute('tabindex');
    }
  }, [pathname]);

  return null;
};
