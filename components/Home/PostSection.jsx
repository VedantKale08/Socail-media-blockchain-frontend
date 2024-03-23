import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostSection = ({posts}) => {

  return (
    <div className="flex flex-col gap-5">
      {posts.length !== 0 && posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default PostSection;
