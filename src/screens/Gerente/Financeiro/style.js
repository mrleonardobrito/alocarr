import styled from "styled-components/native";

export const FinanceiroButtonContainer = styled.View`
    margin-bottom: 15px;
`;

export const ResumoButton = styled.Pressable`
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ResumoText = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.corTitulo};
`;
export const ResumoIcon = styled.View`
    position: absolute;
    right: 15px;
    top: 28%;
`;

export const FuncaoContainer = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`;

export const ExcluirButton = styled.TouchableOpacity`
    width: 32%;
    height: 100%;
    background-color: #c3453f;
`;
export const AdicionarButton = styled.TouchableOpacity`
    width: 32%;
    height: 100%;
    background-color: #00d1d1;
`;
export const QuitarButton = styled.TouchableOpacity`
    width: 32%;
    height: 100%;
    background-color: #32cd32;
`;

export const TextButton = styled.Text`
    font-weight: bold;
    font-size: 15px;
    margin-left: 9px;
    color: #fff;
`;

export const FuncaoIcon = styled.View`

`;

export const FuncContainer = styled.View`
    display: flex;
    flex-direction: row;
    
`;

export const FinancasContainer = styled.SafeAreaView`
    display: flex;
    flex: 1;
    background-color: #fff;
    width: 100%;
    padding: 15px 10px 15px 10px;
    border-radius: 6px;
    min-height: 470px;
`;

export const SearchDiv = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 7%;
    padding-right: 7%;
    padding-top: 3%;
    padding-bottom: 3%;

`;

export const SearchInput = styled.View`
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 100%;
`;

export const SearchButton = styled.TouchableOpacity`
    height: 100%;
    width: 20%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: ${props => props.theme.corTitulo};
    align-items: center;
    justify-content: center;
`;
export const SearchTextInput = styled.TextInput`
    height: 100%;
    width: 80%;
    font-size: 13px;
    background-color: ${props => props.theme.corTitulo};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

export const SituacoesDiv = styled.View`
    width: 100%;
    border-radius: 8px;
`;

export const SituacoesItem = styled.View`
    display: flex;
    flex-direction: row;
    padding: 4px;
    margin-bottom: 15px;
    border-radius: 8px;
    background-color: ${props => props.theme.corTitulo};
`;

export const SitItemLeft = styled.View`
    width: 49.5%;
    padding: 3px;
`;

export const SitItemRight = styled.View`
    width: 49.5%;
    padding: 3px 3px 3px 6px;
`;

export const ItemText = styled.Text`
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
`;

export const ItemTextRight = styled.Text`
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
`;

export const ItemBolinha = styled.View`
    height: 15px;
    width: 15px;
    background-color: #32cd32;
    border-radius: 360px;
    position: absolute;
    right: 0;
`;

export const ItemBolinha2 = styled.View`
    height: 15px;
    width: 15px;
    background-color: #c3453f;
    border-radius: 360px;
    position: absolute;
    right: 0;
`;

export const Footer = styled.View`
    height: 80px;
    width: 100%;
`;

export const Main = styled.View`
    background-color: #021732;
    padding: 20px 10px 0 10px;
    padding-bottom: 60px;
`;

export const Butoin = styled.TouchableOpacity`
    
`;

export const Entradas = styled.View`
    height: 30%;
    width: 100%;
    border-radius: 3px;
    background-color: #fff;
    margin-bottom: 15px;
`;
