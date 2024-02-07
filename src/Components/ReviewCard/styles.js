import styled from "styled-components";

export const Container = styled.div`
    .IconButton{
        display: flex;
        justify-content: flex-end;
        visibility: hidden;
    }
    &:hover .IconButton {
        visibility: visible;
    }
    .CardActions{
        display: flex;
        width: 168px;
        position: absolute;
        justify-content: flex-end;
    }
    .CardMedia{
        img{
            object-fit: scale-down;
            width: 168px;
            height: 168px;
        }
    }

    .Content{
        display: flex;
        flex-wrap: wrap;
    }

`;
