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
import "./css/loveJourney.css";
import "./css/weddingSlider.css";
import "./css/guestBook.css";
import "./css/giftBox.css";

import EventMap from "./component/event";
import LoveJourney from "./component/LoveJourney";
import WeddingSlider from "./component/weddingSlider";
import GuestBook from "./component/guestBook";
import GiftBox from "./component/giftBox";
import FallingFlowers from "./component/fallingFlowers";

export default function App() {
  return (
    <div className="invitation">
      <FallingFlowers/>
      <HeaderView />
      <Introduce />
      <TimeLineSection />
      <TheBigDay />
      <EventMap />
      <LoveJourney/>
      <WeddingSlider/>
      <GuestBook/>
      <GiftBox/>
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
