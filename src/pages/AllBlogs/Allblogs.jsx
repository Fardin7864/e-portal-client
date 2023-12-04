import { useEffect, useState } from "react";
import EditorsPicks from "../../common/EditorsPicks/EditorsPicks";
import Subscription from "../../common/Subscription/Subscription";
import TrandingNow from "../../common/TrandingNow/TrandingNow";
import useAxios from "../../hooks/useAxios/useAxios";
import AdvertiseBanner from "../Home/AdvertiseBanner/AdvertiseBanner";
import Blogs from "./Blogs/Blogs";
import Toppost from "../../common/TopPost/Toppost";
import Followus from "../../common/FollowUs/Followus";
import { useQuery } from "@tanstack/react-query";

const Allblogs = () => {
  const axios = useAxios();
  // const [ad, setAd] = useState();
  // const [ad2, setAd2] = useState();
  const { isLoading, data } = useQuery({
    queryKey: ["ad1"],
    queryFn: () => axios.get("/advertise?category=allpage-ad-1"),
  });
  const ad = data?.data[0]?.img

  const { data: addSec } = useQuery({
    queryKey: ["ad2"],
    queryFn: () => axios.get("/advertise?category=allpage-ad-2"),
  });
  const ad2 = addSec?.data[0]?.img

  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
        <div className=" lg:w-9/12 w-full">
          <Blogs></Blogs>
        </div>
        <div className=" w-full lg:w-3/12">
          <img src={ad} alt="" className=" w-full mt-16" />
          <Toppost></Toppost>
          <Followus></Followus>
          <TrandingNow></TrandingNow>
          <Subscription></Subscription>
          <img src={ad2} alt="" className=" w-full mt-16" />
        </div>
      </div>
    </div>
  );
};

export default Allblogs;
