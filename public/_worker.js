// Cloudflare Worker entry point for Static Assets + Resend Email API
// This file converts a static-only Cloudflare Worker into a full Worker with API capabilities,
// unlocking Environment Variables in the Cloudflare Dashboard!

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Handle CORS Preflight for API calls
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    // 2. Handle Resend Email Dispatch endpoint: POST /api/send-email
    if (url.pathname === '/api/send-email' && request.method === 'POST') {
      try {
        const body = await request.json();
        const {
          name = 'Website Visitor',
          email = 'no-reply@example.com',
          phone = 'Not Provided',
          category = 'General Inquiry',
          subject = 'New Client Inquiry via Website',
          message = 'No message provided',
        } = body;

        const apiKey = env.RESEND_API_KEY;
        const recipientEmail = env.NOTIFICATION_EMAIL || 'akashsingh91554@gmail.com';
        const fromSender = env.RESEND_FROM_EMAIL || 'TecVor Technologies <onboarding@resend.dev>';

        if (!apiKey) {
          return new Response(
            JSON.stringify({
              success: false,
              error: 'RESEND_API_KEY is not configured in Cloudflare environment variables.',
            }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          );
        }

        const dateStr = new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'short',
        });

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
            <div style="background: linear-gradient(135deg, #04091E 0%, #0C1738 100%); padding: 28px 24px; text-align: center; border-bottom: 4px solid #E84125;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800;">TecVor Technologies</h1>
              <p style="color: #38BDF8; margin: 8px 0 0 0; font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 1.5px;">New Client Project Inquiry</p>
            </div>
            <div style="padding: 32px 28px; color: #334155; line-height: 1.6;">
              <div style="background-color: #FFF8F5; border-left: 4px solid #E84125; padding: 14px 18px; border-radius: 6px; margin-bottom: 24px;">
                <strong style="color: #0F172A; font-size: 13px;">📌 Project Category:</strong> 
                <span style="color: #E84125; font-weight: 700; font-size: 14px; margin-left: 6px;">${category}</span>
              </div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; font-weight: 700; color: #64748B; width: 140px;">Client Name:</td><td style="padding: 10px 0; font-weight: 700; color: #0F172A;">${name}</td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; font-weight: 700; color: #64748B;">Client Email:</td><td style="padding: 10px 0; color: #0284C7; font-weight: 600;"><a href="mailto:${email}" style="color: #0284C7; text-decoration: none;">${email}</a></td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; font-weight: 700; color: #64748B;">Phone Number:</td><td style="padding: 10px 0; color: #0F172A; font-weight: 600;">${phone}</td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; font-weight: 700; color: #64748B;">Subject:</td><td style="padding: 10px 0; color: #0F172A; font-weight: 700;">${subject}</td></tr>
                <tr><td style="padding: 10px 0; font-weight: 700; color: #64748B;">Timestamp:</td><td style="padding: 10px 0; color: #64748B; font-size: 13px;">${dateStr}</td></tr>
              </table>
              <div style="margin-bottom: 28px;">
                <p style="font-weight: 700; color: #0F172A; margin: 0 0 8px 0; font-size: 14px;">Project Description / Requirement:</p>
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; font-size: 14px; color: #1e293b; white-space: pre-wrap;">${message}</div>
              </div>
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background-color: #E84125; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 10px rgba(232, 65, 37, 0.3);">Reply to Client (${email})</a>
              </div>
            </div>
            <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              TecVor Technologies Cloud Automated Dispatch • <a href="mailto:${recipientEmail}" style="color: #64748B;">${recipientEmail}</a>
            </div>
          </div>
        `;

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromSender,
            to: [recipientEmail],
            reply_to: email,
            subject: `[TecVor Lead] ${subject} - ${name}`,
            html: htmlContent,
          }),
        });

        const resendData = await resendRes.json();
        return new Response(JSON.stringify({ success: resendRes.ok, data: resendData }), {
          status: resendRes.status,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    // 3. For all website pages (static assets), fetch from Cloudflare ASSETS binding
    if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      return env.ASSETS.fetch(request);
    }

    // Fallback pass-through
    return fetch(request);
  },
};
