import React, { useEffect, useState, useMemo, useCallback } from "react";
import { WEDDING_DATES, EVENT_LOCATIONS } from "../constants/weddingData";
import { getTimeRemaining, formatTime, formatDate } from "../utils/helpers";

const TheBigDay = React.memo(() => {
  const brideDate = useMemo(() => WEDDING_DATES.BRIDE_CEREMONY.getTime(), []);
  const groomDate = useMemo(() => WEDDING_DATES.GROOM_CEREMONY.getTime(), []);

  const [brideCountdown, setBrideCountdown] = useState(
    getTimeRemaining(brideDate)
  );
  const [groomCountdown, setGroomCountdown] = useState(
    getTimeRemaining(groomDate)
  );

  const calculateTimeRemaining = useCallback((targetDate) => {
    return getTimeRemaining(targetDate);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBrideCountdown(calculateTimeRemaining(brideDate));
      setGroomCountdown(calculateTimeRemaining(groomDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [brideDate, groomDate, calculateTimeRemaining]);

  return (
    <section className="thebigday">
      <div className="thebigday-container">
        {/* Countdown */}
        <div className="countdown-wrapper">
          {/* Cột trái - Nhà gái */}
          <div className="thebigday-col">
            <h2 className="thebigday-title">LỄ THÀNH HÔN</h2>
            <p className="date-text">
              {formatTime(WEDDING_DATES.BRIDE_CEREMONY)} - {formatDate(WEDDING_DATES.BRIDE_CEREMONY)}
            </p>
            <div className="countdown">
              {brideCountdown.expired ? (
                <span className="expired">Đã diễn ra</span>
              ) : (
                <>
                  <div>
                    <span>{brideCountdown.days}</span>
                    <small>Ngày</small>
                  </div>
                  <div>
                    <span>{brideCountdown.hours}</span>
                    <small>Giờ</small>
                  </div>
                  <div>
                    <span>{brideCountdown.minutes}</span>
                    <small>Phút</small>
                  </div>
                  <div>
                    <span>{brideCountdown.seconds}</span>
                    <small>Giây</small>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Cột phải - Nhà trai */}
          <div className="thebigday-col">
            <h2 className="thebigday-title">LỄ VU QUY</h2>
            <p className="date-text">
              {formatTime(WEDDING_DATES.GROOM_CEREMONY)} - {formatDate(WEDDING_DATES.GROOM_CEREMONY)}
            </p>
            <div className="countdown">
              {groomCountdown.expired ? (
                <span className="expired">Đã diễn ra</span>
              ) : (
                <>
                  <div>
                    <span>{groomCountdown.days}</span>
                    <small>Ngày</small>
                  </div>
                  <div>
                    <span>{groomCountdown.hours}</span>
                    <small>Giờ</small>
                  </div>
                  <div>
                    <span>{groomCountdown.minutes}</span>
                    <small>Phút</small>
                  </div>
                  <div>
                    <span>{groomCountdown.seconds}</span>
                    <small>Giây</small>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="thebigday-buttons">
          <button className="btn-primary">Gửi lời chúc</button>
          <button className="btn-secondary">Xác nhận tham dự</button>
        </div>

        {/* Event Info */}
        <div className="event-container">
          {/* Nhà trai */}
          <div className="event-col">
            <p className="event-address">{EVENT_LOCATIONS.GROOM.address}</p>
            <div className="event-map">
              <iframe
                title="Google Map"
                src={EVENT_LOCATIONS.GROOM.mapUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Nhà gái */}
          <div className="event-col">
            <p className="event-address">{EVENT_LOCATIONS.BRIDE.address}</p>
            <div className="event-map">
              <iframe
                title="Google Map"
                src={EVENT_LOCATIONS.BRIDE.mapUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

TheBigDay.displayName = "TheBigDay";

export default TheBigDay;
