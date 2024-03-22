"use client"
import React from 'react'
import Navbar from '../Home/Navbar'
import SuggestionSection from '../Home/SuggestionSection'
import { tabsStore } from '@/store/tabState';
import PostSection from '../Home/PostSection';
import Trending from '../Home/Trending';
import Profile from '../Home/Profile';

const NavContainer = () => {
  const tab = tabsStore((state) => state.tab);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[1fr,350px] px-14 py-8 bg-gray-200 h-[calc(100vh-90px)] gap-14 overflow-scroll">
        {tab === "Home" && <PostSection/>}
        {tab === "Trending" && <Trending/>}
        {tab === "Profile" && <Profile/>}
        {tab === "Settings" && <p>Settings</p>}
        <SuggestionSection />
      </div>
    </div>
  );
}

export default NavContainer