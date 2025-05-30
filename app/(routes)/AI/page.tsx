"use client";
import { MdOpenInNew, MdClose } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import { io, Socket } from "socket.io-client";
import { marked } from "marked";
import Be from "@/public/iconAI.png";
import AiIcon from "@/app/icons/ai_icon";
const socket: Socket = io("https://backendlg-kznv.onrender.com/", {
  transports: ["websocket"],
});

interface Message {
  ask: string;
  response: string;
  isTyping: boolean;
}

const Chatgpt: React.FC = () => {
  const [chat, setChat] = useState<string>("");
  const [showChat, setShowChat] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const Bear = Be.src;
  const sendMessage = (): void => {
    if (chat.trim() === "") return;

    const newMessage: Message = { ask: chat, response: "", isTyping: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      socket.emit("ask", chat);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setChat("");
    setShowChat(true);
  };

  const formatResponse = async (text: string): Promise<string> => {
    const cleanedText = text.replace(/【[^】]*?】/g, "");

    const parsedHtml = await marked.parse(cleanedText);

    return parsedHtml;
  };

  const typeResponse = async (response: string): Promise<void> => {
    const lastIndex = messages.length - 1;
    const newMessages = [...messages];

    const typing = async (
      index: number,
      text: string,
      delay: number = 20
    ): Promise<void> => {
      if (index < text.length) {
        newMessages[lastIndex].response += text.charAt(index);
        setMessages([...newMessages]);
        setTimeout(() => typing(index + 1, text, delay), delay);
      } else {
        newMessages[lastIndex].isTyping = false;
        setMessages([...newMessages]);
      }
    };

    const formattedResponse = await formatResponse(response);
    typing(0, formattedResponse);
    console.log(showChat);
  };

  useEffect(() => {
    socket.on("response", (response: string) => {
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage) {
          lastMessage.isTyping = false;
        }
        return [...newMessages];
      });

      typeResponse(response);
    });

    return () => {
      socket.off("response");
    };
  }, [messages]);

  const newChat = (): void => {
    setMessages([]);
    setChat("");
    setShowChat(true);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const showChatGpt = (): void => {
    setShow(true);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {show ? (
        <div className="z-[999] md:z-[201] shadow-md fixed   pt-[24px] px-[12px] pb-[12px] flex flex-col justify-between rounded-[16px]  w-full h-full sm:bottom-[5%] sm:right-[5%] bg-[#fff] sm:w-[50%] sm:h-[70%] md:w-[50%] md:h-[70%] lg:w-[40%] lg:h-[70%] 2xl:w-[35%] 2xl:h-[70%]">
          <div className="w-full h-[6%] bg-white border-b-[1px] pb-[10px] border-[#F4F4F4] flex justify-between">
            <div className="w-full flex gap-[8px] items-center">
              <AiIcon />
              <div className="text-[#113032] text-[16px] font-bold ">
                Ойн туслах
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              <MdOpenInNew
                className="cursor-pointer w-[24px] h-[20px] text-[#759090] duration-[0.3s] hover:w-[27px] hover:h-[27px] hover:text-[#226fd8] hover:rotate-90"
                onClick={newChat}
              />
              <MdClose
                className="cursor-pointer w-[24px] h-[24px] text-[#759090] duration-[500ms] transform hover:scale-125 hover:rotate-180 hover:text-[#226fd8]"
                onClick={() => setShow(false)}
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-end h-[85%] overflow-hidden bg-[#fff] gap-[10px]">
            <div className="w-full h-full overflow-y-auto">
              {messages.length > 0 ? null : (
                <div className="w-full h-full flex flex-col gap-[18px] items-center justify-center bg-[radial-gradient(circle,_rgba(20,183,95,0.3)_5%,_#fff_60%)]">
                  <img
                    className="w-[88px] h-[88px] rounded-full"
                    src={Bear}
                    alt=""
                  />
                  <p className="text-[#787878] text-center font-semibold">
                    Таньд юугаар туслах вэ ?
                  </p>
                </div>
              )}
              {messages.map((item, i) => (
                <div key={i} className="flex flex-col w-full">
                  <div className="flex justify-end">
                    {item.ask.length > 0 && (
                      <div className="mt-[5px] w-auto max-w-[70%] inline bg-[#F4F4F4] pr-[15px] pl-[15px] pt-[12px] pb-[12px] rounded-[20px] flex justify-end">
                        <div className="w-full break-words whitespace-normal text-left font-regular">
                          {item.ask}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-[8px] items-start">
                    <div className="w-[32px] h-[32px] rounded-[50%] shadow-2xl border-[#D9F2E4] border-[0.5px] flex items-center  justify-center mt-[5px]">
                      <AiIcon />
                    </div>
                    <div className="mt-[5px] w-auto max-w-[70%] inline bg-[#fff] border-[1px] border-[#f4f4f4] pr-[15px] pl-[15px] pt-[12px] pb-[12px] rounded-[20px]">
                      {item.isTyping ? (
                        <div className="flex font-regular gap-[8px] items-start">
                          <div className="w-full text-left">
                            <div className="dot dot-1"></div>
                            <div className="dot dot-2"></div>
                            <div className="dot dot-3"></div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="w-full font-regular break-words whitespace-normal text-left"
                          dangerouslySetInnerHTML={{ __html: item.response }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="w-full relative">
              <textarea
                onKeyPress={handleKeyPress}
                value={chat}
                className="w-full border-[0.5px] shadow-md rounded-[20px] pl-[24px] pr-[50px] py-[10px] overflow-auto"
                placeholder="Асуултаа оруулна уу..."
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setChat(e.target.value)
                }
              />
              <div
                onClick={sendMessage}
                className="absolute bottom-[27%] right-[5%] w-[30px] h-[30px] cursor-pointer p-[5px] rounded-[50%]"
              >
                <BsSend className="w-full h-[100%] opacity-[50%] cursor-pointer hover:text-[blue]" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed bottom-[2px] right-[40px] text-white bg-black/30 p-1 rounded-lg z-[999]">
            Ойн туслах
          </div>
          <div className="fixed bottom-[5px] right-[10px] flex items-center  z-[999]">
            <div className="w-[150px] h-[150px]  bg-[radial-gradient(circle,_rgba(20,183,95,0.3)_5%,_rgba(255,255,255,0)_60%)] flex justify-center items-center rounded-[50%] cursor-pointer">
              <div
                onClick={showChatGpt}
                style={{
                  backgroundImage: `url(/icon/oinAvatar.GIF)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-[76px] h-[76px] z-[12] rounded-[50%]  shadow-lg cursor-pointer duration-200 hover:scale-105"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Chatgpt;
