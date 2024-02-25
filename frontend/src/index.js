import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import Layout from "./Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Journal from "./routes/Journal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />);
