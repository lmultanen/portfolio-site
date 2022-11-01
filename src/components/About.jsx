import React from "react";

const About = () => {
    return(
        <div id="about-container">
            <div id="about-past">
                <h1>The Past</h1>
                <br/>
                <p>I studied Mathematics in college, and after graduation working for a proprietary trading firm for a little over six-and-a-half years.</p>
                <br/> 
                <img src="/bitmojis/arrow-chart.png"/>
                <br/>
                <p>I really enjoyed the high-paced, competitive, and team-oriented environment of that industry, but ultimately I left after feeling burned out and wanting to be pursue something that I found to be more creative and fulfilling.</p>
                <br/>
                <p>I had always enjoyed my experiences coding in the past, both in school and on the job, so after taking a couple months to reflect and recharge, I enrolled in a Full-Stack Web Development bootcamp with Fullstack Academy.</p>
            </div>
            <div id="about-present">
                <h1>The Present</h1>
                <br/>
                <p>As a recent bootcamp graduate, I am continuing to hone my knowledge and skills while on the hunt for a job.</p>
                <br/>
                <img src="/bitmojis/laptop-reading.png"/>
                <br/>
                <p>I am in the process of learning more about AWS with the aim of getting certified as a developer, and I am brushing up on other languages I have used in the past, such as Python and C#.</p>
                <br/>
                <p>Now that I have a bit more free time, I am excited to revisit my Escape Room game I put together as my bootcamp Stackathon project. Keep your eyes peeled for a fully-deployed version with some added features!</p>
            </div>
            <div id="about-future">
                <h1>The Future</h1>
                <br/>
                <p>I cannot know for sure where I will be in fives years, or even one year career-wise, but this I know for sure:</p>
                <br/>
                <p>I <strong>will</strong> continue to learn and grow as a developer and human being.</p>
                <br/>
                <img src="/bitmojis/train.png"/>
                <br/>
                <p>The Knowledge Train has no brakes! CHOO CHOOOOO!</p>
            </div>
        </div>
    )
}

export default About;

// could try to incorporate some clickable buttons, popups, cool animations
// a train animation maybe?
