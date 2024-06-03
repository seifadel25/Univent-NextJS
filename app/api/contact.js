import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, phone, email, message } = req.body;

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP server
      port: 587, // Replace with your SMTP port
      secure: false,
      auth: {
        //name:UniTest
        user: "seifadel25555@gmail.com", // Replace with your email
        pass: "wizx hmtf anhl oani", // Replace with your email password
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,
      to: "seifadel25@gmail.com", // Replace with the recipient's email
      subject: "Contact Request from Univent's website from " + name,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
