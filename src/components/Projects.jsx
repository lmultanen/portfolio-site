import React from "react";

const Projects = () => {
    return(
        <div id="projects-container">
            <div className="project-block">
                <h1>Hello Kitchen</h1>
                <h3>October 2022</h3>
                <div className="project-links">
                    <a target={'_blank'} href="https://github.com/Team-Rowlf/Rowlf">GitHub</a>{' | '}
                    <a target={'_blank'} href="https://rowlf.herokuapp.com/">Deployed Site</a>
                </div>
                <div className="media">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1-joatVRUpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p className="short-desc">An application for recipe ideas and grocery shopping made easy!</p>
                <p>Developed along with three of my cohort peers for our bootcamp Capstone final project.</p>
            </div>
            <div className="project-block">
                <h1>Courage Costumes</h1>
                <h3>September 2022</h3>
                <div className="project-links">
                    <a target={'_blank'} href="https://github.com/FSA-Courage-The-Cowardly-Dog/shopper">GitHub</a>{' | '}
                    <a target={'_blank'} href="https://courage-grace-shopper.herokuapp.com/">Deployed Site</a>
                </div>
                <div className="media">
                    <p>(Could add in a few photos/screenshots; maybe a nice carousel!)</p>
                </div>
                <p className="short-desc">A mock E-Commerce halloween costume shop.</p>
                <p>Website built alongside two other cohort members for our bootcamp's Grace Shopper project.</p>
            </div>

            <div className="project-block">
                <h1>Escape Room Game</h1>
                <h3>September 2022 - Present</h3>
                <div className="project-links">
                    <a target={'_blank'} href="https://github.com/lmultanen/stackathon">GitHub</a>{' | '}
                    <span id="coming-soon">Deployed Site Coming Soon!</span>
                </div>
                <div className="media">
                    <p>(Look to make a demo video to embed here)</p>
                </div>
                <p className="short-desc">Solo project started during my bootcamp's three day Stackathon.</p>
                <p>This was an opportunity for me to play around with Three.js and build something fun and different. New features/puzzles and deployed game coming soon!</p>
            </div>
            
        </div>
    )
}

export default Projects;