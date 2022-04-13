import React from "react";
import { View, TextInput, Button } from "react-native";

import functions from "./functions";

import styles from "./styles";

export default function(){

    let textOne = true;
    let textTwo = false;

    const borderColor = 'brown';

    function checkText(value){

        if(value == ''){
            return 'yellow';
        }
        if(value == true){
            return 'green';
        }else{
            return 'red';
        }
    }

    function validateText(values){
        checkText(values);
    }

    return(
        <View style={styles.body}>
            <TextInput style={[styles.container, {borderColor: checkText(textOne)}]}>

            </TextInput>
            <TextInput style={[styles.container, {borderColor: checkText(textTwo)}]}>

            </TextInput>
            <Button title="conferir" onPress={() => {validateText()}}/>
        
        </View>
    );

}
