import styled from "styled-components/native";


export const SenhaContainer = styled.View`

`;

export const SenhaInputContainer = styled.View`
    display: flex;
    height: 45px;
    flex-direction: row;
    align-items: center;
    padding: 7px 0 7px 7px ;
    border: 2px solid transparent;
    border-bottom-color: #b4b4b4;
`;

export const SenhaInput = styled.TextInput`
    width: 85%;
    height: 45px;
    font-weight: ${props => props.theme.negrito};
    color: #0e0e0e;
`;

export const MostrarSenha = styled.TouchableOpacity`
    height: 45px;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ConfirmarSenhaContainer = styled.View`
    margin-top: 15px;
`;

export const AvisoText = styled.Text`
    color: #0e0e0e;
    font-size: 15px;
`;

export const AvisoTextAviso = styled.Text`
    color: ${props => props.theme.corTitulo};
    font-weight: ${props => props.theme.negrito};
    font-size: 15px;
`;


export const AvisoContainer = styled.View`
    margin-top: 15px;
`;

