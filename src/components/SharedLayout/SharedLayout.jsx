import { Outlet } from "react-router-dom";
import { NavCont, Link, MainCont } from './SharedLayout.styled'

export const SharedLayout = () => {
    return (
    <MainCont>
        <NavCont>
            <Link to="/" end> Home</Link>
            <Link to="/movies">Movies</Link>
        </NavCont>
        <Outlet /> 

    </MainCont>
 )
}