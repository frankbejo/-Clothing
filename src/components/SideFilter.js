import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { TopMenuSkeleton } from "./TopMenuSkeleton";

export const SideFilter = (props) => {
    const {usedata, haserror} = props;
    const [isError, setIsError] = useState(false);
    const [usethisdata, setthisdata] = useState([]);
    const params = useParams();
    const {categoryLabel} = params;

    // filtered new arrival
    const filterednewarr = [];
    const datenow = new Date();
    usedata.filter(item => item.category === categoryLabel && new Date(item.created).getFullYear() === datenow.getFullYear() && new Date(item.created).getMonth() === datenow.getMonth())
    .map(item => {
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
    usedata.filter(item => item.category === categoryLabel && item.ishot === true)
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
    usedata.filter(item => item.category === categoryLabel)
        .map(item => {
            if(!filteredbyshop.includes(item.type)){
                filteredbyshop.push(item.type)
                }
            else{
                return{}
            }
            return{}
        })

    useEffect(() => {
        setIsError(haserror)
        setthisdata(usedata)
    }, [haserror, usedata])
    
    return(
                <div className="side-nav">
                    {
                        isError ? (
                            <h1>Error</h1>
                        ):
                        (
                            usethisdata.length === 0 ? (
                                <div className="side-nav-fixed-skeleton">
                                    <TopMenuSkeleton />
                                    <TopMenuSkeleton />
                                    <TopMenuSkeleton />
                                </div>
                            ):
                            (
                                <div className="side-nav-fixed">
                                    <ul className="side-filter">
                                        {
                                            filterednewarr.length === 0 ? (
                                                (null)
                                            ):
                                            (
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
                                            )
                                        }
                                        
                                        {
                                            filteredtrending.length === 0 ? (
                                                (null)
                                            ):
                                            (
                                                <li>
                                                <span className="side-filter-header">Trending</span>
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
                                            )
                                        }
                                        
                                        {
                                            filteredbyshop.length === 0 ? (
                                                (null)
                                            ):
                                            (
                                                <li>
                                                <span className="side-filter-header">Categories</span>
                                                <ul className="side-filter-items">
                                                <li>
                                                    <NavLink to={`/products/${categoryLabel}/all/viewall`}>View All</NavLink>
                                                </li>
                                                {
                                                    filteredbyshop !== 0 ? (
                                                        filteredbyshop.sort().map((item, index) => {
                                                            return(
                                                                <li key={`${item.type}${index}`}>
                                                                    <NavLink to={`/products/${categoryLabel}/all/${item.replace(" ", "").toLowerCase()}`} >{item}</NavLink>
                                                                </li>
                                                            )
                                                        })
                                                    ):
                                                {
                                                }
                                                }
                                            </ul>
                                        </li>
                                            )
                                        }
                                        
                                    </ul>
                                </div>
                            )
                        )
                    }
                </div>
        
    )
}
