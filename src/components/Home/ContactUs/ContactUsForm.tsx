export default function ContactUsForm() {
  return (
    <form className="flex flex-col gap-[2.4rem]">
      <input 
        type="text" 
        name="name"
        id="name"
        placeholder="Ваше имя"
        required
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem] text-[1.6rem] sm:text-[2rem]"
      />
      <input 
        type="tel" 
        name="phone"
        id="phone"
        placeholder="Номер телефона"
        required
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem] text-[1.6rem] sm:text-[2rem]"
      />
      <textarea 
        name="message"
        id="message"
        placeholder="Сообщение"
        required
        className="text-black-400 border-[0.1rem] border-black-100 py-[1.8rem] pl-[2.4rem]
                     text-[1.6rem] sm:text-[2rem] h-[20rem] resize-none"
      />
      <button 
        type="submit"
        className="bg-green-600 hover:bg-green-500 transition-all duration-200
                   text-beige-200 w-full py-[1.6rem] text-[1.6rem] sm:text-[2rem] cursor-pointer"
      >
        Отправить
      </button>
    </form>
  )
}
