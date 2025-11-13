// src/components/sections/Contact.jsx
import { useState, useEffect, useRef } from "react";
import { auth, loginWithGoogle, logout, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import emailjs from '@emailjs/browser';
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

const OWNER_EMAIL = "ytheonas05@gmail.com";

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

/* -------------------------------------------------------
 🗨️  Chat Room Component
--------------------------------------------------------*/
function ChatRoom({ user, setLoginError, loginError }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Real-time listener for Firestore messages
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(newMessages);
    });
    return () => unsub();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsTyping(true);
    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: serverTimestamp()
      });
      setMessage("");
      inputRef.current?.focus();
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleLogin = async () => {
    setLoginError("");
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error("Google login failed:", err);
      setLoginError("Login failed! Make sure popups are allowed.");
    }
  };

  const handleDelete = async (msgId) => {
    if (confirm("Delete this message?")) {
      await deleteDoc(doc(db, "messages", msgId));
    }
  };

  return (
    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20 flex flex-col h-[650px]" data-aos="fade-right">
      
      {/* Chat Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-linear-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl">
            💬
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Live Chat</h3>
            <p className="text-gray-500 text-sm">Chat with me in real-time</p>
          </div>
        </div>
        {user && (
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" title="Online"></div>
            <span className="text-sm text-gray-500">Online</span>
          </div>
        )}
      </div>

      {user && <EnhancedUserHeader user={user} />}

      {/* Messages Container */}
      <div className="flex-1 flex flex-col max-h-40">
        <div className="flex-1 overflow-y-scroll border border-gray-200 rounded-2xl bg-white/50 p-4 space-y-4 scroll-smooth custom-scrollbar">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💬</div>
              <p className="text-gray-500 text-lg">No messages yet. Start the conversation!</p>
            </div>
          ) : (
            messages.map((msg) => (
              <EnhancedMessage
                key={msg.id}
                msg={msg}
                user={user}
                onDelete={() => handleDelete(msg.id)}
              />
            ))
          )}
          <div ref={chatEndRef}></div>
        </div>
      </div>

      {/* Message Input */}
      {user ? (
        <form onSubmit={handleSendMessage} className="mt-4">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!message.trim() || isTyping}
              className="px-6 py-4 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
            >
              {isTyping ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send
                  <span className="text-lg">🚀</span>
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        <EnhancedLoginPrompt handleLogin={handleLogin} loginError={loginError} />
      )}
    </div>
  );
}

/* -------------------------------------------------------
 👤  User Header
--------------------------------------------------------*/
function EnhancedUserHeader({ user }) {
  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
      <div className="flex items-center gap-4">
        <img 
          src={user.photoURL} 
          alt="avatar" 
          className="w-12 h-12 rounded-2xl border-2 border-white shadow-lg"
        />
        <div>
          <span className="font-bold text-gray-800 block">{user.displayName}</span>
          <span className="text-sm text-gray-500">Ready to chat! 🎉</span>
        </div>
      </div>
      <button
        onClick={logout}
        className="px-4 py-2 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:shadow-md transition-all duration-300 border border-gray-300 flex items-center gap-2"
      >
        <span>🚪</span>
        Logout
      </button>
    </div>
  );
}

/* -------------------------------------------------------
 💬  Message Bubble
--------------------------------------------------------*/
function EnhancedMessage({ msg, user, onDelete }) {
  const isOwner = user?.email === OWNER_EMAIL;
  const isSender = msg.uid === user?.uid;
  const [showTime, setShowTime] = useState(false);

  const messageTime = msg.createdAt?.toDate?.() || new Date();

  return (
    <div 
      className={`flex gap-3 group ${isSender ? "justify-end" : "justify-start"}`}
      onMouseEnter={() => setShowTime(true)}
      onMouseLeave={() => setShowTime(false)}
    >
      {!isSender && (
        <img
          src={msg.photoURL || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"}
          alt="avatar"
          className="w-10 h-10 rounded-2xl shrink-0 border-2 border-white shadow-md"
        />
      )}

      <div className="flex flex-col gap-1 max-w-[70%]">
        {!isSender && (
          <div className="text-xs text-gray-500 font-medium px-2">{msg.displayName}</div>
        )}
        
        <div className="relative group">
          <div
            className={`p-4 rounded-2xl transition-all duration-300 ${
              isSender 
                ? "bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-br-md" 
                : "bg-white text-gray-800 rounded-bl-md border border-gray-200 shadow-sm"
            }`}
          >
            <div className="wrap-break-words">{msg.text}</div>
          </div>

          {/* Time Tooltip */}
          {showTime && (
            <div className={`absolute top-full mt-1 text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-300 shadow-sm z-10 ${
              isSender ? "right-0" : "left-0"
            }`}>
              {messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          )}

          {/* Delete Button for Owner */}
          {isOwner && (
            <button
              onClick={onDelete}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 shadow-md flex items-center justify-center"
              title="Delete message"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {isSender && (
        <img
          src={msg.photoURL || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"}
          alt="avatar"
          className="w-10 h-10 rounded-2xl shrink-0 border-2 border-white shadow-md"
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------
 🔐 Login Prompt
--------------------------------------------------------*/
function EnhancedLoginPrompt({ handleLogin, loginError }) {
  return (
    <div className="text-center p-8 bg-linear-to-br from-pink-50 to-purple-50 rounded-2xl border border-pink-200 mt-4">
      <div className="text-6xl mb-4">🔐</div>
      <h4 className="text-xl font-bold text-gray-800 mb-3">Join the Conversation!</h4>
      <p className="text-gray-600 mb-6">Login to chat with me and other visitors in real-time</p>
      
      <button
        onClick={handleLogin}
        className="w-full py-4 bg-white text-gray-700 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-300 flex items-center justify-center gap-3 group"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          className="w-6 h-6"
        />
        Continue with Google
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>
      
      {loginError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          ⚠️ {loginError}
        </div>
      )}
      
      <div className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        Secure • Real-time • Fun!
      </div>
    </div>
  );
}

/* -------------------------------------------------------
 ✉️ Contact Form
--------------------------------------------------------*/
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await emailjs.send(
        'service_npomasx',     // Get from EmailJS dashboard
        'template_qu6dl7q',    // Get from EmailJS dashboard
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'ytheonas05@gmail.com'
        },
        'A5jsdpInYaH7v7FJU'      // Get from EmailJS dashboard
      );

      alert(`🎉 Thank you, ${form.name}! Your message has been sent successfully!\n\nI'll get back to you soon at ${form.email}`);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('❌ Failed to send message. Please try again or contact me directly at ytheonas05@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 flex flex-col" data-aos="fade-left">
      
      {/* Form Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-linear-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl">
          📩
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Send Message</h3>
          <p className="text-gray-500">I typically respond within 24 hours</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="What should I call you?"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300"
            required
          />
        </div>

        <div className="space-y-1 flex-1 flex flex-col">
          <label className="text-sm font-semibold text-gray-700">Your Message</label>
          <textarea
            name="message"
            placeholder="Tell me about your project, ask a question, or just say hello! 👋"
            value={form.message}
            onChange={handleChange}
            className="flex-1 p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/80 backdrop-blur-sm resize-none transition-all duration-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !form.name || !form.email || !form.message}
          className="w-full py-4 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-500 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending Message...
            </>
          ) : (
            <>
              <span>🚀</span>
              Send Message
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </>
          )}
        </button>
      </form>

      {/* Quick Response Info */}
      <div className="mt-6 p-4 bg-linear-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <span className="text-green-500 text-lg">⚡</span>
          <div>
            <strong>Quick Response Guarantee!</strong> I'll get back to you within 24 hours.
          </div>
        </div>
      </div>
    </div>
  );
}