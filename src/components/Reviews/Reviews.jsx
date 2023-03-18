import { getReviews } from '../../api/gallery'
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Review } from './Reviews.styled'

export const Reviews = () => {
 const { movieId } = useParams()
 const [reviews, setReviews] = useState(null)

useEffect(() => {
    getReviews(movieId).then(({data})=>setReviews(data.results))
}, [movieId])
    
console.log(reviews);
    
    if (!reviews) {
    return
    }
  

    return (
        <>
            {reviews.length < 1 && <h3>there is no reviews</h3>}
            <ul>
                {reviews.map(({ id, author_details, content }) =>
                    <Review key={id}>
                        <h3>Author:{author_details.name}</h3>
                        <p>{content}</p>
                    </Review>)}
            </ul>
        </>
      
    )
}