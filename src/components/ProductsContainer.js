import { useEffect, useState } from "react";
import { Item } from "./Item";
import { useParams } from "react-router-dom";
import {KeyboardArrowDown, Tune} from '@mui/icons-material';

export const ProductsContainer = (props) => {
    const { categoryLabel, shopby, viewby } = useParams()
    const {filterdata, refreshPage, isError} = props;

    // use addtocart reducer from redux state
    const [filtereddata, setfiltereddata] = useState([])
    const [hasError, setHasError] = useState(false)
    const [isSortBy, setIsSortBy] = useState(false)
    const [isSize, setIsSize] = useState(false)
    const [isFit, setIsFit] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState('recommended')
    const isSelected = (sortname) => selectedRadio === sortname;

    // filterfit
    const filteredfit = [];
    filtereddata.map(item => {
        if(!filteredfit.includes(item.fit)){
            filteredfit.push(item.fit)
        }
        else{
            return null
        }
        return null
        })

    // filtersize
    const filteredsize = [];
    filtereddata.map(item => {
        if(item.sizes){
            item.sizes.map(itemsize => {
                if(!filteredsize.includes(itemsize.size)){
                    filteredsize.push(itemsize.size)
                }else{
                    return null
                }
                return null
            })
        }else{
            return null
        }
        return null
    })

    const SortBy = (sortname) => {
        switch(sortname){
            case 'recommended':
                setfiltereddata(filtereddata.sort((a, b) => new Date(a.created) - new Date(b.created)));
                setSelectedRadio("recommended")
                break;
            case 'newest':
                setfiltereddata(filtereddata.sort((a, b) => new Date(b.created) - new Date(a.created)));
                setSelectedRadio("newest")
                break;
            case 'highest':
                setfiltereddata(filtereddata.sort((a,b) => b.price - a.price))
                setSelectedRadio("highest")
                break;
            case 'lowest':
                setfiltereddata(filtereddata.sort((a,b) => a.price - b.price))
                setSelectedRadio("lowest")
                break;
            default: 
                setfiltereddata(filtereddata)
                }
        setIsSortBy(false)
    }

    useEffect(() => {
        setHasError(isError)
    }, [isError])

    useEffect(() => {
        setSelectedRadio("recommended")
        setIsSortBy(false)
        setIsSize(false)
        setIsFit(false)
        setfiltereddata(filterdata.filter(item => item.type.replace(" ","").toLowerCase() === viewby || viewby === "viewall"))
    }, [categoryLabel, shopby, viewby, filterdata])

    return(
        <>
                <div className="filter">
                        <div className="filter-function">
                        <div className="filter-container">
                            <div className="filter-menu">
                                <div className={`filtername ${isSortBy ? "rotatesvg" : ""}`} onClick={() => {
                                setIsSortBy(!isSortBy)
                                setIsSize(false) 
                                setIsFit(false)
                            } }> 
                                    <span>Sort by</span>
                                    <KeyboardArrowDown />
                                </div>

                                <ul className={`sortby-dropdown ${isSortBy ? "show" : ""}`}>
                                    <li><input type="radio" name="sort" id="recommended" checked={isSelected("recommended")} onChange={() => SortBy("recommended")}/><label htmlFor="recommended">Recommended</label></li>
                                    <li><input type="radio" name="sort" id="newest" checked={isSelected("newest")} onChange={() => SortBy("newest")}/><label htmlFor="newest">Newest</label></li>
                                    <li><input type="radio" name="sort" id="highest" checked={isSelected("highest")} onChange={() => SortBy("highest")}/><label htmlFor="highest">Highest Price</label></li>
                                    <li><input type="radio" name="sort" id="lowest" checked={isSelected("lowest")} onChange={() => SortBy("lowest")}/><label htmlFor="lowest">Lowest Price</label></li>
                                </ul>
                            </div>
                            <div className="filter-menu">
                                <div className={`filtername ${isSize ? "rotatesvg" : ""}`} onClick={() => {
                                setIsSize(!isSize)
                                setIsSortBy(false)
                                setIsFit(false)
                            } }>
                                    <span>Size</span>
                                    <KeyboardArrowDown />
                                </div>

                                <ul className={`size-dropdown ${isSize ? "show" : ""}`}>
                                    {
                                        filteredsize.map((itemsize, index) => {
                                            const sizecount = [];
                                            filtereddata.map(item => {
                                                item.sizes.map(size => {
                                                    sizecount.push(size.size)
                                                })
                                            })
                                            const size = sizecount.filter(item => item === itemsize)
                                            return <li key={`${itemsize}`}>
                                                        <div className="inputlabel-container">
                                                            <input type="checkbox" name="size" id={`${itemsize}`} />
                                                            <label htmlFor={`${itemsize}`}>
                                                                <span>{itemsize}</span>
                                                                <span>{size.length}</span> 
                                                            </label>
                                                        </div>
                                                    </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="filter-menu">
                                <div className={`filtername ${isFit ? "rotatesvg" : ""}`} onClick={() => {
                                setIsFit(!isFit)
                                setIsSize(false)
                                setIsSortBy(false)
                            } }>
                                    <span>Fit</span>
                                    <KeyboardArrowDown />
                                </div>

                                <ul className={`size-dropdown ${isFit ? "show" : ""}`}>
                                        {
                                                filteredfit.map(item => {
                                                    const fitcount = filtereddata.filter(itemdata => itemdata.fit === item)
                                                    return (
                                                    <li key={`${item}${fitcount.length}`}>
                                                        <div className="inputlabel-container">
                                                            <input type="checkbox" name="fit" id={`${item.toLowerCase().replace(" ","")}`} />
                                                            <label htmlFor={`${item.toLowerCase().replace(" ","")}`}>
                                                                <span>{item}</span> 
                                                                <span>{fitcount.length}</span> 
                                                            </label> 
                                                        </div>
                                                    </li>
                                                )
                                                }
                                            )
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="filter-all">
                            <div className="filter-menu" >
                                <Tune />
                                <span>Filters</span>
                            </div>
                        </div>
                        </div>
                        
                    </div>
            {
                hasError ? 
                (
                    <h2 onClick={() => refreshPage()}>Try again</h2>
                )
                :
                (
                    filtereddata.length === 0 ? 
                    (
                        <div className="loading-products-container">
                            <div className="loading-spinner"></div>
                            <div className="loading-spinner-hand"></div>
                        </div>
                    )
                    :
                    (
                        <div className="products-container">
                            {
                                filtereddata.map((item, index) => 
                                        {
                                        return <Item {...item} key={index}/>
                                        })
                            }
                        </div>
                    )
                )
                
            }         
        </>
    )
}