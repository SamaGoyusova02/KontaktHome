import message from "../assets/message.svg"

function Chat() {
  return (
    <section>
       <div className="fixed z-50 bottom-6 left-8 lg:left-auto lg:right-6 flex items-center justify-center">
        <span className="absolute w-20 h-20 bg-[#ff003c]/20 rounded-full animate-ping pointer-events-none"></span>
        <img src={message} alt="message" className="cursor-pointer relative w-[60px] h-[60px] object-contain" />
      </div>
    </section>
  )
}

export default Chat;