"use client";
import React from "react";
import { BellRing, Coins } from "lucide-react";
import AvatarReg from "../../public/assets/images/user.png";
import Image from "next/image";
import { Tooltip, IconButton } from "@mui/material";
import { tabsStore } from "@/store/tabState";
import { userStore } from "@/store/userStore";

const Navbar = () => {
  const setTab = tabsStore((state) => state.setTab);
  const user = userStore((state) => state.user);

  return (
    <div className="border h-[90px] top-0 bg-white flex justify-end items-center z-40">
      <div className="mr-14 flex gap-5">
        <div className="p-3 bg-slate-200 rounded-full" onClick={() => setTab("Notifications")}>
          <Tooltip title="Notifications">
            <BellRing />
          </Tooltip>
        </div>
        <div className="p-3 bg-slate-200 rounded-full">
          <Tooltip title="Points">
            <Coins />
          </Tooltip>
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setTab("Profile")}
        >
          <img
            src={`https://gateway.pinata.cloud/ipfs${user?.data?.image?.substring(
              6
            )}`}
            alt=""
            className="w-12 h-12 rounded-full"
          ></img>
          <p className="font-bold text-lg">{user?.data?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
