import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop mouse/trackpad
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const textEl = textRef.current;
    const container = containerRef.current;
    if (!dot || !ring || !container) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovering = false;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        container.classList.add('cursor-active');
      }

      // Exact instant tracking for the central dot wrapper
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onMouseDown = () => {
      container.classList.add('is-clicking');
    };

    const onMouseUp = () => {
      container.classList.remove('is-clicking');
    };

    const onMouseLeave = () => {
      isVisible = false;
      container.classList.remove('cursor-active');
    };

    const onMouseEnter = () => {
      isVisible = true;
      container.classList.add('cursor-active');
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .hero-tab-btn, .interactive-3d-card, .btn-ambient-sound, .note-pill, .clean-outlet-card, .special-card, .menu-product-card');
      
      if (interactive) {
        isHovering = true;
        container.classList.add('is-hovering');

        const customText = interactive.getAttribute('data-cursor-text');
        if (customText && textEl) {
          textEl.textContent = customText;
          container.classList.add('has-text');
        } else if (textEl) {
          textEl.textContent = '';
          container.classList.remove('has-text');
        }
      } else {
        isHovering = false;
        container.classList.remove('is-hovering', 'has-text');
        if (textEl) textEl.textContent = '';
      }
    };

    // 120fps smooth spring lerp loop for the outer ring follower
    const render = () => {
      const ease = isHovering ? 0.22 : 0.16;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="custom-cursor-layer" aria-hidden="true">
      {/* Precision Instant Center Ember Dot (position wrapper) */}
      <div ref={dotRef} className="custom-cursor-dot-wrapper">
        <div className="custom-cursor-dot-core" />
      </div>

      {/* Luxury Follower Ring (position wrapper) */}
      <div ref={ringRef} className="custom-cursor-ring-wrapper">
        <div className="custom-cursor-ring-core">
          <span ref={textRef} className="custom-cursor-label" />
        </div>
      </div>
    </div>
  );
};
