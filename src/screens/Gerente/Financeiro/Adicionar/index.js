/* Expo, React */

import React,{useEffect, useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

/* ReactNavigation */

import { useNavigation } from "@react-navigation/core";


/* VectorIcons, StyledComponents */

import { 
    Content, Main, DadosContainer, InputsContainer,
    InputDiv, TitleInput, Dados, DadosTextInput,
    ButtonCancelar, ButtonConcluir, ButtonContainer, ButtonTextCanCon,
    InputEntradaPicker
} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';


import Header from '../../../../components/Header';

import dados from "./dados";
import { Value } from "react-native-reanimated";

import { TextInputMask } from "react-native-masked-text";


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
            <Main style={{height: '90%'}}>
                <DadosContainer>
                    <InputsContainer style={{height: '100%', justifyContent: 'space-between'}}>
                        <View>
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
                                <TextInput placeholder="Digite aqui..." onChangeText={text => setSacador(text)} style={styles.textInput}/>
                            </DadosTextInput>

                            <Dados>
                                <InputDiv>
                                    <TitleInput>Data de vencimento*</TitleInput>
                                    <TextInputMask 
                                    type={'datetime'}
                                    options={{
                                        format: 'DD/MM/YYYY'
                                    }}
                                    value={dataVenc}
                                    placeholder="XX/XX/XXXX" 
                                    onChangeText={text => setDataVec(text)}
                                    style={[styles.textInput, {width: '70%'}]}
                                    />
                                </InputDiv>
                                <InputDiv>
                                    <TitleInput>Valor*</TitleInput>
                                    <TextInputMask 
                                    type={'money'}
                                    options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                    }}
                                    value={valor}
                                    placeholder="000,00" onChangeText={text => setValor(text)}
                                    style={[styles.textInput, {width: '65%'}]}
                                    />
                                </InputDiv>
                            </Dados>

                            <DadosTextInput>
                                <TitleInput>Data de pagamento*</TitleInput>
                                <TextInputMask 
                                    type={'datetime'}
                                    options={{
                                        format: 'DD/MM/YYYY'
                                    }}
                                    value={dataPaga}
                                    placeholder="XX/XX/XXXX" 
                                    onChangeText={text => setDataPaga(text)}
                                    style={[styles.textInput, {width: '35%'}]}
                                    />
                            </DadosTextInput>

                            <Dados>
                                <InputDiv>
                                    <TitleInput>Desconto*</TitleInput>
                                    <TextInputMask 
                                    type={'money'}
                                    options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                    }}
                                    value={desconto}
                                    placeholder="000,00" onChangeText={text => setDesconto(text)}
                                    style={[styles.textInput, {width: '70%'}]}
                                    />
                                </InputDiv>
                                <InputDiv>
                                    <TitleInput>Juros*</TitleInput>
                                    <TextInputMask 
                                    type={'money'}
                                    options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                    }}
                                    value={juros}
                                    placeholder="000,00" onChangeText={text => setJuros(text)}
                                    style={[styles.textInput, {width: '70%'}]}
                                    />
                                </InputDiv>
                            </Dados>

                            <Dados>
                                <InputDiv>
                                    <TitleInput>Valor pago*</TitleInput>
                                    <TextInputMask 
                                    type={'money'}
                                    options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                    }}
                                    value={valorPago}
                                    placeholder="000,00" onChangeText={text => setValorPago(text)}
                                    style={[styles.textInput, {width: '70%'}]}
                                    />
                                </InputDiv>
                                <InputDiv>
                                    <TitleInput style={styles.pagamentoText}>Forma de pagamento*</TitleInput>
                                    <TextInputMask 
                                    type={'money'}
                                    options={{
                                    precision: 2,
                                    separator: ',',
                                    delimiter: '.',
                                    unit: 'R$',
                                    suffixUnit: ''
                                    }}
                                    value={formaPago}
                                    placeholder="000,00" onChangeText={text => setFormaPago(text)}
                                    style={[styles.textInput, {width: '70%'}]}
                                    />
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
    textInput: {
        height: 40,
        width: '40%0',
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 5,
    }
});