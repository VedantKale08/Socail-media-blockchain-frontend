import React from 'react'
import PopupContainer from '../Containers/PopUpContainer'
import AvatarReg from '../../public/assets/images/user.png'
import Image from "next/image"
import { Tooltip, Button } from "@mui/material"
import { ImagePlus } from "lucide-react"

const AddPost = ({ setPopup }) => {
    return (
        <PopupContainer setPopup={setPopup}>
            <div className='w-[40vw] h-fit bg-white rounded-lg p-8'>
                <div className='flex gap-2 items-center'>
                    <Image
                        src={AvatarReg}
                        alt=""
                        className="w-12 h-12 cursor-pointer rounded-full"
                    ></Image>
                    <p className='font-bold text-lg'>Code of Duty</p>
                </div>
                <div className='flex gap-2 flex-col mt-7'>
                    <label htmlFor="name" className="text-lg font-semibold"><span className='text-blue-500'>Add</span> Caption</label>
                    <textarea placeholder="What's new ?!" rows={13} className='w-full p-4 outline-none bg-slate-100 rounded-lg' />
                </div>
                <div className='mt-3 flex justify-between items-center'>
                    <Tooltip title="Add Content" className='relative cursor-pointer'>
                        <ImagePlus size={30} className='text-slate-500' />
                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            className="opacity-0 text-[0.4rem] absolute top-0 h-full"
                            onChange={(e) => uploadImage(e.target.files[0])}
                        />
                    </Tooltip>
                <Button
                    style={{
                        backgroundColor: "rgb(59, 130, 246)",
                        color: "white",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        paddingLeft: "28px",
                        paddingRight: "28px",
                        borderRadius: "999px",
                        fontSize: "16px",
                        fontWeight: "bold",

                    }} >Post</Button>
            </div>
        </div>
        </PopupContainer >
    )
}

export default AddPost