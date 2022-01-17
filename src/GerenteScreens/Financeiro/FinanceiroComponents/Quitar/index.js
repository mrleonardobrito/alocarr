import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { 
    CancelarButton,
    HeaderButton, HeaderText, MainSection, QuitarButton, QuitarFooter, QuitarHeader, 
    QuitarMain, SectionButton, SectionTextButton 
} from "./style";

import { useNavigation } from "@react-navigation/core";


export default function(){
    const tOF = false;

    const navigation = useNavigation();

    return(
        <View style={styles.modal}>
            <QuitarHeader>
                <HeaderText>Quitar parcela</HeaderText>
                <HeaderButton><Icon name="times" style={styles.iconClose}></Icon></HeaderButton>
            </QuitarHeader>
            <QuitarMain>
                <View style={{display:'flex', flexDirection: 'row', marginTop: 4}}>
                    <MainSection style={{width: '30%'}}>
                        <SectionTextButton style={{fontSize: 15}}>Recebido em: </SectionTextButton>
                        <SectionButton placeholder="Digite aqui..."/>
                    </MainSection>
                    <MainSection style={{marginLeft: 25, width: '70%'}}>
                        <SectionTextButton>Recebimento: </SectionTextButton>
                        <SectionButton placeholder="Digite aqui..." style={{width: 180}}/>
                    </MainSection>
                </View>
                <View  style={{display:'flex', flexDirection: 'row', marginTop: 20}}>
                    <MainSection style={{marginRight: 10}}>
                        <SectionTextButton>Desconto: </SectionTextButton>
                        <SectionButton placeholder="Digite aqui..."/>
                    </MainSection>
                    <MainSection style={{marginRight: 10}}>
                        <SectionTextButton>Juros: </SectionTextButton>
                        <SectionButton placeholder="Digite aqui..."/>
                    </MainSection>
                    <MainSection>
                        <SectionTextButton>Valor pago: </SectionTextButton>
                        <SectionButton placeholder="Digite aqui..."/>
                    </MainSection>
                </View>
            </QuitarMain>
            <QuitarFooter>
                <QuitarButton 
                style={{marginRight: 10}}><Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}
                onPress={()=> navigation.navigate('Financeiro', tOF)}
                >Quitar</Text></QuitarButton>
                <CancelarButton><Text 
                style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}

                >Cancelar</Text></CancelarButton>
            </QuitarFooter>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        borderRadius: 6,
    },
    iconClose: {
        fontSize: 25,
        color: 'gray'
    }
});