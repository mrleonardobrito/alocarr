import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

import Header from '../../../components/Header';

import { CarroContainer, Bolinha } from './style';
import { ButtonVer, ButtonText } from '../Gerente/style';

import duster from './img/carro_duster.png'

import dados from './carros';
import { ItemBolinha } from '../Financeiro/style';

export default function({ navigation }){

    const pageName = 'Carros';

    const id = 2;
    

    function conferirBolinha(situacao){
        if(situacao == 1){
            return <Bolinha style={{backgroundColor: '#C3453F'}}></Bolinha>
        }
        if(situacao == 2){
            return <Bolinha style={{backgroundColor: '#7ED957'}}></Bolinha>
        }
        if(situacao == 3){
            return <Bolinha style={{backgroundColor: '#FFDE59'}}></Bolinha>
        }
    }

    return(
        <ScrollView style={styles.carrosContainer}>
            <Header pageName={pageName}/>
            <View style={{paddingHorizontal: 10, paddingBottom: 40}}>
                
                <FlatList 
                data={dados}
                keyExtractor={(_, index) => index}
                renderItem={({item})=> 
                <CarroContainer>
                    <View style={styles.carroView}>
                        <View><Image source={item.imagem} style={styles.carroImage}/></View>
                        {conferirBolinha(item.situacao)}
                        <View style={{position: 'absolute', left: 150, top: -9}}>
                            <Text style={styles.nomeCarro}>{item.nomeCarro}</Text>
                            <View style={{marginTop: 7}}>
                                <Text style={styles.descCarro}>Placa: <Text style={{fontWeight: 'normal'}}>{item.placa}</Text></Text>
                                <Text style={styles.descCarro}>Proxima revisão: <Text style={{fontWeight: 'normal'}}>{item.proxRevisao}</Text></Text>
                                <Text style={styles.descCarro}>Troca de óleo: <Text style={{fontWeight: 'normal'}}>{item.trocaOleo}</Text></Text>
                            </View>
                        </View>
                    </View>
                    <ButtonVer onPress={()=> navigation.navigate('Detalhes', id)}><ButtonText>Ver</ButtonText></ButtonVer>
                </CarroContainer>
        
                }
                
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    carrosContainer: {
        flex: 1,
        backgroundColor: '#34598A',
        paddingBottom: 20
    },
    carroView: {
        position: 'absolute',
        left: 5,
        top: 17,
        width: '100%'
    },
    carroImage: {
        height: 75,
        width: 130,
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
        fontSize: 15, 
        fontWeight: 'bold',
        color: '#34598A'
    },
    descCarro: {
        fontSize: 13,
        fontWeight: 'bold'
    }
});
