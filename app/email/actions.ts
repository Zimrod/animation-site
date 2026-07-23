// app/email/actions.ts
"use server";

import { Resend } from "resend";

export async function sendEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  // 💡 Check env variable inside the Server Action handler
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing from environment variables.");
    return { success: false, error: "Server Configuration Error: Missing API Key" };
  }

  const resend = new Resend(apiKey);

  const to = formData.get("to") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!to || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const data = await resend.emails.send({
      from: "Journey 18 Miles <admin@journey18miles.com>",
      to: [to],
      subject: subject,
      text: message,
    });

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message || "Failed to send email." };
  }
}