import { useState, useEffect } from "react";
import { db } from "../../../../utils/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  doc
} from "firebase/firestore";

export function useChat() {
  const [messages, setMessages] = useState([]);

  // Real-time listener for Firestore messages
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(newMessages);
    });
    return () => unsub();
  }, []);

  const sendMessage = async (message, user) => {
    await addDoc(collection(db, "messages"), {
      text: message,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: serverTimestamp()
    });
  };

  const deleteMessage = async (messageId) => {
    if (confirm("Delete this message?")) {
      await deleteDoc(doc(db, "messages", messageId));
    }
  };

  return {
    messages,
    sendMessage,
    deleteMessage
  };
}