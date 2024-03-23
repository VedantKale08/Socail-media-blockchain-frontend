"use client";
import React, { useEffect, useState } from "react";
import RewardPopup from "../Home/RewardPopup";
import { userStore } from "@/store/userStore";

const RewardContainer = ({ children }) => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [popup, setPopup] = useState(false);
  const [text, setText] = useState("");
  const user = userStore((state) => state.user);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prevTimeSpent) => {
        if (prevTimeSpent >= 50 && prevTimeSpent % 50 == 0) {
          setPopup(true);
          setText(
            "You got 0.005 ethers for viewing the website for 30 minutes"
          );
        }
        return prevTimeSpent + 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (user && user.data.followers >= 50 && user.data.followers % 50 === 0) {
      setPopup(true);
      setText(
        `You got 0.005 ethers for gaining ${user.data.followers} followers`
      );
    }
  }, []);

  useEffect(() => {
    if (
      user &&
      user.followers >= 1000 &&
      user.totalPosts >= 10 &&
      user.totalPosts % 10 === 0
    ) {
      setPopup(true);
      setText(`You got 0.005 ethers for posting ${user.totalPosts} posts`);
    } else if (user && user.totalPosts >= 20 && user.totalPosts % 20 === 0) {
      setPopup(true);
      setText(`You got 0.005 ethers for posting ${user.totalPosts} posts`);
    }
  }, []);

  return (
    <div>
      {children}
      {popup && <RewardPopup setPopup={setPopup} text={text} />}
    </div>
  );
};

export default RewardContainer;
