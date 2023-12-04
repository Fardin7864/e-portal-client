import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toppost from "../../common/TopPost/Toppost";
import Followus from "../../common/FollowUs/Followus";
import Subscription from "../../common/Subscription/Subscription";
import useAxios from "../../hooks/useAxios/useAxios";
import Detail from "./Detail/Detail";
import Comments from "../../common/Comments/Comments";
import useAuthantication from "../../hooks/useAuthan/useAuthantication";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const axios = useAxios();
  const blog = useLoaderData();
  // const [blog, setBlog] = useState();
  const [ad, setAd] = useState();
  const [ad2, setAd2] = useState();
  const { user } = useAuthantication();
  const [isAuthor, setAuthor] = useState(false);



  const { data } = useQuery({
    queryKey: ["advertise1", "blog"],
    queryFn: () => {
      axios
      .get("/advertise?category=allpage-ad-1")
      .then((res) => setAd(res.data[0].img));

    axios
      .get("/advertise?category=allpage-ad-2")
      .then((res) => setAd2(res.data[0].img));

      setAuthor(false);
      // console.log(user?.email, authorEmail)
      if (user?.email != blog?.authorEmail) {
        // console.log('true')
        setAuthor(true);
      }
  },
  });


  return (
    <div className=" max-w-7xl mx-auto">
      <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
        <div className=" lg:w-9/12 w-full">
          <Detail blog={blog} isAuthor={isAuthor}></Detail>
          <Comments id={blog?._id} isAuthor={isAuthor}></Comments>
        </div>
        <div className=" w-full lg:w-3/12">
          <img src={ad} alt="" className=" w-full mt-16" />
          <Toppost></Toppost>
          <Followus></Followus>
          <Subscription></Subscription>
          <img src={ad2} alt="" className=" w-full mt-16" />
        </div>
      </div>
    </div>
  );
};

export default Details;
