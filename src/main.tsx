// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  Categories,
  Recipes,
  About,
  Search,
  Browse,
  Areas,
} from "./Pages/index.ts";
import Layout from "./Layout.tsx";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/search/:item" element={<Search />} />
      <Route path="/browse/:cat" element={<Browse />} />
      <Route path="/area/:area" element={<Areas />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={route} />
  //  </React.StrictMode>
);
