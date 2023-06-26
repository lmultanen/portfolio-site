import React from "react";
import Carousel from "./Carousel.jsx";

const Projects = () => {
    const costumePictures = [
        "/screenshots/costume-homepage.png",
        "/screenshots/mens-costumes.png",
        "/screenshots/single-costume.png",
        "/screenshots/cart.png",
        "/screenshots/stripe-checkout.png"];

    const puzzlyPictures = [
        "/screenshots/puzzly/puzzlyHome.png",
        "/screenshots/puzzly/puzzlyPlay1.png",
        "/screenshots/puzzly/puzzlyPlay2.png",
        "/screenshots/puzzly/puzzlyWin.png",
        "/screenshots/puzzly/puzzlyLeaderboard.png",
        "/screenshots/puzzly/puzzlySettings.png",
    ]

    return(
        <div id="projects-container">
            <div className="nav-buffer"/>
            <h1 className="projects-page-title">Featured Projects</h1>
            <h5>To see other things I have worked on, feel free to check out my GitHub profile under the 'Contact' tab!</h5>
            <div className="project-block">
                <h1 className="project-name">Puzzly</h1>
                <h4>June 2023</h4>
                <div className="project-links">
                    <a target={'_blank'} href="https://github.com/lmultanen/Puzzly">GitHub</a>{' | '}
                    <a target={'_blank'} href="https://www.puzzly.us">Deployed Site</a>
                </div>
                <div className="media">
                    <Carousel data={puzzlyPictures}/>
                </div>
                <p className="short-desc">Daily Puzzle Game</p>
                <p>Puzzly is a daily game where players compete against their friends and the clock. Inspired my friends' and my love of daily games like World and the NYT Mini!</p>
            </div>
            <div className="project-block">
                <h1 className="project-name">Hello Kitchen</h1>
                <h4>October 2022</h4>
                <div className="project-links">
                    <a target={'_blank'} href="https://github.com/Team-Rowlf/Rowlf">GitHub</a>
                    {/* <a target={'_blank'} href="https://rowlf.herokuapp.com/">Deployed Site</a> */}
                </div>
                <div className="media">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1-joatVRUpQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <p className="short-desc">An application for recipe ideas and grocery shopping made easy!</p>
                <p>Developed along with three of my cohort peers for our bootcamp's Capstone final project.</p>
            </div>
            <div className="project-block">
                <h1 className="project-name">Courage Costumes</h1>
                <h4>September 2022</h4>
                <div className="project-links">
                    <a target={'_blank'} href="https://github.com/FSA-Courage-The-Cowardly-Dog/shopper">GitHub</a>
                    {/* <a target={'_blank'} href="https://courage-grace-shopper.herokuapp.com/">Deployed Site</a> */}
                </div>
                <div className="media">
                    <Carousel data={costumePictures}/>
                </div>
                <p className="short-desc">A mock E-Commerce halloween costume shop.</p>
                <p>Website built alongside two other cohort members for our bootcamp's Grace Shopper project.</p>
            </div>

            <div className="project-block">
                <h1 className="project-name">Escape Room Game</h1>
                <h4>September 2022 - Present</h4>
                <div className="project-links">
                    <a target={'_blank'} href="https://github.com/lmultanen/stackathon">GitHub</a>{' | '}
                    <a target={'_blank'} href="https://main--musical-swan-248e4f.netlify.app/">Deployed Site</a>
                </div>
                <div className="media">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tATUimXWkIw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <p className="short-desc">Solo project started during my bootcamp's three day Stackathon.</p>
                <p>This was an opportunity for me to play around with Three.js and build something fun and different. New features and puzzles coming soon!</p>
            </div>
            
        </div>
    )
}

export default Projects;