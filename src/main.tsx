import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import "./scss/custom.scss";
import Patients from "./pages/Patients";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Patients />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
