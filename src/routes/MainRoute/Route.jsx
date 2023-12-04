import { createBrowserRouter } from "react-router-dom";
import Root from '../../Root'
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Allblogs from "../../pages/AllBlogs/Allblogs";
import Details from "../../pages/Details/Details";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Wishlist from "../../pages/Wishlist/Wishlist";
import AddBlog from "../../pages/AddBlog/AddBlog";
import Update from "../../pages/Update/Update";
import FeaturedBlog from "../../pages/Featured/FeaturedBlog/FeaturedBlog";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all',
                element: <Allblogs></Allblogs>
            },
            {
                path: '/details/:id',
                element:<Details></Details>,
                loader: ({params}) => fetch(`https://blog-bloom-server-silk.vercel.app/api/v1/blogs/${params.id}`)
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/wishlist',
                element: <PrivetRoute><Wishlist></Wishlist></PrivetRoute>
            },
            {
                path: '/addblog',
                element: <PrivetRoute><AddBlog></AddBlog></PrivetRoute>
            },
            {
                path: '/update/:id',
                element: <PrivetRoute><Update></Update></PrivetRoute>,
                loader: ({params}) => fetch(`https://blog-bloom-server-silk.vercel.app/api/v1/blogs/${params.id}`)
            },
            {
                path: '/featured',
                element: <FeaturedBlog></FeaturedBlog>
            }


        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default Route;