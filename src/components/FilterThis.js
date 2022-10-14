import styled from 'styled-components';

const StyledFilterThis = styled.div`

`

const FilterThis = ({menu, FilterSort }) => {
    return(
        <StyledFilterThis>
            <div className="filter-container" onClick={FilterSort}>
                <div className="filter-menu">
                    <span>{menu}</span>
                </div>
            </div>
        </StyledFilterThis>
    )
}

export default FilterThis;