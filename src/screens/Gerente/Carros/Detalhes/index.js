import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, FlatList, ScrollView, Dimensions, ImageEditor} from 'react-native';
import {CarroView, Carro, Detalhes, DetalhesHeader, BotaoEditar} from './style'

import Header from '../../../../components/Header'

import duster from '../img/carro_duster.png';

import Stars from 'react-native-stars'

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/FontAwesome';
import Dots from 'react-native-vector-icons/Entypo';


import dusterFront from '../../../../../car_photos/renault_duster/duster_front.jpg'
import dusterBack from '../../../../../car_photos/renault_duster/duster_back.jpg'
import dusterDrift from '../../../../../car_photos/renault_duster/duster_drift.jpg'

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

    function graficoLinha(starPosition){
        return <View style={{height: 5, width: starValues[starPosition] + '%', backgroundColor: starColor, borderRadius: 5}}></View>
    }

    const like = true;

    function decidirLike(){
        if(like){
            return <View style={{alignItems: 'center'}}><IconF name='thumbs-o-up' style={{fontSize: 18, color: 'white'}}/><Text style={{fontSize: 12, color: '#0e0e0e'}}>212</Text></View>
        }
        else{
            return <View style={{alignItems: 'center'}}><IconF name='thumbs-up' style={{fontSize: 18, color: 'white'}}/><Text style={{fontSize: 12, color: 'white'}}>212</Text></View>
        }
    }



    return(
        <ScrollView style={{backgroundColor: 'white', flex: 1}}>
            <Header pageName={pageName}/>
            <View style={styles.profileHeader}>
                <View style={styles.photoView}>
                    <CarroView><Carro source={duster} style={{resizeMode: 'cover'}}/></CarroView>
                </View>
                <BotaoEditar style={styles.editButton}><Text style={{fontWeight: 'bold', color: 'gray'}}>Editar</Text></BotaoEditar>
                <View style={styles.detalhes}>

                </View>
            </View>
            <View style={{position: 'absolute', top: 190, paddingHorizontal: 20}}>
                <Text style={styles.titulo}>Renault Duster</Text>
                <View>
                    <View style={styles.iconView}><View style={styles.textView}><Icon name='car' style={styles.icon}></Icon></View><Text style={styles.iconText}>Placa: JML 9605</Text></View>
                    <View style={styles.iconView}><View style={styles.textView}><Icon name='tachometer-alt' style={styles.icon}></Icon></View><Text style={styles.iconText}>Quilometragem: 7.465km</Text></View>
                    <View style={styles.iconView}><View style={styles.textView}><Icon name='calendar' style={styles.icon}></Icon></View><Text style={styles.iconText}>Proxima revisão: 10/09/2022</Text></View>
                </View>
            </View>
            <View>
                <View style={{ height: '20%', width: '100%', padding: 5, alignItems: 'center'}}>
                    <ScrollView horizontal style={{width: '100%', height: 140, position: 'absolute', bottom: -150}}>
                        {
                            images.map((imagem, index) => (
                                <Image 
                                key={index}
                                source={imagem}
                                style={{height: '100%', resizeMode: 'cover', marginHorizontal: 3}}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
                <Detalhes>
                    <DetalhesHeader>
                        <View style={styles.detalhesHeader}><Text style={styles.detalhesHeaderText}>Especificações</Text></View>
                        <View style={styles.detalhesHeader}><Text style={styles.detalhesHeaderText}>Detalhes</Text></View>
                        <View style={styles.detalhesHeader}><Text style={styles.detalhesHeaderText}>Avaliações</Text></View>
                    </DetalhesHeader>
                </Detalhes>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profileHeader: {
        height: 80,
        width: '100%',
        backgroundColor: '#002B64',
    },
    photoView: {
        height: 110,
        width: 110,
        backgroundColor: 'white',
        borderRadius: 160,
        position: 'absolute',
        bottom: -45,
        left: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editButton: {
        height: 35,
        width: '28%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'lightgray',
        position: 'absolute',
        right: 20,
        bottom: -45,
    },
    detalhes: {
        height: 100,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    iconView: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 5
    },
    icon: {
        color: 'gray', 
        marginRight: 10, 
        fontSize: 20
    },
    iconText: {
        fontSize: 15,
        color: 'gray'
    },
    textView: {
        width: 40 - 3,
        alignItems: 'center'
    },
    detalhesHeader: {
        width: 100/3 + '%', 
        height: 35, 
        backgroundColor: '#34598A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detalhesHeaderText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    linhas: {
        height: 2,
        width: '100%',
        backgroundColor: 'white'
    },
    viewRow: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 5
    },
    detalhesSubText: {
        color: 'white', 
        fontWeight: 'bold',
    },
    swiper: {
        height: 560,
        marginBottom: 10
    },
    especiText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    especiView: {
        width: 100/3 + '%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    imageCars: {
        resizeMode: 'cover',
        width: 20
    },
    lista: {
        flexDirection: 'row',
        width: '100%'
    },
    flatlistView: {
        flexDirection: 'row'
    },
    star:{
        fontSize: starSize,
        color: starColor
    },
    starMinor: {
        fontSize: starMinorSize,
        color: starColor
    },
    graficoLinha: {
        width: '87%',
        height: 5,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    graficoTexto: {
        fontSize: 15,
        marginRight: 10,
        color: 'white'
    },
    fotoPerfil: {
        height: 45,
        width: 45,
        backgroundColor: 'white',
        borderRadius: 60
    }
});