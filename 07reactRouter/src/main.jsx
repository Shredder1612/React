import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, {githubInfoLoader} from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      {/* if u want to add path after let's say about then you can do that like we have done with <Layout /> like below User */}
      <Route path="contact" element={<Contact />} />

      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>

      {/* <Route path="github" element={<Github />} /> */}
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
