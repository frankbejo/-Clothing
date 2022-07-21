import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom"
import FilterThis from "./FilterThis";
import { Item } from './Item';
import {Search} from '@mui/icons-material';
// import axios from 'axios';
import {products} from '../data'

export const Products = () => {
    const [passeddata, setpasseddata] = useState([]);
    const [searchdata, setsearchdata] = useState(null);
    const [filterdata, setfilterdata] = useState([]);
    const { categoryLabel, shopby, viewby } = useParams();
    const searchinput = useRef(null);

    // const GetThisData = async () => {
    //     await axios.get("http://localhost:3000/products")
    //     .then(res => {
    //         setpasseddata(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    const GetThisData = () => {
        setpasseddata(products)
    }

    // filter data by categories
    const filterCategory = passeddata.filter(items => 
        items.category === categoryLabel)

    // filter by new, trend, products
    const FilterByShop = () => {
        switch(shopby){
            case 'all':
                setfilterdata(filterCategory);
            break;

            case 'trending':
                setfilterdata(filterCategory.filter(items => items.isHot === true));
            break;

            case 'newarrival':
                setfilterdata(filterCategory.filter(items => items.newarrive === true));
            break;

            default:
                setfilterdata(filterCategory);
        }
    }

    // filter search
    const thisdata = filterdata.filter(items => 
        items.itemname.toLowerCase().includes(searchdata)
    )

    const FilterData = (text) => {
        setsearchdata(text)
    }

    useEffect(() => {
        GetThisData()
        }, [])

        
    useEffect(() => {
        searchinput.current.value = null;
        FilterData("")
        FilterByShop()
        console.log(filterCategory)
    }, [categoryLabel,shopby, passeddata])

    
    return(
                    <div className="side-main-container">
                        <div className="filter">
                            <div className="burdermenu">
                                <span>Products | {categoryLabel }</span>
                            </div>
                            
                            <div className="filter-function">
                                <FilterThis menu="Sort by"/>
                                <FilterThis menu="Material" />
                                <FilterThis menu="Fit" />

                                <div className="search">
                                    <Search />
                                    <input type="search" name="search" id="search" placeholder='Search' autoComplete='off' onChange={ (e) => FilterData(e.target.value)} ref={searchinput} />
                                </div>
                            </div>
                            
                        </div>
                            {
                                passeddata.length === 0 ? 
                                (
                                    <div className="loading-products-container">
                                        <div className="loading-spinner"></div>
                                        <div className="loading-spinner-hand"></div>
                                    </div>
                                )
                                :
                                (
                                    thisdata.length === 0 ? 
                                    (
                                        <h1>No data to show</h1>
                                    )
                                    :
                                    (
                                        <div className="products-container" >{
                                            thisdata.filter(items => items.category === categoryLabel)
                                        .map(item => {
                                        return <Item {...item}/>
                                        })
                                        }
                                        </div>
                                    )
                                    
                                )
                            }
                </div>
    )
}
