import { useState, useEffect} from "react";
import { Link, NavLink, useParams } from "react-router-dom"
import { ProductsContainer } from "../components/ProductsContainer";
import {SideFilter} from "../components/SideFilter";
import { StyledProducts } from "../theme";

export const Products = (props) => {
    const {usedata, haserror} = props;
    const [isError, setIsError] = useState(false);
    const [passeddata, setpasseddata] = useState([]);
    const [filterdata, setfilterdata] = useState([]);
    const { categoryLabel, shopby, viewby} = useParams();
    
    
    const refreshPage = () => {
        window.location.reload()
    }

    useEffect(() => {
        setpasseddata(usedata)
        setIsError(haserror)
    }, [usedata, haserror])

    useEffect(() => {
        const filterCategory = passeddata.filter(items => items.category === categoryLabel)
        const datenow = new Date()

        const FilterByShop = () => {
            window.scrollTo(0, 0)
            switch(shopby){
                case 'all':
                    setfilterdata(filterCategory);
                break;
    
                case 'trending':
                    setfilterdata(filterCategory.filter(items => items.ishot === true));
                break;
    
                case 'newarrival':
                    setfilterdata(filterCategory.filter((item) => new Date(item.created).getFullYear() === datenow.getFullYear() && new Date(item.created).getMonth() === datenow.getMonth()));
                break;
    
                default:
                    setfilterdata(filterCategory);
            }
        }
        FilterByShop()
    }, [categoryLabel, shopby, passeddata])
    
    return(
        <StyledProducts>
            <section className="products">
                <div className="breadcrumbs">
                        <span>
                            <Link to="/"> Home</Link> 
                            <NavLink to={`/products/${categoryLabel}/all/viewall`}>
                                {` / ` + categoryLabel}
                            </NavLink> {` / ` + shopby} 
                            <b>
                                {` / ` + viewby}
                            </b>
                        </span>
                    </div>
                <div className="main-container">
                    <SideFilter usedata={usedata} haserror={haserror}/>
                    <div className="side-main-container">
                            <ProductsContainer filterdata={filterdata} passeddata={passeddata} isError={isError} refreshPage={refreshPage} />
                    </div>
                </div>
                
            </section>
                
        </StyledProducts>
    )
}
