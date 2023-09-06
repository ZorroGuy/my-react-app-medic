import { useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export default function RequiedAuth({ allowedRoles }) {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  console.log("-------------", user);
  //set condition for after login
  return !user.login ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : allowedRoles.filter((roles) => roles === user.login.role).length ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace={true} />
  );
}
