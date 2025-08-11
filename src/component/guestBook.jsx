import React, { useState } from "react";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Vui lòng nhập đầy đủ tên và lời chúc.");
      return;
    }
    setError("");
    alert(`Cảm ơn ${name}! Lời chúc của bạn đã được gửi.`);
    setName("");
    setMessage("");
  };

  return (
    <div className="guestbook-container">
      <h2 className="guestbook-title">Sổ Lưu Bút</h2>
      <form onSubmit={handleSubmit} className="guestbook-form">
        <input
          type="text"
          placeholder="Tên của bạn*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Nhập lời chúc của bạn*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {error && <p className="guestbook-error">{error}</p>}
        <button type="submit" className="guestbook-submit">
          GỬI LỜI CHÚC
        </button>
      </form>
    </div>
  );
}
