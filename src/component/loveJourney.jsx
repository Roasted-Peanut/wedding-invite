export default function LoveJourney() {
  const timeline = [
    {
      date: "01/01/2020",
      title: "Lần đầu gặp gỡ",
      description:
        "Chúng ta tình cờ gặp nhau tại quán cà phê nhỏ, và từ đó câu chuyện bắt đầu.",
      image:
        "https://moonflowerhanoi.com/wp-content/uploads/2023/06/bo-hoa-cuoi-tulip-nu-cuoi-rang-ro.jpg",
    },
    {
      date: "14/02/2020",
      title: "Buổi hẹn hò đầu tiên",
      description:
        "Valentine đáng nhớ với những kỷ niệm ngọt ngào không thể quên.",
      image:
        "https://moonflowerhanoi.com/wp-content/uploads/2023/06/bo-hoa-cuoi-tulip-nu-cuoi-rang-ro.jpg",
    },
    {
      date: "20/09/2023",
      title: "Cầu hôn",
      description: "Khoảnh khắc hạnh phúc khi lời cầu hôn được chấp nhận.",
      image:
        "https://moonflowerhanoi.com/wp-content/uploads/2023/06/bo-hoa-cuoi-tulip-nu-cuoi-rang-ro.jpg",
    },
    {
      date: "20/09/2025",
      title: "Lễ Thành Hôn",
      description: `Tình bạn thành tình yêu..
Thời điểm đó, chúng mình đều đang độc thân. Huy ở Hải Phòng và mình ở Hà Nội. Cơ hội gặp nhau không nhiều, nhưng chúng mình vẫn luôn dành thời gian tâm sự với nhau như hai người bạn. Rồi tới 1 ngày đặc biệt, ngày 20/2/2020 khi cả 2 đã suy nghĩ đủ kỹ về mối quan hệ, thì chúng mình đã quyết định nói hết cảm xúc của mình với đối phương. Và sau ngày định mệnh đó, đã có " Chúng mình của hiện tại"`,
      image:
        "https://moonflowerhanoi.com/wp-content/uploads/2023/06/bo-hoa-cuoi-tulip-nu-cuoi-rang-ro.jpg",
    },
  ];

  return (
    <section className="love-journey">
      <h2 className="love-title">Hành Trình Tình Yêu</h2>
      <div className="timeline-container">
        {timeline.map((item, index) => (
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
}
