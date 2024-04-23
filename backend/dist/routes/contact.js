var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import NodeMailer from "nodemailer";
const router = express.Router();
const transporter = NodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bd8be42c8be94c",
        pass: "1bda57cb0d5d06",
    },
});
const sendEmail = (emailData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = yield transporter.sendMail({
            from: emailData.from,
            to: "recipient@mailtrap.io",
            subject: emailData.subject,
            text: emailData.message,
        });
        console.log("Email sent:", info.response);
    }
    catch (error) {
        console.error("Error sending email:", error);
        throw error; // Re-throw the caught error for higher-level error handling
    }
});
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, subject, message } = req.body;
    const emailData = {
        from: email,
        subject: subject,
        message: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
    };
    try {
        console.log(req.body);
        yield sendEmail(emailData);
        res.status(200).json({ message: "Message sent successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to send message" });
    }
}));
export default router;
