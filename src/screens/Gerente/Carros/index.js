// React Components
import React from 'react';
// React-Native Components
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput } from 'react-native';

// App Components
import Header from '../../../components/Header';


import { CarroContainer, Bolinha } from './styles';
import { ButtonVer, ButtonText } from '../Gerente/style';

// Libs Components
import Icon from 'react-native-vector-icons/FontAwesome5';

// Data
import veiculos from '../AdicionarCarro/AdicionarCarro/carros';
import automovel from '../../../utils/carros';
import { StatusBar } from 'expo-status-bar';

// Style

// App Function 

export default function({ navigation }){

    const pageName = 'Carros';
    
    function conferirBolinha(situacao){
        if(situacao == 1){
            return <View>
                <Bolinha style={{backgroundColor: '#C3453F'}}></Bolinha> 
            </View>
        }
        if(situacao == 2){
            return <View>
                <Bolinha style={{backgroundColor: '#7ED957'}}></Bolinha>
            </View>
        }
        if(situacao == 3){
            return <View>
                <Bolinha style={{backgroundColor: '#FFDE59'}}></Bolinha>
            </View>
        }
    }

    return(
        <ScrollView style={styles.carrosContainer}>
            <StatusBar hidden />
            <Header pageName={pageName}/>
            <View style={{paddingHorizontal: 10, width: '100%', height: 40, marginTop: '3%', flexDirection: 'row'}}>    
                <TouchableOpacity
                 style={{backgroundColor: '#3766A4', width: '15%', height: '100%', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 7, borderTopLeftRadius: 7}}>
                    <Icon name='search' style={{fontSize: 19, color: '#fff'}}/>
                </TouchableOpacity>
                <TextInput 
                placeholder='Pesquise aqui...'
                placeholderTextColor='white'
                style={{backgroundColor: '#3766A4', width: '85%', height: '100%', borderBottomRightRadius: 7, borderTopRightRadius: 7, padding: 10, color: '#fff'}}/>
            </View>
            <View style={{width: '100%', marginTop: '2.5%', alignItems: 'center', marginBottom: '3%'}}>
                <View style={{paddingHorizontal: 10, width: '90%', height: 2, borderRadius: 50, backgroundColor: '#3766A4'}}></View>
            </View>
            <View style={{width: '100%', height: 50, paddingHorizontal: 10, marginBottom: 5}}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('AdicionarCarro')}
                style={{width: '100%', height: '90%', backgroundColor: '#295084', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>Adicionar veículo</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 10, paddingBottom: 40}}>    
                <FlatList 
                data={automovel}
                keyExtractor={(_, index) => index}
                renderItem={({item})=> 
                <CarroContainer>
                    <View style={styles.carroView}>
                        <View style={{width: '30%'}}><Image source={item.imagem} style={styles.carroImage}/></View>
                        <View style={{width: '55%', paddingLeft: 20}}>
                            <Text style={styles.nomeCarro}>{item.nome}</Text>
                            <View style={{marginTop: 0}}>
                                <Text style={styles.descCarro}>Placa: <Text style={{fontWeight: 'normal'}}>{item.placa}</Text></Text>
                                <Text style={styles.descCarro}>Proxima revisão: <Text style={{fontWeight: 'normal'}}>{item.detalhes.proximaRevisao}</Text></Text>
                                <Text style={styles.descCarro}>Troca de óleo: <Text style={{fontWeight: 'normal'}}> em {item.detalhes.trocaDeOleo}km</Text></Text>
                            </View>
                        </View>
                        <View style={{width: '15%', alignItems: 'center', backgroundColor: 'transparent'}}> 
                            {conferirBolinha(item.detalhes.situacao)}
                            <Text style={{color: '#fff', fontSize: 15}}>0{item.id}</Text>
                        </View>
                    </View>
                    <ButtonVer onPress={()=> navigation.navigate('Detalhes', {id: item.id})}><ButtonText>Detalhes</ButtonText></ButtonVer>
                </CarroContainer>
                }
                
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
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
        width: '100%',
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
    descCarro: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
    }
});
