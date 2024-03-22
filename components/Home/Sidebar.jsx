import React from 'react'
import DenZLogo from "../../public/assets/images/logo.png"; 
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='border h-screen sticky top-0'>
      <Image src={DenZLogo} alt="" className="w-[80%]"></Image>
    </div>
  );
}

export default Sidebar