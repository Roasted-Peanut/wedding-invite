import { useEffect, useState } from "react";

export default function TheBigDay() {
  const brideDate = new Date("2026-09-20T07:30:00").getTime();
  const groomDate = new Date("2026-09-20T10:30:00").getTime();

  const [brideCountdown, setBrideCountdown] = useState(
    getTimeRemaining(brideDate)
  );
  const [groomCountdown, setGroomCountdown] = useState(
    getTimeRemaining(groomDate)
  );

  function getTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds, expired: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setBrideCountdown(getTimeRemaining(brideDate));
      setGroomCountdown(getTimeRemaining(groomDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="thebigday">
      <div className="thebigday-container">
        {/* Countdown */}
        <div className="countdown-wrapper">
          {/* Cột trái - Nhà gái */}
          <div className="thebigday-col">
            <h2 className="thebigday-title">LỄ THÀNH HÔN</h2>
            <p className="date-text">07:30 - 20/09/2026</p>
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
            <p className="date-text">10:30 - 20/09/2026</p>
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
            <p className="event-address">
              Tư gia nhà trai, 456 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
            </p>
            <div className="event-map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1328.5691732733314!2d105.8798757521265!3d20.718173871872988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c9006b91e13b%3A0xffc6e8637f2e1c7!2zTmjDoCB2xINuIGhvw6EgdGjDtG4g4buobmcgQ-G7rQ!5e0!3m2!1svi!2s!4v1755502801120!5m2!1svi!2s"
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
            <p className="event-address">
              Tư gia nhà gái, 123 Đường Hoa Mai, Quận Phú Nhuận, TP. Hồ Chí Minh
            </p>
            <div className="event-map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.302251765549!2d106.42828327613498!3d20.90015598071724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313585d23afcde1b%3A0xe5b7baddd3b52bae!2zMDk2IE5ndXnhu4VuIEjhuqNpIFRoYW5oLCBUVC4gVGhhbmggSMOgLCBUaGFuaCBIw6AsIEjhuqNpIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1755503369215!5m2!1svi!2s"
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
}
