import React from 'react'
import { useMemo } from "react"
import {TrendingUp} from "lucide-react"

const Trending = () => {
    const trends = useMemo(
        () => [
            {
                id: 1,
                Category: "Education",
                Title: "#CodeOfDutyWIns",
            },
            {
                id: 2,
                Category: "Sports",
                Title: "#RCBVSCSK",

            },
            {
                id: 3,
                Category: "Social Media",
                Title: "#DENZFORGENZ",
            },
            {
                id: 4,
                Category: "Education",
                Title: "#HackathoninVJTI",
            },

            {
                id: 5,
                Category: "Sports",
                Title: "#WeWantRohitBack"
            },

            {
                id: 6,
                Category: "Jobs",
                Title: "#60%layoffs",
            }
        ],
        []
    );
    return (
        <div className='bg-white p-10 rounded-lg shadow-md'>
            <p className='font-bold text-4xl'><span className='text-blue-500 '>#Follow </span>the Trends </p>
            {trends.map((trend, i) => (
                <div key={i} className='mt-10 flex justify-between'>
                  <div>  
                    <div className='flex text-slate-400 gap-1 text-lg font-semibold'>
                        <p>{trend.id}</p>
                        <p>.</p>
                        <p>{trend.Category}</p>
                    </div>
                    <p className='font-bold text-2xl'>{trend.Title}</p>
                    </div>
                    <div>
                        <TrendingUp/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Trending