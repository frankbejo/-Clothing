import { StyledSearched } from "../theme"
import { Link, useSearchParams } from "react-router-dom"

export const SearchedPage = () => {
    const [ searchParams ] = useSearchParams();
    const searchText = searchParams.get("search");

    return(
        <>
        <StyledSearched>
            <section className="searchedpage">
                <div className="breadcrumbs">
                    <span><Link to="/">Home</Link> / <b>search</b></span>
                </div>
                Showing results for <b>"{searchText}"</b>
            </section>
        </StyledSearched>
        </>
    )
}