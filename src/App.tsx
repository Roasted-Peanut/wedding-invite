import React, { useEffect, useRef, useState } from "react";
import HeaderView from "./component/headerView";
import Introduce from "./component/introdue";
import TimeLineSection from "./component/timeLine";
import TheBigDay from "./component/theBigDay";
import LoveJourney from "./component/loveJourney";
import WeddingSlider from "./component/weddingSlider";
import GuestBook from "./component/guestBook";
import GiftBox from "./component/giftBox";
import FallingFlowers from "./component/fallingFlowers";
import { CONTACT_INFO, MESSAGES } from "./constants/weddingData";
import "./css/header.css";
import "./css/introduce.css";
import "./css/thebigday.css";
import "./css/timeline.css";
import "./css/index.css";
import "./css/loveJourney.css";
import "./css/weddingSlider.css";
import "./css/guestBook.css";
import "./css/giftBox.css";
import ReactPlayer from "react-player";


export default function App() {
  const playerRef = useRef(null);
  const [muted, setmuted] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setmuted(false)
    }, 100);
  })

  return (
    <div style={{
      backgroundColor: 'transparent',
    }}>
      <audio controls autoPlay hidden>
      <source src="src\assets\audios\I Do - 911.mp4" type="audio/mpeg" />
    </audio>
      <FallingFlowers />
      <HeaderView />
      <Introduce />
      <TimeLineSection />
      <TheBigDay />
      <LoveJourney />
      <WeddingSlider />
      <GuestBook />
      <GiftBox />


      <section className="thanks">
        <p>{MESSAGES.THANKS}</p>
      </section>

      <footer>
        <p>
          Liên hệ: {CONTACT_INFO.GROOM.phone} ({CONTACT_INFO.GROOM.name}) - {CONTACT_INFO.BRIDE.phone} ({CONTACT_INFO.BRIDE.name})
        </p>
      </footer>
    </div>
  );
}
