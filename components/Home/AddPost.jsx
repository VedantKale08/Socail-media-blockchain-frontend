import React, { useState } from 'react'
import PopupContainer from '../Containers/PopUpContainer'
import AvatarReg from '../../public/assets/images/user.png'
import Image from "next/image"
import { Tooltip, Button } from "@mui/material"
import { ImagePlus, Link } from "lucide-react"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { accountStore } from '@/store/contract'
import { userStore } from '@/store/userStore'

const AddPost = ({ setPopup }) => {
  const user = userStore((state) => state.user);
    // const contract = contractStore((state) => state.contract);
    const account = accountStore((state) => state.account);
    const [desc, setDesc] = useState("");
    const [url, setUrl] = useState("");

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("No image selected");
    const [image, setImage] = useState("No image selected");
    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (file) {
        try {
          const formData = new FormData();
          formData.set("file", file);

          const response = await axios({
            method: "POST",
            url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data: formData,
            headers: {
              pinata_api_key: `b15fff7a43d745fa592f`,
              pinata_secret_api_key: `803891a6cf07e71ccbdbeabf93ded9df824385a9061f567a68190aa49ee2b61f`,
              "Content-Type": "multipart/form-data",
            },
          });
          const imageHash = `ipfs://${response.data.IpfsHash}`;
          try {
            console.log("Image", imageHash);
            setImage(imageHash);

            const data = await axios({
              method: "POST",
              url: "http://localhost:5000/api/posts",
              data: {
                userId: account,
                contentType: "image",
                content: imageHash,
                description: desc,
                url: url,
                clicks:0,
              },
            });

            console.log(data);
            setPopup(false);
            window.location.reload();

          } catch (error) {
            toast.error(error.error)
            console.log("Errorrrrr", error);
          }
          setFileName("");
          setFile(undefined);
          toast.success("Image uploaded successfully!!!");
        } catch (error) {
          toast.error("Unable to upload to Pinata....");
        }
      }
    };
    const retrieveFile = (e) => {
      const data = e.target.files[0];
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data);
      reader.onloadend = () => {
        setFile(data);
      };
      setFileName(data?.name);
    };

    return (
      <PopupContainer setPopup={setPopup}>
        <form
          onSubmit={handleSubmit}
          className="w-[40vw] h-fit bg-white rounded-lg p-8"
        >
          <div className="flex gap-2 items-center">
            <img
              src={`https://gateway.pinata.cloud/ipfs${user.data.image.substring(
                6
              )}`}
              alt=""
              className="w-12 h-12 cursor-pointer rounded-full"
            ></img>
            <p className="font-bold text-lg">{user.data.name}</p>
          </div>
          <div className="flex gap-2 flex-col mt-7">
            <label htmlFor="name" className="text-lg font-semibold">
              <span className="text-blue-500">Add</span> Caption
            </label>
            <textarea
              placeholder="What's new ?!"
              rows={13}
              className="w-full p-4 outline-none bg-slate-100 rounded-lg"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="flex items-center border-b">
            <Link className="text-gray-600" />
            <input
              type="text"
              placeholder="Enter link...."
              className="outline-none w-full px-3 py-2 text-lg"
              onChange={(e) => setUrl(e.target.value)}
              value={url}            
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <Tooltip title="Add Content" className="relative cursor-pointer">
              <ImagePlus size={30} className="text-slate-500" />
              <input
                id="image"
                type="file"
                accept="image/*"
                className="opacity-0 text-[0.4rem] absolute top-0 h-full"
                onChange={retrieveFile}
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
              }}
              type="submit"
            >
              Post
            </Button>
          </div>
        </form>
      </PopupContainer>
    );
}

export default AddPost