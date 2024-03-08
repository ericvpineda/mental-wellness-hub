import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import Layout from "./Layout";
import Home from "./components/Home";
import Journal from "./routes/Journal";
import Meditation from "./routes/Meditation";

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
      {
        path: "meditation",
        element: <Meditation />,
      }
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
