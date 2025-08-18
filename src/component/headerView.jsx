import "../css/index.css";
export default function HeaderView() {
  return (
    <section className="headerView">
      <h2
        style={{
          fontFamily: "math",
          textAlign: "center",
        }}
      >
        SAVE THE DATE
      </h2>
      <h1
        style={{
          display: "flex",
          flexWrap: "wrap", // cho phép xuống dòng
          justifyContent: "center",
          textAlign: "center",
          gap: "5px", // khoảng cách giữa các span
          color: '#e87a90',
          fontFamily: 'fantasy',
          fontWeight: 'bold'
        }}
      >
        <span>CHÚ RỂ  </span>
        <span>❤️</span>
        <span>  CÔ DÂU</span>
      </h1>
    </section>
  );
}
