import styled from 'styled-components/native'
import AlocarrLogo from '../../components/AlocarrLogo'

import { Dimensions } from 'react-native'

//Global
export const Underlined = styled.Text`
    text-decoration: underline ${props => props.theme.cliente.logoColor};
`
export const Detail = styled.Text`
    font-size: 10px;
    align-self: center;
    color: ${props => props.theme.cliente.marked1};
`
export const Marked = styled.Text`
    color: ${props => props.theme.cliente.marked2};
    font-weight: bold;
`
export const LoginView = styled.View`
    flex: 1;
`
//Header
export const Header = styled.View`
    padding: 40px 22px;
    height: 40%;
    background-color: ${props => props.theme.cliente.primary};
`
export const LinkHome = styled.Text`
    color: ${props => props.theme.cliente.text1};
    font-family: sans-serif;
    text-align: right;
`
export const CarrosButton = styled.TouchableOpacity`
    height: 35px;
    align-self: flex-end;
    padding: 3px;
    align-items: center;
    justify-content: center;
`
export const HermesSlogan = styled.Text`
    font-size: 30px;
    font-family: 'AlfaSlabOne'; 
    color: ${props => props.theme.cliente.text1};
`
export const StyledAlocarrLogo = styled(AlocarrLogo)`
    color: ${props => props.theme.cliente.logoColor}; 
`

export const SloganContainer = styled.View`
    display: flex;
`

//Main
export const Main = styled.View`
    background-color: ${props => props.theme.cliente.background};
    height: ${ Dimensions.get('screen').height * 0.50 }px;
`

export const LoginContainer = styled.View`
    top: -100px;
    margin: 10%;
    background-color: ${props => props.theme.cliente.background};
    border: 1px solid ${props => props.theme.cliente.background2};
    border-radius: 20px;
    padding: 10px;
    justify-content: center;
`
export const TextLogin = styled.Text`
    align-self: center;
    font-weight: bold;
    color: ${props => props.theme.cliente.text2};
    font-size: 16px;
`
export const Input = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.cliente.marked1
  }))`
    height: 40px;
    width: 90%;
`
export const InputContainer = styled.View`
    height: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 7px;
    padding-right: 7px;
    background-color: ${props => props.theme.cliente.contrastant};
    border: 1px solid ${props => props.theme.cliente.marked1};
    border-radius: 7px;
`
export const EntrarButton = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.cliente.button};
    margin: 10px 0;
`
export const EntrarLabel = styled.Text`
    color: ${props => props.theme.cliente.text1};
    font-weight: bold;
`


//Footer
export const Footer = styled.View`
    border-top-width: 1px;
    border-top-color: ${props => props.theme.cliente.marked2};
    background-color: ${props => props.theme.cliente.background};
    align-items: center;
    justify-content: center;
    height: 7%;
`
export const FooterInformations = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const FooterDetail = styled(Detail)`
    font-size: 12px;
    color: ${props => props.theme.cliente.marked1};
`
export const ErrorMessage = styled.Text`
    font-size: 12px;
    font-family: "OpenSans-SemiBold";
    color: #ff0000;
    align-self: center;
`
