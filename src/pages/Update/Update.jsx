import BlogForm from "../../common/Form/BlogForm";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const blog = useLoaderData();
// console.log(blog)
  return (
    <div className=" max-w-7xl mx-auto">
      <BlogForm blog={blog}></BlogForm>
    </div>
  );
};

export default Update;
