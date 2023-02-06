// Modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import './App.css';

// Pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideNavBar from "./components/SideNavBar";


function App() {
  return (
      <BrowserRouter>
          <SideNavBar />
          <NavBar />
          <Landing />
          <About />
          <Projects />
          <Contact />
          <Footer />
      </BrowserRouter>
  );
}

export default App;
