import React, { Fragment } from 'react';
import keyboard from '../assets/keyboard-1.jpg';
import architecture1 from '../assets/architecture-1.jpg';
import architecture2 from '../assets/architecture-2.jpg';
import architecture4 from '../assets/architecture-4.jpg';
import ball3d from '../assets/ball3d.jpg';
import Portfolio from './Portfolio';
import Minifolio from './Minifolio';


const PortfolioPhone = () => {


    const mosa = [
        {
            backgroundImage:'url('+architecture1+')',
            backgroundColor:"#EFF8FAa4"
        },
        {
            backgroundImage:'url('+architecture4+')',
            backgroundColor:"EFF8FAa4"
        },
        {
            backgroundColor:'#EFF8FAc4'
        },
        {
            backgroundImage:'url('+architecture2+')',
            backgroundColor:'#1090B1c4'
        },
        {
            backgroundImage:'url('+keyboard+')',
            backgroundColor:'#B3C8DBa4'
        },
        {
            backgroundImage:'url('+ball3d+')',
            backgroundColor:'#75DFFBa4'
        }
    ]


    return (
        <Fragment>
        <div className="bodyframe">
            <div className="mosaique-top">
                <div style={mosa[0]}></div>
                <div style={mosa[1]}></div>
                <div style={mosa[2]}></div>
            </div>
            <div id="portfolio-phone">
                <Portfolio/>
            </div>
            <div className="mosaique-bottom">
                <div style={mosa[3]}></div>
                <div style={mosa[4]}></div>
                <div style={mosa[5]}></div>
            </div>
            <Minifolio/>
        </div>
        </Fragment>
    );
};

export default PortfolioPhone;