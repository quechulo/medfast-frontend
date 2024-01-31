import styled from 'styled-components';

const Line = styled.span`
background: ${({ theme }) => theme.colors.mainPurple};
width: 2px;
height: 100%;
min-height: 8px;
display: block;
margin-left: auto;
margin-right: auto;
border-radius: 1px;
`;

export default Line;
