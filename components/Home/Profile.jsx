import React from "react";
import PostSection from "./PostSection";

const Profile = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-md p-8 h-fit">
        <div className="flex gap-7">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-32 h-32 cursor-pointer rounded-full object-cover"
          ></img>
          <div className="flex-1 flex flex-col gap-1 justify-center">
            <p className="font-semibold text-3xl">Radhika Marchant</p>
            <p className="text-sm text-slate-400 text-xl">435 Posts</p>
          </div>
        </div>
      </div>

    <p className="text-blue-500 text-2xl mt-5 font-semibold bg-white mb-3 px-8 py-4 shadow-md rounded-lg">My Posts</p>
      <PostSection />
    </div>
  );
};

export default Profile;
