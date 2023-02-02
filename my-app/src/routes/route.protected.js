import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ childern }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  // console.log("child: ", childern);
  if (isLoggedIn) return childern;
  return <Navigate to="/login" />;
};
