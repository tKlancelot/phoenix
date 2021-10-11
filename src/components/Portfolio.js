import React, { Fragment, useEffect } from 'react';
import MiniHeading from './MiniHeading';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import slides from '../datas/slides'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Portfolio = () => {

    const primaryRef   = React.createRef();
    const secondaryRef = React.createRef();

    useEffect(() => {
        primaryRef.current.sync( secondaryRef.current.splide );
    })

    const allSlides = slides.map((slide) => 
        <SplideSlide key={slide.id}>
            <div className="left-side">
                <div className="portfolio-left">                 
                    <div className="content-frame">
                        <div className="heading">
                            <h3>{slide.mainHeading}</h3>
                            <MiniHeading content={slide.heading}/>
                        </div>
                        <div className="para">
                            <p>{slide.para}</p>
                            <p>{slide.para2}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="right-side">
                <div className="portfolio-right">
                    <div className="picture-frame">
                        <img src={slide.picture} alt="slide" width="56%"/>
                    </div>
                </div>
            </div>
        </SplideSlide>
    )



    const secondaryOptions = {
        type        : 'slide',
        rewind      : true,
        // width       : 800,
        // autoWidth   : true,
        perPage     : 1,
        gap         : '0rem',
        pagination  : false,
        fixedWidth  : 32,
        fixedHeight : 32,
        // cover       : true,  
        focus       : 'center',
        isNavigation: true,
        updateOnMove: true,
        arrowPath   : "M3 16.3328H27.5M27.5 16.3328L18.1283 6.00001M27.5 16.3328L18.128 26.6655"
    };

    const primaryOptions = {
        type        : 'fade',
        // height    : "200px",
        // autoWidth : true,
        width       : "100vw",
        perPage     : 1,
        perMove     : 1,
        pagination  : false,
        autoplay    : true,
        arrows      : false,
        focus       : 'center',
        start       : 0,
        wheel       : false,
        rewind      : true,
        interval    : 10000,

    };

    const secondCarousel = slides.map((slide) =>
        <SplideSlide key={slide.id}>
            <div>{slide.nbPage}</div>
        </SplideSlide>
    )

    return (
        <Fragment>
            <div className="first-carousel">
            <Splide options={primaryOptions} ref={primaryRef}>
                {allSlides}
            </Splide>
            </div>
            <div className="second-carousel">
                <Splide id="bullets" options={ secondaryOptions } ref={secondaryRef}>
                    {secondCarousel}
                </Splide>
            </div>
        </Fragment>
    );
};

export default Portfolio;