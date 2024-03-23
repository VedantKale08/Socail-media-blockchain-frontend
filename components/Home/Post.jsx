import React, { useState } from "react";
import { Heart, Share2, MessageCircleMore } from "lucide-react";
import ReactPlayer from "react-player";
import axios from "axios";
import toast from "react-hot-toast";
import { userStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { accountStore } from "@/store/contract";

const Post = ({ post }) => {
  const user = userStore((state) => state.user);
  const [showComments, setShowComments] = useState(false);
  const [likes, setLikes] = useState(post.likes.length);
  const [allComments, setAllComments] = useState(post.comments);
  const [comment, setComment] = useState("");
  const router = useRouter();
  const account = accountStore((state) => state.account);

  const likePost = async () => {
    try {
      if (
        (post.likes.length > 0 && post.likes[0] === account) ||
        likes > post.likes.length
      ) {
        return;
      }
      const data = await axios.post(
        `http://localhost:5000/api/posts/${post._id}/like`,
        { userId: account }
      );

      console.log(data.data);
      setLikes((prev) => prev + 1);
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

  const commentPost = async () => {
    try {
      const data = await axios.post(
        `http://localhost:5000/api/posts/${post._id}/comment`,
        {
          owner: account,
          content: comment,
        }
      );

      console.log(data.data);
      setComment("");
      const newComment = {
        content: data.data.content,
        owner: {
          name: user.data.name,
          image: user.data.image,
        },
        postId: post._id,
        __v: 0,
      };

      setAllComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      toast.error("An error occurred while liking the post");
      console.error(error);
    }
  };

  const clickPost = async () => {
    try {
      const data = await axios({
        method: "post",
        url: `http://localhost:5000/api/post/${post._id}/clicks`,
      });
      console.log(data.data);

      setLikes(data.data.totalLikesCount);
    } catch (error) {
      toast.error(error.error);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg shadow-md  p-8">
      {/* user section */}
      <div className="flex gap-4">
        <img
          src={`https://gateway.pinata.cloud/ipfs${post.user.image.substring(
            6
          )}`}
          alt=""
          className="w-12 h-12 cursor-pointer rounded-full object-cover"
        ></img>
        <div className="flex-1 flex flex-col gap-1 ">
          <p className="font-semibold">{post.user.name}</p>
          <p className="text-sm text-slate-400">4 Posts</p>
        </div>
      </div>

      {/* content section */}
      <div
        className={`${post?.url ? "cursor-pointer" : ""}`}
        onClick={() => {
          if (post?.url) {
            clickPost();
            router.push(post?.url);
          }
        }}
      >
        <p className="break-all">{post.description}</p>
        {post.contentType === "image" ? (
          <img
            src={
              !post.content.startsWith("ipfs")
                ? post.content
                : `https://gateway.pinata.cloud/ipfs${post.content.substring(
                    6
                  )}`
            }
            alt=""
            className="rounded-lg w-[80%] m-auto mt-5"
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
      </div>

      {/* interaction section */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex gap-2 items-center" onClick={likePost}>
          <Heart
            fill={
              (post.likes !== 0 && post.likes[0] === account) ||
              likes > post.likes.length
                ? "red"
                : "none"
            }
            stroke={
              (post.likes !== 0 && post.likes[0] === account) ||
              likes > post.likes.length
                ? "red"
                : "black"
            }
            className="cursor-pointer"
            size={32}
          />
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
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
            <button
              className="bg-blue-500 text-white px-3 rounded-lg"
              onClick={commentPost}
            >
              Comment
            </button>
          </div>

          {allComments.length !== 0 &&
            allComments.map((comment, index) => (
              <div className="bg-gray-200 mt-3 rounded-lg p-4" key={index}>
                <div className="flex gap-3">
                  <img
                    src={`https://gateway.pinata.cloud/ipfs${comment.owner.image.substring(
                      6
                    )}`}
                    alt=""
                    className="w-7 h-7 cursor-pointer rounded-full object-cover"
                  ></img>
                  <p className="font-semibold">{comment.owner.name}</p>
                </div>
                <p className="ml-10">{comment.content}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Post;
