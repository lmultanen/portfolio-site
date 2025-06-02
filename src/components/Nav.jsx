import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const [active, setActive] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let url = window.location.href;
        if (url.slice(-1) !== '/') {
            let splitUrl = url.split('/');
            let location = splitUrl[splitUrl.length-1];
            if (location === 'projects') {
                setActive('My Projects');
            } else if (location === 'experience') {
                setActive('Experience');
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
            <img onClick={() => navigate("/")} className="nav-bitmoji" src="/bitmojis/laptop-reading.png"/>
            <div className="nav-options">
            <Link onClick={onClickHandler} className={active === 'Home' ? 'selected' : ''} to={"/"}>Home</Link>
            <Link onClick={onClickHandler} className={active === 'Experience' ? 'selected' : ''} to={"/experience"}>Experience</Link>
            <Link onClick={onClickHandler} className={active === 'My Projects' ? 'selected' : ''} to={"/projects"}>My Projects</Link>
            {/* <Link onClick={onClickHandler} className={active === 'Contact' ? 'selected' : ''} to={"/contact"}>Contact</Link> */}
            </div>
        </div>
    )
}

export default Nav;