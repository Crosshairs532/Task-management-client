import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";


const UseContextapi = () => {
    const auth = useContext(AuthContext);
    return auth
};

export default UseContextapi;