import styled from "styled-components"

const StyledError = styled.div`
    section{
        height: 1000px;
        color: white;
    }
`;

export const Error = () => {
    return(
        <StyledError>
        <section className="error">
            <h2>404, page not found</h2>
        </section>
        </StyledError>
    )
}