import React, { Fragment } from 'react';
import SlideFolio from './SlideFolio';
import slides from '../datas/slides';
import { Link } from 'react-router-dom';

const Minifolio = () => {

    // const scrollToTop = () => {
    //     window.scrollTo(0, 0);
    // }

    return (
        <Fragment>
        <h2 id="tablet">bienvenue sur mon portfolio</h2>
        <div id="minifolio">
            <h2>bienvenue sur mon portfolio</h2>
            {slides.map((slide) => 
                <SlideFolio id={slide.id} picture={slide.picture} heading={slide.mainHeading} smallHeading={slide.heading} content={slide.para} content2={slide.para2} nbpage={slide.nbPage}/>
                )}
            <div className="option-panel">
                <div className="option">
                    <Link to="/downloads/portfolio-tarik.pdf" target="_blank" className="orange-button" download="portfolio-tarik.pdf"></Link>
                    <span>télécharger ce document</span>
                </div>
                <div className="option">
                    <a href="#02b" className="button-primary"></a>
                    <span>remonter</span>
                </div>
            </div>
        </div>  
        </Fragment>
    );
};

export default Minifolio;