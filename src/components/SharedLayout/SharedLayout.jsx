import { Outlet } from "react-router-dom";
import { NavCont, Link } from './SharedLayout.styled'

export const SharedLayout = () => {
    return (
    <div>
        <NavCont>
            <Link to="/" end> Home</Link>
            <Link to="/movies">Movies</Link>
        </NavCont>
        <Outlet /> 

    </div>
 )
}