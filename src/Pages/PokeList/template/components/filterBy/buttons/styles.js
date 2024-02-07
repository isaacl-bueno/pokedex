import styled from "styled-components";

export const Container = styled.div`
    padding-top: 15px;
    width: 200px;
    height: 100%;
    display: flex;

    .ButtonsContainer {
        display: flex;
    }

    .Buttons {
        margin: 5px;
        border-radius: 40px;
        background-color: #ffffff;
        color: #e2350d;
        border: 1px solid #e2350d;
    }

    .Buttons:hover,
    .Buttons.active { // Estilo para o botão clicado
        background-color: #e2350d;
        color: #ffffff;
    }
`;
