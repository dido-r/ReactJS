import { Outlet, useLocation } from "react-router-dom";
import { useSessionContext } from "../../context/sessionContext";
import { Login } from "../Login/Login";

export const NoUserGuard = ({
    children,
}) => {
    const { user } = useSessionContext();
    const location = useLocation();

    if (user === null) {
        return <Login location={location} />;
    } 
   
    return children ? children : <Outlet />
}