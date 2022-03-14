/* Expo, React */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, ScrollView, Image } from 'react-native';


/* VectorIcons, StyledComponents, Swipeable */

import { 
    Header, IconSection, BarsIcon, ZapIcon, H1Section, H1, Main, MainItem, MainSection, CarIcon, 
    Descrip, DescripNum, DescripText, ButtonVer, ButtonText, MajorIcon, MinorIcon, MajorIconText
 } from './style';
import { SwipeableDiv, SwipeableLeftDiv, SwipeableButton, SwipText, SwipIcon } from './styleSwipeable';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import HeaderOb from '../../../components/Header';

const HEIGHT = '100%' + '150%';

export default function({ navigation }){

    const pageName = 'Alocarr';

    function rightActions(){
        return(
            <SwipeableButton>
                <SwipeableDiv>
                    <SwipText>Concluido</SwipText>
                    <SwipIcon><Icon name="check" style={styles.iconeSwip}></Icon></SwipIcon>
                </SwipeableDiv>
            </SwipeableButton>
        );
    }

    function leftActions(){
        return(
            <SwipeableButton>
                <SwipeableLeftDiv>
                    <SwipText>Excluir</SwipText>
                    <SwipIcon><Icon name="times" style={styles.iconeSwip}></Icon></SwipIcon>
                </SwipeableLeftDiv>
            </SwipeableButton>
        );
    }

    const quantidadeCarros = 5;
    const valoresFinanceiro = [500.5323, 343.7765];
    
    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <HeaderOb pageName={pageName}/>
            <View style={{paddingHorizontal: 10}}>
                <MainItem>
                    <View style={{width: '100%', height: '77%', alignItems: 'center', flexDirection: 'row'}}>
                        <Image source={require("../../../../img/gerente_home_carro.png")} style={{height: '100%', width: '40%', resizeMode: 'center'}}/>
                        <View style={{width: '60%', height: '100%' , alignItems: 'flex-end', paddingTop: 20, backgroundColor: 'transparent', paddingRight: 25}}>
                            <Text style={{fontSize: 23, fontWeight: 'bold', color: 'white'}}>Carros locados</Text>
                            <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white'}}>{quantidadeCarros}</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Carros')}
                    style={{height: '23%', width: '100%', backgroundColor: '#4576B6', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingHorizontal: 10}}>
                        <ButtonText>Ver</ButtonText>
                    </TouchableOpacity>
                </MainItem>
                <MainItem>
                    <View style={{width: '100%', height: '77%', alignItems: 'center', flexDirection: 'row', paddingLeft: 20}}>
                        <View style={{width: '60%', height: '100%' , alignItems: 'flex-start', paddingTop: 20, backgroundColor: 'transparent', paddingRight: 25}}>
                            <Text style={{fontSize: 23, fontWeight: 'bold', color: 'white'}}>Lucro do mês</Text>
                            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 10}}>R${valoresFinanceiro[0].toFixed(2)}</Text>
                        </View>
                        <Image source={require("../../../../img/gerente_home_grafic.png")} style={{height: '100%', width: '40%', resizeMode: 'center'}}/>
                    </View>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Financeiro')}
                    style={{height: '23%', width: '100%', backgroundColor: '#4576B6', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingHorizontal: 10}}>
                        <ButtonText>Ver</ButtonText>
                    </TouchableOpacity>
                </MainItem>
                <MainItem>
                    <View style={{width: '100%', height: '77%', alignItems: 'center', flexDirection: 'row'}}>
                        <Image source={require("../../../../img/gerente_home_grafic2.png")} style={{height: '100%', width: '35%', resizeMode: 'center', backgroundColor: 'transparent'}}/>
                        <View style={{width: '65%', height: '100%' , alignItems: 'flex-end', paddingTop: 20, backgroundColor: 'transparent', paddingRight: 25}}>
                            <Text style={{fontSize: 23, fontWeight: 'bold', color: 'white'}}>Contas a pagar</Text>
                            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 10}}>R${valoresFinanceiro[1].toFixed(2)}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Financeiro')}
                    style={{height: '23%', width: '100%', backgroundColor: '#4576B6', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingHorizontal: 10}}>
                        <ButtonText>Ver</ButtonText>
                    </TouchableOpacity>
                </MainItem>
                
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    icone: {
        fontSize: 25,
    },
    iconeCarro: {
        fontSize: 35,
    },
    iconePlusMinor: {
        fontSize: 18,
    },
    iconeSwip: {
        fontSize: 20,
        color: '#1B4274',
    },
    container: {
        flex: 1,
        backgroundColor: '#001732'
    }

});