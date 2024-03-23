"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../Home/Sidebar";
import NavContainer from "./NavContainer";
import { accountStore, contractStore } from "@/store/contract";

const ParentContainer = () => {
  const contract = contractStore((state) => state.contract);
  const account = accountStore((state) => state.account);
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log(contract, account);
    const fetchUserData = async () => {
      console.log(contract, account);
      try {
        setData(await contract.getUserProfile(account));
        console.log("Userrr", data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log("Dataaaaa", data);
  }, [data]);

  return (
    <div className="grid grid-cols-[320px,1fr]">
      <Sidebar />
      <NavContainer />
    </div>
  );
};

export default ParentContainer;
