import React from "react";
import PopupContainer from "../Containers/PopUpContainer";
import Lottie from "react-lottie";
import * as animationData from "@/public/assets/lottie/reward.json";
import { Button } from "@mui/material";

const RewardPopup = ({ setPopup,text }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
          onClick={() => setPopup(false)}
        >
          Claim
        </Button>
      </div>
    </PopupContainer>
  );
};

export default RewardPopup;
