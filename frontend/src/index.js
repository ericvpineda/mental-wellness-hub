import React from "react";
import { ConvexReactClient } from "convex/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import {createRoot} from "react-dom/client"
import { FetchDataProvider } from "contexts/FetchDataContext";

const CONVEX_CLIENT_URL = "https://reminiscent-scorpion-857.convex.cloud";
const CLERK_PUBLISHABLE_KEY = "pk_test_aGlwLWJhc3MtMjYuY2xlcmsuYWNjb3VudHMuZGV2JA";

const convex = new ConvexReactClient(CONVEX_CLIENT_URL);

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



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <FetchDataProvider>
          <RouterProvider router={router} />
        </FetchDataProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </React.StrictMode>
);
