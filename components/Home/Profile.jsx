import React, { useEffect, useState } from "react";
import PostSection from "./PostSection";
import axios from "axios";
import toast from "react-hot-toast";
import { userStore } from "@/store/userStore";
import RewardPopup from "./RewardPopup";
import { accountStore } from "@/store/contract";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(0);
  const [popup, setPopup] = useState(false);
  const user = userStore((state) => state.user);
  const account = accountStore((state) => state.account);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          method: "get",
          url: `http://localhost:5000/api/users/${user.data.userId}/total-likes`,
        });

        setLikes(data.data.totalLikesCount);
      } catch (error) {
        toast.error(error.error);
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          method: "get",
          url: `http://localhost:5000/api/posts/${account}`,
        });

        console.log(data.data);
        setPosts(data.data);
      } catch (error) {
        toast.error(error.error);
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (likes && likes >= 50 && likes % 50 === 0) {
      setPopup(true);
      setText(`You got 0.005 ethers for gaining ${likes} likes`);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 bg-white rounded-lg shadow-md p-8 h-fit">
        <div className="flex gap-7">
          <img
            src={`https://gateway.pinata.cloud/ipfs${user.data.image.substring(
              6
            )}`}
            alt=""
            className="w-32 h-32 cursor-pointer rounded-full object-cover"
          ></img>
          <div className="flex-1 flex flex-col gap-1 justify-center">
            <p className="font-semibold text-3xl">{user.data.name}</p>
            <p className="text-sm text-slate-400 text-xl">
              {user.totalPosts} Posts &#46; {user.data.followers} Followers
              &#46; {likes} Total likes
            </p>
          </div>
        </div>
      </div>

      <p className="text-blue-500 text-2xl mt-5 font-semibold bg-white mb-3 px-8 py-4 shadow-md rounded-lg">
        My Posts
      </p>
      <PostSection posts={posts} />
      {popup && <RewardPopup setPopup={setPopup} text={text} />}
    </div>
  );
};

export default Profile;
