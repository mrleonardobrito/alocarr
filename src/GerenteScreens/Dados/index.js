import React from "react";
import { useState } from "react";

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from "react-native";

function MostraNome(){
    return(
        <View style={styles.tabelaContainer}>
            <View style={styles.tabela}>
                <Text>Nome: {nome}</Text>
            </View>
            <View style={styles.tabela}>
                <Text>Idade: {idade}</Text>
            </View>
        </View>
    );
}

export default function(){
    const decid = false;
    return(
        <View style={styles.container}>
            <TextInput placeholder="nome" style={styles.textInput} onChangeText={text => setNome(text)}
            />
            <Picker placeholder="idade" style={styles.textInput} onChangeText={text => setIdade(text)}>
                <Picker.item>
                    <Text>1</Text>
                </Picker.item>
            </Picker>

            <TouchableOpacity style={styles.button}></TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: '100%'
    },
    textInput: {
        height: 40,
        width: '100%',
        borderBottomWidth: 2,
    },
    tabelaContainer: {
        width: '100%',
        marginTop: 20
    },  
    tabela: {
        width: '100%',
        borderWidth: 2,
        height: 45
    },
    button: {
        height: 45,
        marginTop: 15,
        width: '100%',
        backgroundColor: 'gray'
    }
});