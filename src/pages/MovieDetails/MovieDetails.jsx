import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFilmByid, BASE_IMG_URL } from '../../api/gallery'


export const MovieDetails = () => {
const [film, setFilm] = useState([]);   
const { movieId } = useParams()


useEffect(() => {
    // const id = movieId.split('').splice(1, movieId.length - 1).join('')
    
    getFilmByid(movieId).then(({data})=>setFilm(data))
}, [movieId])

    return (
        
        <>
            <img src={`${BASE_IMG_URL}${film.poster_path}`} alt={film.title} width="300px"  />
        </>
    )
}