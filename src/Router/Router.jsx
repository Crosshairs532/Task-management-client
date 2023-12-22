import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from '../Error/Error'
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Login from "../login_reg/Login";
import Registration from "../login_reg/Registration";
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
                path: '/dashboard',
                element: <Dashboard></Dashboard>
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
    }
]);
export default router;