import { Link, useLocation } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Followus from "../../../common/FollowUs/Followus";
import Toppost from "../../../common/TopPost/Toppost";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useState } from "react";
// import { useEffect } from "react";
import FeaturedTable from "../FeaturedTable/FeaturedTable";
import { useQuery } from "@tanstack/react-query";

const FeaturedBlog = () => {
  const { pathname } = useLocation();
  const page = pathname.split("/")[1].toUpperCase();
  const axios = useAxios();
  const [ad, setAd] = useState();
  const [ad2, setAd2] = useState();

  const { data } = useQuery({
    queryKey: ["adsens2"],
    queryFn: () => {
      axios
      .get("/advertise?category=allpage-ad-1")
      .then((res) => setAd(res.data[0].img));

    axios
      .get("/advertise?category=allpage-ad-2")
      .then((res) => setAd2(res.data[0].img));
  },
  });


  // useEffect(() => {
  //   axios
  //     .get("/advertise?category=allpage-ad-1")
  //     .then((res) => setAd(res.data[0].img));

  //   axios
  //     .get("/advertise?category=allpage-ad-2")
  //     .then((res) => setAd2(res.data[0].img));
  // }, [axios]);
  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
        <div className=" lg:w-9/12 w-full">
          <p className=" mb-6 text-sm c-primary flex items-center">
            YOU ARE AT
            <span className=" text-gray-600 flex items-center gap-1 text-xs">
              {" "}
              : <Link to="/">HOME</Link> <AiOutlineDoubleRight /> {page}
            </span>
          </p>
          {/* Title section */}
          <div className="border-l-4 pl-4 border-l-pink-700 flex justify-between items-center gap-4 w-full">
            <h1 className=" text-xl md:text-2xl font-bold">{page}</h1>
            {/* <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-7/12"></div> */}
          </div>
          <FeaturedTable></FeaturedTable>
        </div>
        <div className=" w-full lg:w-3/12">
          <img src={ad} alt="" className=" w-full mt-16" />
          <Followus></Followus>
          <Toppost></Toppost>
          <img src={ad2} alt="" className=" w-full mt-16" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
