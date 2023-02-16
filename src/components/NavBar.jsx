import React from "react";
import { HashLink as Link } from "react-router-hash-link";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navLinks">
                <Link smooth to="#landing">
                    Home
                </Link>
                <Link smooth to="#about">
                    About
                </Link>
                <Link smooth to="#projects">
                    Projects
                </Link>
                <Link smooth to="#contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
  }

  export default NavBar;
