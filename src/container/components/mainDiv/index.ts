import styled, {css} from 'styled-components';

export const MainDiv = styled.div`
 ${({theme}) => css `
    background-color: ${theme.colors.whiteml};
    width:100%;
 `}
`