import styled, {css} from 'styled-components';

export const MainDiv = styled.div`
 ${({theme}) => css `
    background-color: ${theme.colors.whiteml};
    width:100%;
    #breadcrumb {
       margin-top: 16px;
       padding-left:20%;
       text-align:left;
       color:${theme.colors.graylightml};

    }
 `}
`