import React from 'react'
import {useMemo} from "react"

const Trending = () => {
    const trends = useMemo(
        () => [
          {
            name: "Home",
            icon: Home,
          },
          {
            name: "Trending",
            icon: TrendingUp,
          },
          {
            name: "Profile",
            icon: User,
          },
          {
            name: "Messages",
            icon: MessageSquareMore,
          },
          {
            name: "Bookmarks",
            icon: Album,
          },
          {
            name: "Notifications",
            icon: BellRing,
          },
          {
            name: "Settings",
            icon: Settings,
          }
        ],
        []
    );
  return (
    <div>Trend</div>
  )
}

export default Trending