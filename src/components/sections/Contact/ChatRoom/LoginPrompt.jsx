import React from "react";

export default function LoginPrompt({ handleLogin, loginError }) {
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