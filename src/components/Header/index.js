import React from "react";
import { TouchableOpacity, View, StyleSheet, Linking} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from "@react-navigation/core";


import { 
    Header, IconSection, BarsIcon, ZapIcon, H1Section, H1, Main, MainItem, MainSection, CarIcon, 
    Descrip, DescripNum, DescripText, ButtonVer, ButtonText, MajorIcon, MinorIcon, MajorIconText
 } from './style';

export default function CustomDrawer(props){

    const navigation = useNavigation();
    const contact = '82993225338';
    const message = 'Olá. Deseja alugar carros em um espaço totalmente confiável e com ótimo antendimento? Veio ao Local certo'
    return(  
    <Header>
        <H1Section>
            <H1>{props.pageName}</H1>
        </H1Section>
        <IconSection>
            <TouchableOpacity onPress= {()=> {Linking.openURL(`whatsapp://send?phone${82993225338}&text=${message}`)}}><ZapIcon><Icon name="whatsapp" color="#34598A" style={styles.icone}/></ZapIcon></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}><BarsIcon><Icon name="bars" color="#34598A" style={styles.icone}/></BarsIcon></TouchableOpacity>
        </IconSection>
    </Header>
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

});