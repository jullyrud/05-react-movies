import { StyledBackLink, StyledIcon } from './BackLink.styled' 

import { Wrap } from './BackLink.styled'

export const BackLink = ({path}) => {
    return (
        <Wrap>
            <StyledIcon size="2em" />
            <StyledBackLink to={path}> Back </ StyledBackLink>
        </Wrap>
    )
}