import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SideNavBar = () => {
    return (
        <nav>
            <div className="navLinksDots">
                <ul className = "dots">
                    <Link to="#landing"><li><a>Home</a></li></Link>
                    <Link to="#about"><li><a>About</a></li></Link>
                    <Link to="#projects"><li><a>Projects</a></li></Link>
                    <Link to="#contact"><li><a>Contact</a></li></Link>
                </ul>
            </div>
        </nav>
    );
  }

  export default SideNavBar;
