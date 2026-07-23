// app/email/page.tsx
"use client";

import { useState } from "react";
import { sendEmail } from "./actions";

export default function EmailDashboard() {
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    setIsPending(false);

    if (result.success) {
      setStatus({ type: "success", message: "Email sent successfully!" });
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: "error", message: result.error || "Something went wrong." });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Dashboard Header */}
        <div className="bg-gray-900 px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-tight">Email Outbox</h1>
          <span className="bg-green-500/20 text-green-400 text-xs px-2.5 py-1 rounded-full font-medium border border-green-500/30">
            Resend Connected
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {/* Left Sidebar / Meta Info */}
          <div className="p-6 bg-gray-50/50 space-y-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Dashboard Specs</h2>
            <p className="text-sm text-gray-600">
              This panel interfaces directly with Resend via Next.js Server Actions. 
            </p>
            <blockquote className="border-l-4 border-amber-500 bg-amber-50 p-3 text-xs text-amber-800 rounded-r">
              <strong>Testing Tip:</strong> If your Resend domain isn't verified yet, you can only send emails to your own account email or <code>onboarding@resend.dev</code>.
            </blockquote>
          </div>

          {/* Main Email Composer Form */}
          <div className="p-6 md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
                  Recipient Email
                </label>
                <input
                  type="email"
                  name="to"
                  id="to"
                  required
                  placeholder="hello@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject Line
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Monthly Performance Sync"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message Body
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  placeholder="Type your message details here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition font-sans text-sm"
                />
              </div>

              {/* Status Alert Notification */}
              {status.type && (
                <div
                  className={`p-3 rounded-lg text-sm border ${
                    status.type === "success"
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Trigger */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-5 py-2 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium rounded-lg shadow transition-colors text-sm flex items-center justify-center min-w-[120px]"
                >
                  {isPending ? "Sending..." : "Dispatch Email"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}