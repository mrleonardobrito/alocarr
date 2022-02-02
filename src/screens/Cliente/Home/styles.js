import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const OperationBox = styled.View`
    height: fit-content;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px;    
    align-items: center;
    justify-content: center;
    background-color: ${props => props.type === 'primary' ? props.theme.cliente.primary : props.theme.cliente.secondary};
`;
export const Wrapper = styled.ScrollView`
    width: 100%; 
`;
export const Main = styled.View`
    padding: 5px;
`
export const ReservaContainer = styled.View`
    height: 450px;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 5px;
    align-items: center;
    background-color: ${props => props.theme.cliente.primary};
`;
export const AvaliacaoClientes = styled(ReservaContainer)``;
export const Propaganda = styled.View`
    height: 120px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.cliente.secondary};
`
export const Subtitulo = styled.Text`
    margin-top: 10px;
    font-size: 22px;
    align-self: flex-start;
    font-family: 'OpenSans-ExtraBold';
    color: ${props => props.theme.cliente.text1};
`
export const SubtituloLongo = styled(Subtitulo)`
    width: 65%;
`
export const SubtituloReserva = styled(Subtitulo)`
    align-self: center;
`
export const Linha = styled.View`
    width: 20%;
    height: 5px;
    border-radius: 2.5px;
    align-self: flex-start;
    margin-top: 3px;
    margin-bottom: 15px;
    background-color: ${props => props.theme.cliente.marked3};
`
export const LinhaReserva = styled.View`
    width: 95%;
    border: 1px solid ${props => props.theme.cliente.marked1};
    opacity: 0.3;
    margin-bottom: 5px;
    margin-top: 5px;
`
export const Operacao = styled.View`
    width: 100%;
`
export const NomeOperacao = styled.Text`
    color: ${props => props.theme.cliente.text1};
    font-size: 15px;
    font-family: 'OpenSans-SemiBold';
    margin: 7px;
`
export const DevolucaoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const MesmoLocal = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const AgeInput = styled.TextInput`
    width: 100%;
    height: 20px;
`
export const AgeInputContainer = styled.View`
    width: 100%;
`
export const Pesquisar = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color:${props => props.theme.cliente.button};
`
export const NomePesquisar = styled.Text`
    font-size: 12px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.text1};
`

export const DataText = styled.Text`
    font-size: 10px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.marked1};
`
export const InputContainer = styled.View`
    height: 50px;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: ${props => props.theme.cliente.text1};
`
export const Footer = styled.View`
    width: 100%;
    height: max-content;
    background-color: ${props => props.theme.cliente.secondary};
    align-items: center;
    padding: 5px;
`
export const Navigation = styled.Text`
    align-self: center;
    padding: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    font-family: 'OpenSans-ExtraBold';
    color:${props => props.theme.cliente.secondary};
`
export const FooterOptionsContainer = styled.View`
    margin-top: 10px;
`
export const FooterOptions = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const FooterOption = styled.Text`
    padding: 5px;
    margin-left: 5px;
    font-size: 16px;
    font-family: 'OpenSans-ExtraBold';
    color:${props => props.theme.cliente.text1};
`
export const AvaliacaoGeral = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
`