import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";
import { useGetUser } from "../hooks/useGetUser";

const PrivateRoute = ({ children }) => {
  const { user } = useGetUser();
  const location = useLocation();

  if (user?._id) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
