import styled, { css } from 'styled-components';

export const MainDiv = styled.div`
${({ theme }) => css`
    display:flex;
    margin-top: 5%;
    width: 76%;
    flex-direction: column;  
    background-color:  ${theme.colors.whiteml};
    margin-left:12%;
    margin-right:12%;
 
`} 
`
