import { StyledSearched } from "../theme"
import { Link, useSearchParams } from "react-router-dom"
import Footer from "../components/Footer";

export const SearchedPage = () => {
    const [searchParams] = useSearchParams();
    const searchedText = searchParams.get("search")


    return(
        <StyledSearched>
            <section className="searchedpage">
                <div className="breadcrumbs">
                    <span><Link to="/">Home</Link> / <b>search</b></span>
                </div>
                <span>Showing results for <b>"{searchedText}"</b></span> 
            </section>
            <Footer />
        </StyledSearched>
    )
}