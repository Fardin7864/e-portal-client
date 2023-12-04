import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Followus from "../../common/FollowUs/Followus";
import Subscription from "../../common/Subscription/Subscription";
import useAxios from "../../hooks/useAxios/useAxios";
import useAuthantication from "../../hooks/useAuthan/useAuthantication";
import Wishblogs from "./Wishblogs/Wishblogs";
import { useQuery } from "@tanstack/react-query";

const Wishlist = () => {
    const axios = useAxios();
    const blog = useLoaderData();
    const [ad2, setAd2] = useState();
    const { user } = useAuthantication();
    const [isAuthor, setAuthor] = useState(false);
    const [render, setrender] = useState(false)

    const { data: tabD } = useQuery({
      queryKey: ["wishlists",render],
      queryFn: () => {
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

    const handleRender = () =>{
      console.log("Clicked on render")
      setrender(!render)
    }
  
    // useEffect(() => {
  
    //   axios
    //     .get("/advertise?category=allpage-ad-2")
    //     .then((res) => setAd2(res.data[0].img));
    // }, [axios]);
    // useEffect(() => {
    //   setAuthor(false);
    //   // console.log(user?.email, authorEmail)
    //   if (user?.email != blog?.authorEmail) {
    //     // console.log('true')
    //     setAuthor(true);
    //   }
    // }, [user, blog]);
    // console.log(blog)
    return (
        <div className=" max-w-7xl mx-auto">
        <div className=" flex lg:flex-row flex-col px-5 lg:px-0 justify-center my-10 w-full max-w-7xl mx-auto gap-10">
          <div className=" lg:w-9/12 w-full">
            <Wishblogs handleRender={handleRender}></Wishblogs>
          </div>
          <div className=" w-full lg:w-3/12">
            <img src={ad2} alt="" className=" w-full mt-16" />
            <Followus></Followus>
            <Subscription></Subscription>
          </div>
        </div>
      </div>
    );
};

export default Wishlist;