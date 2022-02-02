import React, { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';

// import { Container } from './styles';

const DateInput = () => {
    const [date, setDate] = useState('')
    const validate = (text) => {
        
    }

    return (
        <TextInputMask
            type="datetime" 
            options={
                { format: "DD/MM/YYYY" }
            }
            value={date}
            placeholder="dd/mm/yyyy"
            onChangeText={text => setDate(text)}
            onEndEditing={event => validate(event.nativeEvent.text)}
        />
    );
}

export default DateInput;