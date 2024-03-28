import React from "react";
import { ConvexReactClient } from "convex/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import "./globals.css";
import Layout from "./Layout";
import Journal from "routes/Journal";
import Meditation from "./routes/Meditation";
import AboutUs from "./routes/AboutUs";
import HomePage from "./routes/LandingPage";
import Resources from "./routes/Resources";
import ContactUs from "./routes/ContactUs";
import UserDashboard from "./routes/UserDashboard";
import CognitiveTherapy from "./routes/CognitiveTherapy";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

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
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "cbt",
        element: <CognitiveTherapy />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "meditation",
        element: <Meditation />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);



const convex = new ConvexReactClient(
  "https://reminiscent-scorpion-857.convex.cloud"
);

const PUBLISHABLE_KEY = "pk_test_bGliZXJhbC1za3lsYXJrLTM1LmNsZXJrLmFjY291bnRzLmRldiQ";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <RouterProvider router={router} />
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </React.StrictMode>
);
