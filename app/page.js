"use client";




import { cn } from "@/lib/utils";



import { useState } from "react";
import Switch from "react-switch";
import Aboutme from "./comp/Aboutme";
import ChatPage from "./comp/ChatPage";
import Intro from "./comp/Intro";





export default function Home() {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };
    
   

 
  return (
    <div className="relative flex  md:h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none  absolute inset-0 flex items-center  justify-center bg-white hover:bg-gradient-to-br hover:from-green-300 hover:to-blue-300  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className=" z-10  flex flex-col mt-10   md:mt-2 gap-3 md:gap-0 md:flex-row ">
     <Intro/>
        <div className=" relative bg-white items-center flex flex-col   max-h-[676px]  p-block-padding text-5xl mx-4 md:mx-2 min-h-[550px]  lg:min-w-[700px] lg:max-w-[650px]  border border-gray-300">
          <div className="flex  justify-center gap-4">
            <h1 className=" text-xl text-center font-bold  font-gloria mb-2">
              About me
            </h1>
            <div className="flex items-center space-x-2">
              <Switch
                height={21}
                handleDiameter={17}
                onColor="#93c5fd"
                width={38}
                offHandleColor="#64645F"
                onHandleColor="#3b82f6"
                uncheckedIcon={false}
                offColor="#ffffff"
                className="border border-gray-300"
                onChange={handleChange}
                checked={isChecked}
                checkedIcon={false}
              />
            </div>{" "}
            <h1 className={`${isChecked && "text-blue-600"} text-xl text-center font-bold  font-gloria mb-2`}>
              Chat Expert
            </h1>
          </div>
          {isChecked ? <ChatPage /> : <Aboutme />}
        </div>
      </div>
    </div>
  );
}
