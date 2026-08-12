import nodemailer from 'nodemailer';

// Create Transporter (Uses Gmail / custom SMTP if environment variables are provided)
const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || 'ownsources001@gmail.com';
  const pass = process.env.SMTP_PASS || '';

  if (pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });
  }
  return null;
};

/**
 * Sends inquiry notification email to Company Admin & confirmation copy to Client
 */
export const sendInquiryEmailNotification = async (inquiry) => {
  const companyEmail = process.env.COMPANY_EMAIL || 'ownsources001@gmail.com';
  const { name, email, phone, category, subject, message, createdAt } = inquiry;

  const dateStr = new Date(createdAt || Date.now()).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  // 1. Email template for Company Admin (TecVor Technologies Engineering Desk)
  const adminHtml = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 24px; text-align: center; border-bottom: 4px solid #E84125;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">TecVor Technologies</h1>
        <p style="color: #38BDF8; margin: 6px 0 0 0; font-size: 12px; text-transform: uppercase; font-weight: 700; tracking: 1px;">New Client Inquiry Received</p>
      </div>

      <div style="padding: 28px; color: #334155; line-height: 1.6;">
        <div style="background-color: #FFF8F5; border-left: 4px solid #E84125; padding: 14px 18px; border-radius: 6px; margin-bottom: 24px;">
          <strong style="color: #0F172A; font-size: 14px;">📌 Category:</strong> 
          <span style="color: #E84125; font-weight: 700; font-size: 14px; margin-left: 6px;">${category || 'General Web & Software'}</span>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 700; color: #64748B; width: 140px;">Client Name:</td>
            <td style="padding: 10px 0; font-weight: 700; color: #0F172A;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 700; color: #64748B;">Client Email:</td>
            <td style="padding: 10px 0; color: #0284C7; font-weight: 600;"><a href="mailto:${email}" style="color: #0284C7; text-decoration: none;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 700; color: #64748B;">Phone Number:</td>
            <td style="padding: 10px 0; color: #0F172A; font-weight: 600;">${phone || 'Not Provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; font-weight: 700; color: #64748B;">Subject:</td>
            <td style="padding: 10px 0; color: #0F172A; font-weight: 700;">${subject || 'Project Requirement Inquiry'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 700; color: #64748B;">Timestamp:</td>
            <td style="padding: 10px 0; color: #64748B; font-size: 13px;">${dateStr}</td>
          </tr>
        </table>

        <div style="margin-bottom: 24px;">
          <p style="font-weight: 700; color: #0F172A; margin: 0 0 8px 0; font-size: 14px;">Project Message Details:</p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; font-size: 14px; color: #1e293b; white-space: pre-wrap;">${message}</div>
        </div>

        <div style="text-align: center; margin-top: 32px;">
          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'TecVor Technologies Inquiry')}" 
             style="display: inline-block; background-color: #E84125; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 10px rgba(232, 65, 37, 0.3);">
             Reply to Client (${email})
          </a>
        </div>
      </div>

      <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
        TecVor Technologies Automated Inquiry Dispatch • <a href="mailto:${companyEmail}" style="color: #64748B;">${companyEmail}</a>
      </div>
    </div>
  `;

  // 2. Automated Confirmation Copy for the Client
  const clientHtml = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #0284C7 0%, #0F172A 100%); padding: 24px; text-align: center; border-bottom: 4px solid #E84125;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800;">TecVor Technologies</h1>
        <p style="color: #BAE6FD; margin: 6px 0 0 0; font-size: 13px;">Inquiry Confirmation</p>
      </div>

      <div style="padding: 28px; color: #334155; line-height: 1.6; font-size: 14px;">
        <h2 style="color: #0F172A; font-size: 18px; margin-top: 0;">Hello ${name},</h2>
        <p>Thank you for reaching out to <strong>TecVor Technologies</strong>. We have received your inquiry regarding <strong>"${subject || category}"</strong>.</p>
        <p>Our lead technical architect is reviewing your project details and will respond to you at <strong>${email}</strong> within 4 to 24 business hours.</p>
        
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin: 20px 0;">
          <p style="margin: 0 0 6px 0; font-weight: 700; color: #0F172A;">Summary of your message:</p>
          <p style="margin: 0; color: #64748B; font-style: italic;">"${message}"</p>
        </div>

        <p>If you need urgent assistance, you can also reach us directly on WhatsApp or Email:</p>
        <ul style="padding-left: 20px; color: #475569;">
          <li><strong>Email Desk:</strong> <a href="mailto:${companyEmail}" style="color: #0284C7;">${companyEmail}</a></li>
          <li><strong>WhatsApp Hotline:</strong> +91 7739339852</li>
        </ul>

        <p style="margin-top: 28px; color: #64748B;">Warm regards,<br><strong style="color: #0F172A;">TecVor Engineering Team</strong></p>
      </div>
    </div>
  `;

  try {
    const transporter = createTransporter();

    if (transporter) {
      // Send Email to Company Admin
      await transporter.sendMail({
        from: `"TecVor Portal" <${process.env.SMTP_USER || companyEmail}>`,
        to: companyEmail,
        replyTo: email,
        subject: `📬 New Client Inquiry: ${subject || name} [${category}]`,
        html: adminHtml
      });

      // Send Confirmation Email to Client
      await transporter.sendMail({
        from: `"TecVor Technologies" <${process.env.SMTP_USER || companyEmail}>`,
        to: email,
        subject: `Thank you for contacting TecVor Technologies! [Ref: #${Date.now().toString().slice(-6)}]`,
        html: clientHtml
      });

      console.log(`✉️ Email Notification sent successfully to ${companyEmail} and client ${email}`);
    } else {
      console.log('----------------------------------------------------');
      console.log(`✉️ [INQUIRY EMAIL DISPATCH LOG] (SMTP_PASS not set in server/.env)`);
      console.log(`To Company (${companyEmail}):`);
      console.log(`- From: ${name} (${email}, ${phone})`);
      console.log(`- Category: ${category}`);
      console.log(`- Subject: ${subject}`);
      console.log(`- Message: ${message}`);
      console.log('👉 To enable real email delivery to inbox, add SMTP_PASS in server/.env');
      console.log('----------------------------------------------------');
    }
  } catch (err) {
    console.error('❌ Failed to dispatch inquiry email:', err.message);
  }
};
