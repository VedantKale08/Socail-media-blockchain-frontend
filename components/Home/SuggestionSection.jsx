import React from 'react'
import Profile from '../../public/assets/images/profile.jpg'
import Image from "next/image"
import {CirclePlus} from 'lucide-react'

const SuggestionSection = () => {
  return (
    <div className='bg-white rounded-xl border p-8 flex flex-col gap-7 h-fit'>
      <p className='text-blue-500 font-semibold'>People you may know</p>
      {[1, 2, 3, 4, 5].map((tab, i) => (
        <div id={i} className='flex gap-4'>
          <div>
          <Image
            src={Profile}
            alt=""
            className="w-12 h-12 cursor-pointer rounded-full object-cover"
          ></Image>
          </div>
          <div className='flex-1 flex flex-col gap-1 '>
            <p className='font-semibold'>Blake Blossom</p>
            <p className='text-sm text-slate-400'>435 Posts</p>
          </div>
          <div className='flex justify-center items-center flex-col gap-1 text-slate-400'>
             <CirclePlus size={15}/>
             <p className='text-sm'>Add</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SuggestionSection