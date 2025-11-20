import { useState } from "react";
import emailjs from '@emailjs/browser';

export function useContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_npomasx',
        'template_qu6dl7q',
        {
          name: form.name,
          email: form.email,
          message: form.message,
          to_email: 'ytheonas05@gmail.com'
        },
        'A5jsdpInYaH7v7FJU'
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

  return {
    form,
    isSubmitting,
    handleChange,
    handleSubmit
  };
}