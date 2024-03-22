"use client"
import React from 'react'
import Navbar from '../Home/Navbar'
import SuggestionSection from '../Home/SuggestionSection'
import { tabsStore } from '@/store/tabState';
import PostSection from '../Home/PostSection';

const NavContainer = () => {
  const tab = tabsStore((state) => state.tab);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[1fr,320px] px-10 py-8 bg-gray-200 h-[calc(100vh-90px)]">
        {tab === "Home" && <PostSection/>}
        {tab === "Trending" && <p>Trending</p>}
        {tab === "Profile" && <p>Profile</p>}
        {tab === "Settings" && <p>Settings</p>}
        <SuggestionSection />
      </div>
    </div>
  );
}

export default NavContainer