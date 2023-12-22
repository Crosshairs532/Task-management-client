import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
const Layout = () => {
    const location = useLocation();
    return (
        <div>
            <div className=" min-h-screen bg-input_bg">
                <Navbar></Navbar>
                {
                    location.pathname == '/' && <Banner></Banner>
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;