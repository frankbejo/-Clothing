import { NavLink, useParams } from "react-router-dom"
import {KeyboardArrowDown} from '@mui/icons-material';

export const MenuList = ({usecategory, droponhover, setdroponhover, GetCategories}) => {
    const {categoryLabel} = useParams();

    return(
        <div className="menus">
            <ul className="menu-list">
                <li className={`tohover ${usecategory === "men" && droponhover === true ? "on-hover":""}`} >
                    <span className={categoryLabel === "men" ? "active-menu":""} onMouseOver={() => GetCategories("men")} onClick={() => GetCategories("men")} onMouseOut = {() => setdroponhover(false)} >Men</span>
                    <KeyboardArrowDown />
                </li>
                <li className={`tohover ${usecategory === "women" && droponhover === true ? "on-hover":""}`}>
                    <span className={categoryLabel === "women" ? "active-menu":""} onMouseOver={() => GetCategories("women")} onClick={() => GetCategories("women")} onMouseOut = {() => setdroponhover(false)}>Women</span>
                    <KeyboardArrowDown />
                </li>
                <li className={`tohover ${usecategory === "divided" && droponhover === true ? "on-hover":""}`}>
                    <span className={categoryLabel === "divided" ? "active-menu":""} onMouseOver={() => GetCategories("divided")} onClick={() => GetCategories("divided")} onMouseOut = {() => setdroponhover(false)}>Divided</span>
                    <KeyboardArrowDown />
                </li>
                <li className={`tohover ${usecategory === "kids" && droponhover === true ? "on-hover":""}`}>
                    <span className={categoryLabel === "kids" ? "active-menu":""} onMouseOver={() => GetCategories("kids")} onClick={() => GetCategories("kids")} onMouseOut = {() => setdroponhover(false)}>Kids</span>
                    <KeyboardArrowDown />
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li>
                    <NavLink to="/sustainability">Sustainability</NavLink>
                </li>
            </ul>
        </div>
    )
}