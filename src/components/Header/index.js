import React from "react";
import { TouchableOpacity, View, StyleSheet, Linking} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from "@react-navigation/core";


import { 
    StyledHeader, IconSection, BarsIcon, ZapIcon, H1Section, H1, Main, MainItem, MainSection, CarIcon, 
    Descrip, DescripNum, DescripText, ButtonVer, ButtonText, MajorIcon, MinorIcon, MajorIconText
 } from './style';

export default function Header(props){

    const navigation = useNavigation();
    const contact = '82993225338';
    const message = 'Olá. Deseja alugar carros em um espaço totalmente confiável e com ótimo antendimento? Veio ao Local certo'
    return(  
    <StyledHeader>
        <H1Section>
            <H1>{props.pageName}</H1>
        </H1Section>
        <IconSection>
            <TouchableOpacity onPress= {()=> {Linking.openURL(`whatsapp://app`)}}><ZapIcon><Icon name="whatsapp" color="white" style={styles.icone}/></ZapIcon></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}><BarsIcon><Icon name="bars" color="white" style={styles.icone}/></BarsIcon></TouchableOpacity>
        </IconSection>
    </StyledHeader>
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