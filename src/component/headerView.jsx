import React from "react";
import "../css/index.css";

const HeaderView = React.memo(() => {
  return (
    <section className="headerView">
      <h2 className="header-title">SAVE THE DATE</h2>
      <h1 className="header-couple">
        <span>CHÚ RỂ</span>
        <span>❤️</span>
        <span>CÔ DÂU</span>
      </h1>
    </section>
  );
});

HeaderView.displayName = "HeaderView";

export default HeaderView;
