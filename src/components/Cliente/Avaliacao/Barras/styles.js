import styled from "styled-components/native";

export const BarrasContainer = styled.View`
    width: 50%;
    margin-top: 10px;
`
export const BarraContainer = styled.View`
    width: 100%;
    height: 17%;
    justify-content: space-between;
    align-self: center;
`

export const BarraIndice = styled.View`
    height: 7px;
    width: ${props => props.width}%;
    z-index: 1;
    position: relative;
    border-radius: 5px;
    background-color: ${props => props.theme.cliente.marked3};
`
export const BarraMaximo = styled.View`
    height: 7px;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
`