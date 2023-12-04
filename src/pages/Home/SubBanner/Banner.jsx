// import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import useAxios from "../../../hooks/useAxios/useAxios";
// import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const axios = useAxios();
  // const [blogs, setBlogs] = useState();
  // const [isLoading, setisLoading] = useState(false);
  const {isLoading, data} = useQuery({
    queryKey: ['bannerData'],
    queryFn: () => axios.get("/blogs?label=sub-banner")
  });
const blogs = data?.data;
  // useEffect(() => {
  //   setisLoading(true)
  //   axios.get("/blogs?label=sub-banner").then((data) => {
  //     setBlogs(data.data);
  //     setisLoading(false);
  //   });
  // }, []);
  return (
    <>
      {isLoading ? (
        <Skeleton height={100} width="100%" />
      ) : (
        <div className=" hidden border-[0.1px] lg:block">
          <div className=" flex justify-evenly py-4 px-4 gap-x-12">
            {blogs?.map((blog) => (
              <div
                key={blog._id}
                className=" flex justify-center items-center gap-3"
              >
                <div className=" w-4/6">
                  <p className=" text-xs font-semibold mb-4">
                    {blog?.category.toUpperCase()}
                  </p>
                  <h3 className=" text-sm font-bold">{blog?.title}</h3>
                </div>
                <div className=" w-20 h-20">
                  <img
                    src={blog?.img}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="  px-5 lg:hidden">
        <div className=" block lg:hidden border flex justify-evenly py-4">
          <Marquee
            pauseOnHover={true}
            //   pauseOnClick={true}
            speed={30}
          >
            {blogs?.map((blog) => (
              <div
                key={blog._id}
                className=" flex ml-16 justify-center items-center gap-3"
              >
                <div className=" w-48">
                  <p className=" text-xs font-semibold">
                    {blog?.category.toUpperCase()}
                  </p>
                  <h3 className=" text-lg font-bold">{blog?.title}</h3>
                </div>
                <div className=" w-20 h-20">
                  <img
                    src={blog?.img}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Banner;
