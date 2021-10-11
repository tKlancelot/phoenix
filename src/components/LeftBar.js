import React, {  } from 'react';
import MiniHeading from './MiniHeading';
import myPortrait from '../assets/tarik-blue.jpg'
import ContactItem from './ContactItem';
import phoneIcon from '../assets/phone-icon.svg'
import locationIcon from '../assets/location-icon.svg'
import emailIcon from '../assets/email-icon.svg'
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'


const LeftBar = () => {

    return (
        <div className="leftbar">
            <div className="frame-leftbar">
                <div className="frame-picture">
                    {/* <h2>tarik <span>louatah</span></h2> */}
                    <div className="frame-portrait">
                        <img src={myPortrait} alt="portrait"/>
                    </div>
                </div>
                <div className="frame-contact">
                    <MiniHeading content="contact" blueTheme={true}/>
                    <ContactItem title="mobile" link="tel:+33763740559" linkName="+33763740559" source={phoneIcon}/>
                    <ContactItem title="location" linkName="Paris" source={locationIcon}/>
                    <ContactItem title="email" link="mailTo:tarik.louatah@gmail.com" linkName="tarik.louatah@gmail.com" source={emailIcon}/>
                </div>
                <div className="frame-reseaux">
                    <MiniHeading content="réseaux" blueTheme={true}/>
                    <ContactItem title="linkedin" link="https://www.linkedin.com/in/tarik-louatah-7983481b3/" linkName="tarik-louatah-7983481b3" source={linkedinIcon}/>
                    <ContactItem title="github" link="https://github.com/tKlancelot" linkName="tKlancelot" source={githubIcon}/>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;