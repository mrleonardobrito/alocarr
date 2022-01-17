/* Expo, React */

import { StatusBar } from 'expo-status-bar';

import React from 'react';

/* VectorIcons */

import Icon from 'react-native-vector-icons/FontAwesome5';

/* StyledComponents */

import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableOpacityBase, Linking } from 'react-native';
import { 
    DrawerContainer, DrawerHeader, DrawerMain, DrawerFooter, DrawerHeaderTitle,
    CloseIcon, SearchInput, SearchContainer, SearchButton, ItemsContainer, ItemMain,
    ItemText, ItemIcon, FooterIcon, FooterImage, FooterUserName, ItemHelpMain, DrawerFooterContainer,
    ItemIconFooter, Luffy
} from './style';

const APP_NAME = 'Alocarr';

import logoALocarr from '../../../img/logo.png'

export default function CustomDrawer({navigation}){

    function logo(){
        return <Image source={logoALocarr} style={{height: 40, width: 40}}/>
    }

    const localizacao = 'Arapiraca Garden Shopping';

    return(
        <DrawerContainer>
            <StatusBar hidden/>
            <DrawerHeader>
                <TouchableOpacity onPress={() => navigation.navigate('Gerente')} style={{marginTop: 5}}><DrawerHeaderTitle>{logo()}<Text style={{fontSize: 25, color: '#1B4274', fontWeight: 'bold'}}>{APP_NAME}</Text></DrawerHeaderTitle></TouchableOpacity>
                <CloseIcon onPress={()=> navigation.closeDrawer()}><Icon name="times" style={styles.fonte}/></CloseIcon>
            </DrawerHeader>
            <DrawerMain>
                <SearchContainer>
                    <SearchButton><Icon name="search" style={styles.fonteSearch}/></SearchButton>
                    <SearchInput placeholderTextColor="#fff" color="#fff" placeholder="Pesquisar..." />
                </SearchContainer>
                <ItemsContainer>
                    <ItemMain onPress={() => navigation.navigate('Graficos')}>
                        <ItemIcon><Icon name="chart-bar" style={styles.itemFonte}/></ItemIcon>
                        <ItemText>Gráficos</ItemText>
                    </ItemMain>
                    <ItemMain>
                        <ItemIcon><Icon name="cash-register" style={styles.itemFonte}/></ItemIcon>
                        <ItemText>Cadastro gerais</ItemText>
                    </ItemMain>
                    <ItemMain>
                        <ItemIcon><Icon name="user-friends" style={styles.itemFonte}/></ItemIcon>
                        <ItemText>Cadastro de pessoas</ItemText>
                    </ItemMain>
                    <ItemMain onPress={() => navigation.navigate('Financeiro')}>
                        <ItemIcon><Icon name="money-bill-wave" style={styles.itemFonte}/></ItemIcon>
                        <ItemText>Financeiro</ItemText>
                    </ItemMain>
                    <ItemMain onPress={() => navigation.navigate('Carros')}>
                        <ItemIcon><Icon name="car" style={styles.itemFonte}/></ItemIcon>
                        <ItemText>Locações</ItemText>
                    </ItemMain>
                </ItemsContainer>
            </DrawerMain>
            <DrawerFooterContainer>
                <ItemHelpMain onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${localizacao}`)}>
                    <ItemIconFooter><Icon name="question-circle" style={styles.itemFonte}/></ItemIconFooter>
                    <ItemText>Ajuda</ItemText>
                </ItemHelpMain>
                <DrawerFooter>
                    <FooterImage>
                        <Luffy
                        style={styles.tinyLogo}
                        source={require('./luffy.jpg')}
                    />
                    </FooterImage>
                    <FooterUserName>Linaldo Brito</FooterUserName>
                    <FooterIcon><Icon name="sign-out-alt" style={styles.footerIcon}/></FooterIcon>
                </DrawerFooter>
            </DrawerFooterContainer>
        </DrawerContainer>
    );
}

const styles = StyleSheet.create({
    fonte: {
        fontSize: 30,
        color: "#1B4274",
    },
    fonteSearch: {
        fontSize: 25,
        color: '#fff'
    },
    itemFonte: {
        fontSize: 25,
        color: "#1B4274"
    },
    footerIcon: {
        fontSize: 30,
        color: "#fff"
    },
});