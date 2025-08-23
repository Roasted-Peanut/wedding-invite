import React from "react";
import { LOVE_JOURNEY, MESSAGES } from "../constants/weddingData";

const LoveJourney = React.memo(() => {

  return (
    <section className="love-journey">
      <h2 className="love-title">{MESSAGES.LOVE_JOURNEY_TITLE}</h2>
      <div className="timeline-container">
        {LOVE_JOURNEY.map((item, index) => (
          <div
            key={index}
            className={`timeline-row ${
              index % 2 === 0 ? "row-normal" : "row-reverse"
            }`}
          >
            <div className="timeline-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

LoveJourney.displayName = "LoveJourney";

export default LoveJourney;
