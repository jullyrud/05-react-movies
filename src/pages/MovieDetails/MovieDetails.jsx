import { useEffect, useState } from "react"
import { useParams, useLocation, Outlet } from "react-router-dom"
import { getFilmByid, BASE_IMG_URL } from '../../api/gallery'
import { FimWrap, MovieContainer, MovieImgBox } from './MovieDetails.styled'
import { BackLink } from '../../components/BackLink/BackLink'
import { AdditionalInfirmation } from '../../components/AdditionalInfirmation/AdditionalInfirmation'


export const MovieDetails = () => {
const [film, setFilm] = useState(null);   
const { movieId } = useParams()
const location = useLocation();

useEffect(() => {

getFilmByid(movieId).then(({data})=>setFilm(data))
}, [movieId])

 
const getUserScore = (score) => {
return Math.trunc(score * 10)
}
    
const getGenresString = (genres) => {
    let res = []
    for (const genre of genres) {
        res.push(genre?.name)
        
    } return res.join(', ')
    }
 
if (!film) {
    return 
}   
  
const { poster_path, title, release_date, overview, genres, vote_average } = film
const backRef = location?.state?.from 
  
return (
    
        <FimWrap>
        <BackLink path={backRef ?? "/movies"} /> 
        
            <MovieContainer>
                <MovieImgBox>
                    <img src={`${BASE_IMG_URL}${poster_path}`} width="300 px" alt="" />
                </MovieImgBox>
                    <div>
                        <h2>{title} ({release_date?.slice(0,4)})</h2>
                        <p>User score: {getUserScore(vote_average)}%</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <p>{getGenresString(genres)}</p> 
                    </div>
            </MovieContainer>
            <AdditionalInfirmation backRef={backRef} />
      
            <Outlet />
        </FimWrap>
      
    )
}
