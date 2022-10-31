import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div id="navbar">
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>My Projects</Link>
            <Link to={"/aboutme"}>About Me</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
    )
}

export default Nav;