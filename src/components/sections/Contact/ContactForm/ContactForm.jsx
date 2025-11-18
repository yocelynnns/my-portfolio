import React from "react";
import { useContactForm } from "./ContactForm.hooks";

export default function ContactForm() {
  const { form, isSubmitting, handleChange, handleSubmit } = useContactForm();

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