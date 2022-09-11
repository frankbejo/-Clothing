import { NavLink, useParams } from "react-router-dom";

export const SideFilter = () => {
    const params = useParams();
    const {categoryLabel} = params;
    
    return(
                <div className="side-nav">
                    <div className="side-nav-fixed">
                        <ul className="side-filter">
                            <li>
                                <span className="side-filter-header">New Arrival</span>
                                <ul className="side-filter-items">
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/newarrival/viewall`}>View All</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/newarrival/linenclothing`}>Linen Clothing</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <span className="side-filter-header">Trending Now</span>
                                <ul className="side-filter-items">
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/trending/viewall`}>View All</NavLink>
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
        
    )
}