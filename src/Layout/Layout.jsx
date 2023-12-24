import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import Footer from "../Pages/Footer";
import Who from "../Pages/Who";
const Layout = () => {
    const location = useLocation();
    return (
        <div>
            <div className={` ${location.pathname == '/' ? 'bg-input_bg  min-h-screen' : ""}`}>
                <Navbar></Navbar>
                {
                    location.pathname == '/' && <Banner></Banner>
                }
            </div>
            <div className=" min-h-screen">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Layout;