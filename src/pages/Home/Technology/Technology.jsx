import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import useAuthantication from "../../../hooks/useAuthan/useAuthantication";
import { useQuery } from "@tanstack/react-query";

const Technology = () => {
  const axios = useAxios();
  const [isLoading, setisLoading] = useState(true);
  const [featured, setFeatured] = useState();
  const [recent, setrecent] = useState();
  const [blogFirst, setblogFirst] = useState();
  const {user, hadleWish, success} = useAuthantication();


  const { data: tabD } = useQuery({
    queryKey: ["tech"],
    queryFn: () => {
      axios.get("/blogs?category=Technology&page=0&pageSize=5").then((res) => {
        //   console.log(res.data);
          setisLoading(true);
          setblogFirst(res.data[4]);
          setFeatured(res.data.slice(0, 4));
          setisLoading(false);
        });
        axios.get("/blogs?sortFild=date&sortOrder=-1&page=0&pageSize=8")
        .then(res => {
            setrecent(res.data.slice(0,6))
        })   
  },
  });


  // useEffect(() => {
  //   axios.get("/blogs?category=Technology&page=0&pageSize=5").then((res) => {
  //   //   console.log(res.data);
  //     setisLoading(true);
  //     setblogFirst(res.data[4]);
  //     setFeatured(res.data.slice(0, 4));
  //     setisLoading(false);
  //   });
  //   axios.get("/blogs?sortFild=date&sortOrder=-1&page=0&pageSize=8")
  //   .then(res => {
  //       setrecent(res.data)
  //   })
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

  return (
    <div>
      {/* Titels */}
      <div className=" flex justify-between items-center gap-4 w-full">
        <h1 className=" text-xl md:text-2xl font-bold">Technology</h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-8/12"></div>
        <Link className="hover:opacity-50 text-xs lg:text-sm font-medium text-gray-400 rounded-full border px-2 p-[2px] flex justify-center items-center">
          <span>View All In Tech</span>
        </Link>
      </div>
      <div className="mt-8 flex lg:flex-row flex-col gap-8">
        {/* Main featured blog */}
        <div className=" lg:w-3/5">
          <div className=" w-full lg:h-96">
            {isLoading ? (
              <Skeleton width="100%" height={400} />
            ) : (
              <img
                src={blogFirst?.img}
                alt=""
                className="w-full h-full hover:opacity-75"
              />
            )}
          </div>
          <div className="max-w-md relative -top-4">
            <label
              htmlFor=""
              className="c-main text-base   font-normal py-2 px-3"
            >
              {blogFirst?.category?.toUpperCase() || <Skeleton width={400} />}
            </label>
            <div className=" flex">
              <h1 className="lg:mb-5 mt-5 hover:text-[#fb3158] text-[#212121] text-xl lg:text-3xl font-semibold">
                {blogFirst?.title?.slice(0, 60) || (
                  <Skeleton height={40} width={400} />
                )}
              </h1>
              <button onClick={()=>hadleWishlist(blogFirst)}>
                <MdBookmarkAdd className=" text-3xl c-primary hover:opacity-70" />
              </button>
            </div>
            <div>
              <p className=" text-gray-500 flex gap-2 items-center text-xs font-semibold mb-3">
                BY{" "}
                <span className=" text-black font-bold">
                  {blogFirst?.author.toUpperCase()}{" "}
                </span>{" "}
                | <span className="">{blogFirst?.date.split("T")[0]}</span>{" "}
                <AiOutlineRise /> <span>{blogFirst?.views} VIEW</span>{" "}
              </p>
            </div>
            <p>
              {blogFirst?.details.slice(0, 300) || (
                <Skeleton height={40} width={400} />
              )}
              <span className=" c-primary hover:opacity-60">
                {" "}
                <button>Read More..</button>
              </span>
            </p>
          </div>
        </div>
        {/* small featured blogs */}
        <div className=" grid grid-cols-1 gap-x-8 gap-y-5 lg:w-2/5">
          {featured?.map((blog) => (
            <div key={blog._id} className=" flex gap-3">
              <div className="">
                <img
                  src={blog.img}
                  alt=""
                  className=" w-40 h-24 hover:opacity-75"
                />
              </div>
              <div className=" border-2 border-r-amber-500 w-1/2 border-t-0 border-l-0 border-b-0 pr-3">
                <p className=" flex justify-between my-2 text-xs font-semibold">
                  {blog?.category.toUpperCase()}
                  <button onClick={()=>hadleWishlist(blog)}>
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
      {/* Reacent Blog */}
      <div>
        <div className=" flex justify-between items-center gap-2 w-full mt-10">
          <h1 className=" text-xl md:text-2xl font-bold">Recent Blogs</h1>
          <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-6/12 lg:w-9/12"></div>
        </div>
        <div>
          <div className=" mt-10 gap-4 grid grid-cols-2 lg:grid-cols-4">
            {recent?.map((blog) => (
              <div key={blog._id}>
                <div className=" lg:w-full h-36">
                  <img
                    src={blog.img}
                    alt=""
                    className=" w-full h-full hover:opacity-75"
                  />
                </div>
                <div>
                <p className=" flex justify-between my-2 text-xs font-semibold">
                  {blog?.category.toUpperCase()}
                  <button onClick={()=>hadleWishlist(blog)}>
                    <MdBookmarkAdd className=" text-xl c-primary hover:opacity-70" />
                  </button>
                </p>
                <h3 className=" hover:text-[#fb3158] text-sm font-bold">
                  {blog?.title.slice(0, 60)}
                </h3>
                <p className=" flex flex-col"><span className=" grow text-xs my-2">{blog?.details.slice(0, 180)}</span> 
                <Link to={`/details/${blog._id}`} className="text-xs text-center w-[70px] text-white hover:opacity-80 hover:shadow-md active:opacity-30 font-medium p-2 px-3 rounded-md bg-gradient-to-r to-[#fb3158] from-pink-700">Details</Link>
                </p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
