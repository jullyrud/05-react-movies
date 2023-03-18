
import { useState } from "react"
import { LinkWrap, StyledLink, AdditionalWrap } from './AdditionalInfirmation.styled'


export const AdditionalInfirmation = ({backRef}) => {
const [isActive, setIsactive] = useState(false)
   
    return (
        <AdditionalWrap>
            <h3>
                {/* <button onClick={() => { navigate('/movies') }} type='button'>hide</button> */}
                <button disabled={isActive} onClick={() => { setIsactive(true) }} type="button">Additional Information</button>
            </h3>
            
            {isActive &&
                <LinkWrap>
                    <StyledLink state={{from: backRef}} to="cast">Cast</StyledLink>
                    <StyledLink state={{from: backRef}} to="reviews">Reviews</StyledLink>
                </LinkWrap>
            }
        </AdditionalWrap>
        
    )

}