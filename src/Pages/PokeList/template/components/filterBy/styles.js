import styled from "styled-components";

export const Container = styled.div`
    padding-top: 80px;
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
        .css-1yjjitx-MuiSwitch-track .css-1ju1kxc{
            border-radius: 50px;
        }
        .css-uru11c-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
            color: #FFF;
        }
        .css-uru11c-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track {
            background-color: #E2350D;
        }
        .css-uru11c-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track {
            opacity: 1;
        }
    }
`;