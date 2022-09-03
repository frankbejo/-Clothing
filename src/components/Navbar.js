import React, {useState} from 'react';
import {NavLink, Outlet, useParams} from 'react-router-dom';
import logo1 from '../images/logo_2.png';
import logo2 from '../images/logo_3.png';
import { ThemeProvider } from 'styled-components';
import { lighttheme, darktheme, Globalstyles, StyledNavbar } from '../theme';
import { ShoppingBagOutlined, FavoriteBorder, Brightness4, Brightness7, AccountCircleOutlined} from '@mui/icons-material';

const Navbar = () => {
    // useParams
    const params = useParams();
    const {categoryLabel, shopby, viewby} = params;

    // states

    const [theme, setTheme] = useState(true);
    const [logo, setLogo] = useState(true);
    // droponhover state
    const [droponhover, setdroponhover ] = useState(false)

     // category state for navbar
    const [usecategory, setcategory] = useState(null);

    // get categories on hover
    const GetCategories = (category) => {
        setdroponhover(!droponhover)
        setcategory(category)
    }

    const themeToggle = () => {
        setTheme(!theme)
        setLogo(!logo)
    }

    return(
        <div>
            <ThemeProvider theme={theme ? lighttheme : darktheme}>
                <StyledNavbar>
                    <nav className="navbar">

                        <div className="topnav">

                            <div className="left-topnav">
                                <NavLink to='/customerservice'>Customer Service</NavLink>
                            </div>
                            
                        <div className="right-topnav">
                            <div className="canvas" onClick={themeToggle}>
                                <Brightness4 />
                                <Brightness7 />
                            </div>
                            
                            <NavLink to="/Sign in"> 
                                <div className="account">
                                <AccountCircleOutlined />Sign in
                                </div> </NavLink>
                            
                        </div>
                        </div>

                        <div className="centernav">
                            <div className="left-centernav">
                                <li>
                                    
                                    <NavLink to='/newsletter'>Newsletter</NavLink>
                                    
                                </li>
                                <li>
                                    <NavLink to='/findastore'>Find a store</NavLink>
                                </li>
                            </div>
                            <div className="right-centernav">
                                <div id="favorites">
                                    <FavoriteBorder /> Favorites
                                </div>
                                <div id="shoppingbag">
                                    <ShoppingBagOutlined /> Shopping bag
                                </div>
                            </div>
                        </div>

                        <div className="botnav">
                            <div className="brand-logo">
                                <NavLink to="/">
                                    <img src={logo ? logo1 : logo2} alt="" />
                                </NavLink>
                            </div>
                            <div className="menus">
                                <ul className="menu-list">
                                    <li className={`tohover ${usecategory === "men" && droponhover === true ? "on-hover":""}`} >
                                        <span className={categoryLabel === "men" ? "active-menu":""} onMouseOver={() => GetCategories("men")} onClick={() => GetCategories("men")} onMouseOut = {() => setdroponhover(false)} >Men</span>
                                    </li>
                                    <li className={`tohover ${usecategory === "women" && droponhover === true ? "on-hover":""}`}>
                                        <span className={categoryLabel === "women" ? "active-menu":""} onMouseOver={() => GetCategories("women")} onClick={() => GetCategories("women")} onMouseOut = {() => setdroponhover(false)}>Women</span>
                                    </li>
                                    <li className={`tohover ${usecategory === "divided" && droponhover === true ? "on-hover":""}`}>
                                        <span className={categoryLabel === "divided" ? "active-menu":""} onMouseOver={() => GetCategories("divided")} onClick={() => GetCategories("divided")} onMouseOut = {() => setdroponhover(false)}>Divided</span>
                                    </li>
                                    <li className={`tohover ${usecategory === "kids" && droponhover === true ? "on-hover":""}`}>
                                        <span className={categoryLabel === "kids" ? "active-menu":""} onMouseOver={() => GetCategories("kids")} onClick={() => GetCategories("kids")} onMouseOut = {() => setdroponhover(false)}>Kids</span>
                                    </li>
                                    <li>
                                        <NavLink to="/about" classname={(isActive) => { return isActive ? "active" : ""} } >About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Sustainability" classname={(isActive) => { return isActive ? "active" : ""} }>Sustainability</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                        <div className={`dropdownhover ${droponhover ? "show":"hide"}`} onMouseOver={() => setdroponhover(true)} onMouseLeave = {() => setdroponhover(false)}>
                            <div className="top-menus"> 
                                <ul className="newarrival">
                                    <span>New Arrival</span>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/newarrival/viewall`} 
                                                classname={(isActive) => { return isActive ? "active" : ""}}>View All</NavLink>
                                    </li>
                                </ul>
                                <ul className="trendingnew">
                                    <span>Trending Now</span>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/trending/viewall`}
                                        classname={(isActive) => { return isActive ? "active" : ""}}>View All</NavLink>
                                    </li>
                                </ul>
                                <ul className="byproducts">
                                    <span>Shop by Products</span>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/all/viewall`}
                                        classname={(isActive) => { return isActive ? "active" : ""}}>View All</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                    
                </StyledNavbar>
                <Outlet/>
                <Globalstyles/>
            </ThemeProvider>
        </div>
        
    )
}

export default Navbar;