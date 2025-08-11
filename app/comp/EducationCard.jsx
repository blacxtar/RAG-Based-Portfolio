import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const EducationCard = ({degree, schoolName, image, link}) => {
  return (
    <>
    <div className=' hover:bg-[#2ebe3a19] p-4 rounded-md font-quicksand group transition-all'>
       <a href={link} target='_blank' className=' flex flex-row gap-4'>
            <Image className='w-12 h-12 bg-white shadow-sm border-[#19712045] border' src={image} alt='College Logo' width={48} height={48}/>
        <div>
        <h3 className=' text-lg font-medium flex items-center group-hover:text-[#197121fc] '>{degree}<ArrowUpRight className=' h-5 hidden group-hover:block transition-all' /></h3>
        <p>{schoolName}</p>
        </div>
       </a>
    </div>
    </>
  )
}

export default EducationCard;