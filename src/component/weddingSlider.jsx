import React, { useState, useEffect, useCallback } from "react";
import { WEDDING_IMAGES } from "../constants/weddingData";

const WeddingSlider = React.memo(() => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % WEDDING_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + WEDDING_IMAGES.length) % WEDDING_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="wedding-slider">
      <div className="slider-wrapper">
        {WEDDING_IMAGES.map((src, index) => (
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
      <audio controls autoPlay id="backgroundMusic" loop>
        <source src="IDo-911.mp4" type="audio/mp4" />
      </audio>
      <div className="dots">
        {WEDDING_IMAGES.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
});

WeddingSlider.displayName = "WeddingSlider";

export default WeddingSlider;

