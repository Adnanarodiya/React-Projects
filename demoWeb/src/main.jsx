import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MyPrams from "./components/MyPrams/MyPrams";
import Github, { githubInfoLoader } from "./components/Github/Github";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />,
      <Route path="about" element={<About />} />,
      <Route path="contact" element={<Contact />} />,
      <Route path="MyPrams/:id" element={<MyPrams />} />,
      <Route loader={githubInfoLoader} path="Github" element={<Github />} />,
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
