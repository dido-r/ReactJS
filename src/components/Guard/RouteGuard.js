import { Navigate, Outlet } from "react-router-dom";
import { useSessionContext } from "../../context/sessionContext";

export const RouteGuard = ({
    children,
}) => {
    const { user } = useSessionContext();
    
    if (user === null) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
}