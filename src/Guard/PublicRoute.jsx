import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return !isAuth ? children : <Navigate to="/home" />;
};

export default PublicRoute;
