import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import Layout from "./Layout";
import Journal from "./routes/Journal";
import Meditation from "./routes/Meditation";
import AboutUs from "./routes/AboutUs";
import HomePage from "./routes/LandingPage";
import Resources from "./routes/Resources";
import ContactUs from "./routes/ContactUs";
import Faq from "./routes/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "meditation",
        element: <Meditation />,
      },
      { path: "about-us", element: <AboutUs /> },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
