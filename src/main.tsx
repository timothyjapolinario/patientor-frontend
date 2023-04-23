import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";

import Patients from "./pages/Patients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Patients />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Patientor</h1>
    <RouterProvider router={router} />
  </React.StrictMode>
);
