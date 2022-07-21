import styled from 'styled-components';

const StyledSpinner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .spinner{
        content: " ";
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 50%;
        background-color: #000000;
    }

    .spinner ::after{
        content: " ";
        width: 30px;
        height: 30px;
        position: absolute;
        border-radius: 50%;
        background-color: #d8d8d8;
        z-index: 100;
    }
`;

export const Spinner = () => {
    return(
        <>
            <StyledSpinner>
                <div className="spinner">
                </div>
            </StyledSpinner>
        </>
    )
}