import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth, firestoreDB } from "../services/firebase";

export const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      return;
    }

    addDoc(collection(firestoreDB, "messages"), {
      message,
      timestamp: Timestamp.now(),
      sender: auth.currentUser.displayName,
    });
    setMessage("");
    // clear the input
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form className="message-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        id="message-input"
        name="message-input"
        onChange={handleInputChange}
        value={message}
      />
      <button id="send-message-button">Send</button>
    </form>
  );
};
