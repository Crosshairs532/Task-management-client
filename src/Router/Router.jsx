import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from '../Error/Error'
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Login from "../login_reg/Login";
import Registration from "../login_reg/Registration";
import CreateTask from "../Dashboard/CreateTask";
import PreviousTask from "../Dashboard/PreviousTask";
import About from "../Pages/About";
import Feature from "../Pages/Feature";
// import Login from "../login_reg/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/feature',
                element: <Feature></Feature>
            }

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Registration></Registration>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/createTask',
                element: <CreateTask></CreateTask>
            },
            {
                path: '/dashboard/previousTask',
                element: <PreviousTask></PreviousTask>
            }
        ]
    }
]);
export default router;