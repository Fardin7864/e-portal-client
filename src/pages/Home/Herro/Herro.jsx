import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios/useAxios";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { PhotoView } from "react-photo-view";

const Herro = () => {
  const axios = useAxios();

  const { isLoading, data } = useQuery({
    queryKey: ['heroData'],
    queryFn: () => axios.get("/blogs?label=hero"),
  });
  // console.log(data.data[0].img)

  return (
    <div>
      {isLoading ? (
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2  gap-[2px] lg:px-36 px-5 py-8 ">
          {/* img 1 */}
          <div className=" row-span-2 overflow-hidden">
            <Skeleton width="100%" height={500}/>
          </div>
          {/* img 2 */}
          <div className=" flex flex-col">
          <div className=" overflow-hidden">
            <Skeleton width={600} height={248} />
          </div>
          <div className=" flex lg:flex-row flex-col gap-x-[2px]">
            {/* img 3 */}
            <Skeleton width={300} height={245} />
            {/* img 4 */}
            <Skeleton width={300} height={245} />
          </div>
          </div>
        </div>
      ) : (
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2  gap-[2px] lg:px-0 px-5 py-8 ">
          {/* img 1 */}
          <div className=" row-span-2 overflow-hidden">
              
            <PhotoView src={`${data?.data[1]?.img}`}>
            <motion.div
              className="hero lg:h-[500px] h-[350px] hover:transition-opacity relative "
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} // Increase the scale when hovering
              whileTap={{ scale: 1, transition: { duration: 0.5 } }} // Reset the scale when clicked
              style={{ backgroundImage: `url(${data?.data[1]?.img})` }}
            >
              <div className="hero-overlay bg-orange-400 bg-gradient-to-b from-transparent to-current via-transparent bg-opacity-10"></div>
              <div className="hero-content w-full h-full flex justify-start items-end text-start text-neutral-content">
                <div className="max-w-md pl-5">
                  <label
                    htmlFor=""
                    className="c-main text-[12px] font-normal p-1 px-3"
                  >
                    {data?.data[1]?.category?.toUpperCase() || (
                      <Skeleton width={200} />
                    )}
                  </label>
                  <h1 className="lg:mb-5 lg:mt-5 text-white text-xl lg:text-4xl font-semibold leading-snug">
                    {data?.data[1]?.title || (
                      <Skeleton height={40} width={400} />
                    )}
                  </h1>
                </div>
              </div>
            </motion.div>
            </PhotoView>
          </div>
          {/* img 2 */}
          <div className=" overflow-hidden">
            <PhotoView src={`${data?.data[0]?.img}`} >
            <motion.div
              className="hero lg:h-[249px] md:h-96 "
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              whileTap={{ scale: 1, transition: { duration: 0.5 } }}
              style={{ backgroundImage: `url(${data?.data[0]?.img})` }}
            >
              <div className="hero-overlay bg-orange-400 bg-gradient-to-b from-transparent to-current via-transparent bg-opacity-10"></div>
              <div className="hero-content w-full lg:h-full flex justify-start items-end text-start text-neutral-content h-[170px]">
                <div className="max-w-md pl-3">
                  <label
                    htmlFor=""
                    className=" c-main text-[12px] font-normal p-1 px-3"
                  >
                    {data?.data[0]?.category?.toUpperCase()}
                  </label>
                  <h1 className="md:mb-5 mt-1 text-white md:text-lg text-sm font-semibold leading-snug">
                    {data?.data[0]?.title}
                  </h1>
                </div>
              </div>
            </motion.div>
            </PhotoView>
          </div>
          <div className=" flex gap-x-[1.5px] lg:gap-y-0">
            {/* img 3 */}
            <div className=" overflow-hidden h-full w-full">
            <PhotoView src={`${data?.data[2]?.img}`} >
              <motion.div
                className="hero h-full"
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 1, transition: { duration: 0.5 } }}
                style={{ backgroundImage: `url(${data?.data[2]?.img})` }}
              >
                <div className="hero-overlay bg-orange-400 bg-gradient-to-b from-transparent to-current via-transparent bg-opacity-10"></div>
                <div className="hero-content w-full lg:h-full h-[170px] flex justify-start items-end text-start text-neutral-content">
                  <div className="max-w-md">
                    <label
                      htmlFor=""
                      className=" c-main text-[12px] font-normal p-1 lg:px-3"
                    >
                      {data?.data[2]?.category?.toUpperCase()}
                    </label>
                    <h1 className="md:mb-5 mt-1 text-white md:text-lg text-sm font-semibold leading-snug">
                      {data?.data[2]?.title}
                    </h1>
                  </div>
                </div>
              </motion.div>
              </PhotoView>
            </div>
            {/* img 4 */}
            <div className=" overflow-hidden h-full w-full">
            <PhotoView src={`${data?.data[3]?.img}`} >
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 1, transition: { duration: 0.5 } }}
                className="hero mt-0 bg-cover h-full bg-no-repeat"
                style={{ backgroundImage: `url(${data?.data[3]?.img})` }}
              >
                <div className="hero-overlay bg-orange-400 bg-gradient-to-b from-transparent to-current via-transparent bg-opacity-10"></div>
                <div className="hero-content w-full h-full flex justify-start items-end text-start text-neutral-content">
                  <div className="max-w-md">
                    <label
                      htmlFor=""
                      className=" c-main text-[12px] font-normal p-1 lg:px-3"
                    >
                      {data?.data[3]?.category?.toUpperCase()}
                    </label>
                    <h1 className="md:mb-5 mt-1 text-white md:text-lg text-sm font-semibold leading-snug">
                      {data?.data[3]?.title}
                    </h1>
                  </div>
                </div>
              </motion.div>
              </PhotoView>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Herro;
