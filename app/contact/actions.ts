// app/contact/actions.ts
'use server';

import { Resend } from 'resend';

export async function sendContactEmail(formData: FormData) {
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!email || !subject || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing');
    return { success: false, error: 'Server configuration error.' };
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Journey 18 Miles <admin@journey18miles.com>',
      to: ['tumaikr@gmail.com'],
      subject: subject,
      text: message,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send email.' };
    }

    return { success: true, data };
  } catch (error: any) {
    console.error('Contact form error:', error);
    return { success: false, error: error.message || 'Something went wrong.' };
  }
}