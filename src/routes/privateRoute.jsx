import { Navigate, useLocation } from "react-router";
import { useGetUser } from "../hooks/useGetUser";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user } = useGetUser();
  const location = useLocation();

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
