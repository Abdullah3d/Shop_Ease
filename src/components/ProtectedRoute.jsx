import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { user } = useContext(AuthContext);

    // 1. If not logged in at all, go to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // 2. If it's an admin route but user isn't admin, go to home
    if (adminOnly && user.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;