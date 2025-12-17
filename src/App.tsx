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
//     <div
//       style={{
//         backgroundColor: "transparent",
//       }}
//     >
//       <FallingFlowers />
//       <HeaderView />
//       <Introduce />
//       <TimeLineSection />
//       <TheBigDay />
//       <LoveJourney />
//       <WeddingSlider />
//       <GuestBook />
//       <GiftBox />

//       <section className="thanks">
//         <p>{MESSAGES.THANKS}</p>
//       </section>
//     </div>
//   );
// }

import "./css/app.css";
import CoverSection from "./component/CoverSection";
import CoupleSection from "./component/CoupleSection";
import EventSection from "./component/EventSection";
import MusicPlayer from "./component/MusicPlayer";
import React from "react";
import ThreePhotoSection from "./component/ThreePhotoSection";
import WishFormSection from "./component/WishFormSection";
import { CONTACT_INFO, MESSAGES } from "./constants/weddingData";
import WeddingAlbumSection from "./component/WeddingAlbumSection";

export default function App() {
  return (
    <>
      <MusicPlayer />
      <div className="app">
        <CoverSection />
        <CoupleSection />
        <EventSection />
        <ThreePhotoSection />
        <WishFormSection />
        <WeddingAlbumSection />
        
      </div>
      <h3 style={{textAlign: 'center'}}>Rất vui khi được đón tiếp Quý Vị</h3>
      <p style={{textAlign: 'center'}}>
          {CONTACT_INFO.BRIDE.name}: {CONTACT_INFO.BRIDE.phone}{" "}
          {CONTACT_INFO.GROOM.name}: {CONTACT_INFO.GROOM.phone}
        </p>
    </>
  );
}
