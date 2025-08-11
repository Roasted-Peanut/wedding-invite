import React, { useState, useEffect } from "react";

const images = [
  "https://moonflowerhanoi.com/wp-content/uploads/2023/06/bo-hoa-cuoi-tulip-nu-cuoi-rang-ro.jpg",
  "https://hoathangtu.com/wp-content/uploads/2022/12/IMG_8695-scaled.jpg",
  "https://aodaitailoc.vn/wp-content/uploads/2025/04/Hoa-cuoi-cam-tay-co-dau-tulip-hong-mix-trang-cao-cap-V55.jpg",
  "https://bizweb.dktcdn.net/thumb/large/100/326/588/products/bo-02-3-optimized.jpg?v=1618764088350",
];

export default function WeddingSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="wedding-slider">
      <div className="slider-wrapper">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={`slide ${index === current ? "active" : ""}`}
          />
        ))}

        <button className="prev" onClick={prevSlide}>‹</button>
        <button className="next" onClick={nextSlide}>›</button>
      </div>

      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

