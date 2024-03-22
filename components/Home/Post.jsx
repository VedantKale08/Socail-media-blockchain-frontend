import React, { useState } from "react";
import { Heart, Share2, MessageCircleMore } from "lucide-react";
import ReactPlayer from "react-player";
import axios from "axios";
import toast from "react-hot-toast";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [likes, setLikes] = useState(post.likes.length);

  const likePost = async () => {
    try {
      const data = await axios.post(
        `http://localhost:5000/api/posts/${post._id}/like`,
        { userId: "0x7385693aC30c600147491d01a30c9Da3a0f79481" }
      );

      console.log(data.data);
      setLikes((prev)=>prev+1);
      // toast.success("Post liked successfully");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred while liking the post");
      }
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg shadow-md  p-8">
      {/* user section */}
      <div className="flex gap-4">
        <img
          src={post.image}
          alt=""
          className="w-12 h-12 cursor-pointer rounded-full object-cover"
        ></img>
        <div className="flex-1 flex flex-col gap-1 ">
          <p className="font-semibold">{post.username}</p>
          <p className="text-sm text-slate-400">435 Posts</p>
        </div>
      </div>

      {/* content section */}
      <p>{post.description}</p>
      {post.contentType === "image" ? (
        <img
          src={
            !post.content.startsWith("ipfs")
              ? post.content
              : `https://gateway.pinata.cloud/ipfs${post.content.substring(6)}`
          }
          alt=""
          className="rounded-lg w-[80%] m-auto"
        />
      ) : (
        <ReactPlayer
          url="/assets/images/video.mp4"
          playing
          muted
          loop
          controls={false}
          light={false}
          pip={true}
          style={{ width: "80%", margin: "auto" }}
        />
      )}

      {/* interaction section */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex gap-2 items-center" onClick={likePost}>
          <Heart className="cursor-pointer" size={32} />
          <p>{likes} others like this post</p>
        </div>
        <div className="flex gap-3">
          <MessageCircleMore
            size={32}
            className="cursor-pointer"
            onClick={() => setShowComments(!showComments)}
          />
          <Share2 size={28} className="cursor-pointer" />
        </div>
      </div>

      {/* comments section*/}
      {showComments && (
        <div className="mt-4">
          <p className="text-blue-500 font-semibold">Comments : </p>

          {/* comment input */}
          <div className="flex gap-3 mt-3">
            <input
              type="text"
              placeholder="Enter Comment"
              className="w-full outline-none border px-4 py-3 rounded-lg text-lg"
            />
            <button className="bg-blue-500 text-white px-3 rounded-lg">
              Comment
            </button>
          </div>

          {post.comments.map((comment, index) => (
            <div className="bg-gray-200 mt-3 rounded-lg p-4" key={index}>
              <div className="flex gap-3">
                <img
                  src={post.image}
                  alt=""
                  className="w-7 h-7 cursor-pointer rounded-full object-cover"
                ></img>
                <p className="font-semibold">{comment.username}</p>
              </div>
              <p className="ml-10">{comment.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
