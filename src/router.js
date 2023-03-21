import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import LogIn from "./routes/LogIn";
import NotFound from "./routes/NotFound";
import Result from "./routes/Result";
import Root from "./routes/Root";
import SignUp from "./routes/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

export default router;
