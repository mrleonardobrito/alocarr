import styled from "styled-components/native";

export const Main = styled.View`
    background-color: ${props => props.theme.corTitulo};
    height: 100%;

`;

export const GraficoContainer = styled.View`
    padding: 15px 10px 15px 10px;
`;

export const Grafico = styled.View`
    width: 100%;
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    padding: 15px;
`;

export const GraficoTitulo = styled.Text`
`;

export const GraficoDesc = styled.Text`
`;

export const ViewCirculo = styled.View`
    height: 60px;
    width: 60px;
    border: 60px solid black;
    border-right-color: black;
    border-top-color: green;
    border-bottom-color: blue;
    border-left-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;