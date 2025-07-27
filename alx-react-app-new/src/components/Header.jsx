import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
`;

function Header() {
    return (
        <StyledHeader>
            <Title>My Favorite Cities</Title>
        </StyledHeader>
    );
}
