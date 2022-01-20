import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, FlatList, ScrollView, Dimensions, ImageEditor, TouchableOpacity, Touchable} from 'react-native';
import {CarroView, Carro, BotaoEditar} from './style'

import Header from '../../../../components/Header'

import duster from '../img/carro_duster.png';

import Stars from 'react-native-stars'

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/core";


import dusterFront from '../../../../../car_photos/renault_duster/duster_front.jpg'
import dusterBack from '../../../../../car_photos/renault_duster/duster_back.jpg'
import dusterDrift from '../../../../../car_photos/renault_duster/duster_drift.jpg'
import { MotiView } from 'moti';

const {width} = Dimensions.get("screen");
const height = width * 100/99;

const starMinorSize = 12;
const starSize = 25;
const starColor = '#' + '91B4E3'

export default function({route}){
    const pageName = 'Detalhes';

    const images = [dusterFront, dusterBack, dusterDrift]
    const [starValue, setStarValue] = useState(3.5);
    const [decidir, setDecidir] = useState(1);

    const navigation = useNavigation();

    const starValues = [90, 70, 100, 40, 20];

    function decidirAba(decidir){
        if(decidir == 1){
            return <View style={{backgroundColor: '#5379AB', flex: 1}}>
                <View style={{height: '53%'}}>
                    <View style={{backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, paddingTop: 20}}>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='users' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>4 Passageiros</Text>
                        </View>
                        <View style={{width: 100, alignItems: 'center'}}>
                            <Icon name='cog' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>Manual</Text>
                        </View>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='briefcase' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>3 Malas</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, paddingTop: 20}}>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='snowflake' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>Ar-condiconado</Text>
                        </View>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='door-open' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>4 Portas</Text>
                        </View>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='cogs' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>Motor 1.6</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'transparent', padding: 10}}>
                    <ScrollView horizontal pagingEnabled style={{flex: 1, flexDirection: 'row'}}> 
                        <Image source={dusterFront} style={{height: '100%', width: width / 2, resizeMode: 'contain'}}/> 
                        <Image source={dusterBack} style={{height: '100%', width: width / 2, resizeMode: 'contain'}}/>                
                        <Image source={dusterDrift} style={{height: '100%', width: width / 2, resizeMode: 'contain'}}/>                
                    </ScrollView>
                </View>
                
            </View>
        }
        if(decidir == 2){
            return <View style={{backgroundColor: '#5379AB', flex: 1}}>
                <View>
                    <View style={{padding: 10}}>
                        <View style={{flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'space-between'}}>
                            <View style={{width: '50%', alignItems: 'flex-start'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>Cor: branco</Text>
                            </View>
                            <View style={{width: '50%', alignItems: 'flex-end'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>Modelo: Duster</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'space-between', marginTop: 5, marginBottom: 5}}>
                            <View style={{width: '40%', alignItems: 'flex-start'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>Ano: 2018</Text>
                            </View>
                            <View style={{width: '60%', alignItems: 'flex-end'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>Combustível: Gasolina/Etanol</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 2, width: '100%', backgroundColor: 'lightgray'}}></View>
                    <View style={{padding: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 0}}>Manual, com 5 machas</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 10}}>Ar-condicionado</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 10}}>Trava elétrica</Text>
                    </View>
                    <View style={{height: 2, width: '100%', backgroundColor: 'lightgray'}}></View>
                    <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 0}}>Chassi: 445002SKD32H32G4</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 7}}>Última revisão: 20/01/2022</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 7}}>Prox. revisão: 20/02/2022</Text>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 0}}>Troca de óleo: em 85km</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 7}}>Cod. GPS: 40028922</Text>
                        </View>
                    </View>
                </View>
            </View>
        }
        if(decidir == 3){
            return <View style={{backgroundColor: '#5379AB', flex: 1, padding: 10}}>
                <Text>3</Text>
            </View>
        }
    }

    function graficoLinha(starPosition){
        return <View style={{height: 5, width: starValues[starPosition] + '%', backgroundColor: starColor, borderRadius: 5}}></View>
    }



    return(
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <Header pageName={pageName}/>
            <View style={styles.profileHeader}>
                <View style={styles.photoView}>
                    <CarroView><Carro source={duster} style={{resizeMode: 'cover'}}/></CarroView>
                </View>
            </View>
            <View style={{height: '25%', padding: 10, marginBottom: 15}}>
                <BotaoEditar style={{alignSelf: 'flex-end'}}><Text style={{fontWeight: 'bold', color: 'white'}}>Editar veículo</Text></BotaoEditar>
                <View style={{paddingLeft: 5}}>
                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>Renault Duster</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, alignItems: 'flex-end'}}><View style={styles.textView}><Icon name='car' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Placa: QTA 1347</Text></View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}><View style={styles.textView}><Icon name='tachometer-alt' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Quilometragem: 7.465km</Text></View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}><View style={styles.textView}><Icon name='calendar' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Proxima revisão: 10/09/2022</Text></View>
                </View>
            </View>
            <View style={{flex: 1}}>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#34598A', height: '10%'}}>
                    <TouchableOpacity onPress={() => setDecidir(1)} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Especificações</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDecidir(2)} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Detalhes</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDecidir(3)} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Avaliações</Text></View>
                    </TouchableOpacity>
                </View>
                {decidirAba(decidir)}
                <View style={{justifyContent: 'center', backgroundColor: '#5379AB', padding: 7, height: '15%'}}>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Carros')}
                    style={{backgroundColor: 'white', height: '100%', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#5379AB'}}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    profileHeader: { 
        height: '15%',
        backgroundColor: '#002B64',
    },
    photoView: {
        height: 100,
        width: 100,
        position: 'absolute',
        left: 15,
        top: 45,
    },
    icon: {
        color: 'gray', 
        marginRight: 10, 
        fontSize: 20
    },
    textView: {
        width: 40,
        alignItems: 'center'
    },
});