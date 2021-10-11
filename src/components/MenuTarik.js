import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import cross from '../assets/white-cross.svg'
import contactIcon from '../assets/contact-icon.svg'
import ContactForm from '../components/ContactForm'


const MenuTarik = () => {

    // const toggleMenu = () => {

    // }
    const pathname = window.location.pathname //returns the current url minus the domain name

    useEffect(() => {
        $('.contact-box').hide();
        $('.contact-box .form').hide();
        
    })

    // const [toggleBox, setToggleBox] = useState(false);
    let toggled = false;
    
    const handleContact = () => {
        if(!toggled)
        {
            $('.contact-box').slideToggle();
            $(".contact-button").css("background-color","orangered");
            $(".contact-button").css("background-image","url("+cross+")");
            setTimeout(() => {
                $('.form').show();
            }, 500);
            toggled = true;
        }
        else
        {
            $('.form').fadeOut();
            setTimeout(() => {
                $('.contact-box').slideToggle();
                $(".contact-button").css("background-color","#31649F");
                $(".contact-button").css("background-image","url("+contactIcon+")");
            }, 500);
            toggled = false;

        }
    }


    return (
        <div className="downloadpanel">

            <ul>
                {pathname === '/projets' ? null : <li>
                    <span></span>
                    <a href="#" className="contact-button" onClick={handleContact}></a>
                    <span>contact</span>
                </li>}

                <li>
                    <span></span>
                    <Link to='/projets' className="secondary-button"></Link>
                    <span>projets</span>
                </li>
                <li>
                    <span></span>
                    <a href='https://www.figma.com/file/FKNqfBNyN6voKmwv7txbUS/REACT-PORTFOLIO?node-id=0%3A1' target="_blank" rel="noopener noreferrer" className="medium-button"></a>
                    <span>figma</span>
                </li>
                <li>
                    <span></span>
                    <Link to="/downloads/cv-figma.pdf" target="_blank" className="orange-button" download="cv-figma.pdf"></Link>
                    <span>c.v</span>
                </li>
                <li>
                    <span></span>
                    <Link to="/" className="dark-button"></Link>
                    <span>home</span>
                </li>


            </ul>
            {/* {toggleBox && <div className="contact-box">contact box</div>} */}
            <div className="contact-box">
                <ContactForm/>
            </div>
        </div>
    );
};

export default MenuTarik;


/* <li>
    <span></span>
    <a href="https://www.figma.com/file/FKNqfBNyN6voKmwv7txbUS/REACT-PORTFOLIO?node-id=0%3A1" target="_blank" rel="noopener noreferrer" className="teal-button">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C1.10091 1.65867 3.81818 0 7 0C10.1818 0 12.8991 1.65867 14 4C12.8991 6.34133 10.1818 8 7 8C3.81818 8 1.10091 6.34133 0 4ZM3.81818 4C3.81818 5.472 5.24364 6.66667 7 6.66667C8.75636 6.66667 10.1818 5.472 10.1818 4C10.1818 2.528 8.75636 1.33333 7 1.33333C5.24364 1.33333 3.81818 2.528 3.81818 4Z" fill="white"/>
        </svg>
    </a>
    <span>figma</span>
</li>
<li>
    <span></span>
    <Link to="/downloads/portfolio-tarik.pdf" target="_blank" className="secondary-button" download="portfolio-tarik.pdf">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.42857L5 8M9 3.42857L5 8M5 8L5 0" stroke="#131B30"/>
            <line y1="9.5" x2="10" y2="9.5" stroke="#131B30"/>
        </svg>
    </Link>
    <span>portfolio</span>
</li>
<li>
    <span></span>
    <Link to="/downloads/cv-figma.pdf" target="_blank" rel="noopener noreferrer" download='cv-figma.pdf' className="medium-button">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.42857L5 8M9 3.42857L5 8M5 8L5 0" stroke="#131B30"/>
            <line y1="9.5" x2="10" y2="9.5" stroke="#131B30"/>
        </svg>
    </Link>
    <span>resume</span>
</li> */


// let toggled = false;
// if(!toggled)
// {
//     $('.contact-box').slideToggle("slow");
//     $(".contact-button").css("background-color","red");
//     $(".contact-button").css("background-image","url("+cross+")");
//     toggled = true;
// }
// else
// {
//     $('.contact-box').slideToggle("slow");
//     $(".contact-button").css("background-color","blue");
//     $(".contact-button").css("background-image","url("+contactIcon+")");
//     toggled = false;
// }