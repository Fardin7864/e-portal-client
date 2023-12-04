import { AiOutlineDoubleRight } from "react-icons/ai";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import Blog from "../Blog/Blog";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const axios = useAxios();
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [searchProducts,setsearchProducts] = useState("");
  const [isSearch, setisSearch] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState();
  const [count, setCoutn] = useState(0);
  const [currenPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const totalPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(totalPages).keys()];


  const { data } = useQuery({
    queryKey: ["totalBlogCount",axios,category,currenPage,search,itemsPerPage],
    queryFn: () => {
      axios.get(`/blogCount?category=${category}`)
      .then((res) => setCoutn(res.data.result));
  },
  });
  const { data: pr } = useQuery({
    queryKey: ["prod",axios,category,currenPage,search,itemsPerPage,isSearch],
    queryFn: () => {
      axios
      .get(
        `/blogs?category=${category}&page=${currenPage}&pageSize=${itemsPerPage}`
      )
      .then((res) => {
        setProducts(res.data);
        // console.log((res.data))
        if (res.data == 0) {
          // setSearch("");
          toast('Sorry  No Data!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        setIsloading(false);
      });
  },
  });

  const { data: srs } = useQuery({
    queryKey: ["searchDataSearch",search],
    queryFn: () => {
      axios
      .get(
        `/blogs?title=${search}`
      )
      .then((res) => {
        setsearchProducts(res.data);
        // console.log((res.data))
        if (res.data == 0) {
          setSearch("");
          toast('Sorry Title Dose not match!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        setIsloading(false);
      });
  },
  });



  const handleSearch = (e) => {
    e.preventDefault();
    setisSearch(false)
    const title = e.target.search.value;
    setSearch(title);
    setisSearch(true);
    e.target.reset();
  };
  // console.log(search)

  const handleSize = (e) => {
    const val = parseInt(e.target.value);
    // console.log(val)
    setItemsPerPage(val);
    setCurrentPage(0);
  };
  const handleCategory = (e) => {
    const val = e.target.value;
    // console.log(val);
    setCategory(val);
    setDisplayBlogs(products)
    setSearch('');
    isSearch(false);
  };
  const handlePrev = () => {
    if (currenPage > 0) {
      setCurrentPage(currenPage - 1);
    }
  };
  const handleNext = () => {
    if (currenPage < totalPages - 1) {
      setCurrentPage(currenPage + 1);
    }
  };
  // console.log(currenPage)

  useEffect(() => {
    const newDisplayBlogs = isSearch ? searchProducts : products;
    setDisplayBlogs(newDisplayBlogs);
  }, [isSearch, searchProducts, products]);


  return (
    <div>
      <p className=" mb-6 text-sm c-primary flex items-center">
        YOU ARE AT
        <span className=" text-gray-600 flex items-center gap-1 text-xs">
          {" "}
          : <Link to="/">HOME</Link> <AiOutlineDoubleRight /> ALL
        </span>
      </p>
      {/* Title section */}
      <div className="border-l-4 pl-4 border-l-pink-700 flex justify-between items-center gap-4 w-full">
        <h1 className=" text-xl md:text-2xl font-bold">All Blog</h1>
        {/* <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-7/12"></div> */}
      </div>
        {/* filter and search section */}
        <div className=" flex lg:flex-row flex-col items-center gap-2 mt-2 ">
          {/* category select */}
          <div className=" flex items-center gap-2 mt-2">
            <h4 className=" text-lg">Filter By Category: </h4>
            <select
              value={category}
              onChange={handleCategory}
              className=" border-2 rounded-md p-1 overflow-y-auto"
            >
              <option value="">All</option>
              <option value="Sports">Sports</option>
              <option value="Games">Games</option>
              <option value="HomeDecor">HomeDecor</option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Celebrities">Celebrities</option>
              <option value="Nature">Nature</option>
              <option value="Cuisine">Cuisine</option>
              <option value="Travel">Travel</option>
              <option value="Art">Art</option>
              <option value="Science">Science</option>
              <option value="Trends">Trends</option>
              <option value="Relations">Relations</option>
            </select>
          </div>
          {/* Searchbar */}
          <form
            onSubmit={handleSearch}
            action=""
            className=" w-full lg:w-7/12 ml-9"
          >
            <div className=" flex items-center ">
              <input
                type="text"
                name="search"
                placeholder="Search By Title ..."
                id=""
                className=" border border-pink-700 rounded-r-none p-2 w-11/12 rounded-lg"
              />
              <button
                type="submit"
                className=" hover:opacity-75  relative bg-[#fb3158] p-2 border-[3.2px] border-[#fb3158] rounded-r-lg"
              >
                <FiSearch className=" text-xl text-white" />
              </button>
            </div>
          </form>
        </div>
      {/* All Blogs */}
      {/* Pagination */}
      <div>
        {isLoading ? (
          <div className="grid grid-cols-1 p-4 gap-7">
            {Array(itemsPerPage)
              .fill(null)
              .map((_, index) => (
                <div key={index} className=" flex border p-4">
                  <Skeleton height={100} />
                  <div>
                    <Skeleton height={30} width="80%" />
                    <Skeleton height={20} width="60%" />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 p-4 gap-7">
            {displayBlogs?.map((blog) => (
              <Blog key={blog._id} blog={blog}></Blog>
            ))}
          </div>
        )}

        <div className=" flex items-center justify-center gap-3">
          <button onClick={handlePrev} className=" btn btn-warning">
            Prev
          </button>
          <div className=" flex items-center hidden lg:block">
            {pages.map((page, i) => (
              <button
                onClick={() => setCurrentPage(page)}
                className={
                  currenPage === page ? "btn bg-orange-400" : "btn btn-ghost"
                }
                key={page}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button onClick={handleNext} className=" btn btn-warning ">
            Next
          </button>
          <div className=" flex items-center gap-3">
            <p>Total Items:</p>
            <select
              className=" border border-orange-500 p-2"
              value={itemsPerPage}
              onChange={handleSize}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
