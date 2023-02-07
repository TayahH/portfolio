
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// The footer
export default function Footer() {
  return (
    <footer>
      
      <Link to="#landing"><a><div class="scroll-up"/>Back to Top</a></Link>
    </footer>
  );
}