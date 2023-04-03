import { Outlet } from "react-router-dom";
import { useSessionContext } from "../../context/sessionContext";
import { Home } from "../Home/Home";

export const UserGuard = ({
    children,
}) => {
    const { user } = useSessionContext();

    if (user !== null) {
        return <Home />;
    } 
   
    return children ? children : <Outlet />
}