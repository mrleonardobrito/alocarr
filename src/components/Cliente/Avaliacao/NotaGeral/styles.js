import styled from 'styled-components/native';

export const NotaGeralContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const Nota = styled.Text`
    width: 100%;
    margin-bottom: 5px;
    padding-left: 8px;
    font-size: 56px;
    text-align: center;
    font-family: "OpenSans-SemiBold";
    color: ${props => props.theme.cliente.text1};
`;
export const NumeroAvaliacoes = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    font-family: "OpenSans-SemiBold";
    color: ${props => props.theme.cliente.text1};
`;
