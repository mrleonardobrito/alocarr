/* Expo, React */

import React,{useEffect, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Picker } from "react-native";

/* ReactNavigation */

import { useNavigation } from "@react-navigation/core";


/* VectorIcons, StyledComponents */

import { 
    Content, Main, DadosContainer, InputsContainer, InputEntrada,
    InputDiv, TitleInput, Dados, DadosTextInput, InputEntradaText,
    ButtonCancelar, ButtonConcluir, ButtonContainer, ButtonTextCanCon,
    InputEntradaPicker
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';


import Header from '../../../../components/Header';

import dados from "./dados";
import { Value } from "react-native-reanimated";


export default function({route}){

    const navigation = useNavigation();


    var id = 1;
    const [situacao, setSituacao]=useState("");
    const [sacador, setSacador]=useState("");
    const [dataVenc, setDataVec]=useState("");
    const [valor, setValor]=useState("");
    const [dataPaga, setDataPaga]=useState("");
    const [desconto, setDesconto]=useState("");
    const [juros, setJuros]=useState("");
    const [valorPago, setValorPago]=useState("");
    const [formaPago, setFormaPago]=useState("");

    const pageName = 'Adicionar';

    function prosseguir(){
        navigation.navigate('Financeiro');
        salvar();
    }


    function salvar(){
        console.log('oi')
        let novosValores = lerDados();
        adicionar(novosValores);

        console.log(dados);
    }

    function adicionar(novosValores){
        dados.push(novosValores);
    }

    function lerDados(){
        let novosValores = {};


        novosValores.id = dados.length;
        novosValores.situacao = situacao;
        novosValores.sacador = sacador;
        novosValores.dataVenc = dataVenc;
        novosValores.dataPaga = dataPaga;
        novosValores.valor = valor;
        novosValores.desconto = desconto;
        novosValores.juros = juros;
        novosValores.valorPago = valorPago;
        novosValores.formaPago = formaPago;


        return novosValores;
    }

    return(
        <Content style={{flex: 1}}>
            <Header pageName={pageName} style={{height: '10%'}}/>
            <Main style={{height: '95%'}}>
                <DadosContainer>
                    <InputsContainer>
                        <View style={{height: '70%'}}>
                        <Dados>
                            <InputDiv>
                                <TitleInput>Situação*</TitleInput>
                                <InputEntradaPicker placeholder="Digite aqui..." 
                                onChangeText={text => setSituacao(text)} 
                                >
    
                                </InputEntradaPicker>
                            </InputDiv>
                        </Dados>

                        <DadosTextInput>
                            <TitleInput>Sacador*</TitleInput>
                            <InputEntradaText placeholder="Digite aqui..." onChangeText={text => setSacador(text)}></InputEntradaText>
                        </DadosTextInput>

                        <Dados>
                            <InputDiv>
                                <TitleInput>Data de vencimento*</TitleInput>
                                <InputEntrada placeholder="XX/XX/XXXX" onChangeText={text => setDataVec(text)}/>
                            </InputDiv>
                            <InputDiv>
                                <TitleInput>Valor*</TitleInput>
                                <InputEntrada placeholder="000,00" onChangeText={text => setValor(text)}/>
                            </InputDiv>
                        </Dados>

                        <DadosTextInput>
                            <TitleInput>Data de pagamento*</TitleInput>
                            <InputEntradaText placeholder="XX/XX/XXXX" onChangeText={text => setDataPaga(text)}></InputEntradaText>
                        </DadosTextInput>

                        <Dados>
                            <InputDiv>
                                <TitleInput>Desconto*</TitleInput>
                                <InputEntrada placeholder="000,00" onChangeText={text => setDesconto(text)}/>
                                <Text>{desconto}</Text>
                            </InputDiv>
                            <InputDiv>
                                <TitleInput>Juros*</TitleInput>
                                <InputEntrada placeholder="000,00" onChangeText={text => setJuros(text)}/>
                            </InputDiv>
                        </Dados>

                        <Dados>
                            <InputDiv>
                                <TitleInput>Valor pago*</TitleInput>
                                <InputEntrada placeholder="000,00" onChangeText={text => setValorPago(text)}/>
                            </InputDiv>
                            <InputDiv>
                                <TitleInput style={styles.pagamentoText}>Forma de pagamento*</TitleInput>
                                <InputEntrada placeholder="000,00" onChangeText={text => setFormaPago(text)}/>
                            </InputDiv>
                        </Dados>
                        </View>
                        <ButtonContainer>
                            <ButtonCancelar style={styles.paddingButtonContainer} onPress={()=> navigation.navigate('Financeiro')}><ButtonTextCanCon>Cancelar</ButtonTextCanCon></ButtonCancelar>
                            <ButtonConcluir style={styles.paddingButtonContainer} onPress={()=> prosseguir()}><ButtonTextCanCon>Concluir</ButtonTextCanCon></ButtonConcluir>
                        </ButtonContainer>
                    </InputsContainer>
                
                </DadosContainer>
            </Main>
        </Content>
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
    pagamentoText: {
        fontSize: 13
    },

});