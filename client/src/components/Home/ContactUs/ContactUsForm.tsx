import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactUsForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success(t("toast.formSuccess"));
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(t("toast.formError"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[2.4rem]">
      <input
        type="text"
        name="name"
        id="name"
        placeholder={t("form.namePlaceholder")}
        required
        value={form.name}
        onChange={handleChange}
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem] text-[1.6rem] sm:text-[2rem]"
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder={t("form.phonePlaceholder")}
        required
        value={form.phone}
        onChange={handleChange}
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem] text-[1.6rem] sm:text-[2rem]"
      />
      <textarea
        name="message"
        id="message"
        placeholder={t("form.messagePlaceholder")}
        required
        value={form.message}
        onChange={handleChange}
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem]
                 text-[1.6rem] sm:text-[2rem] h-[20rem] resize-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 hover:bg-green-500 transition-all duration-200
                 text-beige-200 w-full py-[1.6rem] text-[1.6rem] sm:text-[2rem] cursor-pointer disabled:opacity-60"
      >
        {loading ? t("form.sending") : t("form.submit")}
      </button>
    </form>
  );
}
