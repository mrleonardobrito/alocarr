import styled from 'styled-components/native';

export const TituloDados = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.corTitulo};
`;

export const InputEntradaNumero = styled.TextInput`
    width: 20%;
    height: 35px;
    border: 2px solid #fff;
    border-bottom-color: #b4b4b4;
    padding: 7px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const NumeroContainer = styled.View`
    display: flex;
    flex-direction: row;

`;

export const InputEntradaComplemento = styled.TextInput`
    width: 70%;
    height: 35px;
    border: 2px solid #fff;
    border-bottom-color: #b4b4b4;
    padding: 7px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 33px;
`;

export const TituloEntradaContainer = styled.View`
    color: ${props => props.theme.corInputTitle};
    font-weight: ${props => props.theme.negrito};
    font-size: ${props => props.theme.tamanhoFontInput};
    display: flex;
    flex-direction: row;
`;

export const TituloEntradaComplemento = styled.Text`
    color: ${props => props.theme.corInputTitle};
    font-weight: ${props => props.theme.negrito};
    font-size: ${props => props.theme.tamanhoFontInput};
    margin-left: 30px;
`;

export const TituloEntradaUF = styled.Text`
    color: ${props => props.theme.corInputTitle};
    font-weight: ${props => props.theme.negrito};
    font-size: ${props => props.theme.tamanhoFontInput};
    margin-left: 160px;
`;

export const CidadeContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

export const CidadeInputContainer = styled.View`
    height: 35px;
    display: flex;
    flex-direction: row;
`;

export const CidadeInput = styled.TextInput`
    width: 60%
    height: 35px;
    border: 2px solid #fff;
    border-bottom-color: #b4b4b4;
    padding: 7px;
    font-weight: bold;
`;

export const UFInput = styled.TextInput`
    width: 100px;
    height: 35px;
    border: 2px solid #fff;
    border-bottom-color: #b4b4b4;
    padding: 7px;
    font-weight: bold;
    margin-left: 27px;
`;