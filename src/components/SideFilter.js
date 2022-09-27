import { NavLink, useParams } from "react-router-dom";

export const SideFilter = ({usedata}) => {
    const params = useParams();
    const {categoryLabel} = params;

    // filtered new arrival
    const filterednewarr = [];
    const datenow = new Date()
    usedata.filter(item => item.category === categoryLabel && new Date(item.created).getFullYear() === datenow.getFullYear() && new Date(item.created).getMonth() === datenow.getMonth())
    .map(item => {
        if(!filterednewarr.includes(item.type)){
            filterednewarr.push(item.type)
            }
        else{
            return
        }
    })

    // trending filtered
    const filteredtrending = [];
    usedata.filter(item => item.category === categoryLabel && item.ishot === true)
        .map(item => {
            if(!filteredtrending.includes(item.type)){
                filteredtrending.push(item.type)
                }
            else{
                return
            }
        })

        // all types filtered
    const filteredbyshop = [];
    usedata.filter(item => item.category === categoryLabel)
        .map(item => {
            if(!filteredbyshop.includes(item.type)){
                filteredbyshop.push(item.type)
                }
            else{
                return
            }
        })
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
                                    
                                    {
                                        filterednewarr.sort().map((item, index) => {
                                        return(
                                            <li key={`${item.type}${index}`}>
                                                <NavLink to={`/products/${categoryLabel}/newarrival/${item.toLowerCase().replace(" ", "")}`} >{item}</NavLink>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </li>

                            <li>
                                <span className="side-filter-header">Trending Now</span>
                                <ul className="side-filter-items">
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/trending/viewall`}>View All</NavLink>
                                    </li>
                                    {
                                        filteredtrending.sort().map((item, index) => {
                                            return(
                                                <li key={`${item.type}${index}`}>
                                                    <NavLink to={`/products/${categoryLabel}/trending/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>

                            <li>
                                <span className="side-filter-header">Shop by Products</span>
                                <ul className="side-filter-items">
                                    <li>
                                        <NavLink to={`/products/${categoryLabel}/all/viewall`}>View All</NavLink>
                                    </li>
                                    {
                                        filteredbyshop.sort().map((item, index) => {
                                            return(
                                                <li key={`${item.type}${index}`}>
                                                    <NavLink to={`/products/${categoryLabel}/all/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
        
    )
}