import { MdBookmarkAdd } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import useAuthantication from "../../../hooks/useAuthan/useAuthantication";
import { useEffect } from "react";
import { useState } from "react";

const Blog = ({ blog,handleDelete }) => {
  const {hadleWish,user} = useAuthantication();
  const location = useLocation();
  const [onWishlist, setwishlist] = useState(false)


  const hadleWishlist = () => { 
    const wishBlog = {...blog};
    wishBlog.prevId = wishBlog._id;
    delete wishBlog._id;
    wishBlog.email = user?.email;
    // console.log(wishBlog)
    hadleWish(wishBlog)
   }


   useEffect(() => { 

    setwishlist(false)
    if (location.pathname === "/wishlist") {
      setwishlist(true)
    }
    },[location])
  


  return (
    <div key={blog?._id} className=" flex lg:flex-row flex-col gap-3 border-b-2 pb-5">
      <div className="">
        <img src={blog?.img} alt="" className=" w-96 h-60 hover:opacity-75" />
      </div>
      <div className=" lg:w-1/2 border-t-0 border-l-0 border-b-0 pr-3 flex flex-col">
        <div className=" flex justify-between my-2 text-md font-semibold">
          <div className=" flex gap-3 items-center">
            <p className=" text-xs text-gray-500"> {blog?.category?.toUpperCase()}</p>
            <p className=" text-black">||</p>
            <p className=" text-xs">{blog?.date.split("T")[0]}</p>
          </div>
          {
            onWishlist ? (<button onClick={() => handleDelete(blog?._id)}>
              <MdDelete className=" text-2xl c-primary hover:opacity-70" />
            </button>) : (<button onClick={hadleWishlist}>
            <MdBookmarkAdd className=" text-2xl c-primary hover:opacity-70" />
          </button>)
          }
          
        </div>
        <h3 className=" hover:text-[#fb3158] text-2xl font-bold">
          {blog?.title}
        </h3>
        <div className=" flex gap-2 my-1">
          <span className=" text-gray-400 text-xs">BY </span>
          <span className=" text-gray-700 text-xs">{blog?.author}</span>
          <p className=" pl-4 flex text-gray-400 items-center gap-1 text-xs font-normal">
            <AiOutlineRise />
            {blog?.views}
            <span>VIEWS</span>
          </p>
        </div>
        <p className=" flex items-center"><span className=" grow">{blog?.details.slice(0, 180)}</span>{onWishlist?(<Link to={`/details/${blog.prevId}`} className="text-sm text-white hover:opacity-80 hover:shadow-md active:opacity-30 font-medium p-2 px-3 rounded-md bg-gradient-to-r to-[#fb3158] from-pink-700">Details</Link>):(<Link to={`/details/${blog._id}`} className="text-sm text-white hover:opacity-80 hover:shadow-md active:opacity-30 font-medium p-2 px-3 rounded-md bg-gradient-to-r to-[#fb3158] from-pink-700">Details</Link>)}</p>
      </div>
    </div>
  );
};

export default Blog;
