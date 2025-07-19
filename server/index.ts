import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendMail } from "./mailer";
import axios from "axios";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:4173"}));
app.use(express.json());

// Code for receiving emails from clients

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


// Code to fetch instagram posts

const IG_USER_ID = process.env.IG_USER_ID; 
const IG_TOKEN = process.env.IG_TOKEN; 

app.get("/api/instagram/posts", async (_req, res) => {
  try {
    const url = `https://graph.facebook.com/v23.0/${IG_USER_ID}/media`;
    const fields = "id,caption,media_type,media_url,permalink,timestamp,thumbnail_url";

    const response = await axios.get(`${url}?fields=${fields}&access_token=${IG_TOKEN}`);

    res.status(200).json(response.data);
  } catch (err: any) {
    res.status(500).json({ message: "Failed to fetch Instagram posts" });
  }
});

/* === START SERVER === */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});