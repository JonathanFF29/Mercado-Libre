import styled, {css} from 'styled-components';

export const MainDiv = styled.div`
 ${({theme}) => css `
    display:flex;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 2%;
    flex-direction: row;
    background-color: ${theme.colors.whiteml};
    `}
`