import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, FlatList, ScrollView, Dimensions, ImageEditor} from 'react-native';
import {CarroView, Carro, BotaoEditar} from './style'

import Header from '../../../../components/Header'

import duster from '../img/carro_duster.png';

import Stars from 'react-native-stars'

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/FontAwesome';


import dusterFront from '../../../../../car_photos/renault_duster/duster_front.jpg'
import dusterBack from '../../../../../car_photos/renault_duster/duster_back.jpg'
import dusterDrift from '../../../../../car_photos/renault_duster/duster_drift.jpg'
import { MotiView } from 'moti';

const {width} = Dimensions.get("window");
const height = width * 100/99;

const starMinorSize = 12;
const starSize = 25;
const starColor = '#' + '91B4E3'

export default function({route}){
    const pageName = 'Detalhes';

    const images = [dusterFront, dusterBack, dusterDrift]
    const [starValue, setStarValue] = useState(3.5);

    const starValues = [90, 70, 100, 40, 20];

    const abas = [
        {
            valor: 1,
        },
        {
            valor: 2,
        },
        {
            valor: 3,
        },
        {
            valor: 4,
        },
    ];

    function detalhesShow(){
        return(
            <View style={{width: '100%'}}>
                <Text>1</Text>
            </View>
        )
    }
    function especificacoesShow(){
        return(
            <View style={{width: '100%'}}>
                <Text>1</Text>
            </View>
        )
    }
    function avalicacoesShow(){
        return(
            <View style={{width: '100%'}}>
                <Text>1</Text>
            </View>
        )
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: '#34598A', height: '5%'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Detalhes</Text></View>
                <View style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Especificações</Text></View>
                <View style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Avaliações</Text></View>
            </View>
            <View horizontal style={{height: '43.3%', backgroundColor: '#5379AB', flexDirection: 'row', width: '100%'}}>
            {
                abas.map((value, index) => (
                    <View name="tentando fazer a rolagem" key={index} style={{width: '100%'}}>
                        <Text>{value.valor}</Text>
                    </View>
                ))
            }
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