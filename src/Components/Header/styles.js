import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 150px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: end;
`;

export const LowContainer = styled.header`
    width: 100%;
    height: 100px;
    background-color: #E2350D;
    display: flex;
    justify-content: center;
`;

export const CenterDiv = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
    color: #A3D7D5;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 70px;
    }

    .imageHeader {
    height: 125px;
    }

`;