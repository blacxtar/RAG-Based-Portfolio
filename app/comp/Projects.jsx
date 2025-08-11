"use client"

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Projects({  title,
  logo,
  description,
  duration,
  info }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-4xl  bg-white group">
      <div className=" border-gray-200 overflow-hidden ">
        {/* Header */}
        <button
          onClick={toggleAccordion}
          className="w-full flex items-center justify-between py-4 md:px-6 md:p-4 bg-white transition-colors duration-200  "
        >
          <div className="flex items-center space-x-4">
            {/* Project Logo*/}
            <div className="w-12 h-12 shadow-sm border  flex items-center justify-center" >
             <Image src={logo} alt="" width={48} height={48}/>
            </div>
            
            {/* Few words description */}
            <div className="text-left ">
              <div className="flex items-center space-x-2  ">
                <h3 className="text-base font-medium text-gray-900 group-hover:text-green-700 transition-all">{title}</h3>
                <ChevronUp 
                  className={`w-5 h-5 text-gray-400 group-hover:text-green-700 transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
          
          {/* Date Range */}
          <div className="text-gray-500 text-sm  hidden sm:block">
            {duration}
          </div>
        </button>

        {/* Expandable Content */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="sm:px-6 pb-6 space-y-4">
           
            
            {/* Detailed info */}
           <div className=" accordion-body font-quicksand text-base" dangerouslySetInnerHTML={{__html: info}}></div>

          </div>
        </div>
      </div>
    </div>
  );
}

