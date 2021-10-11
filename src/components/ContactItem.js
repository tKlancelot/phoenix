import React from 'react';
// import { Link } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ContactItem = (props) => {

    const handleClick = () => { 
        console.log(props);
        // let item = this;
        alert(props.linkName + " a été copié")
    }



    return (
        <CopyToClipboard text={props.linkName}>
        <div className="contactItem">
            <div className="picto">
                <div className="emplacement">
                    <img src={props.source} alt={props.alt}/>
                </div>
            </div>
            <div className="content" onClick={handleClick}>
                <h5>{props.title}</h5>
                <a href={props.link} target="_blank" rel="noopener noreferrer">{props.linkName}</a>
            </div>
        </div>
        </CopyToClipboard>
    );
};

export default ContactItem;