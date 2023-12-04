import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "@tanstack/react-query";

const AdvertiseBanner = () => {
  const [banner, setBanner] = useState("");
  const axios = useAxios();

  const { data: tabD } = useQuery({
    queryKey: ["adBycategory"],
    queryFn: () => {
      axios.get("/advertise?category=home-banner-ad").then((res) => {
        setBanner(res.data[0]);
      });
    },
  });

  // useEffect(() => {
  //     axios.get('/advertise?category=home-banner-ad')
  //     .then(res => {
  //         setBanner(res.data[0])
  //     })
  //  },[]);
  // console.log(banner)
  return (
    <div className="lg:my-20 my-6 px-8 lg:px-16">
      {banner?.img ? (
        <img src={banner.img} />
      ) : (
        <Skeleton width="100%" height={200} />
      )}
    </div>
  );
};

export default AdvertiseBanner;
