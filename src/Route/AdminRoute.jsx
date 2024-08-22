import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <h1 className=" text-4xl text-red-500 text-center">Loading...</h1>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/" state={{from : location}} replace></Navigate>
};

export default AdminRoute;

// 6 : 2 video running