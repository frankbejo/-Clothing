import { Item } from "./Item";
import { useParams } from "react-router-dom";
import FilterThis from "../components/FilterThis";

export const ProductsContainer = (props) => {
    const { categoryLabel } = useParams()
    const {filterdata, passeddata} = props;
    return(
        <>
                <div className="filter">
                        <div className="filter-function">
                            <FilterThis menu="Sort by"/>
                            <FilterThis menu="Material" />
                            <FilterThis menu="Fit" />
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
                    filterdata.length === 0 ? 
                    (
                        <h1>No data to show</h1>
                    )
                    :
                    (
                        <div className="products-container" >
                            {
                            filterdata.filter(items => items.category === categoryLabel)
                            .map((item, index) => 
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