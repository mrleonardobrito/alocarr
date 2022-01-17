
/* Expo, React */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

/* VectorIcons, StyledComponents */

import Icon from "react-native-vector-icons/FontAwesome";
import {
    BotaoProximo, Container, Progressor, TextoBotao, Bola1, Bola2, Bola3, Bola4, Bola5, 
    Titulo, Conteudo, Requerimentos, ReqContainer, IconText, IconSubText
} from './style';
import { ThemeProvider } from "styled-components/native";

/* Screens */

import Cadastro2 from "../Cadastro2";

/* ReactNavigation */

import {useNavigation} from '@react-navigation/native';


export default function({navigation}){
    return(
        <Container>
            <StatusBar hidden/>

            <Progressor>
                <Bola1>
                    <View style={styles.bolinha}></View>
                </Bola1>
                <Bola2></Bola2>
                <Bola3></Bola3>
                <Bola4></Bola4>
                <Bola5></Bola5>
            </Progressor>

            <Conteudo>
                <Titulo>Para cadastrar-se,</Titulo>
                <Titulo>você irá precisar de:</Titulo>

                <Requerimentos>
                    <ReqContainer>
                        <Icon name="user" style={[styles.icone, styles.iconeUm]}></Icon>
                        <IconText>Ter mais de 21 anos</IconText>
                    </ReqContainer>
                    <ReqContainer>
                        <Icon name="id-card" style={styles.icone}></Icon>
                        <IconText>CNH original em mãos</IconText>
                    </ReqContainer>
                    <ReqContainer>
                        <Icon name="camera" style={[styles.icone, styles.iconeDois]}></Icon>
                        <View>
                            <IconText>Tirar uma foto sua</IconText>
                            <IconSubText>(Nacional, no mínimo categoria B</IconSubText>
                            <IconSubText>com 2 anos)</IconSubText>
                        </View>
                    </ReqContainer>
                    <ReqContainer>
                        <Icon name="credit-card" style={[styles.icone, styles.iconeDois]}></Icon>
                        <IconText>Cartão próprio</IconText>
                    </ReqContainer>
                    <ReqContainer>
                        <Icon name="info-circle" style={[styles.icone, styles.iconeTres]}></Icon>
                        <View>
                            <IconText>Seu cadastro está sujeito</IconText>
                            <IconText>a aprovação</IconText>
                        </View>
                        
                    </ReqContainer>
                </Requerimentos>
            </Conteudo>

            <BotaoProximo onPress={()=> navigation.navigate('Cadastro2') }>
                <TextoBotao>Próximo</TextoBotao>
            </BotaoProximo>
        </Container>
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
    }
  });
