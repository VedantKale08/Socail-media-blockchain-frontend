import React from "react";
import PopupContainer from "../Containers/PopUpContainer";
import Lottie from "react-lottie";
import * as animationData from "@/public/assets/lottie/reward.json";
import { Button } from "@mui/material";
import { accountStore, contractStore } from "@/store/contract";
import { ethers } from "ethers";

const RewardPopup = ({ setPopup, text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const contract = contractStore((state) => state.contract);
  const account = accountStore((state) => state.account);

  const rewardUser = async ({ ether, addr }) => {
    try {
      if (!window.ethereum) throw new Error("No wallet");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
      console.log("tx", tx);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <PopupContainer setPopup={setPopup} bgClose={false}>
      <div className="bg-white w-[35vw] rounded-lg shadow-lg p-8 flex flex-col items-center">
        <p className="text-blue-500 font-bold text-4xl mb-5">Hooray!!! </p>
        <div className="text-xl">{text}</div>
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <Button
          style={{
            backgroundColor: "rgb(59, 130, 246)",
            color: "white",
            padding: "12px 30px 12px 30px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "semibold",
            width: "100%",
          }}
          onClick={() =>
            rewardUser({
              ether: "0.002",
              addr: "0xdb159108EBE9A4857FA4ea88D87991dE0D374b1d",
            })
          }
        >
          Claim
        </Button>
      </div>
    </PopupContainer>
  );
};

export default RewardPopup;
