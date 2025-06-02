import React, { useState } from "react";
import Carousel from "./Carousel.jsx";

const Projects = () => {
    const eventsApp = [
        "/screenshots/eventsapp/Login.png",
        "/screenshots/eventsapp/Overview.png",
        "/screenshots/eventsapp/Lookup.png",
        "/screenshots/eventsapp/Sidebar.png",
        "/screenshots/eventsapp/BadgePrinting.png"
    ]
    const puzzlyPictures = [
        "/screenshots/puzzly/puzzlyHome.png",
        "/screenshots/puzzly/puzzlyPlay1.png",
        "/screenshots/puzzly/puzzlyPlay2.png",
        "/screenshots/puzzly/puzzlyWin.png",
        "/screenshots/puzzly/puzzlyLeaderboard.png",
        "/screenshots/puzzly/puzzlySettings.png",
    ]

    const [activeProject, setActiveProject] = useState("Puzzly")

    return(
        <div id="projects-container">
            <div className="nav-buffer"/>
            <h1 className="projects-page-title">Professional Projects</h1>
            <div className="project-flexbox professional-projects">
                <div className="project-block professional-project">
                    <div className="media shadow">
                        <a href="https://www.amtamassage.org" target={"_blank"}>
                            <img className="img-link desktop-height-matching" src="/screenshots/AMTA.png"/>
                        </a>
                    </div>
                    <div className="project-caption">
                        AMTA Main Website
                    </div>
                </div>
                <div className="project-block professional-project carousel-container">
                    <div className="media desktop-height-matching">
                        <Carousel data={eventsApp}/>
                    </div>
                    <div className="project-caption">
                        AMTA Events App
                    </div>
                </div>
            </div>
            <h1 className="projects-page-title">Featured Side Projects</h1>
            <div id="project-flexbox">
                <div className="projects-navbar"> 
                    <div onClick={() => setActiveProject("Puzzly")} className={"project" + (activeProject === 'Puzzly' ? ' selected' : '')}>Puzzly</div>
                    <div onClick={() => setActiveProject("Escape Room")} className={"project" + (activeProject === 'Escape Room' ? ' selected' : '')}>Escape Room</div>
                </div>
                <div className={"project-block" + ((activeProject === "Puzzly") ? '' : ' hide-project')}>
                    <div className="project-desc">
                        Puzzly is a daily game where players compete against their friends and the clock. Inspired by my friends' and my love of daily games like Wordle and the NYT Mini!
                    </div>
                    <div className="media">
                        <Carousel data={puzzlyPictures}/>
                    </div>
                    <div className="project-links">
                        <a target={'_blank'} href="https://github.com/lmultanen/Puzzly">GitHub</a>{' | '}
                        <a target={'_blank'} href="https://www.puzzly.us">Deployed Site</a>
                    </div>
                    <div>June 2023</div>
                    
                </div>
                <div className={"project-block" + ((activeProject === "Escape Room") ? '' : ' hide-project')}>
                    <div className="project-desc">As a solo project developed during a bootcamp's three day Stackathon, this project was an opportunity for me to play around with Three.js and build something new and different.</div>
                    <div className="media">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tATUimXWkIw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="project-links">
                        <a target={'_blank'} href="https://github.com/lmultanen/stackathon">GitHub</a>{' | '}
                        <a target={'_blank'} href="https://main--musical-swan-248e4f.netlify.app/">Deployed Site</a>
                    </div>
                    <div>September 2022</div>
                </div>
            </div>
        </div>
    )
}

export default Projects;