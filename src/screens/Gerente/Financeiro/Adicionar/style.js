import styled from 'styled-components/native';

export const Content = styled.View`
    background-color: ${props => props.theme.mainColor};
    height: 100%;
`;

export const Main = styled.View`
    padding: 20px 10px 15px 10px;
    height: 100%;
    width: 100%;
`;

export const DadosContainer = styled.View`
    background-color: #fff;
    width: 100%;
    height: 90.5%;
    border-radius: 6px;
`;
export const InputsContainer = styled.View`
    padding: 25px 20px 25px 20px;
`;
export const InputDiv = styled.View`
    height: 60px;
    width: 50%;
`;

export const TitleInput = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.corTitulo};
`;
export const InputEntrada = styled.TextInput`
    margin-top: 5px;
    width: 120px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 6px;
    padding-left: 6px;
`;

export const Dados = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;

export const DadosTextInput = styled.View`
    margin-bottom: 20px;
`;

export const InputEntradaText = styled.TextInput`
    margin-top: 5px;
    width: 220px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 6px;
    padding-left: 6px;
`;

export const ButtonContainer = styled.View`
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: -10px;
    left: 20px;
`;

export const ButtonConcluir = styled.TouchableOpacity`
    height: 45px;
    background-color: ${props => props.theme.mainColor};
    width: 48%;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;
export const ButtonCancelar = styled.TouchableOpacity`
    height: 45px;
    background-color: ${props => props.theme.mainColor};
    width: 48%;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-right: 8px;
`;

export const ButtonTextCanCon = styled.Text`
    color: white;
    font-weight: bold;
`;

export const InputEntradaPicker = styled.TextInput`
    margin-top: 5px;
    width: 120px;
    height: 35px;
    border: 2px solid gray;
    border-radius: 6px;
    padding-left: 6px;
`;