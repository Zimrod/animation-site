// app/api/events/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: Request) => {
  const event = await request.json();

  if (event.type === 'email.received') {
    const emailId = event.data.email_id;
    
    // 1. Fetch the actual content from Resend
    const { data, error } = await resend.emails.get(emailId);

    if (error || !data) {
      console.error('Fetch Error:', error);
      return NextResponse.json({ error: 'Failed to fetch email' }, { status: 500 });
    }

    // 2. Forward to your personal email
    try {
      await resend.emails.send({
        from: 'admin@journey18miles.com', // You can change this to info@journey18miles.com once verified
        to: 'tumaikr@gmail.com',
        subject: `Fwd: ${data.subject}`,
        html: `
          <p><strong>Original From:</strong> ${data.from}</p>
          <hr />
          ${data.html}
        `,
      });
      
      console.log('Email forwarded successfully to tumaikr@gmail.com');
    } catch (sendError) {
      console.error('Forwarding Error:', sendError);
    }
  }

  return NextResponse.json({ received: true });
};