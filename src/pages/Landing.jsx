// Import Modules
import React from "react";
import { HashLink as Link } from "react-router-hash-link";


export default function Landing() {
  return(
      <section className="landing" id="landing">
        <div class="headings">
          <h1>Tayah Hoekwater</h1>
          <h2>Front End Developer, UI Designer and Creative Coder</h2>
          <div className="landing-buttons">
            <button target="_blank">Resume</button>
            <Link to="#contact"><button>Contact Me</button></Link>
          </div>
        </div> 
        
        <svg id="scroll" width="52" height="88" viewBox="0 0 52 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="50" height="86" rx="25" stroke="white" stroke-width="2"/>
          <circle cx="26.5" cy="22.5" r="5.5" fill="white"/>
        </svg>  
      </section>
  );
}
  