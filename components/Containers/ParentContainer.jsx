"use client";
import React, { useEffect } from "react";
import Sidebar from "../Home/Sidebar";
import NavContainer from "./NavContainer";
import { contractStore } from "@/store/contract";

const ParentContainer = () => {
  return (
    <div className="grid grid-cols-[320px,1fr]">
      <Sidebar />
      <NavContainer />
    </div>
  );
};

export default ParentContainer;
