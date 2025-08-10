import { FloatingDock } from '@/components/ui/floating-dock'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import Image from 'next/image'
import React from 'react'
import photodp from "../../public/dp.jpeg";
import { tech,links,words } from '@/utils/contanst';

export default function Intro() {
  return (
    <div className=" flex flex-col gap-3">
          <div className=" relative md:w-80 bg-white flex flex-col  p-block-padding mx-4 md:mx-2 border border-gray-300">
            <Image
              src={photodp}
              className="  w-36 h-36 object-cover rounded-full border-1 border-gray-300 self-center opacity-95 mb-3 "
              alt="Profic pic"
            />
           
            <div className=" flex justify-center font-gloria">
              <TypewriterEffectSmooth cursorClassName="" words={words} />
            </div>
            <p className=" text-gray-500 font-gloria text-center">
              I&apos;m a  Full Stack web developer. I love building
              secure and scalable applications
            </p>
          </div>
          <div className=" bg-white p-block-padding border border-gray-300 py-2  mx-4 md:mx-2">
            
            <FloatingDock items={links} />
          </div>
          <div className=" bg-white justify-center md:max-w-[320px] p-block-padding border flex  border-gray-300  mx-4 md:mx-2">
            <p className=" flex flex-wrap gap-2 ">
              {tech.map((t) => (
                <span
                  key={t}
                  className=" bg-gray-200 text-gray-900 px-2 p-1 rounded-md font-quicksand "
                >
                  {t}
                </span>
              ))}
            </p>
          </div>
        </div>
  )
}

