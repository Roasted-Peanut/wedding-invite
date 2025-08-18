import React from "react";

const GiftBox = () => {
  return (
    <div className="giftbox-container">
      <h2 className="giftbox-title">🎁 Hộp mừng cưới</h2>
      <p className="giftbox-description">
        Nếu có thể, bạn hãy tới tham dự Đám cưới, chung vui và Mừng cưới trực tiếp cho chúng mình nha 🫶.
        <br />
        Cảm ơn bạn rất nhiều!
      </p>

      <div className="giftbox-columns">
        {/* Chú rể */}
        <div className="giftbox-section">
          <h3>💙 Mừng cưới đến chú rể</h3>
          <p><strong>Ngân hàng:</strong> Techcombank</p>
          <p><strong>Tên:</strong> Chú Rể</p>
          <p><strong>STK:</strong> 12349854060</p>
          <img
            src='src/assets/QRcode.jpg'
            alt="QR Chú rể"
            className="giftbox-qr"
          />
        </div>

        {/* Cô dâu */}
        <div className="giftbox-section">
          <h3>💖 Mừng cưới đến cô dâu</h3>
          <p><strong>Ngân hàng:</strong> Techcombank</p>
          <p><strong>Tên:</strong> Cô Dâu</p>
          <p><strong>STK:</strong> 12349854060</p>
          <img
            src="https://qrcode-gen.com/images/qrcode-default.png"
            alt="QR Cô dâu"
            className="giftbox-qr"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftBox;
