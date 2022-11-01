import React from 'react';

const Contact = () => {
    return(
        <div>
            {/* Feel free to input your contact information and a message if you would like to contact me, and I will get back to you as soon as possible! */}
            <h2>Feel free to reach out or connect with me through LinkedIn!</h2>
            <div>
                <div className='contact-container'>
                    <div className='contact-link'>
                        <img className="small-logo" src="/LinkedIn_icon.svg.png" alt="Logo" /> 
                        <a target={'_blank'} href='https://www.linkedin.com/in/lukemultanen/'>LinkedIn</a>
                    </div>
                    <div className='contact-link'>
                        <img className="small-logo" src="/GitHub-Mark-120px-plus.png" alt="Logo" /> 
                        <a target={'_blank'} href='https://github.com/lmultanen'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;