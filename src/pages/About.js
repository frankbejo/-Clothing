import React from 'react'
import { NavLink } from 'react-router-dom';
import { StyledAbout } from '../theme';
import Footer from '../components/Footer';

const About = () => {
    return (
    <StyledAbout>
        <section className='about'>
            <div className="breadcrumbs">
                <span>
                    <NavLink to="/"> Home </NavLink> 
                    / <b>about</b> 
                </span>
            </div>
            <div className="content-container">
            <div className="about-content-container">
                <div className="about-content">
                    <p>
                        <b>&Clothing / J & F</b> is a clothing line that uses waste materials, useless or unwanted products by upcycling and with our local designers, they can showcase their designs and help the massive waste problem cause by clothing industry.
                    </p>
                </div>
                <div className="introductory-content">
                    <span><b>Did you know?</b></span>
                        <p>
                        The garment industry is one of the largest carbon polluters on planet Earth, and one of the greatest producers of waste. Three out of five of the 100 billion garments made in 2018 will end up in landfill within a year. Toxic chemicals land in the environment and worker communities, and the production of cotton uses up vast amounts of water. <a href='https://www.sustainyourstyle.org/en/whats-wrong-with-the-fashion-industry#anchor-environmental-impact' target="_blank"><b>Seemore</b></a>
                        </p>
                </div>
            </div>
        </div>
        </section>
        <Footer />
    </StyledAbout>
    
    )
}

export default About;