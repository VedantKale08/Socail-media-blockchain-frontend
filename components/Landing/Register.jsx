"use client";
import Image from "next/image";
import React from "react";
import AvatarReg from '../../public/assets/images/user.png' 
import { Plus } from "lucide-react";

const Register = () => {
  return (
    <div className="h-screen overflow-hidden bg-black flex justify-center items-center text-white">
      <div className="bg-[#16181c] w-[30vw] h-fit shadow-md rounded-lg p-8 flex flex-col gap-8">
        {/* <p className="text-2xl font-bold ">DenZ</p> */}
        <p className="text-2xl font-bold">Get Started</p>

        <label className="m-auto relative flex justify-center" htmlFor="image">
          {false ? (
            <img
              src={image}
              alt=""
              className="w-24 h-24 cursor-pointer rounded-full object-cover bg-center"
            />
          ) : (
            <Image
              src={AvatarReg}
              alt=""
              className="w-24 h-24 cursor-pointer rounded-full"
            ></Image>
          )}
          <Plus className="absolute bottom-0 right-2 text-white text-2xl bg-blue-500 rounded-full p-1 cursor-pointer" />
          <input
            id="image"
            type="file"
            accept="image/*"
            className="opacity-0 text-[0.4rem] absolute"
            onChange={(e) => uploadImage(e.target.files[0])}
          />
        </label>

        <div className="relative h-12 w-full">
          <input
            className="peer h-12 w-full rounded-[7px] border border-blue-gray-200 border-t bg-transparent px-3 py-2.5 font-sans text-base font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Your Name
          </label>
          {/* <BsSearch className="h-5 w-5 absolute right-2 top-[10px] text-gray-500" /> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
