/* Expo, React */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

/* VectorIcons, StyledComponents */

import Icon from "react-native-vector-icons/FontAwesome";
import {
    Estilo, BotaoProximo,BotaoVoltar , TextoBotao, Progressor, Bola1, Bola2, Bola3, Bola4, 
    Bola5, DadosContainer,TituloContainer , TituloDados, SubTituloDados, Dados, 
    InputEntrada, TitleInputEntrada, SliderComplemento, SliderComplementoLinha,
    BotaoContainer

} from './style';


export default function({navigation}){
    return(
        <Estilo>
            <StatusBar hidden/>

            <Progressor>
                <Bola1>
                    <SliderComplemento></SliderComplemento>
                    <SliderComplementoLinha></SliderComplementoLinha>
                </Bola1>
                <Bola2>
                    <View style={styles.bolinha}>
                    </View>
                </Bola2>
                <Bola3></Bola3>
                <Bola4></Bola4>
                <Bola5></Bola5>
            </Progressor>

            <DadosContainer>
                <TituloContainer>
                    <TituloDados>Complete seus dados</TituloDados>
                    <SubTituloDados>Seu nome e sobrenome devem estar da mesma maneira que aparecem na CNH</SubTituloDados>
                </TituloContainer>
                <View>
                    <TitleInputEntrada>Nome completo*</TitleInputEntrada>
                    <InputEntrada placeholder="Digite seu nome completo..." autoCompleteType="name"/>
                </View>
                <View>
                    <TitleInputEntrada>Email*</TitleInputEntrada>
                    <InputEntrada placeholder="Digite seu email..." autoCompleteType="email"/>
                </View>
                <View>
                    <TitleInputEntrada>Celular*</TitleInputEntrada>
                    <InputEntrada placeholder="Digite seu telefone..." autoCompleteType="tel"/>
                </View>
                <View>
                    <TitleInputEntrada>CPF*</TitleInputEntrada>
                    <InputEntrada placeholder="Digite seu CPF..."/>
                </View>
                
            </DadosContainer>
            <BotaoContainer>

            <BotaoProximo onPress={()=> navigation.navigate('Cadastro') }>
                <TextoBotao>Voltar</TextoBotao>
            </BotaoProximo>

            <BotaoProximo onPress={()=> navigation.navigate('Cadastro3') }>
                <TextoBotao>Próximo</TextoBotao>
            </BotaoProximo>

            </BotaoContainer>
        </Estilo>
    );
}
const styles = StyleSheet.create({
    icone: {
        fontSize: 30,
        color: '#fff',
    },
    iconeUm: {
        marginLeft: 5,
        marginRight: 9,
    },
    iconeDois: {
        marginLeft: 1,
        marginRight: 2,
    },
    iconeTres: {
        marginLeft: 4,
        marginRight: 5,
    }, 
    bolinha: {
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: 'black',
        alignSelf: 'center',
        position: 'absolute',
        top: -5
    },

  });
