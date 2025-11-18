import React, { useState, useRef } from "react";
import { loginWithGoogle } from "../../../../utils/auth";
import { useChat } from "./ChatRoom.hooks";
import UserHeader from "./UserHeader";
import MessageBubble from "./MessageBubble";
import LoginPrompt from "./LoginPrompt";

export default function ChatRoom({ user, setLoginError, loginError }) {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { messages, sendMessage, deleteMessage } = useChat();
  const inputRef = useRef(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsTyping(true);
    try {
      await sendMessage(message, user);
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

      {user && <UserHeader user={user} />}

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
              <MessageBubble
                key={msg.id}
                msg={msg}
                user={user}
                onDelete={() => deleteMessage(msg.id)}
              />
            ))
          )}
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
        <LoginPrompt handleLogin={handleLogin} loginError={loginError} />
      )}
    </div>
  );
}