import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import Header from '../../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

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


    return(
        <View style={{backgroundColor: '#001732'}}>
            <Header pageName="Adiconar carro"/>
            <View style={{paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#001732'}}>
                <View style={{backgroundColor: '#295084', borderRadius: 5, padding: 15}}>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <View style={{width: '50%'}}>
                            <Text style={styles.fontePadrao}>Nome</Text>
                            <TextInput style={styles.inputPequeno}></TextInput>
                        </View>
                        <View style={{width: '50%'}}>
                            <Text style={styles.fontePadrao}>Ano</Text>
                            <TextInput style={[styles.inputPequeno, {width: '55%'}]}></TextInput>
                        </View>
                    </View>
                    <View style={{marginTop: 10, justifyContent: 'space-between'}}>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.fontePadrao}>Marca</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextInput style={styles.inputGrande}></TextInput>
                                <TouchableOpacity style={styles.inputGrandeBotao}><Icon name="plus" style={[styles.fontePadrao, {margin: 0}]}/></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.fontePadrao}>Grupo</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextInput style={styles.inputGrande}></TextInput>
                                <TouchableOpacity style={styles.inputGrandeBotao}><Icon name="plus" style={[styles.fontePadrao, {margin: 0}]}/></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginBottom: 5}}>
                            <Text style={styles.fontePadrao}>Modelo</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <TextInput style={styles.inputGrande}></TextInput>
                                <TouchableOpacity style={styles.inputGrandeBotao}><Icon name="plus" style={[styles.fontePadrao, {margin: 0}]}/></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Placa</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Chassi</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Combustível</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Cor</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Valor pago</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Valor locação</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Valor reposição</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Cilindrada</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                        <View style={{width: '30%'}}>
                            <Text style={styles.fontePadrao}>Código GPS</Text>
                            <TextInput style={[styles.inputPequeno, {width: '100%'}]}></TextInput>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={[styles.fontePadrao, {fontSize: 20, marginTop: 5, marginBottom: 10}]}>Específicações</Text>
                    <View style={{backgroundColor: '#295084', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10}}>
                        <View>
                            <Text style={styles.fontePadrao}>Câmbio</Text>
                            <TextInput style={[styles.inputGrande, {width: '100%'}]}></TextInput>
                        </View>
                        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 5}}>
                            <View style={{width: '32%', alignItems: 'center'}}>
                                <Text style={[styles.fontePadrao, {fontSize: '70%'}]}>Ar-condicionado</Text>
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
                                <Text style={[styles.fontePadrao, {fontSize: '65%'}]}>Retrovisor elétrico</Text>
                                <TouchableOpacity
                                    style={styles.inputPicker}
                                    onPress={pickerRetrovisorEletToggle}>
                                    {pickerRetrovisorElet && <View style={{height: 10, width: 10, backgroundColor: 'green', borderRadius: 100}}></View>}
                                </TouchableOpacity>
                            </View>
                        </View>  
                    </View>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fontePadrao: {
        fontWeight: 'bold',
        fontSize: '80%',
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
