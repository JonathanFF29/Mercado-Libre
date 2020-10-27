import styled, {css} from 'styled-components';

export const Bar = styled.div`
 ${({theme}) => css `
    display:flex;
    background-color: ${theme.colors.yellowml};
    justify-content:center;
    align-items: center;
    width:100%;
    height: 50px;
 `}
`