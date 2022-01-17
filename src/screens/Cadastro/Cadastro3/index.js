/* Expo, React */

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

/* StyledComponents */

import {
    Estilo, Progressor, Bola1, Bola2, Bola3, Bola4, Bola5, SliderComplemento,
    SliderComplementoLinha, TituloContainer, TitleInputEntrada, InputEntrada, DadosContainer,
    BotaoContainer, BotaoProximo, BotaoVoltar, TextoBotao
} from '../Cadastro2/style';

import { 
    TituloDados, InputEntradaNumero, NumeroContainer, InputEntradaComplemento, 
    TituloEntradaContainer, TituloEntradaComplemento , TituloEntradaUF,
    CidadeContainer, CidadeInputContainer, CidadeInput, UFInput

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
                    <SliderComplemento></SliderComplemento>
                    <SliderComplementoLinha></SliderComplementoLinha>
                </Bola2>
                <Bola3>
                <View style={styles.bolinha}></View>

                </Bola3>
                <Bola4></Bola4>
                <Bola5></Bola5>
            </Progressor>

            <DadosContainer>
                <TituloContainer name="titulo-container">
                    <TituloDados>Digite seu endereço</TituloDados>
                </TituloContainer>

                <View name="cep-container">
                    <TitleInputEntrada>CEP*</TitleInputEntrada>
                    <InputEntrada placeholder="00000-000" autoCompleteType="tel"/>
                </View>

                <View name="rua-container">
                    <TitleInputEntrada>Rua*</TitleInputEntrada>
                    <InputEntrada placeholder="Digite o nome de sua rua..."/>
                </View>

                <View name="numero/complemento-container">
                    <TituloEntradaContainer>
                        <TitleInputEntrada>Número*</TitleInputEntrada>
                        <TituloEntradaComplemento>Complemento</TituloEntradaComplemento>
                    </TituloEntradaContainer>
                
                    <NumeroContainer>
                        <InputEntradaNumero placeholder="000"/>
                        <InputEntradaComplemento placeholder="Digite um complemento..."/>
                    </NumeroContainer>
                </View>

                <View name="bairro-container">
                    <TitleInputEntrada>Bairro*</TitleInputEntrada>
                    <InputEntrada placeholder="Digite o nome de seu bairro..."/>
                </View>

                <View name="cidade/estado-container">
                    <CidadeContainer>
                        <TitleInputEntrada>Cidade*</TitleInputEntrada>
                        <TituloEntradaUF>UF*</TituloEntradaUF>
                    </CidadeContainer>

                    <CidadeInputContainer>
                        <CidadeInput placeholder="Digite sua cidade..."/>
                        <UFInput placeholder="Digite a UF..."/>
                    </CidadeInputContainer>
                </View>
            </DadosContainer>

            <BotaoContainer>

                <BotaoProximo onPress={()=> navigation.navigate('Cadastro2') }>
                    <TextoBotao>Voltar</TextoBotao>
                </BotaoProximo>

                <BotaoProximo onPress={()=> navigation.navigate('Cadastro4') }>
                    <TextoBotao>Próximo</TextoBotao>
                </BotaoProximo>

            </BotaoContainer>
        </Estilo>
    );
}

const styles = StyleSheet.create({
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