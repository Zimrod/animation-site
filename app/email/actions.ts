// app/email/actions.ts
"use server";

import { Resend } from "resend";

// Initialize Resend with your API key
// const resend = new Resend(process.env.RESEND_API_KEY);
const apiKey = process.env.RESEND_API_KEY;
  
if (!apiKey) {
  console.error("RESEND_API_KEY is missing from environment variables.");
  return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
}

const resend = new Resend(apiKey);

export async function sendEmail(formData: FormData) {
  const to = formData.get("to") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!to || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const data = await resend.emails.send({
      // Note: Resend requires a verified domain to send to anyone.
      // If using a testing API key, you can only send to onboarding@resend.dev
    //   from: "Dashboard <onboarding@resend.dev>",
      from: "Journey 18 Miles <admin@journey18miles.com>",
      to: [to],
      subject: subject,
      text: message,
      // You can also use 'html:' if you want to pass rich text/components
    });

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to send email." };
  }
}