import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit
} from "firebase/firestore";
import { firestoreDB } from "../services/firebase";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";


export const MessageView = () => {
  
  return (
    <>
      <MessageList />
      <MessageInput />
    </>
  );
};