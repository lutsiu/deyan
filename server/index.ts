import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendMail } from "./mailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await sendMail({ name, phone, message });
    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Send error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
