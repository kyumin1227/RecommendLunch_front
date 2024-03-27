import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import RoulletteSelect from "./pages/RoullettePage/RoulletteSelect";
import Roullette from "./pages/RoullettePage/Roullette";
import Order from "./pages/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
      },
      {
        path: "roullette",
        children: [
          {
            path: "",
            element: <RoulletteSelect />,
          },
          {
            path: "result",
            element: <Roullette />,
          },
        ],
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);

export default router;
