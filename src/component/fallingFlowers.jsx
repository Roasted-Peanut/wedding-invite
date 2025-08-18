import React, { useEffect, useRef } from "react";

const FallingItems = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    // SVG shapes với màu sắc mới: xanh lá, hồng sữa, trắng kem
    const svgShapes = [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#4CAF50" d="M32 58s-22-13-22-30c0-9 7-16 15-16 5 0 8 3 7 7-1 4 1 6 1 6s2-2 5-6c2-3 6-4 10-3 6 1 11 7 11 15 0 17-22 27-27 27z"/></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#F8BBD9" d="M32 12c-6-8-16-6-18 2-3 10 7 16 18 26 11-10 21-16 18-26-2-8-12-10-18-2z"/></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#81C784" d="M2 32c12-18 34-22 50-14-14 6-24 18-26 30-12-3-27-2-24-16z"/></svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#FFF8E1" d="M32 58s-22-13-22-30c0-9 7-16 15-16 5 0 8 3 7 7-1 4 1 6 1 6s2-2 5-6c2-3 6-4 10-3 6 1 11 7 11 15 0 17-22 27-27 27z"/></svg>`
    ];

    // load SVGs as Image objects and store aspect ratio
    const images = [];
    const loadImages = () =>
      Promise.all(
        svgShapes.map(
          (svg) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => {
                // compute aspect ratio safely
                const w = img.naturalWidth || img.width || 64;
                const h = img.naturalHeight || img.height || 64;
                images.push({ img, aspect: h / w });
                resolve();
              };
              img.onerror = () => {
                // fallback in case of error
                images.push({ img: null, aspect: 1 });
                resolve();
              };
              img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
            })
        )
      );

    // canvas logical size handling (retina)
    let width = window.innerWidth;
    let height = window.innerHeight;
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const ITEM_COUNT = 16; // ít lại để nhẹ nhàng
    let items = [];
    let rafId = null;

    const initItems = () => {
      if (!images.length) return;
      items = Array.from({ length: ITEM_COUNT }, () => {
        const pick = images[Math.floor(Math.random() * images.length)];
        // target width in px, derived height by aspect to keep ratio
        const w = Math.random() * 30 + 18; // width range 18 - 48
        const h = Math.max(8, Math.round(w * (pick.aspect || 1)));
        return {
          x: Math.random() * width,
          y: Math.random() * height - Math.random() * height, // start anywhere (some above)
          vx: (Math.random() - 0.5) * 0.6, // horizontal drift
          vy: Math.random() * 0.6 + 0.2, // slower fall
          w,
          h,
          img: pick.img,
          angle: Math.random() * Math.PI * 2,
          angularVel: (Math.random() - 0.5) * 0.02
        };
      });
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      for (const it of items) {
        if (!it.img) continue;
        ctx.save();
        // translate to center of item, rotate, draw centered
        ctx.translate(it.x, it.y);
        ctx.rotate(it.angle);
        // drawImage with top-left at -w/2, -h/2 so we center
        ctx.drawImage(it.img, -it.w / 2, -it.h / 2, it.w, it.h);
        ctx.restore();

        // update
        it.x += it.vx;
        it.y += it.vy;
        it.angle += it.angularVel;

        // wrap / reset when out of screen
        if (it.y - it.h > height) {
          it.y = -it.h;
          it.x = Math.random() * width;
        }
        // wrap horizontally
        if (it.x > width + it.w) it.x = -it.w;
        if (it.x < -it.w) it.x = width + it.w;
      }
      rafId = requestAnimationFrame(drawFrame);
    };

    loadImages().then(() => {
      initItems();
      drawFrame();
    });

    // on resize re-init items with new canvas size
    const onResizeReinit = () => {
      resizeCanvas();
      initItems();
    };
    window.addEventListener("resize", onResizeReinit);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", onResizeReinit);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1
      }}
    />
  );
};

export default FallingItems;
