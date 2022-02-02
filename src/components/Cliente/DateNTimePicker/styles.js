import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import { DataText, NomeOperacao } from '../../../screens/Cliente/Home/styles';

export const DateNTimeContainer = styled.View`
`
export const VerticalLine = styled.View`
    height: 80%;
    width: 1px;
    opacity: 0.3;
    border: 1px solid ${props => props.theme.cliente.marked1};
`
export const Input = styled.View`
    height: 100%;
    width: 50%;
    align-items: center;
    flex-direction: row;
    margin-right: 2px;
`
export const CalendarInput = styled(Input)`
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`
export const ClockInput = styled(Input)`
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
`
export const InformationContainer = styled.View`
    width: 80%;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    text-decoration: none;
`
export const HorarioText = styled(DataText)`
    top: 8px;
    font-family: 'OpenSans-SemiBold';
`
export const HorarioPicker = styled(Picker).attrs((props) => ({
    
}))`
    
`



