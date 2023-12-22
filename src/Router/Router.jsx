import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from '../Error/Error'
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
]);
export default router;