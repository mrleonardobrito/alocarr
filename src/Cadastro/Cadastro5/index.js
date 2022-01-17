/* Expo, React */

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';

/* StyledComponents */


import {
    Estilo, Progressor, Bola1, Bola2, Bola3, Bola4, Bola5, SliderComplemento,
    SliderComplementoLinha, TituloContainer, TitleInputEntrada, InputEntrada, DadosContainer,
    BotaoContainer, BotaoProximo, BotaoVoltar, TextoBotao, TituloDados, Dados
} from '../Cadastro2/style';

import { 
    RevisarDados, RevisarText, RevisarTextContainer, RevisarTitle, RevisarTextView, RevisarTextContainerMenor, 
    RevisarViewMenor, RevisarTextViewMenor, RevisarTitleMenor, BotaoFinalizar
} from './style';

/* ReactNavigation */

import {useNavigation} from '@react-navigation/native';

/* Screens */

import Gerente from '../../GerenteScreens/Gerente'

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
                    <SliderComplemento></SliderComplemento>
                    <SliderComplementoLinha></SliderComplementoLinha>
                </Bola3>
                <Bola4>
                    <SliderComplemento></SliderComplemento>
                    <SliderComplementoLinha></SliderComplementoLinha>
                </Bola4>
                <Bola5>
                    <View style={styles.bolinha}></View>
                </Bola5>
            </Progressor>


            <DadosContainer>
                <TituloContainer>
                    <TituloDados>Revise seus dados</TituloDados>
                </TituloContainer>

                <RevisarDados>
                    <RevisarTextContainer>
                        <RevisarTitle>Nome completo</RevisarTitle>
                        <RevisarTextView></RevisarTextView>
                    </RevisarTextContainer>

                    <RevisarTextContainer>
                        <RevisarTitle>CPF</RevisarTitle>
                        <RevisarTextView></RevisarTextView>
                    </RevisarTextContainer>

                    <RevisarTextContainer>
                        <RevisarTitle>Celular</RevisarTitle>
                        <RevisarTextView></RevisarTextView>
                    </RevisarTextContainer>

                    <RevisarTextContainer>
                        <RevisarTitle>E-mail</RevisarTitle>
                        <RevisarTextView></RevisarTextView>
                    </RevisarTextContainer>

                    <RevisarTextContainer>
                        <RevisarTitle>CEP</RevisarTitle>
                        <RevisarTextView></RevisarTextView>
                    </RevisarTextContainer>

                    <RevisarTextContainer>
                        <RevisarTitle>Rua</RevisarTitle>
                        <RevisarTextView></RevisarTextView>
                    </RevisarTextContainer>

                    <RevisarTextContainerMenor>
                        <RevisarViewMenor>
                            <RevisarTitleMenor>Número</RevisarTitleMenor>
                            <RevisarTextViewMenor></RevisarTextViewMenor>
                        </RevisarViewMenor>

                        <RevisarViewMenor>
                            <RevisarTitleMenor>Complemento</RevisarTitleMenor>
                            <RevisarTextViewMenor></RevisarTextViewMenor>
                        </RevisarViewMenor>
                    </RevisarTextContainerMenor>

                    <RevisarTextContainer>
                        <RevisarTitle>Bairro</RevisarTitle>
                        <RevisarTextView></RevisarTextView>
                    </RevisarTextContainer>

                    <RevisarTextContainerMenor>
                        <RevisarViewMenor>
                            <RevisarTitleMenor>Cidade</RevisarTitleMenor>
                            <RevisarTextViewMenor></RevisarTextViewMenor>
                        </RevisarViewMenor>

                        <RevisarViewMenor>
                            <RevisarTitleMenor>UF/Estado</RevisarTitleMenor>
                            <RevisarTextViewMenor></RevisarTextViewMenor>
                        </RevisarViewMenor>
                    </RevisarTextContainerMenor>
                </RevisarDados>

                

            </DadosContainer>

            <BotaoContainer>

                <BotaoProximo onPress={()=> navigation.navigate('Cadastro5') }>
                    <TextoBotao>Voltar</TextoBotao>
                </BotaoProximo>

                <BotaoFinalizar onPress={()=> navigation.navigate('Gerente')}>
                    <TextoBotao>Finalizar</TextoBotao>
                </BotaoFinalizar>

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
    eyeIcon: {
        color: '#0e0e0e',
        fontSize: 25,
        
    }
  });