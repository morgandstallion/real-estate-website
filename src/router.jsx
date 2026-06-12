import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "*",
    element: <div>404 - Page not found</div>,
  },
]);

export default router;
