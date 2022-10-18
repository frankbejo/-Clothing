import React, {useState, useLayoutEffect, useEffect} from 'react';
import {NavLink, Outlet, useParams} from 'react-router-dom';
import logo1 from '../images/logo_2.webp';
import { ThemeProvider } from 'styled-components';
import { lighttheme, darktheme, Globalstyles, StyledNavbar } from '../theme';
import { ShoppingBagOutlined, FavoriteBorder, LightMode, DarkMode, AccountCircleOutlined, Menu, Search, NavigateNext, ArrowBack} from '@mui/icons-material';
import { MenuList } from './MenuList';
import { TopMenuSkeleton } from './TopMenuSkeleton';
import {useSelector, useDispatch} from 'react-redux';
import { setItems } from '../features/add-to-cart/addToCartSlice';

const Navbar = (props) => {
    // redux state
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch();
    const {usedata, haserror, fetchData} = props;
    const {categoryLabel, shopby, viewby} = useParams()

    let totalprice = 0;
    // const favorites = useSelector((state) => state.favorites.favorites)

    const [usethisdata, setthisdata] = useState([]);

    // states
    const [theme, setTheme] = useState(true);

    // skeleton when loading
    const [isError, setIsError] = useState(false)

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

    useEffect(() => {
        setIsError(haserror)
    }, [haserror])

    useEffect(() => {
        setthisdata(usedata)
    }, [usedata])
    
    useEffect(() => {
        fetchData()
        if(!window.localStorage.getItem("cart")){
            window.localStorage.setItem("cart", JSON.stringify(cart))
        }else{
            dispatch(setItems(JSON.parse(window.localStorage.getItem("cart"))))
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
                                    {
                                        filteredbyshop.length === 0 ? (
                                            (null)
                                        ):
                                        (
                                            <li onClick={() => GetCategoryForViewBy("all", "Categories")} className={usecategory === categoryLabel & shopby === "all" ? "active":""}>
                                                <span>Categories</span>
                                                <NavigateNext />
                                            </li>
                                        )
                                    }
                                    {
                                        filteredtrending.length === 0 ? (
                                            (null)
                                        ):
                                        (
                                            <li onClick={() => GetCategoryForViewBy("trending", "Trending")} className={usecategory === categoryLabel & shopby === "trending" ? "active":""}>
                                                <span>Trending</span>
                                                <NavigateNext />
                                            </li>
                                        )
                                    }
                                    {
                                        filterednewarr.length === 0 ? (
                                            (null)
                                        ):
                                        (
                                            <li onClick={() => GetCategoryForViewBy("newarrival","New Arrival")} className={usecategory === categoryLabel & shopby === "newarrival" ? "active":""}>
                                                <span>New Arrival</span>
                                                <NavigateNext />
                                            </li>
                                        )
                                    }
                                </ul>
{/* ----------------------------show viewby side menu */}
                                <ul className={`side-menu-viewby ${isMenuVisible.viewby ? "show":""}`}>
                                    <li >
                                        <ArrowBack onClick={() => setIsMenuVisible((isMenuVisible) => ({...isMenuVisible, viewby: false}))} /> <b>{useshopby.shopbyName}</b>
                                        <span onClick={() => setIsMenuVisible((isMenuVisible) => ({...isMenuVisible, shopby: false, viewby: false}))}>Back</span>
                                    </li>
                                    <li onClick={() => CloseSideMenu()} >
                                        <NavLink to={`/products/${usecategory}/${useshopby.shopbyLink}/viewall`}>View All</NavLink>
                                    </li>
                                    {
                                        useshopby.shopbyLink === "newarrival" ? (
                                            filterednewarr.sort().map(item => {
                                                return(
                                                    <li onClick={() => CloseSideMenu()} key={`newarr${item}`}>
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
                                                        <li onClick={() => CloseSideMenu()} key={`trendingnow${item}`}>
                                                            <NavLink to={`/products/${usecategory}/${useshopby.shopbyLink}/${item.replace(" ", "").toLowerCase()}`}>{item}</NavLink>
                                                        </li>
                                                    )
                                                })
                                            )
                                            :
                                            (
                                                filteredbyshop.sort().map(item => {
                                                    return(
                                                        <li onClick={() => CloseSideMenu()} key={`category${item}`}>
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
                                    ({cart.length})
                                    <div className="shoppingbag-onhover">
                                        <div className="shoppingbag-container">
                                            <span></span>
                                            
                                            {
                                                cart.length === 0 ? (
                                                    <div className="emptybag">
                                                        <span>Bag is Empty</span>
                                                    </div>
                                                ):
                                                (
                                                    <>
                                                    <ul>
                                                        {
                                                        cart.map(item => {
                                                        totalprice += item.price;
                                                        return(
                                                            <NavLink to={`/products/${item.category}/all/viewall/${item._id}/${item.itemname}`}>
                                                                <li>
                                                                <div className="image-container">
                                                                    <img src={item.product_image} alt="" />
                                                                </div>
                                                                <div className="item-info-container">
                                                                    <div className="item-info">
                                                                        <span><b>{item.itemname}</b></span>
                                                                        <span>{item.fit}</span>
                                                                        <span>Size: {item.sizes[0].size}</span>
                                                                    </div>
                                                                    <div className="price">
                                                                        <span>PHP{item.price}</span>
                                                                        <span>{item.price}.00</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            </NavLink>
                                                        )
                                                    })
                                                    }
                                                    </ul>
                                                    <div className="checkout">
                                                        <span>Checkout</span>
                                                        <NavigateNext />
                                                    </div>
                                                    <div className="total">
                                                        <span><b>Total</b></span>
                                                        <span>PHP{totalprice}.00</span>
                                                    </div>
                                                    </>
                                                    
                                                )
                                            }
                                        </div>
                                    </div>
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
                            {
                                isError ? (
                                    <h1>Error</h1>
                                ):
                                (
                                    usethisdata.length === 0 ? (
                                        <div className="top-menus-skeleton">
                                            <TopMenuSkeleton />
                                            <TopMenuSkeleton />
                                            <TopMenuSkeleton />
                                        </div>
                                    ):
                                    (
                                        <div className="top-menus"> 
                                        {
                                            filterednewarr.length === 0 ? (
                                                (null)
                                            ):
                                            (
                                                <ul className="newarrival">
                                                    <li><span>New Arrival</span></li>
                                                    <li onClick={() => setdroponhover(false)}>
                                                    <NavLink to={`/products/${usecategory}/newarrival/viewall`} >View All</NavLink>
                                                    </li>
                                            {
                                                filterednewarr.sort().map((item, index) => {
                                                    return(
                                                        <li onClick={() => setdroponhover(false)} key={`newarr${item}`}>
                                                            <NavLink to={`/products/${usecategory}/newarrival/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                                </ul>
                                            )
                                        }
                                        
                                        {
                                            filteredtrending.length === 0 ? (
                                                (null)
                                            ):
                                            (
                                                <ul className="trendingnew">
                                                    <li><span>Trending</span></li>
                                                    <li onClick={() => setdroponhover(false)} >
                                                    <NavLink to={`/products/${usecategory}/trending/viewall`}>View All</NavLink>
                                                    </li>
                                            {
                                                filteredtrending.sort().map((item) => {
                                                    return(
                                                        <li onClick={() => setdroponhover(false)} key={`trending${item}`}>
                                                            <NavLink to={`/products/${usecategory}/trending/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                                </ul>
                                            )
                                        }
                                        
                                        {
                                            filteredbyshop.length === 0 ? (
                                                (null)
                                            ):
                                            (
                                                <ul className="byproducts">
                                                    <li><span>Categories</span></li>
                                                    <li onClick={() => setdroponhover(false)}>
                                                    <NavLink to={`/products/${usecategory}/all/viewall`}>View All</NavLink>
                                                    </li>
                                            {
                                                filteredbyshop.sort().map((item) => {
                                                    return(
                                                        <li onClick={() => setdroponhover(false)} key={`byshop${item}`}>
                                                            <NavLink to={`/products/${usecategory}/all/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                                </ul>
                                            )
                                        }
                            </div>
                                    )
                                )
                            }
                        </div>
                </StyledNavbar>
                <Outlet/>
                <Globalstyles/>
            </ThemeProvider>
        </div>
        
    )
}

export default Navbar;