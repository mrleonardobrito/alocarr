import React, {useReducer, useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInputMask } from 'react-native-masked-text';

import { Picker } from '@react-native-picker/picker';


export default function({ navigation }){

    function corPicker(){
        if(pickerDecide){
            return <TouchableOpacity style={{height: 25, width: 25, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}></TouchableOpacity>
        }else{
            return <TouchableOpacity style={{height: 25, width: 25, backgroundColor: '#fff'}}></TouchableOpacity>

        }
    }

    const [pickerArCond, pickerArCondToggle] = useReducer((s)=> !s, false);
    const [pickerVidro, pickerVidroToggle] = useReducer((s)=> !s, false);
    const [pickerTravaElet, pickerTravaToggle] = useReducer((s)=> !s, false);
    const [pickerAlarme, pickerAlarmeToggle] = useReducer((s)=> !s, false);
    const [pickerBancoCouro, pickerBancoCouroToggle] = useReducer((s)=> !s, false);
    const [pickerRetrovisorElet, pickerRetrovisorEletToggle] = useReducer((s)=> !s, false);

    const [nome, setNome] = useState();
    const [marca, setMarca] = useState();
    const [ano, setAno] = useState();
    const [grupo, setGrupo] = useState();
    const [modelo, setModelo] = useState();
    const [placa, setPlaca] = useState();
    const [chassi, setChassi] = useState();
    const [combustivel, setCombustivel] = useState();
    const [cor, setCor] = useState();
    const [valorPagoCarro, setValorPagoCarro] = useState();
    const [valorReposicao, setValorReposicao] = useState();
    const [valorLocacao, setValorLocacao] = useState();
    const [cilindrada, setCilindrada] = useState();
    const [codGPS, setCodGPS] = useState();
    const [cambio, setCambio] = useState();
    const [numeroSerie, setNumeroSerie] = useState();
    const [fornecedor, setFornecedor] = useState();
    const [local, setLocal] = useState();
    const [obs, setObs] = useState();
    const [obsCarac, setObsCarac] = useState();




    const [cell, setCell] = useState();

    return(
        <ScrollView style={{backgroundColor: '#001732'}}>
            <StatusBar hidden/>
            <Header pageName="Adiconar carros"/>
            <View style={{paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#001732'}}>
                <View style={{backgroundColor: '#295084', borderRadius: 5, padding: 15}}>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <View style={{width: '70%'}}>
                            <Text style={styles.fontePadrao}>Nome</Text>
                            <TextInput 
                            style={styles.inputPequeno} 
                            placeholder="Digite aqui..."
                            placeholderTextColor="lightgray"
                            ></TextInput>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Ano</Text>
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'YYYY',
                                }}
                                value={ano}
                                placeholder="0000"
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setAno(text)}
                                style={[styles.inputPequeno, {width: '100%', textAlign: 'center'}]} />
                        </View>
                    </View>
                    <View style={{marginTop: 10, justifyContent: 'space-between'}}>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.fontePadrao}>Marca</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextInput style={styles.inputGrande}></TextInput>
                                <TouchableOpacity style={styles.inputGrandeBotao}><Icon name="plus" style={[styles.fontePadrao, {marginLeft: 0}]}/></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.fontePadrao}>Grupo</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextInput style={styles.inputGrande}></TextInput>
                                <TouchableOpacity style={styles.inputGrandeBotao}><Icon name="plus" style={[styles.fontePadrao, {marginLeft: 0}]}/></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.fontePadrao}>Modelo</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextInput style={styles.inputGrande}></TextInput>
                                <TouchableOpacity style={styles.inputGrandeBotao}><Icon name="plus" style={[styles.fontePadrao, {marginLeft: 0}]}/></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Placa</Text>
                            <TextInput
                                value={placa}
                                placeholder="XXXXXXX"
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setPlaca(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Chassi</Text>
                            <TextInput
                                value={chassi}
                                placeholder="XXXXXXX"
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setChassi(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Combustível</Text>
                            <TextInput
                                value={combustivel}
                                placeholder="Digite aqui..."
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setCombustivel(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Cor</Text>
                            <TextInput
                                value={cor}
                                placeholder="Digite aqui..."
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setCor(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Valor pago</Text>
                            <TextInputMask
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$ ',
                                    suffixUnit: ''
                                }}
                                value={valorPagoCarro}
                                placeholder="R$ 000,00"
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setValorPagoCarro(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Valor locação</Text>
                            <TextInputMask
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$ ',
                                    suffixUnit: ''
                                }}
                                value={valorLocacao}
                                placeholder="R$ 000,00"
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setValorLocacao(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Valor reposição</Text>
                            <TextInputMask
                                type={'money'}
                                options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$ ',
                                    suffixUnit: ''
                                }}
                                value={valorReposicao}
                                placeholder="R$ 000,00"
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setValorReposicao(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Cilindradas</Text>
                            <TextInputMask
                                type={'only-numbers'}
                                value={cilindrada}
                                placeholder="00"
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setCilindrada(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Código GPS</Text>
                            <TextInputMask
                                type={'only-numbers'}
                                value={cell}
                                placeholder="00000"
                                placeholderTextColor="lightgray"
                                onChangeText={(text) => setCell(text)}
                                style={[styles.inputPequeno, {width: '100%'}]} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={[styles.fontePadrao, {fontSize: 20, marginTop: 15, marginBottom: 10}]}>Específicações</Text>
                    <View style={{backgroundColor: '#295084', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10}}>
                        <View>
                            <Text style={styles.fontePadrao}>Câmbio</Text>
                            <TextInput style={[styles.inputGrande, {width: '100%'}]}></TextInput>
                        </View>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                            <View style={{width: '32%', alignItems: 'center'}}>
                                <Text style={[styles.fontePadrao, {fontSize: 12}]}>Ar-condicionado</Text>
                                <TouchableOpacity
                                    style={styles.inputPicker}
                                    onPress={pickerArCondToggle}>
                                    {pickerArCond && <View style={{height: 10, width: 10, backgroundColor: 'green', borderRadius: 100}}></View>}
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '32%', alignItems: 'center'}}>
                                <Text style={styles.fontePadrao}>Vidro elétrico</Text>
                                <TouchableOpacity
                                    style={styles.inputPicker}
                                    onPress={pickerVidroToggle}>
                                    {pickerVidro && <View style={{height: 10, width: 10, backgroundColor: 'green', borderRadius: 100}}></View>}
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '32%', alignItems: 'center'}}>
                                <Text style={styles.fontePadrao}>Trava elétrica</Text>
                                <TouchableOpacity
                                    style={styles.inputPicker}
                                    onPress={pickerTravaToggle}>
                                    {pickerTravaElet && <View style={{height: 10, width: 10, backgroundColor: 'green', borderRadius: 100}}></View>}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                            <View style={{width: '32%', alignItems: 'center'}}>
                                <Text style={styles.fontePadrao}>Alarme</Text>
                                <TouchableOpacity
                                    style={styles.inputPicker}
                                    onPress={pickerAlarmeToggle}>
                                    {pickerAlarme && <View style={{height: 10, width: 10, backgroundColor: 'green', borderRadius: 100}}></View>}
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '32%', alignItems: 'center'}}>
                                <Text style={styles.fontePadrao}>Banco de couro</Text>
                                <TouchableOpacity
                                    style={styles.inputPicker}
                                    onPress={pickerBancoCouroToggle}>
                                    {pickerBancoCouro && <View style={{height: 10, width: 10, backgroundColor: 'green', borderRadius: 100}}></View>}
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '32%', alignItems: 'center'}}>
                                <Text style={[styles.fontePadrao, {fontSize: 11}]}>Retrovisor elétrico</Text>
                                <TouchableOpacity
                                    style={styles.inputPicker}
                                    onPress={pickerRetrovisorEletToggle}>
                                    {pickerRetrovisorElet && <View style={{height: 10, width: 10, backgroundColor: 'green', borderRadius: 100}}></View>}
                                </TouchableOpacity>
                            </View>
                        </View>  
                    </View>
                </View>
                <View>
                    <Text style={[styles.fontePadrao, {fontSize: 20, marginTop: 15, marginBottom: 10}]}>Detalhes</Text>
                    <View style={{backgroundColor: '#295084', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10}}>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-end', marginTop: 5}}>
                            <View style={{width: '30%', marginRight: 25}}>
                                <Text style={styles.fontePadrao}>Numero série</Text>
                                <TextInputMask
                                    type={'only-numbers'}
                                    value={numeroSerie}
                                    placeholder="00000"
                                    placeholderTextColor="lightgray"
                                    onChangeText={(text) => setNumeroSerie(text)}
                                    style={[styles.inputPequeno, {width: '100%'}]} />
                            </View>
                            <View style={{width: '60%'}}>
                                <Text style={styles.fontePadrao}>Fornecedor</Text>
                                <TextInput
                                    value={fornecedor}
                                    placeholder="Digite aqui..."
                                    placeholderTextColor="lightgray"
                                    onChangeText={(text) => setFornecedor(text)}
                                    style={[styles.inputPequeno, {width: '100%'}]} />
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <View>
                                <Text style={styles.fontePadrao}>Local onde está</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <TextInput
                                        value={local}
                                        placeholder="Digite aqui..."
                                        placeholderTextColor="lightgray"
                                        onChangeText={(text) => setLocal(text)}
                                        style={[styles.inputPequeno, {width: '81%'}]} />
                                    <TouchableOpacity 
                                        onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${local}`)}
                                        style={{width: '15%', height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3766A4', borderRadius: 5, marginTop: 5}}>
                                        <Icon name="map-marker-alt" style={[styles.fontePadrao, {marginLeft: 0}]}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <View style={{}}>
                                <Text style={styles.fontePadrao}>Observações</Text>
                                <View>
                                    <TextInput
                                        value={obs}
                                        multiline={true}
                                        placeholder="Digite aqui..."
                                        placeholderTextColor="lightgray"
                                        onChangeText={(text) => setObs(text)}
                                        style={[styles.inputPequeno, {width: '100%', height: 100, alignItems: 'flex-start', justifyContent: 'flex-start', overflow: 'hidden'}]} />
                                </View>
                            </View>
                            <View style={{marginTop: 10}}>
                                <Text style={styles.fontePadrao}>Observação Característica</Text>
                                <View>
                                    <TextInput
                                        value={obsCarac}
                                        multiline={true}
                                        placeholder="Digite aqui..."
                                        placeholderTextColor="lightgray"
                                        onChangeText={(text) => setObsCarac(text)}
                                        style={[styles.inputPequeno, {width: '100%', height: 100, alignItems: 'flex-start', justifyContent: 'flex-start', overflow: 'hidden'}]} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{height: 50, width: '100%', borderRadius: 5, backgroundColor: '#254A7C', marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={[styles.fontePadrao, {fontSize: 20}]}>Adicionar carro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
