import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import { AiOutlineRise } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const BodyBanner = () => {
  const [bannerFirst, setBannerFirst] = useState();
  const [blogs, setBlogs] = useState();
  const axios = useAxios();

  const { data: tabD } = useQuery({
    queryKey: ["bodybanner"],
    queryFn: () => {
      axios.get("/blogs?label=body-mega-banner")
      .then((res) => setBannerFirst(res.data[0]));
      
      axios.get("/blogs?label=body-banner")
        .then((res) => setBlogs(res.data))  
  },
  });

  // useEffect(() => {
  //   axios.get("/blogs?label=body-mega-banner")
  //     .then((res) => setBannerFirst(res.data[0]));
      
  //     axios.get("/blogs?label=body-banner")
  //       .then((res) => setBlogs(res.data));
    
  // }, []);
  return (
    <div className=" w-full bg-[#b8c2d8] lg:p-10 p-3">
        {/* Mega blog / first blog */}
      <div className=" w-full flex lg:flex-row flex-col justify-center items-center lg:h-96">
        <div className=" lg:w-1/2 w-full lg:h-96">
          <img src={bannerFirst?.img} alt="" className="w-full lg:h-full" />
        </div>
        <div className="lg:w-1/2 lg:h-96 bg-[#081838] flex justify-start items-center py-9 lg:py-0">
          <div className=" lg:px-10 pl-4">
            <span className=" text-sm text-black bg-white py-1 font-semibold px-3">
              {bannerFirst?.category}
            </span>
            <h1 className=" hover:text-[#fb3158] mt-3 text-3xl text-white font-semibold leading-relaxed">
              {bannerFirst?.title}
            </h1>
            <div className=" flex gap-2 mt-3">
              <span className=" text-gray-400 text-xs">BY </span>
              <span className=" text-white text-xs">{bannerFirst?.author}</span>
              <p className=" pl-4 flex text-gray-400 items-center gap-1 text-xs font-normal">
                <AiOutlineRise />
                {bannerFirst?.views}
                <span>VIEWS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Body blogs */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:px-4 pt-10">
        {
            blogs?.map(blog => 
                <div key={blog._id}>
                <div className=" lg:w-full lg:h-44">
                  <img
                    src={blog.img}
                    alt=""
                    className=" w-full h-full hover:opacity-75"
                  />
                </div>
                <div className=" bg-[#263344] p-4 shadow-2xl shadow-white">
                    <span className=" text-black bg-white py-1 px-2 text-xs relative -top-7">{blog?.category}</span>
                  <h3 className=" text-white mt-3 hover:text-[#fb3158] text-sm font-bold">
                    {blog?.title.slice(0, 60)}
                  </h3>
                </div>
                </div>
                )
        }
      </div>
    </div>
  );
};

export default BodyBanner;
