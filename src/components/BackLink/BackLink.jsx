import { StyledBackLink } from './BackLink.styled' 
import { AiFillBackward } from "react-icons/ai";
import { Wrap } from './BackLink.styled'

export const BackLink = ({path}) => {
    return (
        <Wrap>
            <AiFillBackward size="2em" />
            <StyledBackLink to={path}> Back </ StyledBackLink>
        </Wrap>
    )
}