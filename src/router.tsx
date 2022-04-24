import { HomeLayout } from "./layouts/HomeLayout";
import { Home } from "./pages/Home";
import { InteriorPage } from "./pages/InteriorPage";

export const routers = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "interior", element: <InteriorPage /> },
    ],
  },
];
