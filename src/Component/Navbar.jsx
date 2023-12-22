import { NavLink, useLocation } from "react-router-dom";
import { SiTask } from "react-icons/si";

const Navbar = () => {
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
                <div className="navbar-center lg:flex">
                    <a className="btn btn-ghost block lg:hidden md:hidden"><SiTask size={40} color="white" /></a>
                    <ul className="menu  hidden font-Syne menu-horizontal px-1">
                        {
                            nav_items
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div >
        </div>
    );
};

export default Navbar;