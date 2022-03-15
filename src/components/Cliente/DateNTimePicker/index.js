import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { cores } from '../../../utils/cores'

import { 
    CalendarInput, 
    ClockInput, 
    DateNTimeContainer, 
    HorarioPicker, 
    HorarioPickerItem, 
    HorarioText, 
    InformationContainer, 
} from './styles';
import DateInput from './DateInput';
import { StyleSheet } from 'react-native';
import { DataText, InputContainer} from '../../../screens/Cliente/Home/styles';

const DateNTimePicker = (props) => {
    
  const horarios = {
    manha: "8:00 - 11:30",
    tarde: "14:00 - 18:00",
    noite: "19:00 - 21:00",
  }

  const [horarioRetirada, setHorarioRetirada] = useState("manha")

  return (
    <DateNTimeContainer>
      <InputContainer>
        <CalendarInput >
          <Icon 
            name="calendar-alt" 
            style={{color: cores.cliente.button, paddingRight: 10, paddingLeft: 7}} 
            size={20}
          />
          <InformationContainer>
            <DataText>Data:</DataText>
            <DateInput />
          </InformationContainer>   
        </CalendarInput>
        <ClockInput>
          <Icon 
              name="clock" 
              style={{color: cores.cliente.button, paddingRight: 5}} 
              size={20}
            />
          <InformationContainer>
            <HorarioText>Horário:</HorarioText>
            <HorarioPicker
              selectedValue={horarioRetirada}
              onValueChange={(itemValue, itemIndex) =>
                setHorarioRetirada(itemValue)
              }>
              <HorarioPickerItem value="manhã" label={horarios.manha} style={styles.horarioPickerItem}/>
              <HorarioPickerItem value="tarde" label={horarios.tarde} style={styles.horarioPickerItem}/>
              <HorarioPickerItem value="noite" label={horarios.noite} style={styles.horarioPickerItem}/>
            </HorarioPicker>
          </InformationContainer>
        </ClockInput>
      </InputContainer>
    </DateNTimeContainer>
    )
  }

  const styles = StyleSheet.create({
    horarioPickerItem: {
      fontSize: 14,
      fontFamily: "OpenSans-SemiBold"
    }
  })

export default DateNTimePicker;