import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCastInf, BASE_IMG_URL } from '../../api/gallery'
import { ActorList, ActorCard } from './Cast.styled'


export const Cast = () => {
    const { movieId } = useParams()
    const [actorsList, setactorsList] = useState(null)

useEffect(() => {
    getCastInf(movieId).then(({data})=>setactorsList(data.cast))
}, [movieId])

    if (!actorsList) {
    return
    }
  
return (
        <>
        <ActorList>
            {actorsList.map(({ id, character, original_name, profile_path }) =>
                <ActorCard key={id}>
                    <img src={`${BASE_IMG_URL}${profile_path}`} alt="" width={'70px'} />
                    <p>{original_name}</p>
                    <p>character: {character}</p>
                </ActorCard>)}
                
        </ActorList>
        </>
    )
}