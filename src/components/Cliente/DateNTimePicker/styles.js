import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import { DataText, NomeOperacao } from '../../../screens/Cliente/Home/styles';

export const DateNTimeContainer = styled.View`
`
export const Input = styled.View`
    height: 100%;
    width: 47%;
    align-items: center;
    flex-direction: row;
    margin-right: 2px;
`
export const CalendarInput = styled(Input)`
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right-color: ${props => props.theme.cliente.button};
    border-right-width: 2px;
`
export const ClockInput = styled(Input)`
    width: 50%;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
`
export const InformationContainer = styled.View`
    width: 90%;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
`
export const HorarioText = styled(DataText)`
    top: 18px;
    left: 5px;
    font-family: 'OpenSans-SemiBold';
`
export const HorarioPicker = styled(Picker)`
    width: 100%;
    height: 20px;
    top: 3px;
`
export const HorarioPickerItem = styled(Picker.Item)``
    
