import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // Replace with your email
    pass: process.env.EMAIL_PASS, // Replace with your email password
  },
});

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json(); // Use await req.json() to access the body

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { error: "Please enter all required fields." },
      { status: 400 }, // Bad Request status code
    );
  }
  const mailOptions = {
    from: email,
    to: "seifadel25@gmail.com",
    subject: "Contact Request from Univent's website from " + name,
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }, // Internal Server Error status code
    );
  }
}
export async function GET() {
  NextResponse.json({ message: "Method not allowed" }), { status: 405 };
}
