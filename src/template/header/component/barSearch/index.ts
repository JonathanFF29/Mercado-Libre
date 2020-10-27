import styled, { css } from 'styled-components';

export const BarSearch = styled.div`
 ${({ theme }) => css`
    display:flex;
    background-color: ${theme.colors.whiteml};
    width: 60%;
    height:30px;
    input {
        border:none;
        font-size: 18px;
        padding-left: 10px;
        width:90%;
    },
    input:focus {
        border:none;
        outline: -webkit-focus-ring-color auto 0px;
        outline-width: none;
}
    },
 `}
`