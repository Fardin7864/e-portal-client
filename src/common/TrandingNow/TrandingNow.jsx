import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios/useAxios";
import Skeleton from "react-loading-skeleton";
import { AiOutlineRise } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";


const TrandingNow = () => {
    // const [tranding, setTranding] = useState();
    // const [banner, setBanner]  = useState('');

    const axios = useAxios();

    const { isLoading, data } = useQuery({
      queryKey: ["trandin"],
      queryFn: () => axios.get('/blogs?sortFild=views&sortOrder=desc&page=0&pageSize=5'),
    });
    const tranding = (data?.data);

    const {  data:ad  } = useQuery({
      queryKey: ["adBanner"],
      queryFn: () => axios.get('/advertise?category=home-ad-right-1'),
    });
    const banner = (ad?.data[0]);

    
    // useEffect(() => { 
    //     axios.get('/blogs?sortFild=views&sortOrder=desc&page=0&pageSize=5')
    //     .then(res => setTranding(res.data))
    //     axios.get('/advertise?category=home-ad-right-1')
    //     .then(res => {
    //         setBanner(res.data[0])
    //     })
    //  },[])
// console.log(banner)
  return (
    <div className=" w-full flex flex-col justify-start pl-7">
      <div className=" flex justify-between items-center gap-2 w-full mb-5">
        <h1 className=" text-xl md:text-2xl font-bold">Tranding Now</h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-1/12 lg:w-4/12"></div>
      </div>
      <div className=" flex flex-col gap-3">
        {
            tranding?.map((blog,index) => 
            <div key={index} className=" border-b-2 mb-5">
                <div className=" flex items-center gap-3">
                    <span className=" text-4xl font-bold text-[#fb3158]">{index + 1}.</span> 
                    <span className=" text-xs font-bold text-gray-700">{blog?.category || <Skeleton width="100%" height={20}/>}</span>
                <p className=" flex items-center gap-2 text-[10px] font-medium">
                    <AiOutlineRise/>
                    {blog?.views}
                     <span>VIEWS</span>
                </p>
                </div>
                <h3 className=" relative -top-4 text-lg font-bold pl-10">{blog?.title.slice(0,60)}</h3>
                
            </div>
            )
        }
      </div>
      <div>
        <img src={banner?.img} alt=""/>
      </div>
    </div>
  );
};

export default TrandingNow;
