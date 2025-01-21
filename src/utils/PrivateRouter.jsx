import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Optionally show a loading spinner or placeholder
    return <div>Loading...</div>;
  }

  // Redirect to login if not authenticated
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;