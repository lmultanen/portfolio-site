import React, { useState } from "react";

const Experience = () => {
    const [professionalTab, setProfessionalTab] = useState('amta')

    return(
        <>
        <div className="nav-buffer"/>
        <div id="experience-container">
            

            <div id="professional-experience">
                <div className="experience-header justify-left">
                    Professional Experience
                </div>
                <div className="professional-experience-container">
                    <div className="professional-experience-comp-title-container">
                        <div className="professional-experience-navbar">
                            <div onClick={() => setProfessionalTab('amta')} className={"experience" + ((professionalTab === 'amta') ? ' selected' : '')}>
                                AMTA
                            </div>
                            <div onClick={() => setProfessionalTab('shift')} className={"experience" + ((professionalTab === 'shift') ? ' selected' : '')}>
                                Career Shift
                            </div>
                            <div onClick={() => setProfessionalTab('belvedere')} className={"experience" + ((professionalTab === 'belvedere') ? ' selected' : '')}>
                                Belvedere
                            </div>
                        </div>
                        <div className={"professional-experience-block" + ((professionalTab === 'amta') ? "" : " hide-block")}>
                            <div className="experience-desc">
                                Applications Developer
                            </div>
                            <div className="experience-subheader">
                                June 2025 - Present
                            </div>
                            <div className="experience-subheader hide-mobile">
                                Junior Applications Developer, August 2023 - June 2025
                            </div>
                            <div className="experience-subheader mobile-only">
                                Junior Applications Developer
                            </div>
                            <div className="experience-subheader mobile-only">
                                August 2023 - June 2025
                            </div>
                            <ul className="experience-bullet-list desktop-only">
                                <li className="experience-bullet-point">
                                    <span>
                                    Actively maintain four .NET code repositories to ensure performance and reliability for over 100,000 members.
                                    </span>
                                </li>
                                <li className="experience-bullet-point">
                                    <span>
                                    Led development to improve accessibility, by integrating with Google's Text-To-Speech API for long form content, adding language translation functionality, and integrating UserWay's accessibility widget.
                                    </span>
                                </li>
                                <li className="experience-bullet-point">
                                    <span>
                                    Improved SEO through programmatically generating schema structures for a variety of different page types.
                                    </span>
                                </li>
                                <li className="experience-bullet-point">
                                    <span>
                                    Built new Events Management App to automate in-person events, decreasing attendee wait times, providing exhibitors access to easy lead tracking, and reducing staff man-hours for manual validation by hundreds of hours yearly. Developed using NextJS and Firebase, with custom .NET API endpoints to sync data between netFORUM db.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className={"professional-experience-block" + ((professionalTab === 'shift') ? "" : " hide-block")}>
                            <div className="experience-desc">
                                Pursued Career Change
                            </div>
                            <div className="experience-subheader">
                                March 2022 - August 2023
                            </div>
                            <ul className="experience-bullet-list desktop-only">
                                <li className="experience-bullet-point">
                                    <span>
                                    Left trading to recharge and reevaluate career path and goals, which ultimately led me to pursue career a in programming.
                                    </span>
                                </li>
                                <li className="experience-bullet-point">
                                    <span>
                                    Enrolled in a bootcamp with Fullstack Academy to brush up on coding and learn new skills regarding web development.
                                    </span>
                                </li>
                                <li className="experience-bullet-point">
                                    <span>
                                    Brushed up on other languages I had previously used, such as C# and Python, and worked on honing skills.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className={"professional-experience-block" + ((professionalTab === 'belvedere') ? "" : " hide-block")}>
                            <div className="experience-desc">
                                Hybrid Trader
                            </div>
                            <div className="experience-subheader">
                                July 2015 - March 2022
                            </div>
                            <ul className="experience-bullet-list desktop-only">
                                <li className="experience-bullet-point">
                                    <span>
                                    Engaged in options market making in Natural Gas (3.5 years - with brokers and electronically) and SPX (2.5 years - electronically). 
                                    </span>
                                </li>
                                <li className="experience-bullet-point">
                                    <span>
                                    Analyzed specific recurring trading patterns to tune electronic systems to capture maximal edge during different periods throughout the day. Pulled relevant data using SQL.
                                    </span>
                                </li>
                                <li className="experience-bullet-point">
                                    <span>
                                    Analyzed positions the SPX tended to accumulate in low delta options across different terms to expiration in order to better manage electronic sizing and market widths; recommended model parameter adjustments to the Vol Managers to avoid accumulating unfavorable positions.
                                    </span>
                                </li>
                                <li className="experience-bullet-point">
                                    <span>
                                    During tech rotation in first year, rebuilt proprietary application in C# that displayed real-time trade activity. Enabled traders to customize settings to improve focus and actionability.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className={"experience-bullet-list hide-desktop"}>
                        {professionalTab === 'amta' &&
                        <>
                            <li className="experience-bullet-point">
                                <span>
                                Actively maintain four .NET code repositories to ensure performance and reliability for over 100,000 members.
                                </span>
                            </li>
                            <li className="experience-bullet-point">
                                <span>
                                Led development to improve accessibility, by integrating with Google's Text-To-Speech API for long form content, adding language translation functionality, and integrating UserWay's accessibility widget.
                                </span>
                            </li>
                            <li className="experience-bullet-point">
                                <span>
                                Improved SEO through programmatically generating schema structures for a variety of different page types.
                                </span>
                            </li>
                            <li className="experience-bullet-point">
                                <span>
                                Developed new Events Management App to automate in-person events, decreasing attendee wait times, providing exhibitors access to easy lead tracking, and reducing staff man-hours for manual validation by hundreds of hours yearly. Built using NextJS and Firebase, with custom .NET API endpoints to sync data between netFORUM db.
                                </span>
                            </li>
                        </>}
                        {professionalTab === 'shift' &&
                        <>
                            <li className="experience-bullet-point">
                                <span>
                                Left trading to recharge and reevaluate career path and goals, which ultimately led me to pursue a career in programming.
                                </span>
                            </li>
                            <li className="experience-bullet-point">
                                <span>
                                Enrolled in a bootcamp with Fullstack Academy to brush up on coding and learn new skills regarding web development.
                                </span>
                            </li>
                            <li className="experience-bullet-point">
                                <span>
                                Brushed up on other languages I had previously used, such as C# and Python, and worked on honing skills.
                                </span>
                            </li>
                        </>}
                        {professionalTab === 'belvedere' &&
                        <>
                            <li className="experience-bullet-point">
                                <span>
                                Engaged in options market making in Natural Gas (3.5 years - with brokers and electronically) and SPX (2.5 years - electronically). 
                                </span>
                            </li>
                            <li className="experience-bullet-point">
                                <span>
                                Analyzed specific recurring trading patterns to tune electronic systems to capture maximal edge during different periods throughout the day. Pulled relevant data using SQL.
                                </span>
                            </li>
                            <li className="experience-bullet-point">
                                <span>
                                Analyzed positions the SPX tended to accumulate in low delta options across different terms to expiration in order to better manage electronic sizing and market widths; recommended model parameter adjustments to the Vol Managers to avoid accumulating unfavorable positions.
                                </span>
                            </li>
                            <li className="experience-bullet-point">
                                <span>
                                During tech rotation in first year, rebuilt proprietary application in C# that displayed real-time trade activity. Enabled traders to customize settings to improve focus and actionability.
                                </span>
                            </li>
                        </>}
                    </ul>
                </div>
            </div>

            <div id="technical-skills">
                <div className="experience-header">
                    Technical Skills
                </div>
                <div className="skills-container">
                    <div className="skill-grouping">
                    <div className="skill-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" version="1.1" viewBox="0 0 94.504 94.504">
                        <g>
                            <g>
                                <path d="M93.918,45.833L69.799,21.714c-0.75-0.75-2.077-0.75-2.827,0l-5.229,5.229c-0.781,0.781-0.781,2.047,0,2.828    l17.477,17.475L61.744,64.724c-0.781,0.781-0.781,2.047,0,2.828l5.229,5.229c0.375,0.375,0.884,0.587,1.414,0.587    c0.529,0,1.039-0.212,1.414-0.587l24.117-24.118C94.699,47.881,94.699,46.614,93.918,45.833z"/>
                                <path d="M32.759,64.724L15.285,47.248l17.477-17.475c0.375-0.375,0.586-0.883,0.586-1.414c0-0.53-0.21-1.039-0.586-1.414    l-5.229-5.229c-0.375-0.375-0.884-0.586-1.414-0.586c-0.53,0-1.039,0.211-1.414,0.586L0.585,45.833    c-0.781,0.781-0.781,2.047,0,2.829L24.704,72.78c0.375,0.375,0.884,0.587,1.414,0.587c0.53,0,1.039-0.212,1.414-0.587l5.229-5.229    C33.542,66.771,33.542,65.505,32.759,64.724z"/>
                                <path d="M60.967,13.6c-0.254-0.466-0.682-0.812-1.19-0.962l-4.239-1.251c-1.058-0.314-2.172,0.293-2.484,1.352L33.375,79.382    c-0.15,0.509-0.092,1.056,0.161,1.521c0.253,0.467,0.682,0.812,1.19,0.963l4.239,1.251c0.189,0.056,0.38,0.083,0.567,0.083    c0.863,0,1.66-0.564,1.917-1.435l19.679-66.644C61.278,14.612,61.221,14.065,60.967,13.6z"/>
                            </g>
                        </g>
                    </svg>
                    </div>
                    <div className="skill-header">
                        Programming
                    </div>
                    <div className="skill-text">
                        C#, Javascript, Python, SQL, HTML, CSS
                    </div>
                    </div>

                    <div className="skill-grouping">
                        <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" version="1.1" viewBox="0 0 359.211 359.211">
                        <path d="M352.203,286.132l-78.933-78.933c-3.578-3.578-8.35-5.548-13.436-5.548c-2.151,0-4.238,0.373-6.21,1.05l-18.929-18.929  c-2.825-2.826-6.593-4.382-10.607-4.382c-4.014,0-7.781,1.556-10.606,4.381l-4.978,4.978l-8.904-8.904l38.965-39.17  c9.105,3.949,19.001,5.837,29.224,5.837c0.002,0,0.004,0,0.007,0c19.618,0,38.064-7.437,51.939-21.312  c18.59-18.588,25.842-45.811,18.926-71.207c-0.859-3.159-3.825-5.401-7.053-5.401c-1.389,0-3.453,0.435-5.39,2.372  c-0.265,0.262-26.512,26.322-35.186,34.996c-0.955,0.955-2.531,1.104-3.45,1.104c-0.659,0-1.022-0.069-1.022-0.069v0.002  l-0.593-0.068c-10.782-0.99-23.716-2.984-26.98-4.489c-1.556-3.289-3.427-16.533-4.427-27.489v-0.147l-0.234-0.308  c-0.058-0.485-0.31-2.958,1.863-5.131c9.028-9.029,33.847-34.072,34.083-34.311c2.1-2.099,2.9-4.739,2.232-7.245  c-0.801-3.004-3.355-4.686-5.469-5.257C280.772,0.859,274.292,0,267.788,0c-19.62,0-38.068,7.64-51.941,21.512  c-21.901,21.901-27.036,54.296-15.446,81.141l-38.996,38.995L94.682,74.927c-0.041-0.041-0.086-0.075-0.128-0.115  c0.63-2.567,0.907-5.233,0.791-7.947c-0.329-7.73-3.723-15.2-9.558-21.034L62.041,22.083c-0.519-0.519-3.318-3.109-7.465-3.109  c-1.926,0-4.803,0.583-7.58,3.359L20.971,48.359c-3.021,3.021-4.098,6.903-2.954,10.652c0.767,2.512,2.258,4.139,2.697,4.578  l23.658,23.658c6.179,6.179,14.084,9.582,22.259,9.582c0,0,0,0,0.001,0c2.287,0,4.539-0.281,6.721-0.818  c0.041,0.042,0.075,0.087,0.116,0.128l66.722,66.722l-31.692,31.692c-1.428,1.428-2.669,2.991-3.726,4.654  c-9.281-4.133-19.404-6.327-29.869-6.327c-19.623,0-38.071,7.642-51.946,21.517c-18.589,18.589-25.841,45.914-18.926,71.31  c0.859,3.158,3.825,5.451,7.052,5.451c0,0,0,0,0.001,0c1.389,0,3.453-0.41,5.39-2.347c0.265-0.262,26.513-26.309,35.187-34.983  c0.955-0.955,2.639-1.097,3.557-1.097c0.66,0,1.125,0.072,1.132,0.072h-0.001l0.487,0.069c10.779,0.988,23.813,2.982,27.078,4.489  c1.556,3.29,3.575,16.534,4.554,27.49l0.07,0.501c0.006,0.026,0.362,2.771-1.952,5.086c-9.029,9.029-33.888,34.072-34.124,34.311  c-2.1,2.099-2.92,4.74-2.252,7.245c0.802,3.004,3.346,4.685,5.459,5.256c6.264,1.694,12.738,2.553,19.243,2.553  c19.621,0,38.066-7.64,51.938-21.512c13.876-13.875,21.518-32.324,21.517-51.947c0-10.465-2.193-20.586-6.326-29.868  c1.664-1.057,3.227-2.298,4.654-3.726l31.693-31.693l8.904,8.904l-4.979,4.979c-2.826,2.825-4.382,6.592-4.382,10.606  c0,4.015,1.556,7.782,4.382,10.607l18.929,18.929c-0.677,1.972-1.05,4.059-1.05,6.209c0,5.086,1.971,9.857,5.549,13.435  l78.934,78.934c3.577,3.577,8.349,5.548,13.435,5.548c5.086,0,9.857-1.971,13.435-5.548l40.659-40.66  c3.578-3.578,5.549-8.349,5.549-13.435C357.752,294.482,355.782,289.71,352.203,286.132z"/>
                        </svg>
                        </div>
                        <div className="skill-header">
                            Tools
                        </div>
                        <div className="skill-text">
                            Visual Studio, Visual Studio Code, SQL Server Management Studio, PostgreSQL, Git, SourceTree, Postman
                        </div>
                    </div>

                    <div className="skill-grouping">
                        <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
                            <path d="M909.7 680.11h-51.34V506.65c0-26.8-21.8-48.61-48.6-48.61H543.88v-113.9h52.07c26.13 0 47.4-21.26 47.4-47.4V130.51c0-26.13-21.26-47.4-47.4-47.4H429.71c-26.13 0-47.4 21.26-47.4 47.4v166.24c0 26.13 21.26 47.4 47.4 47.4h52.07v113.9H215.91c-26.8 0-48.61 21.81-48.61 48.61v173.45h-52.82c-26.13 0-47.39 21.26-47.39 47.4v166.24c0 26.13 21.25 47.4 47.39 47.4h166.24c26.13 0 47.4-21.26 47.4-47.4V727.51c0-26.13-21.26-47.4-47.4-47.4H229.4V520.14h252.39v159.97h-52.07c-26.13 0-47.4 21.26-47.4 47.4v166.24c0 26.13 21.26 47.4 47.4 47.4h166.24c26.13 0 47.4-21.26 47.4-47.4V727.51c0-26.13-21.26-47.4-47.4-47.4h-52.07V520.14h252.39v159.97h-52.81c-26.13 0-47.39 21.26-47.39 47.4v166.24c0 26.13 21.25 47.4 47.39 47.4H909.7c26.13 0 47.4-21.26 47.4-47.4V727.51c0-26.14-21.26-47.4-47.4-47.4zM444.41 145.2h136.85v136.85H444.41V145.2zM266.03 879.05H129.19V742.2h136.84v136.85z m315.23 0H444.41V742.2h136.85v136.85z m313.75 0H758.17V742.2h136.84v136.85z" fill="#FFFFFF"/>
                        </svg>
                        </div>
                        <div className="skill-header">
                            {'Frameworks & Platforms'}
                        </div>
                        <div className="skill-text">
                            <div>
                                ASP .NET (MVC, Web API, Web Pages), Next, Tailwind, Express
                            </div>
                            <div>
                                Firebase, GCP, Azure, Optimizely, netFORUM AMS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Experience;