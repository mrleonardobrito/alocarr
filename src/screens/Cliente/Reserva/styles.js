import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;
export const OperationBox = styled.View`
    width: 100%;
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
    width: 33%;
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
    font-size: 22px;
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
    padding-top: 5px;
    padding-bottom: 3px;
`
export const BackgroundImage = styled.ImageBackground`
    height: 100%;
    width: 100%;
    flex-direction: row;
    padding: 10px;
`
export const InformacoesCarro = styled.View`
    width: 50%;
    height: 100%;
    top: 10px;
    align-items: flex-start;
    flex-wrap: nowrap;
    z-index: 1;
`
export const NomeCarro = styled.Text`
    font-size: 30px;
    font-family: 'Saira-Stencil-One';
    color: ${props => props.theme.cliente.text1};
`
export const CombustivelCarro = styled.Text`
    font-size: 12px;
    margin-left: 8px;
    margin-bottom: 8px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.text1};
`
export const SalvarButton = styled.TouchableOpacity`
    height: 30px;
    width: 80%;
    padding: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.theme.cliente.secondary};
    border: 1px solid ${props => props.theme.cliente.text1};
`
export const SalvarOrcamento = styled.Text`
    font-size: 10px;
    font-family: 'OpenSans-ExtraBold';
    color: ${props => props.theme.cliente.text1};
`
export const CarImage = styled.Image`
    height: 150px;
    width: 232px;
    left: -25%;
`
export const Linha = styled.View`
    height: 2px;
    width: 100%;
    border-radius: 1px;
    background-color: ${props => props.theme.cliente.primary};
`
export const VisaoGeral = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 6px;
`
export const ValorTotal = styled.View``
export const ValorTotaLabel = styled.Text`
    font-size: 26px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.text1};
`
export const FormasDePagamento = styled.Text`
    font-size: 12px;
    font-family: 'OpenSans-SemiBold';
    color: #D2E5AE;
`
export const PagamentoVisaoGeral = styled.View`
    font-size: 26px;
    margin-left: 8px;
    margin-bottom: 8px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.text1};
`
export const PrecoPorDia = styled.Text`
    font-size: 12px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.marked3};
`
export const PrecoGeral = styled.Text`
    font-size: 26px;
    margin-left: 8px;
    margin-bottom: 8px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.text1};
`