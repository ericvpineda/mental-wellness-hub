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
import Faq from "./routes/Faq";
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
        path: "journal",
        element: <Journal />,
      },
      {
        path: "meditation",
        element: <Meditation />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
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

// const root = createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);

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
