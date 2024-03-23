import React from "react";
import PopupContainer from "../Containers/PopUpContainer";
import Lottie from "react-lottie";
import * as animationData from "@/public/assets/lottie/reward.json";
import { Button } from "@mui/material";
import { contractStore } from "@/store/contract";
import { ethers } from "ethers";

const RewardPopup = ({ setPopup }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const contract = contractStore((state) => state.contract);

  const rewardUser = async () => {
    try {
      const amountEther = 0.001;
      const amountWei = ethers.utils?.parseEther(amountEther.toString());

      // Send the transaction
      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: amountWei,
      });

      // Wait for the transaction to be mined
      await tx.wait();
      await contract.rewardEngagement(
        "0x7385693aC30c600147491d01a30c9Da3a0f79481"
      );
      setPopup(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PopupContainer setPopup={setPopup} bgClose={false}>
      <div className="bg-white w-[35vw] rounded-lg shadow-lg p-8 flex flex-col items-center">
        <p className="text-blue-500 font-bold text-4xl mb-5">Hooray!!! </p>
        <div className="text-xl">
          You got 0.30 ethers for viewing the website for 30 minutes
        </div>
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
          onClick={rewardUser}
        >
          Claim
        </Button>
      </div>
    </PopupContainer>
  );
};

export default RewardPopup;
