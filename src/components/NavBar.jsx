import React from "react";
import { HashLink as Link } from "react-router-hash-link";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navLinks">
                <Link to="#landing">
                    Home
                </Link>
                <Link to="#about">
                    About
                </Link>
                <Link to="#projects">
                    Projects
                </Link>
                <Link to="#contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
  }

  export default NavBar;
