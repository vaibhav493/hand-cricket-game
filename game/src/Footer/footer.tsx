// import { BsInstagram } from "react-icons/bs";
import { FaInstagram,FaTwitter } from "react-icons/fa";
import { BsFacebook,BsYoutube } from "react-icons/bs";
const Footer = () => {

    return(
        <div className="border border-black border-solid padding-20px h-27  flex flex-col justify-center items-center gap-5 bg-cyan-300 py-5" >
           <p className="text-[#41687b] text-md italic">
            Made by team Game Devs
           </p>
           <div className="flex justify-center items-center gap-5 text-[#1f6080] text-md">
           <FaInstagram/>
           <BsFacebook/>
           <BsYoutube />
           <FaTwitter/>
           </div>
        </div>
    )
}

export default Footer