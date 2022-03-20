/* Expo, React */

import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

/* ReactNavigation */

import { TextInputMask } from 'react-native-masked-text';


/* VectorIcons, StyledComponents */

import Icon from 'react-native-vector-icons/FontAwesome5';

import Header from '../../../../components/Header';

import colaboradoresArrayJS from "./colaboradoresArray";

export default function({navigation}){

    const pageName = 'Adicionar Colaborador';

    const [colaboradoresArray, setColaboradoresArray] = useState([])

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [dataAdmissao, setDataAdmissao] = useState("");
    const [cargaHoraria, setCargaHoraria] = useState("");

    function prosseguir(){
        navigation.navigate('Colaboradores');
        salvarColaborador();

        console.log(colaboradoresArrayJS.nome)

    }

    function salvarColaborador(){
        let novoColaborador = lerDados();
        adicionarColaborador(novoColaborador);
    }

    function adicionarColaborador(novoColaborador){
        colaboradoresArrayJS.push(novoColaborador)
    }

    function lerDados(){
        let novoColadorador = {};

        novoColadorador.nome = nome;
        novoColadorador.dataAdmissao = dataAdmissao;
        novoColadorador.cargo = cargaHoraria;
        novoColadorador.departamento = departamento;
        novoColadorador.cargaHoraria = cargaHoraria;

        return novoColadorador;
    }


    return(
        <View style={{flex: 1, backgroundColor: '#011631'}}>
            <StatusBar hidden/>
            <Header pageName={pageName} style={{height: '10%'}}/>
            <View style={{padding: 10, backgroundColor: 'transparent'}}>
                <View style={{backgroundColor: '#295084', padding: 10, flexDirection: 'column', borderRadius: 5}}>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', borderRadius: 5}}>
                        <View style={{width: '49%'}}>
                            <Text style={styles.fontePadrao}>Nome</Text>
                            <TextInput
                                value={nome}
                                placeholder="Cláudio Pereira..."
                                placeholderTextColor="#AAAAAA"
                                onChangeText={(text) => setNome(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                        <View style={{width: '49%'}}>
                            <Text style={styles.fontePadrao}>Departamento</Text>
                            <TextInput
                                value={departamento}
                                placeholder="Digite aqui..."
                                placeholderTextColor="#AAAAAA"
                                onChangeText={(text) => setDepartamento(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', borderRadius: 5, marginTop: 10}}>
                        <View style={{width: '49%'}}>
                            <Text style={styles.fontePadrao}>Cargo</Text>
                            <TextInput
                                value={cargo}
                                placeholder="Digite aqui..."
                                placeholderTextColor="#AAAAAA"
                                onChangeText={(text) => setCargo(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                        <View style={{width: '49%'}}>
                            <Text style={styles.fontePadrao}>Data de Admissão</Text>
                            <TextInputMask
                                type="datetime"
                                options={{
                                    format: 'DD/MM/YYYY',
                                }}
                                value={dataAdmissao}
                                placeholder="12/02/1997"
                                placeholderTextColor="#AAAAAA"
                                onChangeText={(text) => setDataAdmissao(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', borderRadius: 5, marginTop: 10}}>
                        <View style={{width: '49%'}}>
                            <Text style={styles.fontePadrao}>Carga de horas(em horas)</Text>
                            <TextInputMask
                                type="only-numbers"
                                value={cargaHoraria}
                                placeholder="00"
                                placeholderTextColor="#AAAAAA"
                                onChangeText={(text) => setCargaHoraria(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity 
                onPress={() => prosseguir()}
                style={{height: 50, width: '100%', borderRadius: 5, backgroundColor: '#254A7C', marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={[styles.fontePadrao, {fontSize: 20}]}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    fontePadrao: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#fff',
        marginLeft: 5
    },
    inputPequeno: {
        width: '75%',
        height: 30,
        backgroundColor: '#295084',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal: 5,
        color: '#fff',

    },
    inputGrande: {
        width: '87%',
        height: 30,
        backgroundColor: '#295084',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        marginTop: 5,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    inputGrandeBotao: {
        width: '10%', 
        height: 30, 
        backgroundColor: '#295084', 
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: '#fff', 
        marginTop: 5, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    inputPicker: {
        height: 20, 
        width: 20, 
        backgroundColor: '#fff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 100,
        marginLeft: 10,
        marginTop: 5
    }
});