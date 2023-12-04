import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import useAuthantication from "../../../hooks/useAuthan/useAuthantication";
import { useQuery } from "@tanstack/react-query";

const Travel = () => {
  const axios = useAxios();
  const [isLoading, setisLoading] = useState(true);
  const [related, setRelated] = useState();
  const [featuredFirst, setFeaturedFirst] = useState();
  const [topMore, settopMore] = useState();
  const {user, hadleWish, success} = useAuthantication();


  const { data: tabD } = useQuery({
    queryKey: ["travelars"],
    queryFn: () => {
      axios.get(`/blogs?category=Travel&page=0&pageSize=5`).then((res) => {
        setisLoading(true);
        setFeaturedFirst(res.data[1]);
        setRelated(res.data.slice(1, 5));
        setisLoading(false);
      });
      axios.get(`/blogs?page=3&pageSize=4`).then((res) => {
        setisLoading(true);
        settopMore(res.data);
        setisLoading(false);
      });   
  },
  });
  

  // useEffect(() => {
  //   axios.get(`/blogs?category=Travel&page=0&pageSize=5`).then((res) => {
  //     setisLoading(true);
  //     setFeaturedFirst(res.data[1]);
  //     setRelated(res.data.slice(1, 5));
  //     setisLoading(false);
  //   });
  //   axios.get(`/blogs?page=3&pageSize=4`).then((res) => {
  //     setisLoading(true);
  //     settopMore(res.data);
  //     setisLoading(false);
  //   });
  // }, []);


  
  const hadleWishlist = (blog) => { 
    const wishBlog = {...blog};
    delete wishBlog._id;
    wishBlog.email = user?.email
    // console.log(wishBlog)
    if(user?.email){
      hadleWish(wishBlog)
    }
    else {
      console.log("no user loged in")
      success("Log In to Add Wish !")
    }
   }




  //   console.log(related, featuredFirst);
  //   console.log(topMore)
  return (
    <div>
      {/* Title section */}
      <div className=" flex justify-between items-center gap-4 w-full">
        <h1 className=" text-xl md:text-2xl font-bold">Travel & Tourism</h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-7/12"></div>
        <Link className="hover:opacity-50 text-xs lg:text-sm font-semibold text-gray-400 rounded-full border px-2 p-[2px] flex justify-center items-center">
          <span>View All In Travel</span>
        </Link>
      </div>
      {/* Mega blog / first blog */}
      <div className=" my-10 w-full flex lg:flex-row flex-col justify-center items-center lg:h-96">
        <div className=" lg:w-1/2 w-full lg:h-96">
          <img src={featuredFirst?.img} alt="" className="w-full lg:h-full" />
        </div>
        <div className="lg:w-1/2 lg:h-96 bg-[#081838] flex justify-start items-center py-9 lg:py-0">
          <div className=" lg:px-10 pl-4">
            <span className=" text-sm text-black bg-white py-1 font-semibold px-3">
              {featuredFirst?.category}
            </span>
            <h1 className=" hover:text-[#fb3158] mt-3 text-3xl text-white font-semibold leading-relaxed">
              {featuredFirst?.title}
            </h1>
            <div className=" flex gap-2 mt-3">
              <span className=" text-gray-400 text-xs">BY </span>
              <span className=" text-white text-xs">
                {featuredFirst?.author}
              </span>
              <p className=" pl-4 flex text-gray-400 items-center gap-1 text-xs font-normal">
                <AiOutlineRise />
                {featuredFirst?.views}
                <span>VIEWS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Related Blog */}
      <div>
        <div className=" mt-10 gap-4 grid grid-cols-2 lg:grid-cols-4">
          {related?.map((blog) => (
            <div key={blog._id}>
              <div className=" lg:w-full h-40">
                <img
                  src={blog.img}
                  alt=""
                  className=" w-full h-full hover:opacity-75"
                />
              </div>
              <div>
                <p className=" flex justify-between my-2 text-xs font-semibold">
                  {blog?.category.toUpperCase()}
                  <button onClick={() =>hadleWishlist(blog)}>
                    <MdBookmarkAdd className=" text-xl c-primary hover:opacity-70" />
                  </button>
                </p>
                <h3 className=" hover:text-[#fb3158] text-sm font-bold">
                  {blog?.title.slice(0, 60)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* More top Title section */}
      <div className=" flex justify-between items-center gap-4 w-full mt-20 mb-10">
        <h1 className=" text-xl md:text-2xl font-bold">More Top</h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-9/12"></div>
      </div>

      {/* More Top blogs */}
      <div className=" grid grid-cols-1 gap-x-8 gap-y-5">
        {topMore?.map((blog) => (
          <div key={blog._id} className=" flex lg:flex-row flex-col gap-3">
            <div className="">
              <img
                src={blog.img}
                alt=""
                className=" w-96 h-60 hover:opacity-75"
              />
            </div>
            <div className=" lg:w-1/2 border-t-0 border-l-0 border-b-0 pr-3 flex flex-col justify-center">
              <p className=" flex justify-between my-2 text-md font-semibold">
                {blog?.category.toUpperCase()}
                <button onClick={() =>hadleWishlist(blog)}>
                  <MdBookmarkAdd className=" text-2xl c-primary hover:opacity-70" />
                </button>
              </p>
              <h3 className=" hover:text-[#fb3158] text-2xl font-bold">
                {blog?.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travel;
