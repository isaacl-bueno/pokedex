import styled from 'styled-components';

export const Container = styled.div`
    width: 1280px;
    justify-content: space-between;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: hidden;
`;

export const CardContainer = styled.div`
    overflow: hidden;
    width: 1280px;
    justify-content: space-between;
    height: 100%;
    display: flex;
`;

export const Cards = styled.div`
    width: 1000px;
    height: 850px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #E2350D;
        border-radius: 4px;
    }
`;
