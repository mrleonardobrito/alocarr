import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import { Animated } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const Ride = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    max-width: 100%;
    padding: 2px 5px;
    margin-right: 10px;
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
    color: ${props => props.theme.cliente.marked1};
    font-size: 19px;
    font-family: 'OpenSans-SemiBold';
`
export const RideContainer = styled.View`
    height: 100%;
    width: 90%;
    height: 95%;
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
    color: ${props => props.theme.cliente.marked1};
`
export const SelectionBalls = styled.View`
    flex-direction: row;
    /* background-color: red; */
    align-items: center;
    justify-content: space-between;
    max-width: 80%;
    height: 15%;
`
export const Balls = styled(Animated.View)`
    height: 10px;
    width: 10px;
    margin-right: 10px;
    border-radius: 10px;
    background-color: #dfdfdf;
`
export const StartButton = styled.TouchableOpacity`
    width: 87%;
    height: 10%;
    border-radius: 5px;
    margin: 5px 0 20px 0;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.cliente.primary};
`
export const StartLabel = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.cliente.text1};
`