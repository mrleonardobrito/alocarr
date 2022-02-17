import styled from "styled-components/native"
import Icon from 'react-native-vector-icons/FontAwesome5'

export const VantagemContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 5px;
    margin-bottom: 25px;
`
export const Vantagens = styled.View`
    width: 80%;
    margin-left: 5px;
`
export const VantagemIcone = styled(Icon)`
    color: #ABCFFF;
`
export const VantagemTitulo = styled.Text`
    font-family: 'OpenSans-ExtraBold';
    font-size: 25px;
    margin-bottom: 5px;
    margin-left: 10px;
    color: ${props => props.theme.cliente.text1};
`
export const VantagemTexto = styled.Text`
    font-family: 'OpenSans-SemiBold ';
    font-size: 15px;
    margin-left: 15px;
    text-align: left;
    color: ${props => props.theme.cliente.text1};
`
