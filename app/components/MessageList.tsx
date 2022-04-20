import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { auth, firestoreDB } from "../services/firebase";

export const MessageList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(
      collection(firestoreDB, "messages"),
      orderBy("timestamp", "desc"),
      limit(30)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      setLoading(false);
      setData(messages.reverse());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="message-list-container">
      {loading && <div>Loading...</div>}
      {data.map((message) => (
        <div className="imessage" key={message.timestamp}>
          <p
            className={`${
              message.sender === auth.currentUser.displayName
                ? "from-me"
                : "from-them"
            }`}
          >
            {message.message}
          </p>
          {message.sender !== auth.currentUser.displayName && (
            <p className="from-them-name">{message.sender}</p>
          )}
        </div>
      ))}
    </div>
  );
};
