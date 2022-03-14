import React, {useReducer, useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Header from '../../../../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInputMask } from 'react-native-masked-text';

import { Picker } from '@react-native-picker/picker';


export default function({ navigation }){


    return(
        <ScrollView style={{backgroundColor: '#001732'}}>
            <StatusBar hidden/>
            <Header pageName="Detalhes Financeiro"/>
            <View style={{paddingHorizontal: 15, marginTop: 10}}>
                <View style={{backgroundColor: '#295084', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5}}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 28}}>Ford Ka</Text>
                    <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                        <View>
                            <Text style={styles.fontePadrao}>Quantidade de v/:</Text>
                            <View style={{borderWidth: 1, opacity: 0.6, borderColor: '#fff', borderRadius: 5, height: 25, justifyContent: 'center', marginTop: 5}}><Text style={[styles.fontePadrao, {fontWeight: 0}]}>6</Text></View>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={styles.fontePadrao}>Código: </Text>
                            <View style={{borderWidth: 1, opacity: 0.6, borderColor: '#fff', borderRadius: 5, height: 25, justifyContent: 'center', marginTop: 5}}><Text style={[styles.fontePadrao, {fontWeight: 0}]}>025</Text></View>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 15}}>
                    <TouchableOpacity style={{height: 60, width: '100%', backgroundColor: '#295084', flexDirection: 'row', paddingHorizontal: 10, borderRadius: 5, marginBottom: 10}}>
                        <View style={{width: '50%', justifyContent: 'center'}}>
                            <Text style={styles.fontePadrao}>06/03/22 - 08/03/22</Text>
                            <Text style={styles.fontePadrao}>S: 14:00 - V: 14:00</Text>
                        </View>
                        <View style={{width: '50%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'green'}}>Lucro:</Text>
                            <Text style={{fontSize: 22, color: 'green', fontWeight: 'bold'}}>{' R$ ' + 5239.34}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 60, width: '100%', backgroundColor: '#295084', flexDirection: 'row', paddingHorizontal: 10, borderRadius: 5, marginBottom: 10}}>
                        <View style={{width: '50%', justifyContent: 'center'}}>
                            <Text style={styles.fontePadrao}>06/03/22 - 08/03/22</Text>
                            <Text style={styles.fontePadrao}>S: 14:00 - V: 14:00</Text>
                        </View>
                        <View style={{width: '50%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'green'}}>Lucro:</Text>
                            <Text style={{fontSize: 22, color: 'green', fontWeight: 'bold'}}>{' R$ ' + 5239.34}</Text>
                        </View>
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
});
