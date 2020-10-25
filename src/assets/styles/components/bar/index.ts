import styled, {css} from 'styled-components';

export const Bar = styled.div`
 ${({theme}) => css `
    background-color: ${theme.colors.yellowml};
    width:100%;
    text-align:center;
    height: 50px;
 `}
`