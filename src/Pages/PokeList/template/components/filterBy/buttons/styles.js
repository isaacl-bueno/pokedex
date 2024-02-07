import styled from "styled-components";

export const Container = styled.div`
    padding-top: 15px;
    width: 200px;
    height: 100%;
    display: flex;

    .buttonsContainer{
        display: flex;
        gap: 20px;
    }

    .Buttons{
        border-radius: 40px;
        background-color: #ffffff;
        color: #E2350D;
        border: 1px solid #E2350D;
    }

    :hover.Buttons{
        background-color: #E2350D;
        color: #ffffff;
    }
`;