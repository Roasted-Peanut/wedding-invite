import React from "react";
import { GIFT_INFO } from "../constants/weddingData";

// Component hiển thị thông tin mừng cưới
const GiftBoxSection = React.memo(({ title, bank, name, account, qrSrc, altText }) => (
  <div className="giftbox-section">
    <h3>{title}</h3>
    <p>
      <strong>Ngân hàng:</strong> {bank}
    </p>
    <p>
      <strong>Tên:</strong> {name}
    </p>
    <p>
      <strong>STK:</strong> {account}
    </p>
    <img src={qrSrc} alt={altText} className="giftbox-qr" />
  </div>
));

GiftBoxSection.displayName = "GiftBoxSection";

// Component chính
const GiftBox = React.memo(() => {

  return (
    <div className="giftbox-columns">
      {GIFT_INFO.map((data, index) => (
        <GiftBoxSection
          key={index}
          title={data.title}
          bank={data.bank}
          name={data.name}
          account={data.account}
          qrSrc={data.qrSrc}
          altText={data.altText}
        />
      ))}
    </div>
  );
});

GiftBox.displayName = "GiftBox";

export default GiftBox;
