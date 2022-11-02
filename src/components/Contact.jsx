import React from 'react';

const Contact = () => {
    return(
        <div id="contact-page">
            <div className="nav-buffer"/>
            {/* Feel free to input your contact information and a message if you would like to contact me, and I will get back to you as soon as possible! */}
            <h2>Feel free to reach out or connect with me through LinkedIn!</h2>
            <img id="contact-img" src='/bitmojis/envelope-greeting.png'/>
            <br/>
            <div>
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
        </div>
    );
}

export default Contact;