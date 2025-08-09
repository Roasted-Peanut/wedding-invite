import { useEffect, useState } from "react";

export default function TheBigDay() {
  const weddingDate = new Date("2026-09-20T00:00:00").getTime();
  const [countdown, setCountdown] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="thebigday">
      <div className="thebigday-container">
        {/* Cột trái */}
        <div className="thebigday-left">
          <h1 className="save">Save</h1>
          <span className="the">THE</span>
          <h1 className="date">Date</h1>
        </div>

        {/* Cột phải */}
        <div className="thebigday-right">
          <h2 className="names">Chú Rể & Cô Dâu</h2>
          <p className="message">
            Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng mình có
            thêm một niềm hạnh phúc!
          </p>
          <div className="thebigday-buttons">
            <button className="btn-primary">Gửi lời chúc</button>
            <button className="btn-secondary">Xác nhận tham dự</button>
          </div>
          <p className="date-text">20 tháng 09 2026</p>

          {/* Countdown */}
          <div className="countdown">
            <div>
              <span>{countdown.days}</span>
              <small>Ngày</small>
            </div>
            <div>
              <span>{countdown.hours}</span>
              <small>Giờ</small>
            </div>
            <div>
              <span>{countdown.minutes}</span>
              <small>Phút</small>
            </div>
            <div>
              <span>{countdown.seconds}</span>
              <small>Giây</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
