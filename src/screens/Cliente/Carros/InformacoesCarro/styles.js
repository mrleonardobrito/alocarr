import styled from 'styled-components/native';

export const AdicionalInformations = styled.View`
    width: 60%;
    padding: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const DevolutionContainer = styled.View`
    width: 100%;
    padding: 10px;
    margin: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.cliente.marked1};
`
export const CarInformation = styled.View`
    height: 30%;
    width: 100%;
    align-items: center;
    z-index: 0;
    justify-content: flex-end;
`
export const Park = styled.View`

`
export const ParkName = styled.Text`
    font-size: 16px;
    font-family: 'OpenSans-ExtraBold';
    color: ${props => props.theme.cliente.text2};
`
export const ParkAdress = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.cliente.text2};
    font-family: 'OpenSans-SemiBold';
`
export const CarName = styled.Text`
    font-size: 30px;
    font-family: 'Saira-Stencil-One';
`
export const CarModel = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.cliente.marked1};
    font-family: 'OpenSans-SemiBold';
`
export const Data = styled.Text`
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.marked1};
`
export const Ride = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 2px 5px;
    margin-right: 10px;
`
export const AdicionalItem = styled.View`
    flex-direction: row;
    align-items: center;
`
