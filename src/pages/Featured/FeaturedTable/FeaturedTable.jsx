import { CompactTable } from "@table-library/react-table-library/compact";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useState } from "react";
// import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const FeaturedTable = () => {
  const axios = useAxios();
  const [tableData, setTableData] = useState([]);

  const { data: tabD } = useQuery({
    queryKey: ["tableData"],
    queryFn: () => {
      axios.get("/top/blogs").then((res) => {
        //   console.log(res.data);
        setTableData(res.data);
      });    
  },
  });


  // useEffect(() => {
  //   axios.get("/top/blogs").then((res) => {
  //     //   console.log(res.data);
  //     setTableData(res.data);
  //   });
  // }, []);

tableData.map((data,index) => {
    data.id = index + 1;
})

  const COLUMNS = [
    { label: <h3 className=" text-xl text-center">Profile</h3>, renderCell: (item) => <div className=" flex justify-center items-center mt-8"><img src={item['author-img']} className=" w-14 h-14 rounded-full" /></div> },
    {
      label: <h3 className=" text-xl text-center">Title</h3>,
      renderCell: (item) =>
        <p className=" text-xs font-bold text-center"> <span>{item.title}</span></p>,
    },
    { label: <h3 className=" text-xl text-center">Author</h3>, renderCell: (item) => <h5 className=" text-center">{item.author}</h5> },
    {
      label: <h3 className=" text-xl text-center">Srl.</h3>,
      renderCell: (item) => <h5 className=" text-xl text-center">{item.id}</h5>,
    },
  ];

  const nodes =  Object.values(tableData)

  const data = { nodes };

  return <CompactTable columns={COLUMNS} data={data} />;
  
};

export default FeaturedTable;
