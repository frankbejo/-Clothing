import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledFooter } from '../theme'
import { Facebook, GitHub, Instagram } from '@mui/icons-material'
import logo from '../images/logo_2.webp'

const Footer = () => {
    return (
        <StyledFooter>
            <footer>
                <div className="menu-footer">
                    <div className="left-menu">
                        <div className="logo-container">
                            <img src={logo} alt="" />
                        </div>
                        <NavLink to={"/sustainability"}>Sustainability</NavLink>
                        <NavLink to={"/"}>Sign up</NavLink>
                    </div>
                    <div className="mid-menu">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/"}>Men</NavLink>
                        <NavLink to={"/"}>Women</NavLink>
                        <NavLink to={"/"}>Divided</NavLink>
                        <NavLink to={"/"}>Kids</NavLink>
                    </div>
                    <div className="right-menu">
                        <NavLink to={"/customerservice"}>Customer Service</NavLink>
                        <NavLink to={"/"}>My Account</NavLink>
                        <NavLink to={"/newsletter"}>Newsletter</NavLink>
                        <NavLink to={"/findstore"}>Find a Store</NavLink>
                        <NavLink to={"/about"}>About &Clothing</NavLink>
                    </div>
                </div>
                <div className="socials">
                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><Facebook /></a>
                    <a href="https://www.instagram.com/?hl=en" rel="noreferrer" target="_blank"><Instagram /></a>
                    <a href="https://github.com/frankbejo/jandf-clothing" rel="noreferrer" target="_blank"><GitHub /></a>
                </div>
                <div className="label">
                    <span>Developed by Frank Bejo</span>
                </div>
            </footer>
        </StyledFooter>
    )
}

export default Footer;