import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import SocialLinks from "../../../common/SocialLinks/SocialLinks";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import Swal from 'sweetalert2'
import useAxios from "../../../hooks/useAxios/useAxios";
import useAuthantication from "../../../hooks/useAuthan/useAuthantication";

const Detail = ({ blog,isAuthor }) => {
  const axios = useAxios();
  const {success} = useAuthantication();
  const navigate = useNavigate();
  const {
    _id,
    "author-img": authorImg,
    title,
    img,
    description,
    category,
    date,
    author,
    views,
    details,
    "reading-time": readingTime,
    authorEmail,
  } = blog || {};

  //Delete function
  const handleDelete = (id) => { 
    Swal.fire({
      title: 'Confirm Action',
      text: 'Are you sure you want to continue?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Confirm"
        // Perform the action you want here
        axios.delete(`/delete/${id}`)
        .then(res => {
          // console.log(res.data)
          success("Delete successfully !!")
          navigate("/all")
        })
      } else {
        // User clicked "Cancel" or closed the alert
        
      }
    });
   }

  return (
    <div>
      <p className=" mb-6 text-sm c-primary flex items-center">
        YOU ARE AT
        <span className=" text-gray-600 flex items-center gap-1 text-xs">
          {" "}
          : <Link to="/">HOME</Link> <AiOutlineDoubleRight />
          <Link to="/all">All Blogs</Link> <AiOutlineDoubleRight />{" "}
          <span className=" hidden md:block">{title}</span>
          <span className="md:hidden block">Details</span>
        </span>
      </p>
      {/* Title section */}
      <label htmlFor="" className="c-main text-base   font-normal py-2 px-3">
        {category?.toUpperCase() || <Skeleton width={400} />}
      </label>
      <div className="border-l-4 mt-5 pl-4 border-l-pink-700 flex justify-between items-center gap-4 w-full">
        <h1 className=" text-xl md:text-4xl font-bold">{title}</h1>
        {/* <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-7/12"></div> */}
      </div>
      <p className=" text-gray-400  text-xl my-3">{description}</p>
      {/* Author and blog details */}
      <div className=" flex lg:items-center gap-2">
        <div className=" w-8 h-6 lg:w-9 lg:h-9">
          <PhotoView src={authorImg}>
          <img src={authorImg} alt="" className=" w-full h-full rounded-full" />
          </PhotoView>
        </div>
        <div className=" flex flex-wrap gap-2 my-1">
          <span className=" text-gray-400 text-xs">BY </span>
          <span className=" text-gray-700 text-xs">{blog?.author}</span>
          <p className=" pl-4 flex text-gray-400 items-center gap-1 text-xs font-normal">
            <span>POST : </span>
            {date?.split("T")[0]}
          </p>
          <p className=" pl-4 flex text-gray-400 items-center gap-1 text-xs font-normal">
            <FaRegComment />
            {readingTime - 2}
            <span>Comments</span>
          </p>
          <p className=" pl-4 flex text-gray-400 items-center gap-1 text-xs font-normal">
            <BsStopwatch />
            {readingTime}
            <span>MINS READ</span>
          </p>
          <p className=" pl-4 flex text-gray-400 items-center gap-1 text-xs font-normal">
            <FiBarChart2 />
            {readingTime}
            <span>VIEWS</span>
          </p>
        </div>
      </div>
      <div className=" w-3/5">
      <SocialLinks></SocialLinks>
      </div>
      <div className=" my-5">
        <PhotoView src={`${img}`}>
        <img src={img} alt="" />
        </PhotoView>
        {
          !isAuthor ? (<div><Link className="btn c-primary my-2" to={`/update/${_id}`}>Update</Link> <button className="btn c-primary my-2" onClick={()=>handleDelete(_id)}>Delete</button></div>): ("")
        }
        
      </div>
      <div>
        <p className=" text-lg">{details}</p>
      </div>
    </div>
  );
};

export default Detail;
