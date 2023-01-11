import React, { useEffect } from "react";
import {
  useLocation,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import Layout from "./hoc/layout/Layout";

import "./App.css";

const App = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  const routes = (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );

  return (
    <Layout currentPage={location.pathname}>
      {routes}
    </Layout>
  );
}

export default App;
