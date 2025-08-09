import React from "react";
import HeaderView from "./component/headerView";
import TimeLineSection from "./component/timeLine";
import Introduce from "./component/introdue";
import TheBigDay from "./component/theBigDay";
import "./css/header.css";
import "./css/introduce.css";
import "./css/thebigday.css";
import "./css/timeline.css";
import "./css/index.css";
import "./css/event.css";
import EventMap from "./component/event";

export default function App() {
  return (
    <div className="invitation">
      <HeaderView />
      <Introduce />
      <TimeLineSection />
      <TheBigDay />
      <EventMap />
      <section className="thanks">
        <p>
          Sự hiện diện của quý vị là niềm vinh hạnh lớn đối với gia đình chúng
          tôi.
        </p>
      </section>

      <footer>
        <p>Liên hệ: 0909 123 456 (Chú rể) - 0912 345 678 (Cô dâu)</p>
      </footer>
    </div>
  );
}
