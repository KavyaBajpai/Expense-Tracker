import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, createBrowserRouter, useNavigate } from "react-router-dom";

const PUBLISH_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISH_KEY) {
  throw new Error("Missing Publishable Key")
}

const ClerkWithRoutes = () => {
  const navigate = useNavigate();
  return(
    <ClerkProvider>
      
    </ClerkProvider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <BrowserRouter>
        <ClerkWithRoutes />
        </BrowserRouter>
  </React.StrictMode>
);
