"use client";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "@/public/assets/lottie/landing.json";
import { Button } from "@mui/material";


const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="h-screen overflow-hidden flex items-center flex-col">
        <div>
          <Lottie options={defaultOptions} height={600} width={600} />
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
          >
            Connect
          </Button>
        </div>
      </div>
    </>
  );
};

export default Landing;
