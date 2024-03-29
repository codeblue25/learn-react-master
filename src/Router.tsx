import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./Views/Home";
import Tvshow from "./Views/Tvshow";
import Search from "./Views/Search";
import NotFound from "./Views/NotFound";
import Error from "./Components/Error";

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
        errorElement: <Error />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
