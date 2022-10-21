import { StyledError } from "../theme";
import Footer from "../components/Footer";

export const Error = () => {
    return(
        <StyledError>
        <section className="error">
            <h2>404, page not found</h2>
        </section>
        <Footer />
        </StyledError>
    )
}