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
export const RideOption = styled.View`
    height: 40%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
`
export const SelectPayment = styled.View`
    width: ${props =>  props.width}px;
    align-items: center;
`
export const RideOptionText = styled.Text`
    width: 100%;
    padding: 10px;
    margin: 5px;
    color: ${props => props.theme.cliente.secondary};
    font-size: 19px;
    font-family: 'OpenSans-SemiBold';
`
export const RideContainer = styled.View`
    height: 100%;
    width: 90%;
    padding: 5px 2px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.cliente.primary};
`
export const OpenTravel = styled.Text`
    width: 90%;
    font-size: 20px;
    color: ${props => props.theme.cliente.text1};
    font-family: 'OpenSans-ExtraBold';
`
export const MinValue = styled.Text`
    width: 85%;
    color: ${props => props.theme.cliente.marked1};
`
export const ValueContainer = styled.View`
    width: 100%;
    flex-direction: row;
`
export const ValuePerHour = styled.Text`
    font-size: 30px;
    font-family: 'OpenSans-ExtraBold';
    color: ${props => props.theme.cliente.text1};
`
export const AditionalValue = styled.Text`
    width: 85%;
    color: ${props => props.theme.cliente.text1gray};
`
export const SelectionBalls = styled.View`
    height: 20px;
    flex-direction: row;
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