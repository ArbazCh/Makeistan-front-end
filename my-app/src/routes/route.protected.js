import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Protect = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  // console.log("Location: ", location);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default Protect;
