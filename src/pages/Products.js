import { useState, useEffect} from "react";
import { Link, NavLink, useParams } from "react-router-dom"
import { ProductsContainer } from "../components/ProductsContainer";
import {products} from '../data'
import {SideFilter} from "../components/SideFilter";
import { StyledProducts } from "../theme";

export const Products = () => {
    const [passeddata, setpasseddata] = useState([]);
    const [filterdata, setfilterdata] = useState([]);
    const { categoryLabel, shopby, viewby} = useParams();

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

    useEffect(() => {
        GetThisData()
        }, [])

        
    useEffect(() => {
        FilterByShop()
    }, [categoryLabel, shopby, passeddata])
    
    return(
        <StyledProducts>
            <section className="products">
                <div className="breadcrumbs">
                        <span><Link to="/"> Home</Link> <NavLink to={`/products/${categoryLabel}/all/viewall`}>{`/ ` + categoryLabel}</NavLink> {`/ ` + shopby} <b>{`/ ` + viewby}</b></span>
                    </div>
                <div className="main-container">
                    <SideFilter />
                    <div className="side-main-container">
                            <ProductsContainer filterdata={filterdata} passeddata={passeddata} />
                    </div>
                </div>
                
            </section>
                
        </StyledProducts>
    )
}
