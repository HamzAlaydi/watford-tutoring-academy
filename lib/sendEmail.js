import { EMAIL, EMAIL_PASSWORD } from "@/shared/constants";
import nodemailer from "nodemailer";

export async function sendEmail(data) {
  const { name, email, phone, message } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL || "hamza.alaydi.99@gmail.com",
      pass: EMAIL_PASSWORD || "your-password",
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER || "your-email@gmail.com",
    to: "hamza.alaydi.99@gmail.sa",
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}
