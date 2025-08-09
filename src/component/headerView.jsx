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
        }}
      >
        <span>Chú Rể </span>
        <span>❤️</span>
        <span> Cô Dâu</span>
      </h1>
      <hr
        style={{
          width: "10%",
          margin: "10px auto",
          border: "none",
          borderTop: "1px solid grey",
          borderRadius: 2,
        }}
      />
      <p
        style={{
          fontFamily: "emoj",
          fontSize: 18,
        }}
      >
        20 tháng 01 2025
      </p>
      <button
        onClick={() => console.log("conClick")}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          borderWidth: 0.5,
          borderStyle: "solid",
          fontFamily: "math",
          fontSize: 14,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          borderColor: "gray",
          backgroundColor: "white",
        }}
        className="clickButton"
      >
        GỬI LỜI CHÚC
      </button>
    </section>
  );
}
