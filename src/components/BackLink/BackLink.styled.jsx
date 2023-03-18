import styled from "@emotion/styled";
import { Link } from "react-router-dom"

export const StyledBackLink = styled(Link)`
    text-decoration: none;
    color: black; 
    padding: 10px 0px;
    display: block;
    font-size: 24px;
    &:hover{
    color: orange;
   } 
`
export const Wrap = styled.div`
   display: flex;
   align-items: center;
   
 
   /* &:hover{
    color: orange;
    border: 1px solid blac;
   } */
`

