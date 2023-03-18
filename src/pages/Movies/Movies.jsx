import { SearchBar, SearchForm, SearchFormInput, SearchFormButton, SearchFormButtonLabel } from './Movies.styled'
import { TiFilm } from "react-icons/ti";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getFilmByName } from '../../api/gallery'
import { FilmsList } from '../../components/FilmsList/FilmsList'

export const Movies = () => {
const [searchParams, setSearchParams] = useSearchParams();   
const [films, setFilms] = useState([]); 

const queryString = searchParams.get('name')
   

useEffect(() => {
        if (!queryString) {
           return
       }
    getFilmByName(queryString.toLowerCase()).then(({data}) => setFilms(data.results))
},[queryString])
    
const onHandleSubmit = (e) => {
    e.preventDefault()
    const {value} = e.target.name
    setSearchParams(value !== '' ? { name: value } : {})
}

    
    return (
        <>
            <SearchBar>
                <SearchForm onSubmit={onHandleSubmit} >
                    <SearchFormButton type="submit" >
                    <TiFilm size="2em" />
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                    name="name"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search film by name"
                    defaultValue={queryString}
                    />
                </SearchForm>
            </SearchBar>
            {queryString && <FilmsList films={films}  /> }
        </>
        
    )
}