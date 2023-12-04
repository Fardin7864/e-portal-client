import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";

const MoreTop = () => {
  const axios = useAxios();
  const [topMore, settopMore] = useState();

  const { data: tabD } = useQuery({
    queryKey: ["moreTop"],
    queryFn: () => {
      axios.get(`/blogs?page=3&pageSize=4`).then((res) => {
        settopMore(res.data);
      });   
  },
  });


  // useEffect(() => {
  //   axios.get(`/blogs?page=3&pageSize=4`).then((res) => {
  //     settopMore(res.data);
  //   });
  // }, []);

  return (
    <div>
      {/* More top Title section */}
      <div className=" flex justify-between items-center gap-4 w-full mt-20 mb-10">
        <h1 className=" text-xl md:text-2xl font-bold">More Top </h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-9/12"></div>
      </div>

      {/* More Top blogs */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
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

export default MoreTop;
