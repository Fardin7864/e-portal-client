import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";

const Toppost = () => {
  const axios = useAxios();
  // const [populer, setPopuler] = useState();

  const { isLoading, data } = useQuery({
    queryKey: ["populerBlogs"],
    queryFn: () => axios.get("/blogs?sortFild=views&sortOrder=-1&page=0&pageSize=4"),
  });

  const populer =data?.data;


  // useEffect(() => {
  //   axios
  //     .get("/blogs?sortFild=views&sortOrder=-1&page=0&pageSize=4")
  //     .then((res) => {
  //       //   console.log(res.data);
  //       setPopuler(res.data);
  //     });
  // }, []);

  return (
    <div className=" w-full flex flex-col justify-start pl-7 mt-7">
      {/* Title */}
      <div className=" flex justify-between items-center gap-2 w-full mb-5">
        <h1 className=" text-xl md:text-2xl font-bold">Top Posts</h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-1/12 lg:w-4/12"></div>
      </div>
      {/* blogs */}
      {/* small featured blogs */}
      <div className=" grid grid-cols-1 gap-x-8 gap-y-5">
        {populer?.map((blog) => (
          <div key={blog._id} className=" flex lg:flex-row flex-col gap-3">
            <div className="">
              <img
                src={blog.img}
                alt=""
                className=" lg:w-64 lg:h-28 hover:opacity-75"
              />
            </div>
            <div className=" lg:w-64 border-t-0 border-l-0 border-b-0 pr-3 flex flex-col justify-start">
              <p className=" flex justify-between my-[2px] text-[8px] font-semibold">
                {blog?.category.toUpperCase()}
              </p>
              <h3 className=" hover:text-[#fb3158] text-sm font-bold">
                {blog?.title.slice(0, 50)}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppost;
