import { createRoot } from "react-dom/client";
// import { StrictMode } from "react";
import App from "./src/App.jsx";
import Home from "./src/components/Home.jsx";
import Contact from "./src/components/Contacts.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./src/components/Error.jsx";
import CountryDetail from "./src/components/CountryDetail.jsx";
import ShimmerData from "./src/components/ShimmerData.jsx";
import ShimmerCard from "./src/components/ShimmerCard.jsx";
import MyLoadingBar from "./src/components/MyLoadingBar.jsx";

let root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/:country", element: <CountryDetail /> },
      { path: "/shimmer", element: <ShimmerData /> },
      { path: "/shimmerc", element: <ShimmerCard /> },
      
     
    ],
  },
]);
root.render(<RouterProvider router={router} />);
