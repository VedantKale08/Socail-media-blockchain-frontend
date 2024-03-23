import React, { useState } from "react";
import PopupContainer from "../Containers/PopUpContainer";
import Image from "next/image";
import { Tooltip, Button } from "@mui/material";
import { contractStore } from "@/store/contract";

const TipPopup = ({ post }) => {
  const [popup, setPopup] = useState(false);
  const [desc, setDesc] = useState("");
  const contract = contractStore((state) => state.contract);
  console.log(post);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contract.rewardEngagement(post?.userId);
      setPopup(false);
    } catch (error) {
      console.log(error);
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
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
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
