"use client";
import Image from "next/image";
import React from "react";
import AvatarReg from '../../public/assets/images/user.png' 
import { Plus } from "lucide-react";
import { Button } from "@mui/material";

const Register = () => {
  return (
    <div className="h-screen overflow-hidden bg-gray-200 flex justify-center items-center text-black">
      <div className="bg-white w-[30vw] h-fit shadow-lg border rounded-lg py-12 px-10 flex flex-col gap-8">
        <p className="text-3xl font-bold text-center">Get Started</p>
        <p className="text-center -mt-6 text-gray-400">#Join the DenZ Revolution</p>

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
              className="w-28 h-28 cursor-pointer rounded-full"
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

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            placeholder="e.g. Jonh Doe"
            className="bg-transparent text-lg border border-slate-400 rounded-md px-5 py-3"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-lg">
            Wallet address
          </label>
          <p className="bg-slate-300 text-black opacity-45 text-lg border border-slate-500 rounded-md px-5 py-3">
            0x7385693ac30c600147491d01a30c9da3a0f79481
          </p>
        </div>

        <Button
          style={{
            backgroundColor: "rgb(59, 130, 246)",
            color: "white",
            paddingTop: "12px",
            paddingBottom: "12px",
            borderRadius: "999px",
            fontSize: "14px",
          }}
        >
          Connect
        </Button>
      </div>
    </div>
  );
};

export default Register;
