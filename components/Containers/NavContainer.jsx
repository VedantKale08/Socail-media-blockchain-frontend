"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import SuggestionSection from '../Home/SuggestionSection'
import { tabsStore } from '@/store/tabState';
import PostSection from '../Home/PostSection';
import Trending from '../Home/Trending';
import ComingSoon from '../Home/ComingSoon';
import Profile from '../Home/Profile';
import Analytics from '../Home/Analytics';
import axios from 'axios';
import toast from 'react-hot-toast';

const NavContainer = () => {
  const tab = tabsStore((state) => state.tab);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const data = await axios({
            method: "get",
            url: "http://localhost:5000/api/posts",
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
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[1fr,350px] px-14 py-8 bg-gray-200 h-[calc(100vh-90px)] gap-14 overflow-scroll scrollbar-none">
        {tab === "Home" && <PostSection posts={posts} />}
        {tab === "Trending" && <Trending />}
        {tab === "Profile" && <Profile />}
        {tab === "Settings" && <ComingSoon />}
        {tab === "Messages" && <ComingSoon />}
        {tab === "Bookmarks" && <ComingSoon />}
        {tab === "Notifications" && <ComingSoon />}
        {tab === "Analytics" && <Analytics />}
        <SuggestionSection />
      </div>
    </div>
  );
}

export default NavContainer