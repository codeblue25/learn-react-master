import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./Routes/Home";
import Tvshow from "./Routes/Tvshow";
import Search from "./Routes/Search";

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
