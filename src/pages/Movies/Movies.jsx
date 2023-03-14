import { SearchBar, SearchForm, SearchFormInput, SearchFormButton, SearchFormButtonLabel } from './Movies.styled'
import { TiFilm } from "react-icons/ti";
import { useSearchParams } from "react-router-dom";

export const Movies = () => {



    return (
        <SearchBar>
            <SearchForm >
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
                />
            </SearchForm>
        </SearchBar>
    )
}