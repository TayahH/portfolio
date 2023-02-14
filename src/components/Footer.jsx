
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// The footer
export default function Footer() {
  return (
    <footer>
      <svg id="scroll-up" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>
      <div>
        <Link to="#landing"><a>Back to Top</a></Link>
      </div>
      
     
    </footer>
  );
}