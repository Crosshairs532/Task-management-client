import { NavLink, useLocation } from "react-router-dom";
import { SiTask } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const nav_items =
        <>
            <li><NavLink className={({ isActive }) =>
                isActive
                    ? "ac" : ''} to={'/'}>Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                isActive
                    ? " ac"

                    : ""
            } to={'/product'}>Product</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                isActive
                    ? "ac"

                    : ""
            } to={'/in'}>Industries</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                isActive
                    ? "ac"
                    : ""
            } to={'/ind'}>Industries</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                isActive
                    ? "ac"
                    : ""
            } to={'/dashboard'}>Dashboard</NavLink></li>

        </>
    return (
        <div className=" pt-4">
            <div className={`navbar container bg-input_bg mx-auto ${location.pathname == '/' ? ' bg-transparent' : ''} `}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu font-Syne menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                nav_items
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost hidden lg:block md:block"><SiTask size={40} color="white" /></a>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost block lg:hidden md:hidden"><SiTask size={40} color="white" /></a>
                    <div className="hidden lg:flex">
                        <ul className="menu font-Syne menu-horizontal px-1">
                            {
                                nav_items
                            }

                        </ul>
                    </div>
                </div>
                <div className={`navbar-end `}>
                    <div className={` dropdown dropdown-end ${user ? 'block' : 'hidden'}`}>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>


        </div >

    );
};

export default Navbar;