import { Box } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
    max-height: 350px;
    .CardContainer {
        max-width: 190px;
        max-height: 320px;
        margin-right: 25px;
        margin-top: 0px;
        margin-bottom: 25px;
        box-shadow: none;
    }
    .IconButton {
        display: flex;
        justify-content: flex-end;
        visibility: hidden;
    }
    &:hover .IconButton {
        visibility: visible;
    }
    .CardActions {
        display: flex;
        width: 180px;
        justify-content: flex-end;
    }
    .CardMedia {
        margin-top: -45px;
        img {
            object-fit: scale-down;
            width: 168px;
            height: 168px;
        }
    }

    .Content {
        display: flex;
        flex-wrap: wrap;
    }
`;
