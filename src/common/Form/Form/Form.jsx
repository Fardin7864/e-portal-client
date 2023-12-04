import { FaCarSide, FaFileInvoiceDollar, FaStar, FaStarOfLife } from "react-icons/fa";
import { FaCarRear, FaNoteSticky, FaPhotoFilm } from "react-icons/fa6";
import bgimg from '../../../assets/logo/book-bg.png'
import useAuthantication from "../../../hooks/useAuthan/useAuthantication";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useLocation } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthanticationProvider";


const AddProducts = ({blog}) => {
    const {dark,user,success} = useAuthantication()
    const axios = useAxios();
    const [category, setCategory] = useState("");
    const location = useLocation();

    const {email,displayName,photoURL} = user || {};
    // console.log(email,displayName,photoURL)
    const {_id,title,img,description,details,category: blogCategory,'reading-time': readingTime, date, author, views, label, authorEmail } = blog || {};
    // console.log(_id)

    const bgColor = dark? "" : "bg-white"

    const handleCategory = (e) => {
        const val = e.target.value;
        setCategory(val);
    };
    

    const handleSubmit= (e) => { 
        e.preventDefault();
        const blog = {
            title: e.target.title.value.toUpperCase(),
            img: e.target.img.value,
            description: e.target.description.value,
            details: e.target.details.value,
            category: category,
            'reading-time': Number(e.target['reading-time'].value),
            date: new Date(),
            author: displayName,
            'author-img': photoURL,
            views:0,
            label:'',
            authorEmail: email,

        }

        if(location.pathname.split("/")[1] === "update" ){
                console.log(_id)
            axios.put(`/update/${_id}`,blog)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged){
                    success("Successfully Update The Blog✅")
                    // e.target.reset();
                }
            })
            
        }
        else{
            console.log("This is add page!")
            axios.post('/blogs',blog)
            .then(res => {
                if (res.data.acknowledged){
                    success("Successfully Create New Blog✅")
                    e.target.reset();
                }
            })
        }

     }
    return (
        <div className=' lg:mt-0 flex justify-center py-20'>
            <form onSubmit={handleSubmit} className={ ` ${bgColor} shadow-xl bg-cover bg-no-repeat z-50 px-4 lg:px-16 py-14 rounded-lg`} style={{backgroundImage: `url(${bgimg})`}}>
                <h1 className=' text-b text-2xl font-bold'>Add New Blog</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 items-center'>
                <div>
                    <h4 className=' text-b text-lg font-semibold mt-6 mb-2 flex items-center gap-3'>Title <FaStarOfLife className=' text-p text-xs'/></h4>
                    <input 
                    type='text' 
                    name="title" 
                    required
                    id="" 
                    defaultValue={title}
                    placeholder='Enter title Name'
                    className=' py-3 text-base pl-3 lg:pr-40 pr-28 rounded-md border border-gray-400 text-gray-500'>
                    </input>
                </div>
                <div>
                    <h4 className=' text-b text-lg font-semibold mt-6 mb-2 flex items-center gap-3'><FaPhotoFilm className=' text-xl'/> Photo URL <FaStarOfLife className=' text-p text-xs'/></h4>
                    <input 
                    type='text' 
                    name="img"
                    required
                    defaultValue={img}
                    placeholder='Enter photo URL' 
                    id="" 
                    className=' py-3 text-base pl-3 lg:pr-40 pr-28 rounded-md border border-gray-400 text-gray-500'>
                    </input>
                </div>
                <div>
                    <h4 className=' text-b text-lg font-semibold mt-6 mb-2 flex items-center gap-3'><FaNoteSticky className=' text-xl'/>Short Description <FaStarOfLife className=' text-p text-xs'/></h4>
                    <input 
                    type='text' 
                    name="description"
                    required 
                    id="" 
                    defaultValue={description}
                    placeholder='Enter Car description'
                    className=' py-3 text-base pl-3 lg:pr-40 pr-28 rounded-md border border-gray-400 text-gray-500'>
                    </input>
                </div>                
                <div>
                    <h4 className=' text-b text-lg font-semibold mt-6 mb-2 flex items-center gap-3'> Select Category <FaStarOfLife className=' text-p text-xs'/></h4>
                    <select
                    defaultValue={blogCategory}
              value={category}
              onChange={handleCategory}
              className=" py-3 text-base pl-3 lg:pr-40 pr-28 rounded-md border border-gray-400 text-gray-500"
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
                <div>
                    <h4 className=' text-b text-lg font-semibold mt-6 mb-2 flex items-center gap-3'><FaFileInvoiceDollar className=' text-xl'/>Reading-time <FaStarOfLife className=' text-p text-xs'/></h4>
                    <input 
                    type='number' 
                    name="reading-time"
                    required 
                    id="" 
                    defaultValue={readingTime}
                    placeholder='Enter Car reading-time'
                    step="0.01"
                    className=' py-3 text-base pl-3 lg:pr-40 pr-28 rounded-md border border-gray-400 text-gray-500'>
                    </input>
                </div>
                <div>
                    <h4 className=' text-b text-lg font-semibold mt-6 mb-2 flex items-center gap-3'><FaNoteSticky className=' text-xl'/> Full Details <FaStarOfLife className=' text-p text-xs'/></h4>
                    <input 
                    type='text' 
                    name="details"
                    required
                    defaultValue={details}
                    placeholder='Enter Short Details' 
                    id="" 
                    className=' py-3 text-base pl-3 lg:pr-40 pr-28 rounded-md border border-gray-400 text-gray-500'>
                    </input>
                </div>
                <div>
                    <button type='submit' className=' active:opacity-50 hover:shadow-lg bg-[#FA4226] mt-14 text-base py-[14px] text-white px-3 rounded-md w-full font-semibold'>SUBMIT</button>
                </div>
                </div>
            </form>           
        </div>
    );
};

export default AddProducts;