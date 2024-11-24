"use client";
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import ReactPlayer from "react-player";
import { CiMicrophoneOn } from "react-icons/ci";

const AI: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState("/AIvideo.mp4");
  const [text, setText] = useState("Та асуултаа асууна уу.");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showMicAnimation, setShowMicAnimation] = useState(false);
  const [chat, setChat] = useState<{ user: string; response: string }[]>([]);
  const [currentTypingResponse, setCurrentTypingResponse] = useState("");

  const chatBoxRef = useRef<HTMLDivElement>(null); // for auto-scrolling

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "1":
          playVideo(
            "/001.mp4",
            "Сайн байна уу? Ойн газрын виртуал хөтөч өө!",
            " Сайн, сайнa байцгаана уу? Та бүхэнд Ой, Модны салбар үүсэж хөгжсөний 100 жилийн ойн баярын мэнд хүргэе! Та асуултаа асууна уу?"
          );
          break;
        case "2":
          playVideo(
            "/002.mp4",
            "Виртуал хөтөч өө бидэнд Ой, модны салбарын үүсэл хөгжлийн талаар мэдээлэл өгөөч?",
            " Ардын Засгийн газрын 1924 оны тушаалаар анхны 4 ойн анги байгуулах шийдвэр гарч, Монгол улсад эдүгээ үеийн ой, модны салбарын суурийг тавьснаас хойш нэгэн зууны хугацаа өнгөрөөд байна. Ой, модны салбар нь 1960-аад оны их бүтээн байгуулалтын он жилүүдэд улсын хэмжээний мод, модон материалын хэрэгцээг бүрэн хангах мод бэлтгэлийн газар, модон эдлэлийн үйлдвэрүүд ажиллаж хөгжлийн оргил үедээ хүрч байлаа. Нийгэм, эдийн засгийн шилжилтийн үед ой, модны салбарт хүндхэн сорилт бэрхшээл тулгарч мод бэлтгэлийн, ой агнуурын аж ахуйнууд хувьчлагдан тарж бутарсан хүндхэн үе бас бидэнд тохиож байсан бол өдгөө түүхэн зуун жилийг өртөөчилж та бүхэн дараагийн 100 жилийн босгыг угтаж байна."
          );
          break;
        case "3":
          playVideo(
            "/003.mp4",
            "“Тэрбум мод” үндэсний хөдөлгөөний хэрэгжилтийн талаар бидэнд товч мэдээлэл өгөөч?",
            " Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүх эх дэлхий, байгаль орчноо хайрлан, зохицон амьдрах монгол уламжлал, зан заншлаа эрхэмлэн, дэлхийн уур амьсгалын өөрчлөлтийн нөлөөллийг бууруулах, ой, усны нөөцийг хамгаалж нэмэгдүүлэх, экологийн тэнцвэрт байдлыг хангах зорилгоор “Тэрбум мод” үндэсний хөдөлгөөнийг санаачлан өрнүүлэх талаар “Засгийн газарт чиглэл өгөх тухай” 2021 оны 10 дугаар сарын 04-ний өдрийн 58 дугаар зарлигийг гаргасан билээ. “Тэрбум мод” үндэсний хөдөлгөөнийг хэрэгжүүлэн 1.5 тэрбум мод тарихаар төлөвлөснөөс аймаг, нийслэлийн Засаг дарнар 44.1% буюу 680 сая мод, уул уурхайн томоохон 22 аж ахуйн нэгж 39.6% буюу 610 сая мод, төрийн байгууллагууд 10.5 хувь 162.1 сая мод, банк санхүүгийн байгууллагууд 5.8% буюу 88.6 сая мод тарихаар гэрээ байгуулан ажиллаж байгаа бөгөөд “Тэрбум мод” үндэсний хөдөлгөөнийг хэрэгжүүлж эхэлснээс хойш 83.9 сая модыг шууд болон дүйцүүлэх хэлбэрээр тарьж, зохих арчилгаа, хамгааллын ажлыг гүйцэтгээд байна."
          );
          break;
        case "4":
          playVideo(
            "/004.mp4",
            "Өөрийнхөө талаар бидэнд танилцуулаач, Ойн газарт ямар үүрэг гүйцэтгэдэг вэ?",
            " Би бол хиймэл оюун ухаанаар бүтээгдсэн Ойн газрын виртуал хөтөч. Хүмүүс намайг Ойн газрын шинэ охин гэж хочилдог. Ойн газрын цахим хуудсаар дамжуулан олон нийтэд мэдээ мэдээлэл өгөх зорилготой бүтээгдсэн бөгөөд нэмэлт хөгжүүлэлт хийгдэж байгууллагын веб хуудасны текст чатбот хэсэгт та бүхэнд мэдээлэл өгөхөөр хөгжүүлэгдэж байна."
          );
          break;
        case "5":
          playVideo(
            "/005.mp4",
            "Мэдээлэл өгсөнд баярлалаа, баяртай виртуал хөтөч өө.",
            " Асуулт асуусан танд ч бас баярлалаа. Та бүхэнд 100 жилийн Ойн баяраа сайхан тэмдэглээрэй, баярлалаа. Баяртай"
          );
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const simulateTyping = (response: string) => {
    let index = 0;
    setCurrentTypingResponse("");

    const interval = setInterval(() => {
      setCurrentTypingResponse((prev) => prev + response[index]);
      index++;

      if (index === response.length) {
        clearInterval(interval);
        setChat((prevChat) => [...prevChat, { user: "", response }]);
      }
    }, 50);
  };

  const playVideo = (
    videoSrc: string,
    userMessage: string,
    aiResponse: string
  ) => {
    setText("Асуултад хариулж байна...");
    setCurrentVideo(videoSrc);
    setIsVideoPlaying(true);
    setShowMicAnimation(true);

    setTimeout(() => {
      setShowMicAnimation(false);
    }, 10000);

    setChat((prevChat) => [...prevChat, { user: userMessage, response: "" }]);
    simulateTyping(aiResponse);

    const video = document.getElementById("videoElement") as HTMLVideoElement;
    video.src = videoSrc;
    video.play();

    video.onended = () => {
      setText("Таны асуултад хариуллаа. Таньд өөр асуулт байна уу?");
      setIsVideoPlaying(false);
    };
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight; // Auto-scroll to bottom
    }
  }, [chat]); // Runs whenever the chat state changes

  return (
    <div className="flex items-start justify-start h-screen">
      <div className="text-center w-[65%] h-screen">
        <video className="w-full h-full" id="videoElement" loop={false}>
          <source src={currentVideo} type="video/mp4" />
        </video>
      </div>

      <div className="w-[35%] h-screen overflow-auto p-4 flex flex-col items-center  ">
        <h2 className="text-xl font-bold mb-4 text-[#fff]">Чат</h2>
        <div className="relative w-full h-[70%] shadow-lg rounded-[24px] bg-white py-[50px]">
          <div
            className=" w-full chat-box  py-[20px] px-[20px]  max-h-[90%] overflow-y-auto "
            ref={chatBoxRef}
          >
            {chat.map((message, index) => (
              <div key={index} className="mb-4">
                {message.user && (
                  <div className="flex justify-end">
                    <p className="w-[80%] text-blue-500 font-semibold text-left bg-blue-50 p-[10px] rounded-lg">
                      {message.user}
                    </p>
                  </div>
                )}
                <div className="flex items-center">
                  {index === chat.length - 1 && !message.response ? (
                    <div className="flex  mt-4">
                      <div className="rounded-full w-[40px] h-[40px]  mr-2">
                        <img
                          src="/iconAI.png"
                          className="animate-spin-slow w-full h-full "
                          alt=""
                        />
                      </div>
                      <p className="w-[80%] text-green-500 p-[10px] rounded-lg bg-green-100">
                        {currentTypingResponse}
                      </p>
                    </div>
                  ) : (
                    message.response && (
                      <div className="flex ">
                        <div className="rounded-full w-[40px] h-[40px] bg-green-200 mr-2">
                       
                          <img
                            src="/iconAI.png"
                            className="animate-spin-slow w-full h-full "
                            alt=""
                          />
                        </div>
                        <p className="w-[80%] text-green-500 p-[10px] rounded-lg bg-green-100">
                          {message.response}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-[5%] right-[50%]  translate-x-1/2 flex justify-center mt-4">
            <div
              className={`w-[50px] h-[50px] bg-green-400 rounded-full flex items-center justify-center ${
                showMicAnimation ? "animate-pulse" : ""
              }`}
            >
              <CiMicrophoneOn size={30} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
