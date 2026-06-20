import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // 1. Send auto-reply to the user
    const userMailOptions = {
      from: `"Musaddiq Rafi" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for reaching out!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Poppins', Arial, sans-serif; background: #f5f3ef; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #d4d0ca; }
            .header { background: #17171c; padding: 30px 40px; }
            .header h1 { color: #f0ece6; font-size: 24px; margin: 0; }
            .header span { color: #e63946; }
            .content { padding: 40px; }
            .content h2 { color: #1a1a1f; font-size: 18px; margin-bottom: 20px; }
            .content p { color: #6b6560; font-size: 14px; line-height: 1.7; margin-bottom: 15px; }
            .divider { height: 1px; background: #d4d0ca; margin: 25px 0; }
            .footer { padding: 20px 40px; background: #f5f3ef; }
            .footer p { color: #8a857e; font-size: 11px; margin: 0; }
            .btn { display: inline-block; background: #e63946; color: #ffffff; padding: 12px 30px; text-decoration: none; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Musaddiq<span>.</span></h1>
            </div>
            <div class="content">
              <h2>Thank you, ${name}!</h2>
              <p>I have received your message and will get back to you shortly. I typically respond within 24-48 hours.</p>
              <p>Your message:</p>
              <p style="background: #f5f3ef; padding: 15px; border-left: 3px solid #e63946; font-style: italic;">${message}</p>
              <div class="divider"></div>
              <p>In the meantime, feel free to check out my work:</p>
              <a href="https://musaddiq-rafi.vercel.app/" class="btn">View Portfolio</a>
            </div>
            <div class="footer">
              <p>This is an automated response from noreply@musaddiqrafi.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Send notification to Musaddiq
    const adminMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: "musaddiq@iut-dhaka.edu",
      subject: `New Message from ${name} via Portfolio`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Poppins', Arial, sans-serif; background: #f5f3ef; margin: 0; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #d4d0ca; }
            .header { background: #17171c; padding: 30px 40px; }
            .header h1 { color: #f0ece6; font-size: 24px; margin: 0; }
            .header span { color: #e63946; }
            .content { padding: 40px; }
            .content h2 { color: #1a1a1f; font-size: 18px; margin-bottom: 20px; }
            .content p { color: #6b6560; font-size: 14px; line-height: 1.7; margin-bottom: 10px; }
            .label { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #8a857e; margin-bottom: 5px; }
            .value { font-size: 14px; color: #1a1a1f; margin-bottom: 20px; }
            .divider { height: 1px; background: #d4d0ca; margin: 25px 0; }
            .message-box { background: #f5f3ef; padding: 15px; border-left: 3px solid #e63946; font-style: italic; color: #6b6560; font-size: 14px; line-height: 1.7; }
            .footer { padding: 20px 40px; background: #f5f3ef; }
            .footer p { color: #8a857e; font-size: 11px; margin: 0; }
            .btn { display: inline-block; background: #e63946; color: #ffffff; padding: 12px 30px; text-decoration: none; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Musaddiq<span>.</span></h1>
            </div>
            <div class="content">
              <h2>New Contact Form Submission</h2>
              <div class="label">From</div>
              <div class="value">${name}</div>
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #e63946; text-decoration: none;">${email}</a></div>
              <div class="divider"></div>
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
              <div class="divider"></div>
              <a href="mailto:${email}?subject=Re: Thank you for reaching out!" class="btn">Reply to ${name}</a>
            </div>
            <div class="footer">
              <p>Sent from your portfolio contact form</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
