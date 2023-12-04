import { useState } from "react";
import useAxios from "../../hooks/useAxios/useAxios";
import { useEffect } from "react";
import { AiOutlineRise } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "@tanstack/react-query";


const EditorsPicks = () => {

    // const [editorsPicks, seteditorsPicks] = useState();
    const axios = useAxios();

    const { isLoading, data } = useQuery({
      queryKey: ['editors'],
      queryFn: () => axios.get('/blogs?sortFild=reading-time&sortOrder=desc&page=0&pageSize=6'),
    });

    const editorsPicks = data?.data;

    // useEffect(() => { 
    //     axios.get('/blogs?sortFild=reading-time&sortOrder=desc&page=0&pageSize=6')
    //     .then(res => seteditorsPicks(res.data))
    //  },[])



  return (
    <div className=" w-full flex flex-col justify-start pl-7 mt-10">
      {/* Titel */}
      <div className=" flex flex-col justify-between items-center gap-2 w-full mb-5">
        <h1 className=" text-xl md:text-2xl font-bold">Editor's Picks</h1>
        <div className=" border border-r-0 border-l-0 border-[#fb3158] bg-[#fb3158] h-[4px] w-1/12 lg:w-4/12"></div>
      </div>
      {/* Editor's picks */}
      <div className=" flex flex-col gap-3">
        {
            editorsPicks?.map((blog,index) => 
            <div key={index} className=" border-b-2 mb-5 text-center pb-4">
                <div className=" flex justify-center items-center gap-3">
                    <span className=" text-xs font-bold text-gray-700">{blog?.category || <Skeleton width="100%" height={20}/>}</span>
                <p className=" flex items-center gap-2 text-[10px] font-medium">
                    <AiOutlineRise/>
                    {blog?.views}
                     <span>VIEWS</span>
                </p>
                </div>
                <h3 className=" text-lg font-bold pl-10">{blog?.title.slice(0,60)}</h3>
                
            </div>
            )
        }
      </div>
    </div>
  );
};

export default EditorsPicks;
