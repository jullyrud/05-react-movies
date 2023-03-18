import { useLocation } from 'react-router-dom'
import { Links } from '../../pages/Home/Home.styled'

export const FilmsList = ({ films }) => {
    const location = useLocation()
    
    return (
            <ul>
            {films.map(({ id, title, name }) =>
                <Links to={`/movies/${id}`} state={{ from: location }} key={id}>{title ?? name}</Links>
            )}
             </ul>
    )
}