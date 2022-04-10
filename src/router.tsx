import { HomeLayout } from "./layouts/HomeLayout";
import { Home } from "./pages/Home";

export const routers = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
];
