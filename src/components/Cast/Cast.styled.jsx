import styled from "@emotion/styled";

export const ActorList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    
` 
export const ActorCard = styled.li`
    width: 120px;
    
    list-style: none;
    margin: 10px 10px;
    padding: 7px 0 2px 0;

    text-align: center;
    &:hover{
        box-shadow: 6px 6px 20px;
        background-color: grey;
    }
`
