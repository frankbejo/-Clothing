import { Item } from "./Item";
import { useParams } from "react-router-dom";
import FilterThis from "../components/FilterThis";
import { useEffect, useState } from "react";

export const ProductsContainer = (props) => {
    const { viewby } = useParams()
    const {filterdata, passeddata, refreshPage, isError} = props;
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setHasError(isError)
    }, [isError])
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
                hasError ? 
                (
                    <h2 onClick={() => refreshPage()}>Try again</h2>
                )
                :
                (
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
                                filterdata.filter(item => item.type.replace(" ","").toLowerCase() === viewby || viewby === "viewall")
                                .map((item, index) => 
                                    {
                                return <Item {...item} key={index}/>
                                    })
                                }
                            </div>
                        )
                        
                    )
                )
                
            }         
        </>
    )
}