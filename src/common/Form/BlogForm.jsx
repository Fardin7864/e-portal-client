import { Link, useLocation } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Form from "./Form/Form"


const BlogForm = ({blog}) => {
    const {pathname} = useLocation();
    const page = (pathname.split('/')[1].toUpperCase())
    // console.log(blog)
  return (
    <div>
      <p className=" mb-6 text-sm c-primary flex items-center">
        YOU ARE AT
        <span className=" text-gray-600 flex items-center gap-1 text-xs">
          {" "}
          : <Link to="/">HOME</Link> <AiOutlineDoubleRight /> {page}
        </span>
      </p>
      {/* Title section */}
      {/* <div className="border-l-4 pl-4 border-l-pink-700 flex justify-between items-center gap-4 w-full">
        <h1 className=" text-xl md:text-2xl font-bold">{page}</h1>
      </div> */}
      {/* Form */}
      <Form blog={blog}></Form>
    </div>
  );
};

export default BlogForm;
