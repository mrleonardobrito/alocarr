import styled from 'styled-components/native';

export const NotaGeralContainer = styled.View`
    width: 35%;
`;
export const Nota = styled.Text`
    width: 100%;
    margin-bottom: 5px;
    padding-left: 8px;
    font-size: 40pt;
    font-family: 'arial';
    color: ${props => props.theme.cliente.text1};
`;
export const NumeroAvaliacoes = styled.Text`
    margin-top: 5px;
    font-size: 12pt;
    font-family: 'arial';
    color: ${props => props.theme.cliente.text1};
`;
