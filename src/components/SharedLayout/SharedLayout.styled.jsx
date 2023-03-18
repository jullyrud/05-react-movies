import { NavLink } from "react-router-dom";
import styled from '@emotion/styled'

export const NavCont = styled.nav`
  width: 100%;
  height: 30px;
  padding: 15px 10px;
  border-bottom: 3px solid teal;

`
export const Link = styled(NavLink)`
text-decoration: none;
color: black;
font-size: 24px;
margin-right: 20px;
&.active {
    color: orange;
  }
&:hover:not(.active){
    color: #aec492
}
`

export const MainCont = styled.div`
  padding: 10px 30px;

`
