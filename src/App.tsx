import { useEffect, useState } from "react";
import FallingFlowers from "./component/fallingFlowers";
import GiftBox from "./component/giftBox";
import GuestBook from "./component/guestBook";
import HeaderView from "./component/headerView";
import Introduce from "./component/introdue";
import LoveJourney from "./component/loveJourney";
import TheBigDay from "./component/theBigDay";
import TimeLineSection from "./component/timeLine";
import WeddingSlider from "./component/weddingSlider";
import { CONTACT_INFO, MESSAGES } from "./constants/weddingData";
import "./css/giftBox.css";
import "./css/guestBook.css";
import "./css/header.css";
import "./css/index.css";
import "./css/introduce.css";
import "./css/loveJourney.css";
import "./css/thebigday.css";
import "./css/timeline.css";
import "./css/weddingSlider.css";

export default function App() {
  const [muted, setmuted] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setmuted(false)
    }, 100);
  })

  useEffect(() => {
    const audio = document.getElementById("backgroundMusic") as HTMLAudioElement | null;
    if (!audio) return;

    const playAudio = () => {
      audio.play().catch(() => { });
    };

    // iOS: chỉ dùng touchstart hoặc click
    document.addEventListener("touchstart", playAudio, { once: true });
    document.addEventListener("click", playAudio, { once: true });

    // Android: scroll cũng cho phép
    document.addEventListener("scroll", playAudio, { once: true });

  }, []);

  return (
    <div style={{
      backgroundColor: 'transparent',
    }}>
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
