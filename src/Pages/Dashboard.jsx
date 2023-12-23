import { FaHome } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";

import { Link, NavLink, Outlet } from "react-router-dom";
import UseContextapi from "../Hooks/UseContextapi";

const Dashboard = () => {
    const { user, isLoading } = UseContextapi()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn absolute right-3 top-2 btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu flex flex-col justify-around  p-4 w-80 min-h-full bg-text_color font-Syne text-border-color">
                    {/* Sidebar content here */}

                    <div className=" mx-auto mb-7">
                        <div className="avatar online">
                            <div className=" w-40 rounded-full">
                                {
                                    user ? <img src={user?.photoURL} /> : <div className="skeleton w-40 h-40 rounded-full"></div>
                                }

                            </div>

                        </div>
                        <div className=" mx-auto">
                            <h1 className=" text-xl">Name:{user?.displayName}</h1>
                            <p>{user?.email}</p>
                        </div>


                    </div>
                    <div className=" space-y-8">
                        <li><NavLink className={' font-Syne text-xl'} to={'/dashboard/createTask'}><BiTask size={30}></BiTask> Create Task</NavLink></li>
                        <li><NavLink className={' font-Syne text-xl'} to={'/dashboard/previousTask'}><FaTasks size={30}></FaTasks>Previous Task</NavLink></li>
                        <li><Link to='/' className=" flex items-center gap-4"><FaHome size={30} /> <h1 className=" text-xl">Home</h1></Link></li>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;