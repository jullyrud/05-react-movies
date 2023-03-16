import { Links } from '../../pages/Home/Home.styled'
export const FilmsList = ({films}) => {
    return (
            <ul>
                {films.map(({ id, title, name }) =>
                        <Links to={`/movies/${id}`} key={id}>{title ?? name}</Links>)}
            </ul>
    )
}