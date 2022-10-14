import { NavLink, Outlet, useParams } from "react-router-dom";
import { StyledProducts } from '../theme';

const SideFilter = () => {
    const params = useParams();
    const {categoryLabel} = params;
    return(
        <StyledProducts>
            <section className="products">
                <div className="side-nav">
                    <div className="side-nav-fixed">
                        <ul className="side-filter">
                            <li>
                                <span className="side-filter-header">New Arrival</span>
                                <ul className="side-filter-items">
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/newarrival/viewall`}classname={(isActive) => { return isActive ? "active" : ""}}>View All</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/newarrival/linenclothing`} classname={(isActive) => { return isActive ? "active" : ""}}>Linen Clothing</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <span className="side-filter-header">Trending Now</span>
                                <ul className="side-filter-items">
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/trending/viewall`} classname={(isActive) => { return isActive ? "active" : ""}}>View All</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <span className="side-filter-header">Shop by Products</span>
                                <ul className="side-filter-items">
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/all/viewall`}>View All</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet />
            </section>
            
        </StyledProducts>
        
    )
}

export default SideFilter;