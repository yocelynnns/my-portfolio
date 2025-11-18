import React, { useState } from "react";

const OWNER_EMAIL = "ytheonas05@gmail.com";

export default function MessageBubble({ msg, user, onDelete }) {
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