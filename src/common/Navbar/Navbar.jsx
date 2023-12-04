import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo/logo-discover-01.webp'
import { AuthContext } from "../../providers/authProvider/AuthanticationProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios/useAxios";

const Navbar = () => {
  const {hadnleToggle} = useContext(AuthContext)
  const axios = useAxios()
  const [profile, setProfile] = useState();

  const {user, logOut, dark} = useContext(AuthContext);
  const handleSignOut = () => { 
    logOut();
   }
   const name = user?.displayName === null && (user?.email?.split("@")[0].toUpperCase() || '') || user?.displayName;


  //  const { isLoading, data } = useQuery({
  //   queryKey: ['profilepic'],
  //   queryFn: () => axios.get('https://i.ibb.co/5sBC2Hv/avatar-1295429-640.png'),
  // });

  // const profile = data?.data?.url;


  //  useEffect(() => { 
  //   fetch('https://i.ibb.co/5sBC2Hv/avatar-1295429-640.png')
  //   .then()
  //   .then(data => setProfile(data.url))
  //   },[])

  const themeBtn= !dark? "Dark": "Light"

  const naveLinks = (
    <>
      <li className="font-normal text-base px-2 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-normal text-base px-2 ">
        <NavLink to="/addblog">Add Blog</NavLink>
      </li>
      <li className="font-normal text-base px-2 ">
        <NavLink to="/all">All Blogs</NavLink>
      </li>
      <li className="font-normal text-base px-2 ">
        <NavLink to="/featured">Featured Blogs</NavLink>
      </li>
      <li className="font-normal text-base px-2 ">
        <NavLink to="/wishlist">wishlist</NavLink>
      </li>
    </>
  );



  return (
    <div className=" navbar bg-white z-[100] shadow-md text-black lg:px-36 pt-5 sticky -top-7">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-transparent menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {naveLinks}
          </ul>
        </div>
        <div className=" flex justify-center items-center">
          <div className="h-full">
            <img src={logo} alt=""  className=" w-full h-full"/>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{naveLinks}</ul>
      </div>
      {
        user && <div className="navbar-end flex items-center gap-4">
          <img src={user?.photoURL ? user.photoURL : profile} alt=""  className=" w-7 h-7 rounded-full hidden md:block "/>
        <p className=" text-lg font-bold text-p hidden md:block">{name}</p>
        <button onClick={handleSignOut}  className="bg-[#fb3158] hover:opacity-75 text-white hover:shadow-xl active:opacity-60 py-2 px-3 text-sm font-medium rounded-lg flex items-center justify-center gap-5">Sign Out</button>
      </div> || <div className="navbar-end flex gap-3">
        <Link to="/login" className="bg-[#fb3158] hover:opacity-75 text-white hover:shadow-xl active:opacity-60 py-2 px-3 text-sm font-medium rounded-lg flex items-center justify-center gap-5">Log In</Link>
        <Link to="/signup" className="bg-[#fb3158] hover:opacity-75 text-white hover:shadow-xl active:opacity-60 py-2 px-3 text-sm font-medium rounded-lg flex items-center justify-center gap-5">Register</Link>
        </div>
      }
      
    </div>
  );
};

export default Navbar;
