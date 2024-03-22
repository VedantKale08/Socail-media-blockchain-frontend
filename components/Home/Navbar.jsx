import React from 'react'
import {BellRing,Coins} from 'lucide-react'
import AvatarReg from '../../public/assets/images/user.png' 
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='border h-[90px] sticky top-0 bg-white flex justify-end items-center'>
      <div className='mr-14 flex gap-5'>
        <div className='p-3 bg-slate-200 rounded-full'><BellRing/></div>
        <div className='p-3 bg-slate-200 rounded-full'><Coins/></div>
        <div className='flex items-center gap-3'>
        <Image
              src={AvatarReg}
              alt=""
              className="w-12 h-12 cursor-pointer rounded-full"
            ></Image>
            <p className='font-bold text-lg'>Code of Duty</p>
        </div>
      </div>
     </div>
  )
}

export default Navbar