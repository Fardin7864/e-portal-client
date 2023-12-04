import { Outlet } from "react-router-dom";
import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";

const Root = () => {
    return (
        <div className=" font-fira">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;