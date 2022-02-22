import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window')

export const Header = styled.View`
    flex-direction: row;
    height: ${height * .11}px;
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.color};
`;

export const LogoWrapper = styled.Pressable`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-top: 5px;
`
export const Title = styled.Text`
    font-family: 'AlfaSlabOne';
    font-size: 22px;
    top: 7px;
    color: ${props => props.theme.cliente.text1};
`;
export const Menu = styled.TouchableOpacity`
    margin: 5px;
`;
