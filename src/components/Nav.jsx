import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [active, setActive] = useState('');

    useEffect(() => {
        let url = window.location.href;
        if (url.slice(-1) !== '/') {
            let splitUrl = url.split('/');
            let location = splitUrl[splitUrl.length-1];
            if (location === 'projects') {
                setActive('My Projects');
            } else if (location === 'aboutme') {
                setActive('About Me');
            } else if (location === 'contact') {
                setActive('Contact');
            } else {
                setActive('Home');
            }
        }
        else {
            setActive('Home');
        }
    },[])

    const onClickHandler = (event) => {
        setActive(event.target.text);
    }
    return(
        <div id="navbar">
            <Link onClick={onClickHandler} className={active === 'Home' ? 'selected' : ''} to={"/"}>Home</Link>
            <Link onClick={onClickHandler} className={active === 'My Projects' ? 'selected' : ''} to={"/projects"}>My Projects</Link>
            <Link onClick={onClickHandler} className={active === 'About Me' ? 'selected' : ''} to={"/aboutme"}>About Me</Link>
            <Link onClick={onClickHandler} className={active === 'Contact' ? 'selected' : ''} to={"/contact"}>Contact</Link>
        </div>
    )
}

export default Nav;