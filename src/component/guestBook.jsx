import React, { useState, useCallback } from "react";
import { MESSAGES } from "../constants/weddingData";

const GuestBook = React.memo(() => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError(MESSAGES.GUESTBOOK_ERROR);
      return;
    }
    setError("");
    alert(MESSAGES.GUESTBOOK_SUCCESS.replace("{name}", name));
    setName("");
    setMessage("");
  }, [name, message]);

  return (
    <div className="guestbook-container">
      <h2 className="guestbook-title">{MESSAGES.GUESTBOOK_TITLE}</h2>
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
});

GuestBook.displayName = "GuestBook";

export default GuestBook;
