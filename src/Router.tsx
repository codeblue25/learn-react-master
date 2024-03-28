import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./Views/Home";
import Tvshow from "./Views/Tvshow";
import Search from "./Views/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movie/:movieId",
        element: <Home />,
      },
      {
        path: "tv",
        element: <Tvshow />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
