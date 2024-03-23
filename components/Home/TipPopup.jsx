import React, { useState } from "react";
import PopupContainer from "../Containers/PopUpContainer";
import { Tooltip, Button } from "@mui/material";
import { contractStore } from "@/store/contract";
import { ethers } from "ethers";

const TipPopup = ({ post, setPopup }) => {
  const [ether, setEther] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!window.ethereum) throw new Error("No wallet");
      else if (ether >= 1) console.error("Insufficient funds");
      else {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tx = await signer.sendTransaction({
          to: post.userId,
          value: ethers.utils.parseEther(ether),
        });
        // console.log({ ether, addr });
        setPopup(false);
        console.log("tx", tx);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <PopupContainer setPopup={setPopup}>
      <form
        onSubmit={handleSubmit}
        className="w-[40vw] h-fit bg-white rounded-lg p-8"
      >
        <div className="flex gap-2 flex-col mt-7">
          <label htmlFor="name" className="text-xl font-semibold">
            Enter the amount of ethers you wish to donate!!
          </label>
          <input
            placeholder="What's new ?!"
            rows={13}
            className="w-full p-4 outline-none bg-slate-100 rounded-lg"
            onChange={(e) => setEther(e.target.value)}
            value={ether}
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <Tooltip
            title="Add Content"
            className="relative cursor-pointer"
          ></Tooltip>
          <Button
            style={{
              backgroundColor: "rgb(59, 130, 246)",
              color: "white",
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "28px",
              paddingRight: "28px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Donate
          </Button>
        </div>
      </form>
    </PopupContainer>
  );
};

export default TipPopup;
