"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AvatarReg from "../../public/assets/images/user.png";
import { Plus } from "lucide-react";
import { Button } from "@mui/material";
import { accountStore, contractStore } from "@/store/contract";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const contract = contractStore((state) => state.contract);
  const account = accountStore((state) => state.account);
  const [userName, setUserName] = useState("");

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("No image selected");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.set("file", file);

        const response = await axios({
          method: "POST",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `b15fff7a43d745fa592f`,
            pinata_secret_api_key: `803891a6cf07e71ccbdbeabf93ded9df824385a9061f567a68190aa49ee2b61f`,
            "Content-Type": "multipart/form-data",
          },
        });
        const imageHash = `ipfs://${response.data.IpfsHash}`;
        try {
          console.log("Image", imageHash);
          await contract.createUser(userName, imageHash);
          router.push("home");
        } catch (error) {
          console.log("Errorrrrr", error);
        }
        setFileName("");
        setFile(undefined);
        toast.success("Image uploaded successfully!!!");
      } catch (error) {
        toast.error("Unable to upload to Pinata....");
      }
    }
  };
  const retrieveFile = (e) => {
    console.log(account);
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(data);
    };
    setFileName(data?.name);
  };

  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        const isLoggedIn = await contract.login().toString();
        // console.log("Hello", await isLoggedIn);
        if (isLoggedIn) router.push("home");
      } catch (error) {
        console.log(error);
      }
    };
    contract && isLoggedIn();
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-gray-200 flex justify-center items-center text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[30vw] h-fit shadow-lg border rounded-lg py-12 px-10 flex flex-col gap-8"
      >
        <p className="text-3xl font-bold text-center">Get Started</p>
        <p className="text-center -mt-6 text-gray-400">
          #Join the DenZ Revolution
        </p>
        {/* <form action="" onSubmit={handleSubmit}> */}
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
            onChange={retrieveFile}
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
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-lg">
            Wallet address
          </label>
          <p className="bg-slate-300 text-black opacity-45 text-lg border border-slate-500 rounded-md px-5 py-3 line-clamp-3">
            {account}
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
          type="submit"
        >
          Connect
        </Button>
        {/* </form> */}
      </form>
    </div>
  );
};

export default Register;
