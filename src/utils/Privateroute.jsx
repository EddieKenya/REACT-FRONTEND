import { Navigate, Outlet } from "react-router-dom";
import LogInForm from "../pages/loginform";

const LogUser = () => {
  const user = { loggedIn: false };
  return user & user.loggedIn;
};

const PrivateRoute = () => {
  const Isauth = LogUser();
  return Isauth ? <Outlet /> : <Navigate to="/logIn" />;
};
export default PrivateRoute;
