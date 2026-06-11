# Deyan Auto — Car Service Website

> **Live site:** [deyanauto.pl](https://www.deyanauto.pl)

A production client website built for **Deyan Auto**, a car service business in Poland. Developed as a freelance project within a small dev + designer team. The goal was a fast, modern, mobile-first landing page that works in multiple languages and lets customers get in touch directly.

---

## Screenshots

<img width="451" height="746" alt="Screenshot 2026-06-11 124918" src="https://github.com/user-attachments/assets/a2a5c15f-3cd7-47a3-96b4-07b37dca2e28" /><img width="1917" height="866" alt="Screenshot 2026-06-11 124819" src="https://github.com/user-attachments/assets/193a30ff-8c0a-4715-a91a-514f682c343e" />
<img width="1912" height="868" alt="Screenshot 2026-06-11 124842" src="https://github.com/user-attachments/assets/1fb4c1be-12e6-442f-a908-ff3e6957b21a" />


---

## Features

- **Multilingual UI** — Polish and Russian support via `i18next` with automatic browser language detection
- **Contact form** — client-side validation with `react-hook-form` + `yup`, email delivery via Node.js/Nodemailer backend
- **Interactive map** — embedded location map using `Leaflet` + `react-leaflet`
- **Instagram feed** — live posts fetched from the Instagram Graph API displayed as a blog/gallery section
- **Animated UI** — smooth transitions and entrance animations via `Framer Motion`
- **Carousel** — service/photo slider built with `Embla Carousel`
- **Fully responsive** — mobile-first layout with Tailwind CSS v4
- **Accessible modals** — dialog/disclosure components via `@headlessui/react`
- **Toast notifications** — user feedback on form submit via `react-toastify`
- **Gzip compression** — production bundle compressed via `vite-plugin-compression`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite 6 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Forms | react-hook-form + yup |
| i18n | i18next, react-i18next, i18next-browser-languagedetector |
| Map | Leaflet, react-leaflet |
| Animations | Framer Motion |
| Carousel | Embla Carousel |
| Icons | @iconify/react, react-icons |
| HTTP | Axios |
| Backend | Node.js + Express (separate `/server` folder) |
| Email | Nodemailer |
| Social | Instagram Graph API |
| Deploy (frontend) | Vercel |
| Deploy (backend) | Render |

---

## Project Structure

```
deyan/
├── client/
│   ├── components/      # Reusable UI components
│   ├── data/            # Static data / content
│   ├── i18n/            # i18next config and translation files
│   ├── pages/           # Page-level components
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   ├── types/           # TypeScript types
│   ├── App.tsx
│   └── main.tsx
└── server/
    ├── index.ts         # Express server entry point
    └── mailer.ts        # Nodemailer contact form + Instagram API
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### 1. Clone the repo

```bash
git clone https://github.com/lutsiu/deyan.git
cd deyan
```

### 2. Run the frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

### 3. Run the backend

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
MAIL_USER=your email @gmail.com
MAIL_PASS=pass 
MAIL_TO=email @gmail.com
PORT=5000
IG_TOKEN=token
IG_USER_ID=id
```

```bash
npm run dev
```

Backend runs at `http://localhost:3000` (or whichever port is configured)

---

## Environment Variables

| Variable | Description |
|---|---|
| `EMAIL_USER` | Gmail address used to send contact form emails |
| `EMAIL_PASS` | Gmail app password (not your account password) |
| `INSTAGRAM_ACCESS_TOKEN` | Long-lived Instagram Graph API token |

---

## Deployment

- **Frontend** is deployed to **Vercel** — connected to the `main` branch, auto-deploys on push
- **Backend** is deployed to **Render** — set the above environment variables in the Render dashboard
- Update the API base URL in the frontend config to point to your Render backend URL before deploying
