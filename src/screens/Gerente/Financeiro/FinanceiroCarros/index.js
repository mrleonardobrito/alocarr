import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../../../components/Header';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { ButtonVer, ButtonText } from '../../Gerente/style';
import { CarroContainer } from '../../Carros/style';

import dados from '../../Carros/carros';


export default function({navigation}){

    function conferirSaldo(){
        if(item.saldo){
            return;
        }
    }

    return(
        <ScrollView style={{backgroundColor: '#001732'}}>
            <Header pageName="Financeiro carros"/>
            <View style={{paddingHorizontal: 10, width: '100%', height: 40, marginTop: '3%', flexDirection: 'row'}}>    
                <TouchableOpacity
                 style={{backgroundColor: '#3766A4', width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 7, borderTopLeftRadius: 7}}>
                    <Icon name='search' style={{fontSize: 19, color: '#fff'}}/>
                </TouchableOpacity>
                <TextInput
                placeholder='Pesquise aqui...'
                placeholderTextColor="lightgray"
                style={{backgroundColor: '#3766A4', width: '85%', height: '100%', borderBottomRightRadius: 7, borderTopRightRadius: 7, padding: 10, color: '#fff'}}/>
            </View>
            <View style={{width: '100%', marginTop: '2.5%', alignItems: 'center', marginBottom: '3%'}}>
                <View style={{paddingHorizontal: 10, width: '90%', height: 2, borderRadius: 50, backgroundColor: '#3766A4'}}></View>
            </View>

            <FlatList
                style={{paddingHorizontal: 10}}
                data={dados}
                keyExtractor={(_, index) => index}
                renderItem={({item})=> 
                <CarroContainer>
                    <View style={styles.carroView}>
                        <View style={{width: '30%'}}><Image source={item.imagem} style={styles.carroImage}/></View>
                        <View style={{width: '55%', paddingLeft: 20, marginLeft: 15}}>
                            <Text style={styles.nomeCarro}>{item.nomeCarro}</Text>
                            <View style={{marginTop: 7}}>
                                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Placa: {item.placa}</Text>
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>{item.saldo < 0 ? <Text style={styles.debitoText}>Débito:</Text> : <Text style={styles.lucroText}>Lucro: </Text>} R$ {item.saldo}</Text>
                            </View>
                        </View>
                        <View style={{width: '8%', alignItems: 'center', backgroundColor: 'transparent'}}> 
                            <Text style={{color: '#fff', fontSize: 15}}>{item.id}</Text>
                        </View>
                    </View>
                    <ButtonVer onPress={()=> navigation.navigate('Detalhes', id)}><ButtonText>Detalhes</ButtonText></ButtonVer>
                </CarroContainer>
        
                }
                
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    descCarro: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
    },
    carrosContainer: {
        backgroundColor: '#011734',
        paddingBottom: 20,
    },
    carroView: {
        position: 'absolute',
        left: 5,
        top: 17,
        width: '100%',
        flexDirection: 'row'
    },
    carroImage: {
        height: 85,
        width: 130,
        resizeMode: 'contain'
    },
    linha: {
        height: 95,
        width: 2,
        backgroundColor: '#0e0e0e',
        borderRadius: 2,
        position: 'absolute',
        right: 200,
        top: -9
    },
    nomeCarro: {
        fontSize: 17, 
        fontWeight: 'bold',
        color: '#fff'
    },
    debitoText: {
        fontSize: 23,
        color: 'red',
        fontWeight: 'bold'
    },
    lucroText: {
        fontSize: 23,
        color: 'green',
        fontWeight: 'bold'
    },
});
