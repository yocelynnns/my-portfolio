import React, { useState, useEffect } from "react";
import { auth } from "../../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChatRoom from "./ChatRoom/ChatRoom";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  // Listen for auth changes
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-50 via-white to-purple-50 -z-10" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto w-full px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Connect!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got a project in mind? Want to collaborate? Or just say hello? 
            I'd love to hear from you! 💫
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <ChatRoom user={user} setLoginError={setLoginError} loginError={loginError} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}