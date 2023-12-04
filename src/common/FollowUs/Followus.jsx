import {FaFacebookF, FaTwitter} from 'react-icons/fa'
import {BsInstagram,BsDiscord} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {LiaTelegramPlane} from 'react-icons/lia'



const Followus = () => {
  return (
    <div className=' w-full flex flex-col justify-start pl-7 pr-3 my-5'>
        {/* Titel */}
      <div className=" flex justify-between items-center gap-2 w-full mb-5">
        <h1 className=" text-xl md:text-2xl font-bold">Follow Us!</h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-1/12 lg:w-4/12"></div>
      </div>
      {/* Follow Buttons */}
      <div className=" grid grid-cols-2 gap-3">
        <button className=' bg-[#1a6dd4] rounded-sm flex justify-center items-center gap-1 py-3 px-3 text-xs text-gray-200'><FaFacebookF className=' text-lg text-white'/> <span className=' font-semibold text-white'>80.5k</span>Facebook</button>
        <button className=' bg-[#55acef] rounded-sm flex justify-center items-center gap-1 py-3 px-3 text-xs text-gray-200'><FaTwitter className=' text-lg text-white'/> <span className=' font-semibold text-white'>79.5k</span>Twiter</button>
        
        <button className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-sm flex justify-center items-center gap-1 py-3 px-3 text-xs text-gray-200'><BsInstagram className=' text-lg text-white'/> <span className=' font-semibold text-white'>69.2k</span>Instagram</button>
        <button className='bg-[#CD201F] rounded-sm flex justify-center items-center gap-1 py-3 px-3 text-xs text-gray-200'><AiFillYoutube className=' text-lg text-white'/> <span className=' font-semibold text-white'>100.5k</span>YouTube</button>
        
        <button className='bg-gradient-to-r from-[#7289da] via-[#424549] via-[#36393e] via-[#282b30] to-[#1e2124] rounded-sm flex justify-center items-center gap-1 py-3 px-3 text-xs text-gray-200'><BsDiscord className=' text-lg text-white'/> <span className=' font-semibold text-white'>109.2k</span>Discord</button>
        <button className='bg-[#229ED9] rounded-sm flex justify-center items-center gap-1 py-3 px-3 text-xs text-gray-200'><LiaTelegramPlane className=' text-lg text-white'/> <span className=' font-semibold text-white'>18.5k</span>Telegram</button>
      </div>
    </div>
  );
};

export default Followus;
