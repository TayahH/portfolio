// Modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useInView } from 'react-intersection-observer';

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
// import SideNavBar from "./components/SideNavBar";


function App() {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
  });

  const [ ref1, inView1 ] = useInView({
    threshold: 0.5,
  });

  const [ ref2, inView2 ] = useInView({
    threshold: 0.5,
  });

  const [ ref3, inView3 ] = useInView({
    threshold: 0.5,
  });

  if(inView){
    window.history.replaceState(null, null, '#landing');
  }
  else if(inView1){
    window.history.replaceState(null, null, '#about');
  }
  else if(inView2){
    window.history.replaceState(null, null, '#projects');
  }
  else if(inView3){
    window.history.replaceState(null, null, '#contact');
  }
  else{
      window.history.replaceState(null, null, '');
  }

  return (
    <div>
      {/* <h1 className="blah">{`Home ${inView}.`}</h1>
      <br></br>
      <h1 className="blah">{`About ${inView1}.`}</h1>
      <br></br>
      <h1 className="blah">{`Projects ${inView2}.`}</h1>
      <br></br>
      <h1 className="blah">{`Contact ${inView3}.`}</h1> */}

      <BrowserRouter>
          {/* <SideNavBar /> */}
          <nav>
            <div className="navLinksDots">
                <ul className = "dots">
                    <Link to="#landing"><li className= {inView ? "active" : ""} ><a>Home</a></li></Link>
                    <Link to="#about"><li className= {inView1 ? "active" : ""}><a>About</a></li></Link>
                    <Link to="#projects"><li className= {inView2 ? "active" : ""}><a>Projects</a></li></Link>
                    <Link to="#contact"><li className= {inView3 ? "active" : ""}><a>Contact</a></li></Link>
                </ul>
            </div>
        </nav>
          <NavBar />
          <div ref={ref}>
            <Landing />
          </div>
          <div ref={ref1}>
            <About />
          </div>
          <div ref={ref2}>
            <Projects />
          </div>
          <div ref={ref3}>
           <Contact /> 
          </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
