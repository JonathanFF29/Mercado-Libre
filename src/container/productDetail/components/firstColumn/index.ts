import styled, { css } from 'styled-components';

export const FirstColumn = styled.div` 
${({ theme }) => css`
    
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    width: 65%;
    
    p:nth-child(2){
        font-size: 28px;
        color: ${theme.colors.graydarknml};
        margin-bottom:32px;
    }
    p:nth-child(3){
        font-size: 16px;
        color: ${theme.colors.graylightml}
        margin-top:0px
    }
    p {        
        margin-left: 32px;
    }
`} 
 `

