import express from 'express'
const router = express.Router();
// const nodemailer = require('nodemailer');
import NodeMailer from 'nodemailer';

const transporter = NodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bd8be42c8be94c",
        pass: "1bda57cb0d5d06"
    }
});

const sendEmail = async (emailData) => {
    try {
        await transporter.sendMail({
            from: emailData.from,
            to: 'recipient@mailtrap.io',
            subject: emailData.subject,
            text: emailData.message
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return error;
    }
};

router.post('/', async (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;

    const emailData = {
        from: email,
        subject: subject,
        message: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
    };

    try {
        console.log(req.body)
        await sendEmail(emailData);

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send message' });
    }
});

export default router;