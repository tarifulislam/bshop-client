import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h1 className=" text-4xl text-red-500 text-center">Loading...</h1>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>
   
};

export default PrivateRoute;