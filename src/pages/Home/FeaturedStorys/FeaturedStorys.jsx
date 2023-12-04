import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import useAuthantication from "../../../hooks/useAuthan/useAuthantication";
import { useQuery } from "@tanstack/react-query";


const FeaturedStorys = () => {
  const {user, hadleWish, success} = useAuthantication();
  const axios = useAxios();
  const [isLoading, setisLoading] = useState(true);
  const [featured, setFeatured] = useState();
  const [related, setRelated] = useState();
  const [featuredFirst, setFeaturedFirst] = useState();

  const { data: tabD } = useQuery({
    queryKey: ["fetauredstorysdata"],
    queryFn: () => {
      axios.get("/blogs?label=featured").then((res) => {
        setisLoading(true);
        setFeatured(res.data);
        setisLoading(false);
      });
      axios.get("/blogs?label=featured-first").then((res) => {
        setisLoading(true);
        setFeaturedFirst(res.data[0]);
        setisLoading(false);
      });
      axios.get("/blogs?category=Celebrities&page=0&pageSize=4").then((res) => {
        setRelated(res.data);
      });    
  },
  });



  // useEffect(() => {
  //   axios.get("/blogs?label=featured").then((res) => {
  //     setisLoading(true);
  //     setFeatured(res.data);
  //     setisLoading(false);
  //   });
  //   axios.get("/blogs?label=featured-first").then((res) => {
  //     setisLoading(true);
  //     setFeaturedFirst(res.data[0]);
  //     setisLoading(false);
  //   });
  //   axios.get("/blogs?category=Celebrities&page=0&pageSize=4").then((res) => {
  //     setRelated(res.data);
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
  //    console.log(related)
  return (
    <div className=" w-full">
      {/* Title section */}
      <div className=" flex justify-between items-center gap-4 w-full">
        <h1 className=" text-xl md:text-2xl font-bold">Featured Stories</h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-7/12"></div>
        <Link className="hover:opacity-50 text-xs lg:text-sm font-semibold text-gray-400 rounded-full border px-2 p-[2px] flex justify-center items-center">
          <span>View More</span>
        </Link>
      </div>
      {/* Featured  */}
      <div className=" mt-8 flex lg:flex-row flex-col gap-8">
        {/* Main featured blog */}
        <div className=" lg:w-3/5">
          <div className=" w-full lg:h-96">
            {isLoading ? (
              <Skeleton width="100%" height={400} />
            ) : (
              <img
                src={featuredFirst?.img}
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
              {featuredFirst?.category?.toUpperCase() || (
                <Skeleton width={400} />
              )}
            </label>
            <div className=" flex">
              <h1 className="lg:mb-5 mt-5 hover:text-[#fb3158] text-[#212121] text-xl lg:text-3xl font-semibold">
                {featuredFirst?.title?.slice(0, 60) || (
                  <Skeleton height={40} width={400} />
                )}
              </h1>
              <button onClick={() =>hadleWishlist(featuredFirst)}>
                <MdBookmarkAdd className=" text-3xl c-primary hover:opacity-70" />
              </button>
            </div>
            <div>
              <p className=" text-gray-500 flex gap-2 items-center text-xs font-semibold mb-3">
                BY{" "}
                <span className=" text-black font-bold">
                  {featuredFirst?.author.toUpperCase()}{" "}
                </span>{" "}
                | <span className="">{featuredFirst?.date.split("T")[0]}</span>{" "}
                <AiOutlineRise /> <span>{featuredFirst?.views} VIEW</span>{" "}
              </p>
            </div>
            <p>
              {featuredFirst?.details.slice(0, 300) || (
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
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 lg:w-2/5">
          {featured?.slice(0, 6).map((blog) => (
            <div key={blog._id}>
              <div className=" lg:w-44 lg:h-28">
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
      {/* Related Blog */}
      <div>
        <div className=" flex justify-between items-center gap-2 w-full mt-10">
          <h1 className=" text-xl md:text-2xl font-bold">Related Stories</h1>
          <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-6/12 lg:w-9/12"></div>
        </div>
        <div>
          <div className=" flex lg:flex-row flex-col gap-4">
            {related?.map((blog) => (
              <div key={blog._id}>
                <div className=" lg:w-full lg:h-36">
                  <img
                    src={blog.img}
                    alt=""
                    className=" w-full h-full hover:opacity-75"
                  />
                </div>
                <div>
                  <h3 className=" mt-3 hover:text-[#fb3158] text-sm font-bold">
                    {blog?.title.slice(0, 60)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStorys;
