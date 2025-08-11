import React, { useEffect, useRef } from "react";

const FallingItems = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Danh sách hình ảnh rơi
    const imageSources = [
      "https://e7.pngegg.com/pngimages/496/869/png-clipart-rose-petal-rose-petal-rose.png",
      "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-red-heart-icon-isolated-png-image_1726594.jpg",
      "https://png.pngtree.com/png-clipart/20190904/original/pngtree-green-plant-leaves-hand-painted-transparent-bottom-free-png-image_4486419.jpg"
    ];

    const images = [];
    let items = [];

    const loadImages = () => {
      return Promise.all(
        imageSources.map(
          src =>
            new Promise(resolve => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                images.push(img);
                resolve();
              };
            })
        )
      );
    };

    const initItems = () => {
      items = Array.from({ length: 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        size: Math.random() * 30 + 20,
        img: images[Math.floor(Math.random() * images.length)]
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      items.forEach(item => {
        ctx.drawImage(item.img, item.x, item.y, item.size, item.size);
        item.y += item.speedY;
        item.x += item.speedX;
        if (item.y > height) {
          item.y = -item.size;
          item.x = Math.random() * width;
        }
      });
      requestAnimationFrame(draw);
    };

    loadImages().then(() => {
      initItems();
      draw();
    });

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initItems();
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
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
