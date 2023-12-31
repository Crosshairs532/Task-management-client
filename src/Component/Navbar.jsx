import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { SiTask } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const goTo = useNavigate();
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
            } to={'/about'}>about</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                isActive
                    ? "ac"

                    : ""
            } to={'/feature'}>Features</NavLink></li>

            <li><NavLink className={({ isActive }) =>
                isActive
                    ? "ac"
                    : ""
            } to={'/dashboard/createTask'}>Dashboard</NavLink></li>

        </>
    const handleOut = () => {
        logOut()
        goTo('/')
    }
    return (
        <div className=" bg-input_bg">
            <div className={`navbar container py-4 bg-input_bg mx-auto ${location.pathname == '/' ? ' bg-transparent' : ''} `}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-input_bg font-Syne bg-after_hover menu-sm w-40 duration-150 dropdown-content mt-3 z-[1] p-2 shadow rounded-box ">
                            {
                                nav_items
                            }
                        </ul>
                    </div>
                    <Link to='/' className=" hidden  text-after_hover hover:scale-150 duration-150 lg:block"><SiTask size={40} color="" /></Link>
                </div>
                <div className="navbar-center">
                    <Link to={'/'} className=" block text-after_hover lg:hidden "> <SiTask size={40} /></Link>
                    <div className="hidden lg:flex">
                        <ul className="menu font-Syne menu-horizontal px-1">
                            {
                                nav_items
                            }

                        </ul>
                    </div>
                </div>
                <div className={`navbar-end`}>
                    <div className={` dropdown dropdown-end ${user ? 'block visible' : 'hidden'}`}>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><button onClick={handleOut}>Logout</button> </li>
                        </ul>
                    </div>
                </div>

            </div>


        </div >

    );
};

export default Navbar;