"use client";
import React, { useState } from "react";
import Lottie from "react-lottie";
import { ethers } from "ethers";
import * as animationData from "@/public/assets/lottie/landing.json";
import { Button } from "@mui/material";
import SocialMedia from "../../app/artifacts/contracts/SocialMedia.sol/SocialMedia.json";
import { useRouter } from "next/navigation";
import { accountStore, contractStore, providerStore } from "@/store/contract";

const Landing = () => {
  const setContract = contractStore((state) => state.setContract);
  const setAccount = accountStore((state) => state.setAccount);
  const setProvider = providerStore((state) => state.setProvider);
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setAccount(address);

        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const localContract = new ethers.Contract(
          contractAddress,
          SocialMedia.abi,
          signer
        );
        setContract(localContract);
        console.log("Contract", localContract);
        setProvider(provider);
        router.push("/create-user");
      } catch (error) {
        console.error(error);
        // Handle error
      }
    } else {
      console.error("Metamask is not installed!!!!");
      // Handle no Metamask error
    }
  };

  return (
    <>
      <div className="h-screen overflow-hidden flex items-center flex-col bg-cover bg-center bg-landing">
        <div>
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
        <div className="text-black font-bold text-4xl mt-10">
          <span className="text-blue-500">#Join</span> the DenZ Revolution
        </div>
        <div className="mt-10">
          <Button
            style={{
              backgroundColor: "rgb(59, 130, 246)",
              color: "white",
              paddingLeft: "70px",
              paddingRight: "70px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "9999px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            onClick={connectWallet}
          >
            Connect
          </Button>
        </div>
      </div>
    </>
  );
};

export default Landing;
