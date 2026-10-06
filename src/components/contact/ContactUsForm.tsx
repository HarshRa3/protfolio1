"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  Name: string;
  Email: string;
  Phone: string;
  Subject: string;
  Message: string;
}

const ContactUsForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const onSubmit: SubmitHandler<ContactFormData> = async (values) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await axios.post("https://formspree.io/f/mwpvnowo", values, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setStatus({ type: 'success', msg: "Thank you! Your message has been sent successfully." });
        reset();
      } else {
        setStatus({ type: 'error', msg: "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', msg: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/80 text-white placeholder:text-slate-500 border border-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
            {...register("Name", { required: "Name is required" })}
          />
          {errors.Name && <p className="text-red-400 text-xs mt-1">{errors.Name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/80 text-white placeholder:text-slate-500 border border-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
            {...register("Email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
            })}
          />
          {errors.Email && <p className="text-red-400 text-xs mt-1">{errors.Email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Phone Number</label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/80 text-white placeholder:text-slate-500 border border-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
            {...register("Phone", { required: "Phone is required" })}
          />
          {errors.Phone && <p className="text-red-400 text-xs mt-1">{errors.Phone.message}</p>}
        </div>

        {/* Subject */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Subject</label>
          <input
            type="text"
            placeholder="Project Inquiry / Job Opportunity"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/80 text-white placeholder:text-slate-500 border border-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
            {...register("Subject", { required: "Subject is required" })}
          />
          {errors.Subject && <p className="text-red-400 text-xs mt-1">{errors.Subject.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Message</label>
        <textarea
          rows={4}
          placeholder="Tell me about your project requirements..."
          className="w-full px-4 py-3 rounded-xl bg-slate-900/80 text-white placeholder:text-slate-500 border border-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all resize-none"
          {...register("Message", { required: "Message is required" })}
        />
        {errors.Message && <p className="text-red-400 text-xs mt-1">{errors.Message.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3.5 px-6 rounded-xl text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
          isSubmitting
            ? "bg-slate-700 cursor-not-allowed opacity-70"
            : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:-translate-y-0.5"
        }`}
      >
        {isSubmitting ? (
          <span>Sending Message...</span>
        ) : (
          <>
            <Send size={16} />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Feedback Status */}
      {status && (
        <div
          className={`p-3 rounded-xl text-sm flex items-center gap-2 border ${
            status.type === 'success'
              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
              : 'bg-red-500/10 text-red-300 border-red-500/20'
          }`}
        >
          {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          <span>{status.msg}</span>
        </div>
      )}
    </form>
  );
};

export default ContactUsForm;

