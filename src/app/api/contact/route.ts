import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, workType, message } = body;

    // Validate request inputs
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // Configure SMTP transport using nodemailer
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP_USER or SMTP_PASS in environment variables.");
      return NextResponse.json(
        { error: "Mail configuration error. Please contact Siraa Interiors directly via Phone/WhatsApp." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465, false for other ports (like 587)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // Use smtpUser as 'from' for SPF/DKIM validation but set sender's name
      to: smtpUser, // Send mail to the Siraa inbox
      replyTo: email && email.trim() ? email.trim() : undefined,
      subject: `New Lead: ${workType} - ${name}`,
      text: `
Siraa Interiors - New Lead Inquiry

Name: ${name}
Phone: ${phone}
Email: ${email || "Not Provided"}
Service Type: ${workType}

Message/Requirements:
----------------------------------------
${message}
----------------------------------------

*This message was generated from the Siraa Interiors Website contact form.*
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #c5a059; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">Siraa Interiors - New Lead Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}" style="color: #c5a059; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${email && email.trim() ? `<a href="mailto:${email}" style="color: #c5a059; text-decoration: none;">${email}</a>` : "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Service Type:</td>
              <td style="padding: 8px 0; color: #333;"><strong>${workType}</strong></td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fbfbf8; border-left: 4px solid #c5a059; border-radius: 4px;">
            <h4 style="margin-top: 0; color: #110d0a; margin-bottom: 10px;">Message & Requirements:</h4>
            <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="font-size: 11px; color: #888; margin-top: 25px; border-top: 1px solid #eeeeee; padding-top: 10px; text-align: center;">
            This email was sent automatically from the Siraa Interiors contact form.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Inquiry sent successfully." });
  } catch (error: any) {
    console.error("Error in contact POST handler:", error);
    return NextResponse.json(
      { error: "Internal server error occurred.", details: error.message },
      { status: 500 }
    );
  }
}
