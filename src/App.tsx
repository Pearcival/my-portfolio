import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import Layout from "./hoc/layout/Layout";

import "./App.css";

const App = () => {

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} errorElement={<Error />} />
      <Route path="about" element={<About />} errorElement={<Error />} />
      <Route path="work" element={<Work />} errorElement={<Error />} />
      <Route path="contact" element={<Contact />} errorElement={<Error />} />
    </Routes>
  );

  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
