import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";


const Dontmiss = () => {
    const [blogs, setblogs] = useState();
    const axios = useAxios();

    const { data: tabD } = useQuery({
      queryKey: ["dontmiss"],
      queryFn: () => {
        axios.get("/blogs?label=Dontmiss&page=0&pageSize=4")
        .then(res => setblogs(res.data))    
    },
    });

    // useEffect(() => { 
    //     axios.get("/blogs?label=Dontmiss&page=0&pageSize=4")
    //     .then(res => setblogs(res.data))
    //  },[])
    //  console.log(blogs)
  return (
    <div>
      {/* Titels */}
      <div className=" flex justify-between items-center gap-4 w-full">
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-5/12"></div>       
        <h1 className=" text-xl md:text-4xl font-semibold"><i>Don't Miss</i></h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-5/12"></div>       
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[2px] my-10">
        {
            blogs?.map(blog => 
                <div key={blog._id} className=" row-span-2 overflow-hidden">
                <motion.div
                  className="hero lg:h-[300px] h-[250px] hover:transition-opacity relative "
                  whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} // Increase the scale when hovering
                  whileTap={{ scale: 1, transition: { duration: 0.5 } }} // Reset the scale when clicked
                  style={{ backgroundImage: `url(${blog?.img})` }}
                >
                  <div className="hero-overlay bg-orange-400 bg-gradient-to-b from-transparent to-current via-transparent bg-opacity-10"></div>
                  <div className="hero-content w-full h-full flex justify-start items-end text-start text-neutral-content">
                    <div className="max-w-md pl-5">
                      <label
                        htmlFor=""
                        className="c-main text-[12px] font-normal p-1 px-3"
                      >
                        {blog?.category?.toUpperCase() || (
                          <Skeleton width={200} />
                        )}
                      </label>
                      <h1 className="lg:mb-5 lg:mt-3 text-white text-xl lg:text-2xl font-semibold leading-snug">
                        {blog?.title || (
                          <Skeleton height={40} width={400} />
                        )}
                      </h1>
                    </div>
                  </div>
                </motion.div>
              </div>)
        }
      </div>
    </div>
  );
};

export default Dontmiss;
