import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Result from "./routes/Result";
import Root from "./routes/Root";
import Settings from "./routes/Settings";

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
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
