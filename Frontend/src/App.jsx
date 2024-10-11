import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Correct import statement

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home"; // Use uppercase `Home` for component names
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";

// Define the router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/browse",
    element: <Browse/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;


