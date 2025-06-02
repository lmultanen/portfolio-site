import React from "react";

const Home = () => {
    return(
        <div id="new-home-container">
            <div className="nav-buffer"/>
            <div className="home-content-container">
                <div className="home-text-container">
                    <div className="home-preheader">
                        Hi, I'm Luke
                    </div>
                    <div className="home-header">
                        <span className="emphasis-text">Applications</span> Developer
                    </div>
                    <div className="home-image-container mobile-only">
                        <div className="home-image-wrapper">
                            <img className="home-image" src="/bitmojis/bitmoji-laptop.png"/>
                        </div>
                    </div>
                    <div className="home-description">
                        Former derivatives trader, full-time programmer and tech enthusiast.
                    </div>
                </div>
                <div className="home-image-container desktop-only">
                    <div className="home-image-wrapper">
                        <img className="home-image" src="/bitmojis/bitmoji-laptop.png"/>
                    </div>
                    <div className='contact-container'>
                        <div className='contact-link'>          
                            <a target={'_blank'} href='https://www.linkedin.com/in/lukemultanen/'>
                                <img className="small-logo" src="/LinkedIn_icon.svg.png" alt="Logo" /> 
                            </a>
                        </div>
                        <div className='contact-link'> 
                            <a target={'_blank'} href='https://github.com/lmultanen'>
                                <img className="small-logo" src="/GitHub-Mark-120px-plus.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contact-container mobile-only'>
                    <div className='contact-link'>          
                        <a target={'_blank'} href='https://www.linkedin.com/in/lukemultanen/'>
                            <img className="small-logo" src="/LinkedIn_icon.svg.png" alt="Logo" /> 
                        </a>
                    </div>
                    <div className='contact-link'> 
                        <a target={'_blank'} href='https://github.com/lmultanen'>
                            <img className="small-logo" src="/GitHub-Mark-120px-plus.png" alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;