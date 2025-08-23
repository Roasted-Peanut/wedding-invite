import React, { useState, useCallback } from "react";
import { INTRO_IMAGES } from "../constants/weddingData";

const Introduce = React.memo(() => {
  const [showGroomInfo, setShowGroomInfo] = useState(false);
  const [showBrideInfo, setShowBrideInfo] = useState(false);

  const handleKeyToggle = useCallback((e, setter) => {
    // Enter hoặc Space toggle; Escape ẩn
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setter(prev => !prev);
    } else if (e.key === "Escape") {
      setter(false);
    }
  }, []);

  return (
    <section className="intro">
      {/* Chú rể */}
      <div
        className="intro-col"
        role="button"
        tabIndex={0}
        aria-pressed={showGroomInfo}
        onClick={() => setShowGroomInfo(v => !v)}
        onKeyDown={(e) => handleKeyToggle(e, setShowGroomInfo)}
      >
        <div className="media">
          <img
            className={`media-img ${showGroomInfo ? "hidden" : ""}`}
            src={INTRO_IMAGES.GROOM}
            alt="Chú rể"
          />
          <div className={`media-overlay ${showGroomInfo ? "visible" : ""}`}>
            <h2>Chú rể</h2>
            <p>
              Đây là câu chuyện của chú rể — một chàng trai vui tính, ấm áp và tràn đầy yêu thương.
            </p>
          </div>
        </div>
      </div>

      {/* Cô dâu */}
      <div
        className="intro-col"
        role="button"
        tabIndex={0}
        aria-pressed={showBrideInfo}
        onClick={() => setShowBrideInfo(v => !v)}
        onKeyDown={(e) => handleKeyToggle(e, setShowBrideInfo)}
      >
        <div className="media">
          <img
            className={`media-img ${showBrideInfo ? "hidden" : ""}`}
            src={INTRO_IMAGES.BRIDE}
            alt="Cô dâu"
          />
          <div className={`media-overlay ${showBrideInfo ? "visible" : ""}`}>
            <h2>Cô dâu</h2>
            <p>
              Đây là câu chuyện của cô dâu — dịu dàng, tinh tế và luôn mang đến nụ cười.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

Introduce.displayName = "Introduce";

export default Introduce;
