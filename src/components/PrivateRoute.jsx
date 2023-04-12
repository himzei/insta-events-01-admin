import { Navigate } from "react-router-dom";
import useUser from "../lib/useUser";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? children : <Navigate to="/login" />;
}
