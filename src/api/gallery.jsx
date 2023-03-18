import axios from 'axios';

const API_KEY = 'e9a316947c34b7bf33ae7a42a434912b'
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'

export const getTrendsFilm = () => {
return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
}

export const getFilmByid = (id) => {
return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
}

export const getFilmByName = (name) => {
return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
}

export const getCastInf = (id) => {
return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
}

export const getReviews = (id) => {
return axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1
`)
}

