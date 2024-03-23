"use client";
import React, { useMemo, useState } from "react";
import DenZLogo from "../../public/assets/images/logo.png";
import Image from "next/image";
import {
  Home,
  TrendingUp,
  User,
  Settings,
  LogOut,
  BellRing,
  MessageSquareMore,
  Album,
} from "lucide-react";
import { Button } from "@mui/material";
import { tabsStore } from "@/store/tabState";
import AddPost from "./AddPost";
import { accountStore, contractStore, providerStore } from "@/store/contract";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { userStore } from "@/store/userStore";

const Sidebar = () => {
  const [popup, setPopup] = useState(false);
  const setTab = tabsStore((state) => state.setTab);
  const tab = tabsStore((state) => state.tab);
  const contract = contractStore((state) => state.contract);
  const router = useRouter();
  const setContract = contractStore((state) => state.setContract);
  const setAccount = accountStore((state) => state.setAccount);
  const setProvider = providerStore((state) => state.setProvider);
  const setUser = userStore((state) => state.setUser);
  const tabs = useMemo(
    () => [
      {
        name: "Home",
        icon: Home,
      },
      {
        name: "Trending",
        icon: TrendingUp,
      },
      {
        name: "Profile",
        icon: User,
      },
      {
        name: "Messages",
        icon: MessageSquareMore,
      },
      {
        name: "Bookmarks",
        icon: Album,
      },
      {
        name: "Notifications",
        icon: BellRing,
      },
      {
        name: "Settings",
        icon: Settings,
      },
    ],
    []
  );

  const logoutUser = async () => {
    setContract(null);
    setAccount("");
    setProvider(null);
    setUser(null);
  };
  return (
    <div className="border h-screen sticky top-0 flex flex-col">
      <Image src={DenZLogo} alt="" className="w-[80%]"></Image>
      <div className="p-6 flex flex-col gap-2">
        {tabs.map((tabObj, i) => (
          <div
            key={i}
            className={`flex gap-3 p-4 items-center transition-all hover:bg-gray-200 cursor-pointer rounded-md ${
              tab === tabObj.name ? "bg-gray-200" : "bg-white"
            }`}
            onClick={() => setTab(tabObj.name)}
          >
            <tabObj.icon size={25} />
            <p className="text-lg">{tabObj.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 flex-1 p-6 justify-end">
        <Button
          style={{
            backgroundColor: "rgb(59, 130, 246)",
            color: "white",
            paddingTop: "12px",
            paddingBottom: "12px",
            borderRadius: "999px",
            fontSize: "16px",
            fontWeight: "semibold",
          }}
          onClick={() => setPopup(true)}
        >
          Post
        </Button>
        <div
          className="flex w-full gap-3 p-4 items-center transition-all hover:bg-gray-200 cursor-pointer rounded-md"
          onClick={logoutUser}
        >
          <LogOut size={25} />
          <p className="text-lg">Log out</p>
        </div>
      </div>
      {popup && <AddPost setPopup={setPopup} />}
    </div>
  );
};

export default Sidebar;
