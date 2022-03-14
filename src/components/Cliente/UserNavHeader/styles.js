import Picker from 'react-native-picker';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('screen')

export const Header = styled.View`
    flex-direction: row;
    height: ${height * 0.11}px;
    width: 100%;
    padding: 15px 10px 10px 10px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
`;

export const LogoWrapper = styled.Pressable`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
`
export const Title = styled.Text`
    font-family: 'AlfaSlabOne';
    font-size: 22px;
    left: -5px;
    color: ${props => props.theme.cliente.text1};
`;
export const Menu = styled.View`
    height: 40px;
    width: 55%;
    margin-right: 10px;
    top: -3px;
    flex-direction: row;
    justify-content: flex-end;
`;
export const MenuIcon = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: 7px 12px 7px 12px;
    height: 50px;
`
export const Divisoria = styled.View`
    height: 50px;
    border-right-color: #fff;
    border-right-width: 2px;
    border-top-right-radius: 0.5px;
    border-bottom-right-radius: 0.5px;
`
export const Flag = styled.Image`
    height: 60%;
    width: 60%;
    border-radius: 5px;
    margin: 5px;
`
export const FlagCountry = styled.Text`
    font-size: 8px;
    color: #fff;
    font-family: "OpenSans-ExtraBold";
`