import styled, {css} from 'styled-components';

export const Button = styled.button`
 ${({theme}) => css `
    background-color: ${theme.colors.blue};
    color: ${theme.colors.whiteml};
    border:none;
    height:35px;
    border-radius:5px;
    margin-top:32px;
    margin-right:32px
 `}
`