import React, { useState } from "react";
import { Heart, Share2, MessageCircleMore } from "lucide-react";
import { Button } from "@mui/material";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
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
      <img src={post.post_image} alt="" className="rounded-lg w-[80%] m-auto" />

      {/* interaction section */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Heart className="cursor-pointer" size={32} />
          <p>{post.no_of_likes} others like this post</p>
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
            <button className="bg-blue-500 text-white px-3 rounded-lg">Comment</button>
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
