/* Expo, React */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, ScrollView } from 'react-native';


/* VectorIcons, StyledComponents, Swipeable */

import { 
    Header, IconSection, BarsIcon, ZapIcon, H1Section, H1, Main, MainItem, MainSection, CarIcon, 
    Descrip, DescripNum, DescripText, ButtonVer, ButtonText, MajorIcon, MinorIcon, MajorIconText
 } from './style';
import { SwipeableDiv, SwipeableLeftDiv, SwipeableButton, SwipText, SwipIcon } from './styleSwipeable';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import HeaderOb from '../../components/Header';

const HEIGHT = '100%' + '150%';

export default function({ navigation }){

    const pageName = 'Modo Gerente';

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
    const valoresFinanceiro = [500.53, 343]

    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <HeaderOb pageName={pageName}/>
            <View style={{paddingHorizontal: 10}}>
                <MainItem>
                    <MainSection>
                        <CarIcon><Icon name="car" color="#34598A" style={styles.iconeCarro}/></CarIcon>
                        <Descrip><DescripNum>{quantidadeCarros}</DescripNum><DescripText>Locados</DescripText></Descrip>
                    </MainSection>
                    <ButtonVer onPress={() => navigation.navigate('Carros')}><ButtonText>Ver</ButtonText></ButtonVer>
                </MainItem>
                <Swipeable renderRightActions={rightActions} renderLeftActions={leftActions}>
                    <MainItem>
                        <MainSection>
                            <MajorIcon><Icon name="plus" color="#fff" style={styles.iconePlusMinor}/></MajorIcon>
                            <Descrip><DescripNum>R${valoresFinanceiro[0]}</DescripNum><DescripText>A receber</DescripText></Descrip>
                        </MainSection>
                        <ButtonVer onPress={()=> navigation.navigate('Financeiro')}><ButtonText>Ver</ButtonText></ButtonVer>
                    </MainItem>
                </Swipeable>
                <MainItem>
                    <MainSection>
                        <MajorIcon><Icon name="minus" color="#fff" style={styles.iconePlusMinor}/></MajorIcon>
                        <Descrip><DescripNum>R${valoresFinanceiro[1]}</DescripNum><DescripText>A pagar</DescripText></Descrip>
                    </MainSection>
                    <ButtonVer onPress={()=> navigation.navigate('Financeiro')}><ButtonText>Ver</ButtonText></ButtonVer>
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
        backgroundColor: '#34598A'
    }

});