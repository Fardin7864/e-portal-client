import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram, BsDiscord } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className=" w-full flex flex-col justify-start pr-3 mt-3">
      {/* Follow Buttons */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3">
        <button className=" bg-[#1a6dd4] rounded-md flex justify-center items-center gap-1 py-2 px-3 text-xs text-gray-200">
          <FaFacebookF className=" text-lg text-white" /> Facebook
        </button>
        <button className=" bg-[#55acef] rounded-md flex justify-center items-center gap-1 py-2 px-3 text-xs text-gray-200">
          <FaTwitter className=" text-lg text-white" /> Twiter
        </button>
        <div className=" lg:flex gap-3 hidden ">
            
        <button className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md flex justify-center items-center gap-1 py-2 px-3 text-xs text-gray-200">
          <BsInstagram className=" text-lg text-white" /> Instagram
        </button>

        <button className="bg-gradient-to-r from-[#7289da] via-[#424549] via-[#36393e] via-[#282b30] to-[#1e2124] rounded-md flex justify-center items-center gap-1 py-2 px-3 text-xs text-gray-200">
          <BsDiscord className=" text-lg text-white" /> Discord
        </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
