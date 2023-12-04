import logo from "../../assets/logo/logo-discover-01.webp";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";

const Footer = () => {
  const axios = useAxios();
  // const [populer, setPopuler] = useState();
  // const [ourPick, setourPick] = useState();

  const { isLoading, data } = useQuery({
    queryKey: ['populer'],
    queryFn: () => axios.get("/blogs?sortFild=views&sortOrder=-1&page=0&pageSize=3"),
  });
  const populer = data?.data;


  const { data: pick } = useQuery({
    queryKey: ['oursPick'],
    queryFn: () => axios.get("/blogs?sortFild=views&sortOrder=-1&page=0&pageSize=3"),
  });
  const ourPick = pick?.data;

  // useEffect(() => {
  //   axios
  //     .get("/blogs?sortFild=views&sortOrder=-1&page=0&pageSize=3")
  //     .then((res) => {
  //       //   console.log(res.data);
  //       setPopuler(res.data);
  //     });
  //   axios
  //     .get("/blogs?sortFild=date&sortOrder=-1&page=0&pageSize=3")
  //     .then((res) => {
  //       setourPick(res.data);
  //     });
  // }, []);

  return (
    <>
      <footer className="footer bg-[#081838] text-white py-10 px-5 lg:px-20">
        <aside className="">
          <p className=" text-xl font-bold text-white border-b-2 border-b-gray-400 w-full pb-3 mb-3">
            ABOUT US
          </p>
          <img src={logo} alt="" />
          <p className="w-96">
            DISCOVER Industries Ltd.
            <br /> <br />
            Your source for the lifestyle news. This demo is crafted
            specifically to exhibit the use of the theme as a lifestyle site.
            Visit our main page for more demos. <br /> <br /> We're accepting
            new partnerships right now.
          </p>
        </aside>
        <nav className=" px-3">
          <header className="footer-title">OUR PICK</header>
          {/* small featured blogs */}
          <div className=" grid grid-cols-1 gap-x-8 gap-y-5">
            {ourPick?.map((blog) => (
              <div key={blog._id} className=" flex lg:flex-row flex-col gap-3">
                <div className="">
                  <img
                    src={blog.img}
                    alt=""
                    className=" w-28 h-16 hover:opacity-75"
                  />
                </div>
                <div className=" lg:w-1/2 border-t-0 border-l-0 border-b-0 pr-3 flex flex-col justify-start">
                  <p className=" flex justify-between my-[2px] text-[8px] font-semibold">
                    {blog?.category.toUpperCase()}
                  </p>
                  <h3 className=" hover:text-[#fb3158] text-xs font-bold">
                    {blog?.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </nav>
        <nav>
          <header className="footer-title">MOST POPULAR</header>
          {/* small featured blogs */}
          <div className=" grid grid-cols-1 gap-x-8 gap-y-5">
            {populer?.map((blog) => (
              <div key={blog._id} className=" flex lg:flex-row flex-col gap-3">
                <div className="">
                  <img
                    src={blog.img}
                    alt=""
                    className=" w-28 h-16 hover:opacity-75"
                  />
                </div>
                <div className=" lg:w-1/2 border-t-0 border-l-0 border-b-0 pr-3 flex flex-col justify-start">
                  <p className=" flex justify-between my-[2px] text-[8px] font-semibold">
                    {blog?.category.toUpperCase()}
                  </p>
                  <h3 className=" hover:text-[#fb3158] text-xs font-bold">
                    {blog?.title.slice(0,50)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </footer>
      <footer className="footer justify-center items-center p-4 bg-[#081838] text-white border-t border-t-slate-300">
        <aside className="items-center grid-flow-col">
          <img src={logo} alt="" className=" h-3" />
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
