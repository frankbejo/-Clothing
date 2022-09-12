import React, {useState, useLayoutEffect} from 'react';
import {NavLink, Outlet, useParams} from 'react-router-dom';
import logo1 from '../images/logo_2.webp';
import { ThemeProvider } from 'styled-components';
import { lighttheme, darktheme, Globalstyles, StyledNavbar } from '../theme';
import { ShoppingBagOutlined, FavoriteBorder, LightMode, DarkMode, AccountCircleOutlined, Menu, Search} from '@mui/icons-material';

const Navbar = () => {
    // states
    const [theme, setTheme] = useState(true);

    // useParams
    const params = useParams();
    const {categoryLabel} = params;
    
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
        window.localStorage.setItem("theme",!theme)
    }

    useLayoutEffect(() => {
        if(window.localStorage.getItem("theme") === null){
            window.localStorage.setItem("theme", true)
        }
        else{
            setTheme(JSON.parse(window.localStorage.getItem("theme")));
        }
    },[])
    return(
        <div>
            <ThemeProvider theme={theme ? lighttheme : darktheme}>
                <StyledNavbar>
                    <nav className="navbar">

                        <div className="topnav">

                            <div className="left-topnav">
                                <NavLink to='/customerservice'>Customer Service</NavLink>
                                <div className="menu-show">
                                    <Menu />
                                <NavLink to="/">
                                    <img src={logo1} alt="" className={theme ? "light-mode": "dark-mode"} aria-label="Home" />
                                </NavLink>
                                </div>
                            </div>
                            
                            

                            <div className="right-topnav">
                                <div className="canvas" onClick={themeToggle}>
                                    <DarkMode />
                                    <LightMode />
                                </div>

                                <NavLink to="/Sign in"> 
                                    <div className="account">
                                    <AccountCircleOutlined />
                                    <span>Sign in</span> 
                                    </div> 
                                </NavLink>

                                
                            </div>
                        </div>

                        <div className="centernav">
                            <div className="left-centernav">
                                    <NavLink to='/newsletter'>Newsletter</NavLink>
                                    <NavLink to='/findastore'>Find a store</NavLink>
                                    <div className="search">
                                        <Search />
                                        <form action='/search'>
                                            <input type="search" name="search" id="search" placeholder='Search' autoComplete='off' />
                                        </form>
                                    </div>
                            </div>
                            <div className="right-centernav">
                                <div id="favorites">
                                    <FavoriteBorder /> 
                                    <span>Favorites</span> 
                                </div>
                                <div id="shoppingbag">
                                    <ShoppingBagOutlined />
                                    <span>Shopping bag</span> 
                                    (10)
                                </div>
                            </div>
                        </div>

                        <div className="botnav">
                            <div className="brand-logo">
                                <NavLink to="/">
                                    <img src={logo1} alt="" className={theme ? "light-mode": "dark-mode"} aria-label="Home" />
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
                                        <NavLink to="/about" >About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Sustainability">Sustainability</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                        <div className={`dropdownhover ${droponhover ? "show":"hide"}`} onMouseOver={() => setdroponhover(true)} onMouseLeave = {() => setdroponhover(false)}>
                            <div className="top-menus"> 
                                    
                                <ul className="newarrival">
                                    <li><span>New Arrival</span></li>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/newarrival/viewall`} >View All</NavLink>
                                    </li>
                                </ul>
                                <ul className="trendingnew">
                                    <li><span>Trending Now</span></li>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/trending/viewall`}>View All</NavLink>
                                    </li>
                                </ul>
                                <ul className="byproducts">
                                    <li><span>Shop by Products</span></li>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/all/viewall`}>View All</NavLink>
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