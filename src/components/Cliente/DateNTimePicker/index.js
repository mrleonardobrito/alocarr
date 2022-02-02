import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { cores } from '../../../utils/cores'

import { 
    CalendarInput, 
    ClockInput, 
    DateNTimeContainer, 
    HorarioText, 
    InformationContainer, 
    VerticalLine
} from './styles';
import DateInput from './DateInput';
import { DataText, InputContainer, NomeOperacao } from '../../../screens/Cliente/Home/styles';
import { Picker } from '@react-native-picker/picker'

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
            style={{color: cores.mainColor, paddingRight: 5}} 
            size={20}
          />
          <InformationContainer>
            <DataText>Data:</DataText>
            <DateInput />
          </InformationContainer>   
        </CalendarInput>
        <VerticalLine/>
        <ClockInput>
          <Icon 
              name="clock" 
              style={{color: cores.mainColor, padding: 5}} 
              size={20}
            />
          <InformationContainer>
            <HorarioText>Horário:</HorarioText>
            <Picker
              selectedValue={horarioRetirada}
              onValueChange={(itemValue, itemIndex) =>
                setHorarioRetirada(itemValue)
              }>
              <Picker.Item label="manhã" value={horarios.manha} />
              <Picker.Item label="tarde" value={horarios.tarde} />
              <Picker.Item label="noite" value={horarios.noite} />
            </Picker>
          </InformationContainer>
        </ClockInput>
      </InputContainer>
    </DateNTimeContainer>
    )
  }

export default DateNTimePicker;