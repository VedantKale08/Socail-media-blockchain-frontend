import React from 'react'
import Navbar from '../Home/Navbar'
import SuggestionSection from '../Home/SuggestionSection'

const NavContainer = () => {
  return (
    <div>
        <Navbar/>
        <div className='grid grid-cols-[1fr,320px] px-10 py-8 bg-gray-200 h-[calc(100vh-90px)]'>
            {/* map posts */}
            <div>
    h
            </div>
            <SuggestionSection/>
        </div>
    </div>
  )
}

export default NavContainer