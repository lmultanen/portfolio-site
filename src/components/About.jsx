import React, { useState } from "react";

const About = () => {
    const [past, setPast] = useState(true);
    const [present, setPresent] = useState(false);
    const [future, setFuture] = useState(false);

    return(
        <div id="about-container">
            <div className="nav-buffer"/>
            <div className="about-links">
                <div className={"about-link" + (past ? " selected" : "")}
                  onClick={() => {
                    setPast(true);
                    setPresent(false);
                    setFuture(false);
                  }}>
                    My Past
                </div>
                <div className={"about-link" + (present ? " selected" : "")}
                  onClick={() => {
                    setPast(false);
                    setPresent(true);
                    setFuture(false);
                  }}>
                    My Present
                </div>
                <div className={"about-link" + (future ? " selected" : "")}
                  onClick={() => {
                    setPast(false);
                    setPresent(false);
                    setFuture(true);
                  }}>
                    My Future
                </div>
            </div>
            <div className={"about-content" + (!past ? " hidden" : "")}>
                <br/>
                <div>
                    <p>I studied Mathematics in college, and after graduation I worked for a proprietary trading firm for a little over six-and-a-half years as a Hybrid Trader.</p>
                </div>
                <br/> 
                <img src="/bitmojis/arrow-chart.png"/>
                <br/>
                <div>
                    <p>I really enjoyed the fast-paced, competitive, and team-oriented environment of that industry, but ultimately I left after feeling burned out and feeling the urge to pursue something that I found to be more creative and fulfilling.</p>
                    <br/>
                    <p>I had always enjoyed my experiences coding in the past, both in school and on the job, so after taking a couple months to reflect and recharge, I enrolled in a Full-Stack Web Development bootcamp with Fullstack Academy.</p>
                </div>
            </div>
            <div className={"about-content"  + (!present ? " hidden" : "")}>
                <br/>
                <div>
                    <p>As a bootcamp graduate, I am continuing to hone my knowledge and skills while on the hunt for a job.</p>
                </div>
                <br/>
                <img src="/bitmojis/laptop-reading.png"/>
                <br/>
                <div>
                    <p>I am proficient in Javascript, CSS, HTML, React, and Redux, and I am knowledgable about several other JS modules with the ability to learn new ones quickly!</p>
                    <br/>
                    <p>I am in the process of learning more about AWS (as of November 8th, 2022, I am an AWS Certified Cloud Practitioner) with the goal of becoming a Certified Developer, and I am brushing up on other languages I have used in the past, such as Python and C#.</p>
                    <br/>
                    <p>I recently built and deployed a daily puzzle game, Puzzly. If you like playing Worldle and the NYT Mini, give it a try! The link can be found in the "Products" tab, and if you like it, feel free to add me as a friend (username "luke") so we can compete for daily bragging rights!</p>
                    <br/>
                    <p>Now that I have a bit more free time, I am excited to revisit my Escape Room game I built as my bootcamp Stackathon project. Keep your eyes peeled for a fully-deployed version with some added features!</p>
                </div>
            </div>
            <div className={"about-content" + (!future ? " hidden" : "")}>
                <br/>
                <div>
                    <p>I cannot know for sure where I will be in five years, or even one year, career-wise, but I do know the following:</p>
                    <br/>
                    <p>I <strong>will</strong> continue to learn and grow as a developer and human being. This Knowledge Train has no brakes! CHOO CHOO!</p>
                </div>
                <br/>
                <img src="/bitmojis/train.png"/>
            </div>
        </div>
    )
}

export default About;

// could try to incorporate some clickable buttons, popups, cool animations
// a train animation maybe?
