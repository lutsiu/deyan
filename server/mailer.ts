import nodemailer from "nodemailer";

interface MailPayload {
  name: string;
  phone: string;
  message: string;
}

export async function sendMail({ name, phone, message }: MailPayload) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change this if using Outlook, etc.
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Автосервис" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: "Новое сообщение с сайта",
    html: `
      <h2>Новое сообщение</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Сообщение:</strong><br/>${message}</p>
    `,
  });
}
