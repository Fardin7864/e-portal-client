import { useEffect, useState } from "react";
import useAuthantication from "../../hooks/useAuthan/useAuthantication";
import useAxios from "../../hooks/useAxios/useAxios";
import {CgProfile} from "react-icons/cg"
import { useQuery } from "@tanstack/react-query";

const Comments = ({ id, isAuthor }) => {
  const { user, success } = useAuthantication();
  const axios = useAxios();
  // const [comments, setComments] = useState();
  const [render, setRender] = useState(false);
  // console.log(user.photoURL);
  const commentId = id;
  const authorEmail = user?.email;
  const authorName = user?.displayName
    ? user.displayName
    : user?.email?.split("@")[0];
  const authorPhoto = user?.photoURL ? user.photoURL : "";
  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const date = new Date();
    const commentBody = {
      commentId,
      comment,
      authorEmail,
      authorName,
      authorPhoto,
      date,
    };
    // console.log(commentBody)
    axios.post("/comments", commentBody).then((res) => {
      if (res.data.acknowledged) {
        success("Thank You For comment!");
        e.target.reset();
        setRender(!render);
      }
    });
  };

  const { isLoading, data } = useQuery({
    queryKey: ['commentsData',render,id],
    queryFn: () => axios.get(`/comments?commentId=${id}`),
  });

  const comments = data?.data;

  // useEffect(() => {
  //   axios.get(`/comments?commentId=${id}`).then((res) => {
  //     setComments(res.data);
  //   });
  // }, [axios, id, render]);

  return (
    <div>
      <div className=" flex justify-between items-center gap-4 w-full mt-10">
        <h1 className=" text-xl md:text-2xl font-bold">COMMENTS</h1>
        <div className=" border border-r-0 border-l-0 border-gray-300 h-[4px] w-3/12 lg:w-10/12"></div>
      </div>
          {isAuthor &&
      <div className=" mt-5">
        <form onSubmit={handleComment} className=" flex">
          {user ? (<>
          <textarea
            name="comment"
            id=""
            placeholder="Comment Here..."
            required
            className=" border border-[#fb3158] text-lg pl-3 rounded-md w-1/2"
            ></textarea>
            <button type="submit" className="text-white btn bg-[#fb3158]">
              Comment
            </button>
            </>)
          : (
            <textarea
              name="comment"
              id=""
              value="Log In For Comment !!"
              required
              className=" border border-[#fb3158] text-xl pl-3 py-1 rounded-md w-1/2"
            ></textarea>) }
        </form>
      </div>
          || 
          (<div>
            <textarea
              name="comment"
              id=""
              value="Can not comment on own blog !!"
              required
              className=" border border-[#fb3158] text-xl pl-3 py-1 rounded-md w-1/2"
            ></textarea>
          </div>)}
      <div className=" grdi grid-cols-1">
        {comments?.map((comment) => (
          <div key={comment._id} className=" border rounded-lg mt-5 p-5">
            <div className=" mb-2">
              <p>{comment?.comment}</p>
            </div>
            {/* Author and blog details */}
            <div className=" flex items-center lg:items-center gap-2">
              <div className=" w-5 h-5 lg:w-6 lg:h-6">
                <img
                  src={comment?.authorPhoto}
                  alt=""
                  className=" w-full h-full rounded-full"
                />
              </div>
              <div className=" flex flex-wrap gap-2 my-1">
                <span className=" text-gray-400 text-xs">BY </span>
                <span className=" text-gray-700 text-xs">{comment?.authorName}</span>
                <p className=" pl-4 flex text-gray-400 items-center gap-1 text-xs font-normal">
                  <span>POST : </span>
                  {comment?.date.split("T")[0]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
