import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
    ExcluirHeader, ExcluirHeaderButton, ExcluirMain, ExcluirMainInput, 
    ExcluirFooter, ExcluirFooterButtonConfirm, ExcluirFooterButtonCancel
} from '../Excluir/style';

export default function(){
    return(
        <View>
            <ExcluirHeader>
                <ExcluirHeaderButton><Icon name='times' style={{fontSize: 27}}/></ExcluirHeaderButton>
            </ExcluirHeader>
            <ExcluirMain>
                <Text style={{fontSize: 17}}>Selecione o código que queres <Text style={{color: 'red'}}>excluir</Text>:</Text>
                <ExcluirMainInput></ExcluirMainInput>
            </ExcluirMain>
            <ExcluirFooter>
                <ExcluirFooterButtonConfirm style={{marginRight: 10}}>
                    <Text style={styles.excluirFooterButton}>Confirmar</Text>
                </ExcluirFooterButtonConfirm>
                <ExcluirFooterButtonCancel>
                    <Text style={styles.excluirFooterButton}>Cancelar</Text>
                </ExcluirFooterButtonCancel>
            </ExcluirFooter>
        </View>
    );
}

const styles = StyleSheet.create({
    excluirFooterButton: {
        color: 'white',
        fontWeight: 'bold'
    }
});