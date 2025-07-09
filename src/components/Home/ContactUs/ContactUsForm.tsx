import { useTranslation } from "react-i18next";

export default function ContactUsForm() {
  const { t } = useTranslation();

  return (
    <form className="flex flex-col gap-[2.4rem]">
      <input 
        type="text" 
        name="name"
        id="name"
        placeholder={t("form.namePlaceholder")}
        required
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem] text-[1.6rem] sm:text-[2rem]"
      />
      <input 
        type="tel" 
        name="phone"
        id="phone"
        placeholder={t("form.phonePlaceholder")}
        required
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem] text-[1.6rem] sm:text-[2rem]"
      />
      <textarea 
        name="message"
        id="message"
        placeholder={t("form.messagePlaceholder")}
        required
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem]
                   text-[1.6rem] sm:text-[2rem] h-[20rem] resize-none"
      />
      <button 
        type="submit"
        className="bg-green-600 hover:bg-green-500 transition-all duration-200
                 text-beige-200 w-full py-[1.6rem] text-[1.6rem] sm:text-[2rem] cursor-pointer"
      >
        {t("form.submit")}
      </button>
    </form>
  );
}
