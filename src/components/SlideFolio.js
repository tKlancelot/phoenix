import React from 'react';
import MiniHeading from './MiniHeading';

const SlideFolio = (props) => {
    return (
        <div className="slidefolio" id={props.id}>
            <div className="picture-frame">
            <img src={props.picture} width="50%" alt=""/>
            </div>
            <div className="content">
                <h3>{props.heading}</h3>
                <MiniHeading content={props.smallHeading}/>
                {/* <h4>{props.smallHeading}</h4> */}
                <p>{props.content}</p>
                <p>{props.content2}</p>
            </div>
            <span className="nbpage">{props.nbpage}</span>
        </div>
    );
};

export default SlideFolio;