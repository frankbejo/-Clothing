import { StyledSearched } from "../theme"
import { useSearchParams } from "react-router-dom"

export const SearchedPage = () => {
    const [ searchParams ] = useSearchParams();
    const searchText = searchParams.get("search");

    return(
        <>
        <StyledSearched>
            <section className="searchedpage">
                <div className="breadcrumbs">
                    <span>Home/search</span>
                </div>
                Showing results for <b>"{searchText}"</b>
            </section>
        </StyledSearched>
        </>
    )
}