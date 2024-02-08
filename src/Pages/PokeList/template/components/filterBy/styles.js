import styled from "styled-components";

export const Container = styled.div`
    /* padding-top: 20px; */
    width: 300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .filterBy{
        width: 100%;
    }
    .Favority{
        margin-top: 25px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .Switch{
        padding: 7px;
        .css-1yjjitx-MuiSwitch-track {
            border-radius: 50px;
        } 
        .css-1ju1kxc {
            border-radius: 50px;
        }
        .Mui-checked {
            color: #FFF;
        }
        .Mui-checked + .MuiSwitch-track {
            background-color: #E2350D;
            opacity: 1;
        }
    }
`;