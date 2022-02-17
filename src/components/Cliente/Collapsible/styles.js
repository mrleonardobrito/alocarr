import Icon from "react-native-vector-icons/AntDesign"
import styled from "styled-components/native"

export const Container = styled.Pressable`
    width: 95%;
`
export const TitleContainer = styled.View`
    padding: 5px;
    flex-direction: row;
    justify-content: space-between;
`
export const Title = styled.Text`
    font-family: 'OpenSans-ExtraBold';
    font-size: 21px;
    color: ${props => props.theme.cliente.text1};
`
export const Arrow = styled.Pressable`
    align-self: center;
`
export const StyledIcon = styled(Icon)`
    color: ${props => props.theme.cliente.button};
    width: 20px;
`
export const Descricao = styled.Text`
    font-family: 'OpenSans-SemiBold';
    font-size: 14px;
    color: ${props => props.theme.cliente.text1};   
    margin: 5px;
    height: 150px;
    margin-bottom: 15px;
`
export const Linha = styled.View`
    width: 95%;
    border: 1px solid ${props => props.theme.cliente.marked1};
    opacity: 0.3;
    margin-bottom: 5px;
    margin-top: 5px;
`