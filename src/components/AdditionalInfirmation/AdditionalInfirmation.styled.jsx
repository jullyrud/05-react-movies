import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
 
export const LinkWrap = styled.div`
   
  
`
export const StyledLink = styled(NavLink)`
   
    text-decoration: none;
    color: black;
    font-size: 24px;
    margin-right: 15px;
    :first-of-type{
      margin-left: 50px;
    }
    padding: 5px;
    border: 2px solid orange;
    border-radius: 6px;
    text-align: center;
    /* &.active {
    background-color: orange;
  } */
    &:hover{
    background-color: orange;
    color: white;
}
`
export const AdditionalWrap = styled.div`
   display: flex;
   align-items: center;
  
`