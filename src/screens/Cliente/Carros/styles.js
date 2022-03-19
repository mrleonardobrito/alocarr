import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.cliente.text1};
`;
export const Header = styled.View`
    height: 30%;
    width: 100%;
    z-index: 1;
    background-color: ${props => props.theme.cliente.primary};
`
export const BackgroundImage = styled.Image`
    height: 100%;
    width: 100%;
    z-index: 0;
` 
export const ListView = styled.View`
    height: ${props => props.height}px;
    top: ${props => -props.top}px;
`
export const CarouselCarros = styled(Animated.ScrollView)`
`
export const SelectPayment = styled.View`
    width: ${props =>  props.width}px;
    align-items: center;
`
export const StartButton = styled.TouchableOpacity`
    width: 90%;
    height: 10%;
    border-radius: 3px;
    margin: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.cliente.primary};
`
export const StartLabel = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.cliente.text1};
`