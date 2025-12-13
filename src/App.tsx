// import React from "react";
// import HeaderView from "./component/headerView";
// import Introduce from "./component/introdue";
// import TimeLineSection from "./component/timeLine";
// import TheBigDay from "./component/theBigDay";
// import LoveJourney from "./component/loveJourney";
// import WeddingSlider from "./component/weddingSlider";
// import GuestBook from "./component/guestBook";
// import GiftBox from "./component/giftBox";
// import FallingFlowers from "./component/fallingFlowers";
// import { CONTACT_INFO, MESSAGES } from "./constants/weddingData";
// import "./css/header.css";
// import "./css/introduce.css";
// import "./css/thebigday.css";
// import "./css/timeline.css";
// import "./css/index.css";
// import "./css/loveJourney.css";
// import "./css/weddingSlider.css";
// import "./css/guestBook.css";
// import "./css/giftBox.css";

// export default function App() {
//   return (
//     <div style={{
//       backgroundColor: 'transparent',
//     }}>
//       <FallingFlowers/>
//       <HeaderView />
//       <Introduce />
//       <TimeLineSection />
//       <TheBigDay />
//       <LoveJourney/>
//       <WeddingSlider/>
//       <GuestBook/>
//       <GiftBox/>
      
//       <section className="thanks">
//         <p>{MESSAGES.THANKS}</p>
//       </section>

//       <footer>
//         <p>
//           Liên hệ: {CONTACT_INFO.GROOM.phone} ({CONTACT_INFO.GROOM.name}) - {CONTACT_INFO.BRIDE.phone} ({CONTACT_INFO.BRIDE.name})
//         </p>
//       </footer>
//     </div>
//   );
// }

import "./css/app.css";
import CoverSection from "./component/CoverSection";
import CoupleSection from "./component/CoupleSection";
import EventSection from "./component/EventSection";
import MusicPlayer from "./component/MusicPlayer";
import React from "react";

function App() {
  return (
    <>
      <MusicPlayer />
      <div className="app">
        <CoverSection />
        <CoupleSection />
        <EventSection />
      </div>
    </>
  );
}

export default App;
