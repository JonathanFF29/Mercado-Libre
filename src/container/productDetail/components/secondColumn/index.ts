import styled, { css } from 'styled-components';

export const SecondColumn = styled.div`
${({ theme }) => css`
    display:flex;
    padding-top: 32px;
    flex-direction: column;
    justify-content:space-between;
    width: 35%;
    align-self:flex-start;

    p:nth-child(1){
        font-size: 14px;
    }
    p:nth-child(2){
        font-size: 24px;
        margin-top:16px
    }
    p:nth-child(3){
        font-size: 46px;
        margin-top:32px
    }
    p {        
        margin:0px;      
        color: ${theme.colors.graydarknml};
    }
  `} 
 `