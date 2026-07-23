// components/landing/ContactSection.tsx
'use client';

import { useRef, useTransition, useState } from 'react';
import { sendContactEmail } from '@/app/contact/actions';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus({ type: null, message: '' });

    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus({ type: 'success', message: 'Thanks! We\'ll get back to you soon.' });
        formRef.current?.reset();
      } else {
        setStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
      }
    });
  }

  return (
    <section
      id="contact"
      className="py-32 px-6 border-t border-zinc-800 bg-white"
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Contact
          </div>

          <h2 className="text-5xl font-black tracking-tight mb-6 text-black">
            Let's Build Something
          </h2>

          <p className="text-zinc-600 text-lg">
            Looking for explainer videos at scale?
            Need custom widgets?
            Want agency pricing?
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="
              w-full
              bg-white
              border
              border-zinc-300
              p-4
              rounded-lg
              text-black
              placeholder:text-zinc-400
              outline-none
              focus:border-black
            "
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="
              w-full
              bg-white
              border
              border-zinc-300
              p-4
              rounded-lg
              text-black
              placeholder:text-zinc-400
              outline-none
              focus:border-black
            "
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Tell me about your project..."
            required
            className="
              w-full
              bg-white
              border
              border-zinc-300
              p-4
              rounded-lg
              text-black
              placeholder:text-zinc-400
              outline-none
              focus:border-black
            "
          />

          {status.type && (
            <div
              className={`p-3 rounded-lg text-sm ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="
              w-full
              bg-black
              text-white
              py-4
              rounded-lg
              font-bold
              uppercase
              tracking-wider
              hover:opacity-90
              transition
              disabled:opacity-50
            "
          >
            {isPending ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}