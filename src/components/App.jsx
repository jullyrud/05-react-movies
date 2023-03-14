import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { Home } from '../pages/Home/Home'
import { getTrendsFilm } from '../api/gallery'
import { SharedLayout } from "./SharedLayout/SharedLayout"
import { MovieDetails } from '../pages/MovieDetails/MovieDetails'
import { Movies } from '../pages/Movies/Movies'


export const App = () => {
 
    const [trendsFilms, setTrendsFilms] = useState([]);
    
    useEffect(() => {
        getTrendsFilm().then(({data})=>setTrendsFilms(data.results))
    }, [])
   
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/> }>
                <Route index element={<Home trendsFilms={trendsFilms} />} />
                <Route path="movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
            </ Route>
        </Routes>
)
}
