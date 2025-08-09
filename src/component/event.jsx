export default function EventMap() {
  return (
    <section className="event">
      <div className="event-container">
        <div className="event-header">
          <h2 className="event-title">Sự Kiện Cưới</h2>
          <p className="event-subtitle">
            Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ.
          </p>
        </div>

        <div className="event-info">
          <h3 className="event-name">LỄ THÀNH HÔN</h3>
          <p className="event-time">22:37 20/09/2025</p>
          <div className="event-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.409188850693!2d106.700423!3d10.776530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a6e97f4f5%3A0x7b8b93a4d2f6a7d6!2zQmVuIFRoxrDhu6NuZyBMYW5nIEh1!5e0!3m2!1svi!2s!4v1694666000000!5m2!1svi!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
