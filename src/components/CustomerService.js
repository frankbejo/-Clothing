import styled from "styled-components"

const StyledCustomerService = styled.div`
    section{
        height: 1000px;
        color: white;
    }
    
`;

export const CustomerService = () => {
    return(
        <StyledCustomerService>
        <section className="customerservice">
            <h2>Customer Service</h2>
        </section>
        </StyledCustomerService>
    )
}