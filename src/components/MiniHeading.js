import React from 'react';

const MiniHeading = (props) => {



    return (
        <div className="miniHeading">
            <h4>
            <span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 0L5 10M10 5H0" stroke={props.blueTheme === true ? "#75DFFB" : "#31649F" } strokeWidth="2"/>
                </svg>&nbsp;
            </span>&nbsp;
                {props.content}
            </h4>
            <hr/>
        </div>
    );
};

export default MiniHeading;