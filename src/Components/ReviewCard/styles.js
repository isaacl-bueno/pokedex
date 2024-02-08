import { Box } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
    .CardContainer {
        max-width: 180px;
        max-height: 340px;
        margin-right: 15px;
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
        margin-top: -35px;
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
