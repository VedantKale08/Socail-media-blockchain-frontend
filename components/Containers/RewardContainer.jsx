"use client"
import React, { useEffect, useState } from 'react'
import RewardPopup from '../Home/RewardPopup'

const RewardContainer = ({children}) => {
    const [timeSpent, setTimeSpent] = useState(0);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeSpent((prevTimeSpent) => {
          if (prevTimeSpent >= 1800 && prevTimeSpent % 1800 == 0) {
            setPopup(true);
          }
          return prevTimeSpent + 1;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);
    
  return (
    <div>
      {children}
      {popup && <RewardPopup setPopup={setPopup} />}
    </div>
  );
}

export default RewardContainer