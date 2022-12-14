import React from "react";

const Home = () => {
    return(
        <div id="home-container">
            <div className="nav-buffer"/>
            <h2>Former Derivatives Trader, Current Full-Stack Web Developer</h2>
            <br/>
            <img className="home-bitmoji" src="/bitmojis/bitmoji-laptop.png"/>
            <br/>
            <div className="welcome-info">
                <p className="home-info">Hi! My name is Luke!</p>
                <br/>
                <p className="home-info">I left my career in finance in early 2022 to pursue a career in software development.</p>
                <br/>
                <p className="home-info">I wanted to find a more fulfilling purpose and be able to flex my creative side, but I am still a problem-solver and analytical person at heart.</p>
                <br/>
                <p className="home-info">This portfolio is a living, breathing site. I am continually looking for ways to improve and enhance the information here and showcase new techniques and features I have learned!</p>
                <br/>
                <p className="home-info">Welcome! I hope you enjoy your visit!</p>
            </div>
        </div>
    );
}

export default Home;