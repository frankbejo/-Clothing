import React, {useState, useLayoutEffect} from 'react';
import {NavLink, Outlet, useParams} from 'react-router-dom';
import logo1 from '../images/logo_2.webp';
import { ThemeProvider } from 'styled-components';
import { lighttheme, darktheme, Globalstyles, StyledNavbar } from '../theme';
import { ShoppingBagOutlined, FavoriteBorder, LightMode, DarkMode, AccountCircleOutlined, Menu, Search, NavigateNext, ArrowBack} from '@mui/icons-material';
import { MenuList } from './MenuList';

const Navbar = ({usedata}) => {
    const {categoryLabel, shopby} = useParams();
    // states
    const [theme, setTheme] = useState(true);

    // droponhover state / animation state
    const [droponhover, setdroponhover ] = useState(false)
    
    // category state for navbar
    const [usecategory, setcategory] = useState("");
    const [useshopby, setshopby] = useState(
        {
            shopbyLink: "",
            shopbyName: ""
        }
    );

    // mobile side menu show/hide
    const [isMenuVisible, setIsMenuVisible] = useState(
        {
            categoryVisible: false,
            shopby: false,
            viewby: false
        }
    )

    // function for category, shopby and viewby close : side menu
    const CloseSideMenu = () => {
        setcategory("")
        setIsMenuVisible((isMenuVisible) => ({
            ...isMenuVisible,
            categoryVisible: false,
            shopby: false,
            viewby: false
        }))
    }
    // function for category to shopby : side menu
    const GetCategoryForShopBy = (category) => {
        setcategory(category)
        setIsMenuVisible((isMenuVisible) => ({
            ...isMenuVisible,
            shopby: true,
        }))
    }

    const GetCategoryForViewBy = (shopbylink, shopbyname) => {
        setshopby(() => ({
            shopbyLink: shopbylink,
            shopbyName: shopbyname
        }))
        setIsMenuVisible((isMenuVisible) => ({
            ...isMenuVisible,
            viewby: true,
        }))
    }

    // get categories on hover
    const GetCategories = (category) => {
        setdroponhover(!droponhover)
        setcategory(category)
    }

    const themeToggle = () => {
        setTheme(!theme)
        window.localStorage.setItem("theme",!theme)
    }

    // new arrival filtered
    const datenow = new Date()
    const filterednewarr = [];
    usedata.filter(item => item.category === usecategory && new Date(item.created).getFullYear() === datenow.getFullYear() && new Date(item.created).getMonth() === datenow.getMonth())
        .map((item) => {
            if(!filterednewarr.includes(item.type)){
                filterednewarr.push(item.type)
                }
            else{
                return{}
            }

            return{}
        })
    
    // trending filtered
    const filteredtrending = [];
    usedata.filter(item => item.category === usecategory && item.ishot === true)
        .map(item => {
            if(!filteredtrending.includes(item.type)){
                filteredtrending.push(item.type)
                }
            else{
                return{}
            }
            return{}
        })

    // all types filtered
    const filteredbyshop = [];
    usedata.filter(item => item.category === usecategory)
        .map(item => {
            if(!filteredbyshop.includes(item.type)){
                filteredbyshop.push(item.type)
                }
            else{
                return{}
            }
            return{}
        })

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
                        <div className={`side-menu-container ${isMenuVisible.categoryVisible ? "show":""}`}>
                            <div className="side-menu-list">
{/* ----------------------------show side menu */}
                                <ul className="side-menu-category">
                                    <li>
                                        <span>Sign in</span>
                                    </li>
                                    <li onClick={() => GetCategoryForShopBy("men")} className={categoryLabel === "men" ? "active":""}>
                                        <span>Men</span>
                                        <NavigateNext />
                                    </li>
                                    <li onClick={() => GetCategoryForShopBy("women")} className={categoryLabel === "women" ? "active":""}>
                                        <span>Women</span>
                                        <NavigateNext />
                                    </li>
                                    <li onClick={() => GetCategoryForShopBy("divided")} className={categoryLabel === "divided" ? "active":""}>
                                        <span>Divided</span>
                                        <NavigateNext />
                                    </li>
                                    <li onClick={() => GetCategoryForShopBy("kids")} className={categoryLabel === "kids" ? "active":""}>
                                        <span>Kids</span>
                                        <NavigateNext />
                                    </li>
                                    <li>
                                        <NavLink to="/about" onClick={() => CloseSideMenu()}>About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/sustainability" onClick={() => CloseSideMenu()}>Sustainability
                                        </NavLink>
                                    </li>
                                </ul>
{/* ----------------------------show shopby side menu */}
                                <ul className={`side-menu-shopby ${isMenuVisible.shopby ? "show":""}`}>
                                    <li onClick={() => setIsMenuVisible((isMenuVisible) => ({...isMenuVisible, shopby: false}))}>
                                        <ArrowBack /> <b>{usecategory.charAt(0).toUpperCase() + usecategory.slice(1, )}</b>
                                        <span>Back</span>
                                    </li>
                                    <li onClick={() => GetCategoryForViewBy("all", "By Products")} className={usecategory === categoryLabel & shopby === "all" ? "active":""}>
                                        <span>Shop By Products</span>
                                        <NavigateNext />
                                    </li>
                                    <li onClick={() => GetCategoryForViewBy("trending", "Trending Now")} className={usecategory === categoryLabel & shopby === "trending" ? "active":""}>
                                        <span>Trending Now</span>
                                        <NavigateNext />
                                    </li>
                                    <li onClick={() => GetCategoryForViewBy("newarrival","New Arrival")} className={usecategory === categoryLabel & shopby === "newarrival" ? "active":""}>
                                        <span>New Arrival</span>
                                        <NavigateNext />
                                    </li>
                                </ul>
{/* ----------------------------show viewby side menu */}
                                <ul className={`side-menu-viewby ${isMenuVisible.viewby ? "show":""}`}>
                                    <li onClick={() => setIsMenuVisible((isMenuVisible) => ({...isMenuVisible, viewby: false}))}>
                                        <ArrowBack /> <b>{useshopby.shopbyName}</b>
                                        <span>Back</span>
                                    </li>
                                    <li onClick={() => CloseSideMenu()} >
                                        <NavLink to={`/products/${usecategory}/${useshopby.shopbyLink}/viewall`}>View All</NavLink>
                                    </li>
                                    {
                                        useshopby.shopbyLink === "newarrival" ? (
                                            filterednewarr.sort().map(item => {
                                                return(
                                                    <li onClick={() => CloseSideMenu()} >
                                                        <NavLink to={`/products/${usecategory}/${useshopby.shopbyLink}/${item.replace(" ", "").toLowerCase()}`}>{item}</NavLink>
                                                    </li>
                                                )
                                            })
                                        )
                                        :
                                        (
                                            useshopby.shopbyLink === "trending" ? (
                                                filteredtrending.sort().map(item => {
                                                    return(
                                                        <li onClick={() => CloseSideMenu()} >
                                                            <NavLink to={`/products/${usecategory}/${useshopby.shopbyLink}/${item.replace(" ", "").toLowerCase()}`}>{item}</NavLink>
                                                        </li>
                                                    )
                                                })
                                            )
                                            :
                                            (
                                                filteredbyshop.sort().map(item => {
                                                    return(
                                                        <li onClick={() => CloseSideMenu()} >
                                                            <NavLink to={`/products/${usecategory}/${useshopby.shopbyLink}/${item.replace(" ", "").toLowerCase()}`}>{item}</NavLink>
                                                        </li>
                                                    )
                                                })
                                                
                                            )
                                        )
                                        
                                    }
                                </ul>

                        </div>
                        <div className="backdrop" onClick={CloseSideMenu}></div>
                        </div>
                        <div className="topnav">
                            <div className="left-topnav">
                                <NavLink to='/customerservice'>Customer Service</NavLink>
                                <div className="menu-show">
                                    <span onClick={() => setIsMenuVisible((isMenuVisible) =>({
                                        ...isMenuVisible,
                                        categoryVisible: true
                                        })
                                        )}>
                                        <Menu />
                                    </span>

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
                            <MenuList droponhover={droponhover} usecategory={usecategory} GetCategories={GetCategories} setdroponhover={setdroponhover}/>
                        </div>
                    </nav>
                        <div className={`dropdownhover ${droponhover ? "show":"hide"}`} onMouseOver={() => setdroponhover(true)} onMouseLeave = {() => setdroponhover(false)}>
                            <div className="top-menus"> 
                                    
                                <ul className="newarrival">
                                    <li><span>New Arrival</span></li>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/newarrival/viewall`} >View All</NavLink>
                                    </li>
                                    {
                                        filterednewarr.sort().map((item, index) => {
                                            return(
                                                <li onClick={() => setdroponhover(false)} key={`${item.type}${index}`}>
                                                    <NavLink to={`/products/${usecategory}/newarrival/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="trendingnew">
                                    <li><span>Trending Now</span></li>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/trending/viewall`}>View All</NavLink>
                                    </li>
                                    {
                                        filteredtrending.sort().map((item, index) => {
                                            return(
                                                <li onClick={() => setdroponhover(false)} key={`${item.type}${index}`}>
                                                    <NavLink to={`/products/${usecategory}/trending/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className="byproducts">
                                    <li><span>Shop by Products</span></li>
                                    <li onClick={() => setdroponhover(false)}>
                                        <NavLink to={`/products/${usecategory}/all/viewall`}>View All</NavLink>
                                    </li>
                                    {
                                        filteredbyshop.sort().map((item, index) => {
                                            return(
                                                <li onClick={() => setdroponhover(false)} key={`${item.type}${index}`}>
                                                    <NavLink to={`/products/${usecategory}/all/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                    
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