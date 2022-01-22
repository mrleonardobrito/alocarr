import React, { useState, useReducer } from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import {CarroView, Carro, BotaoEditar} from './style'

import Header from '../../../../components/Header'

import duster from '../img/carro_duster.png';

import Stars from 'react-native-stars'

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFF from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/core";


import dusterFront from '../../../../../car_photos/renault_duster/duster_front.jpg'
import dusterBack from '../../../../../car_photos/renault_duster/duster_back.jpg'
import dusterDrift from '../../../../../car_photos/renault_duster/duster_drift.jpg'
import { MotiView } from 'moti';


import dataCarros from '../carros'

const {width} = Dimensions.get("screen");
const height = width * 100/99;

const starMinorSize = 12;
const starSize = 25;
const starColor = '#' + '91B4E3'

export default function({route}){
    const pageName = 'Detalhes';

    const images = [dusterFront, dusterBack, dusterDrift]
    const [starValue, setStarValue] = useState(4);
    const [decidir, setDecidir] = useState(1);

    const navigation = useNavigation();

    const starValues = [50, 35, 20, 10, 5];


    const [colorTrueEspeci, setColorTrueEspeci] = useState(true);
    const [colorTrueDeta, setColorTrueDeta] = useState(false);
    const [colorTrueAva, setColorTrueAva] = useState(false);

    function colorConferirEspeci(){
        if(colorTrueEspeci == false){
            return <TouchableOpacity onPress={() => conferirAbaUm()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'transparent'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Especificações</Text></View>
                    </TouchableOpacity>
        }else{
            return <TouchableOpacity onPress={() => conferirAbaUm()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1, backgroundColor: '#5379AB'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Especificações</Text></View>
                    </TouchableOpacity>

        }
    }
    
    function colorConferirDeta(){
        if(colorTrueDeta == false){
            return <TouchableOpacity onPress={() => conferirAbaDois()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'transparent'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Detalhes</Text></View>
                    </TouchableOpacity>
        }else{
            return <TouchableOpacity onPress={() => conferirAbaDois()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1, backgroundColor: '#5379AB'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Detalhes</Text></View>
                    </TouchableOpacity>

        }
    }
    function colorConferirAva(){
        if(colorTrueAva == false){
            return <TouchableOpacity onPress={() => conferirAbaTres()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'transparent'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Avaliações</Text></View>
                    </TouchableOpacity>
        }else{
            return <TouchableOpacity onPress={() => conferirAbaTres()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1, backgroundColor: '#5379AB'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Avaliações</Text></View>
                    </TouchableOpacity>

        }
    }
    function conferirAbaUm(){
        setDecidir(1);
        setColorTrueEspeci(true)

        if(colorTrueDeta == false){
            setColorTrueDeta(false)
        }
        if(colorTrueDeta){
            setColorTrueDeta(false)
        }

        if(colorTrueAva == false){
            setColorTrueAva(false)
        }
        if(colorTrueAva){
            setColorTrueAva(false)
        }
    }

    function conferirAbaDois(){
        setDecidir(2);
        setColorTrueDeta(true)

        if(colorTrueEspeci == false){
            setColorTrueEspeci(false)
        }
        if(colorTrueEspeci){
            setColorTrueEspeci(false)
        }

        if(colorTrueAva == false){
            setColorTrueAva(false)
        }
        if(colorTrueAva){
            setColorTrueAva(false)
        }
    }

    function conferirAbaTres(){
        setDecidir(3);
        setColorTrueAva(true)

        if(colorTrueEspeci == false){
            setColorTrueEspeci(false)
        }
        if(colorTrueEspeci){
            setColorTrueEspeci(false)
        }

        if(colorTrueDeta == false){
            setColorTrueDeta(false)
        }
        if(colorTrueDeta){
            setColorTrueDeta(false)
        }
    }

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
                        <Image source={dusterFront} style={{height: '100%', width: width / 2.1, resizeMode: 'contain'}}/> 
                        <Image source={dusterBack} style={{height: '100%', width: width / 2.1, resizeMode: 'contain'}}/>                
                        <Image source={dusterDrift} style={{height: '100%', width: width / 2.1, resizeMode: 'contain'}}/>                
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
                <View style={{height: '35%', width: '100%', flexDirection: 'row'}}>
                    <View style={{height: '100%', width: '35%', backgroundColor: 'gray', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <Text style={{fontSize: 30, color: 'white', marginTop: 2}}>{starValue}</Text>
                        <Stars
                            default={starValue}
                            half={true}
                            starSize={20}
                            count={5}
                            fullStar={<IconF name='star' style={{fontSize: 20, color: '#ABCFFF'}}/>}
                            emptyStar={<IconF name='star-o' style={{fontSize: 20, color: '#ABCFFF'}}/>}
                            halfStar={<IconF name='star-half-empty' style={{fontSize: 20, color: '#ABCFFF'}}/>}

                        ></Stars>
                    </View>
                    <View style={{height: '100%', width: '65%', backgroundColor: 'green', justifyContent: 'space-evenly'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>5</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: starValues[0] + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>4</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: starValues[1] + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>3</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: starValues[2] + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>2</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: starValues[3] + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>1</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: starValues[4] + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height: '35%', width: '100%', flexDirection: 'row'}}>
                        <View style={{width: '10%', backgroundColor: 'white', alignItems: 'center'}}>
                            <View style={{height: 35, width: 35, backgroundColor: 'red', borderRadius: 60}}></View>
                        </View>
                        <View style={{width: '85%', backgroundColor: 'transparent', flexDirection: 'row'}}>
                            <View style={{height: '35%', width: '50%', alignItems: 'flex-start'}}>
                                <View style={{fontSize: 13, color: 'white'}}>Gabriel Favroir</View>
                                <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                                    <Stars
                                        default={starValue}
                                        half={true}
                                        starSize={9}
                                        count={5}
                                        fullStar={<IconF name='star' style={{fontSize: 9, color: '#ABCFFF'}}/>}
                                        emptyStar={<IconF name='star-o' style={{fontSize: 9, color: '#ABCFFF'}}/>}
                                        halfStar={<IconF name='star-half-empty' style={{fontSize: 9, color: '#ABCFFF'}}
                                        />}

                                    ></Stars>
                                    <View style={{fontSize: 10, color: 'white', fontWeight: 'bold', marginLeft: 5}}>02 de janeiro</View>
                                </View>
                            </View>
                            <View style={{width: '50%', alignItems: 'flex-end'}}>
                                <IconFF name='thumbs-up' style={{marginRight: 10, fontSize: 17}}></IconFF>
                            </View>
                        </View>
                        <View style={{width: '5%', backgroundColor: 'white'}}>
                        </View>
                </View>
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
                <BotaoEditar style={{alignSelf: 'flex-end'}} onPress={()=> navigation.navigate('EditarDetalhes')}><Text style={{fontWeight: 'bold', color: 'white'}}>Editar veículo</Text></BotaoEditar>
                <View style={{paddingLeft: 5}}>
                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>Renault Duster</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, alignItems: 'flex-end'}}><View style={styles.textView}><Icon name='car' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Placa: JML 9605</Text></View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}><View style={styles.textView}><Icon name='tachometer-alt' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Quilometragem: 7.465km</Text></View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}><View style={styles.textView}><Icon name='calendar' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Proxima revisão: 10/09/2022</Text></View>
                </View>
            </View>
            <View style={{flex: 1}}>

                <View style={{flexDirection: 'row', width: '100%', backgroundColor: '#34598A', height: '10%'}}>
                    {colorConferirEspeci()}
                    {colorConferirDeta()}
                    {colorConferirAva()}
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