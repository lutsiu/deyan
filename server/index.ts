import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendMail } from "./mailer";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const IG_USER_ID = process.env.IG_USER_ID;
const IG_TOKEN = process.env.IG_TOKEN;

// CORS and middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// ========== CONTACT FORM ==========
app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await sendMail({ name, phone, message });
    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ========== INSTAGRAM CACHED FETCH ==========
let cachedPosts: any[] = [];
let lastFetchedAt: number = 0;

const fetchInstagramPosts = async () => {
  try {
    const url = `https://graph.facebook.com/v23.0/${IG_USER_ID}/media`;
    const fields =
      "id,caption,media_type,media_url,permalink,timestamp,thumbnail_url";

    const response = await axios.get(
      `${url}?fields=${fields}&access_token=${IG_TOKEN}`
    );

    cachedPosts = response.data.data;
    lastFetchedAt = Date.now();
    console.log(`[Instagram] Posts updated at ${new Date(lastFetchedAt).toISOString()}`);
  } catch (err: any) {
    console.error("[Instagram] Fetch error:", err?.response?.data || err.message);
  }
};

// Initial fetch on server start
fetchInstagramPosts();

// Refresh every 14 days (in ms)
const TWO_WEEKS = 1000 * 60 * 60 * 24 * 14;
setInterval(fetchInstagramPosts, TWO_WEEKS);

app.get("/api/instagram/posts", (_req, res) => {
  if (!cachedPosts.length) {
    return res
      .status(503)
      .json({ message: "Instagram posts not available yet." });
  }

  res.status(200).json({ data: cachedPosts });
});

// ========== START SERVER ==========
app.listen(PORT, () => {
  
});
