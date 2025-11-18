import React from "react";
import { logout } from "../../../../utils/auth";

export default function UserHeader({ user }) {
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