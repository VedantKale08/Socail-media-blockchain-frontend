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
    const localProvider = new ethers.BrowserProvider(window.ethereum);
    if (localProvider) {
      // To handle the account changes in the metamask wallet
      // window.ethereum.on("chainChanged", () => {
      //   window.location.reload();
      // });

      // window.ethereum.on("accountsChanged", () => {
      //   window.location.reload();
      // });

      await localProvider.send("eth_requestAccounts", []);
      const signer = await localProvider.getSigner();
      const address = await signer.getAddress();
      console.log(address);
      setAccount(address);
      let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      router.push("create-user");

      const localContract = new ethers.Contract(
        contractAddress,
        SocialMedia.abi,
        signer
      );
      // await contract.login();
      setContract(localContract);
      // console.log("Contract", localContract);
      setProvider(localProvider);
    } else {
      toast.error("Metamask is not installed!!!!");
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
