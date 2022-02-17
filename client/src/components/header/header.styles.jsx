import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
// if we want to use the same syling in multiple components so we are using the css property of styled library and put the styling inside of it but there is also shorter way of  
const sameStyling=css`  
    padding: 10px 15px;
    cursor: pointer;
`
export const HeaderContainer=styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width:800px){
        height:60px;
        padding: 10px;
        margin-bottom:20px;
  }  
`
export const LogoContainer=styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    @media screen and (max-width:800px){
      padding: 0;
      width:50px;
  }  
`

export const OptionContainer=styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width:800px){
        width:80%;
        
  }  
`
export const OptionLink=styled(Link)`${sameStyling}`
// export const OptionDiv=styled.div`${sameStyling}`  // if we want to apply same styling but we want to change base element so we can also change the element type by using the as  atribute  on styled component and we also apply ohter styled compnent on it, so it apply all sytyling that we define but it only change the elment so check it