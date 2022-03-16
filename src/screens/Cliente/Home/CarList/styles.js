import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { OperationBox } from "../styles";
import { MotiImage, MotiView } from "moti";

export const ListCars = styled.View``
export const CarBox = styled(MotiView)`
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px; 
    align-items: center;
    background-color:#2B558D;
`
export const AboutCar = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    padding: 15px;
    border-bottom-width: 2px;
    border-bottom-color: #3C6DAD;
`
export const CarName = styled.Text`
    font-size: ${props => props.tamanho < 11 ? 42 : 32}px;
    font-family: "Saira-Stencil-One";
    height: 60px;
    color: ${props => props.theme.cliente.text1};
`
export const CarGas = styled.Text`
    font-size: 10px;
    font-family: "OpenSans-HebrewBold";
    color: #f6f6f6;
`
export const CarPrice = styled.Text`
    font-size: 32px;
    font-family: "OpenSans-HebrewBold";
    color: #f6f6f6;
`
export const CarPriceLabel = styled.Text`
    z-index: 1;
    font-size: 18px;
    font-family: "OpenSans-SauceBold";
    color: #D8D580;
`
export const CarImage = styled(MotiImage)`
    padding: 10px;
    height: 120px;
    left: -188px;
    top: 13px;
    width: 220px;
`
export const CarInformations = styled(MotiView)`
    width: 95%;
`
export const DetailsCar = styled(MotiView)`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
    justify-content: space-between;
    background-color: #2B558D;
`
export const DetailContainer = styled.View`
    height: 30px;
    min-width: 40%;
    flex-direction: row;
    align-items: center;
    margin-right: 7px;
`
export const DetailLabel = styled.Text`
    font-size: 12px;
    font-family: "OpenSans-ExtraBold";
    text-align: right;
    color: ${props => props.theme.cliente.text1};
`
export const DetailIcon = styled.Text`
    margin-right: 10px;
`
export const ReservaButton = styled.TouchableOpacity`
    padding: 10px;
    width: 100%;
    height: 70px;
    border-radius: 5px;
    background-color: #3C6DAD;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ReservaButtonLabel = styled.Text`
    font-size: 23px;
    font-family: "OpenSans-HebrewBold";
    color: #EBECF0;
`