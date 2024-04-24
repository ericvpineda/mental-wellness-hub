import express, { Request, Response } from "express";
import NodeMailer, { Transporter } from "nodemailer";

const router = express.Router();
const transporter: Transporter = NodeMailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bd8be42c8be94c",
    pass: "1bda57cb0d5d06",
  },
});

interface EmailData {
  from: string;
  subject: string;
  message: string;
}

const sendEmail = async (emailData: EmailData): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: emailData.from,
      to: "recipient@mailtrap.io",
      subject: emailData.subject,
      text: emailData.message,
    });
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the caught error for higher-level error handling
  }
};

router.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, email, subject, message } = req.body;

  const emailData: EmailData = {
    from: email,
    subject: subject,
    message: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
  };

  try {
    console.log(req.body);
    await sendEmail(emailData);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send message" });
  }
});

export default router;
