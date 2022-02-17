import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;
export const OperationBox = styled.View`
    width: 100%;
    padding: 3px;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: ${props => props.theme.cliente.button};
`
export const Header = styled.View`
    height: 10%;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.theme.cliente.primary};
`;
export const ProgressionBar = styled.View`
    height: 30px;
    width: 100%;
    justify-content: center;
    background-color: ${props => props.theme.cliente.text1};
`
export const ProgressorIndex = styled.View`
    height: 5px;
    width: 35%;
    z-index: 1;
    position: relative;
    border-radius: 5px;
    background-color: ${props => props.theme.cliente.primary};
`
export const Progressor = styled.View`
    height: 5px;
    width: 100%;
    background-color: ${props => props.theme.cliente.marked1};
    border-radius: 5px;
    position: absolute;
`
export const HeaderTitle = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.cliente.text1};
    font-family: "AlfaSlabOne";
`;
export const Main = styled.ScrollView`
    padding-left: 5px;
    padding-right: 5px;
`;

// Carro escolhido
export const CarroEscolhido = styled.View`
    flex-direction: row;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 3px;
`
export const BackgroundImage = styled.Image`
`
export const InformacoesCarro = styled.View`
    width: 70%;
    flex-wrap: nowrap;
    z-index: 1;
`
export const NomeCarro = styled.Text`
    font-size: 20px;
    font-family: 'Saira-Stencil-One';
    color: ${props => props.theme.cliente.text1};
`
export const CombustivelCarro = styled.Text``
export const SalvarButton = styled.TouchableOpacity`
    height: 24px;
    width: 30%;
    padding: 5px;
    margin: 7px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.cliente.primary};
    border: 1px solid ${props => props.theme.cliente.text1};
`
export const SalvarOrcamento = styled.Text`
    font-size: 12px;
    font-family: 'OpenSans-ExtraBold';
    color: ${props => props.theme.cliente.text1};
`
export const CarImage = styled.Image`
`