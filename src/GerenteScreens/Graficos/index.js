/* Expo, React */

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'

/* ReactNavigation */

import { useNavigation } from "@react-navigation/core";

/* VectorIcons, StyledComponents, SvgCharts */

import { Header, H1Section, H1, IconSection, ZapIcon, BarsIcon } from '../Gerente/style'
import { Main, GraficoContainer, Grafico } from './style';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { PieChart } from "react-native-svg-charts";

import HeaderOb from '../../components/Header';

const corGraficoLinha = '#03295B';

const graficValues = [
    {
        cor: '#03295B',
        valor: 230 
    },
    {
        cor: '#04408F',
        valor: 200
    },
    {
        cor: '#044AA6',
        valor: 160
    },
    {
        cor: '#055BCB',
        valor: 178
    },
    {
        cor: '#055BCB',
        valor: 50
    },
]

const graficLinhaDoisValue = [
    {
        cor: corGraficoLinha,
        valor: 190,
    },
    {
        cor: corGraficoLinha,
        valor: 100,
    },
    {
        cor: corGraficoLinha,
        valor: 130,
    },
    {
        cor: corGraficoLinha,
        valor: 200,
    },
    {
        cor: corGraficoLinha,
        valor: 110,
    },
    {
        cor: corGraficoLinha,
        valor: 40,
    }
]


export default function({route}){


    const navigation = useNavigation();

    const data = [
        {
            key: 1,
            amount: 40/100,
            svg: { fill: '#31356E' },
        },
        {
            key: 2,
            amount: 13.3/100,
            svg: { fill: '#2F5F98' }
        },
        {
            key: 3,
            amount: 40/100,
            svg: { fill: '#2D8BBA' }
        },
        {
            key: 4,
            amount: 6.7/100,
            svg: { fill: '#41B8D5' }
        },
        
    ]

    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'white'}
                    textAnchor={'start'}
                    alignmentBaseline={'middle'}
                    fontSize={25}
                >
                </Text>
            )
        })
    }

    const colors = ['#0e0e0e', '#a55194', '#ce6dbd', '#de9ed6']
    const keys = ['apples', 'bananas', 'cherries', 'dates']

    const coresGrafico = ['#31356E', '#2F5F98', '#2D8BBA','#41B8D5']

    const pageName = 'Gráficos';

    const [valor, setValor] = useState();

    return(
        <ScrollView>
            <HeaderOb pageName={pageName}/>
            <Main>
                <GraficoContainer>
                    <Grafico>
                        <View style={{position: 'absolute', right: 15, top: 100}}>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[0]}]}></View>
                                <Text style={styles.quadradoText}>Locados</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[1]}]}></View>
                                <Text style={styles.quadradoText}>Reservados</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[2]}]}></View>
                                <Text style={styles.quadradoText}>Cancelados</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[3]}]}></View>
                                <Text style={styles.quadradoText}>Devolvidos</Text>
                            </View>
                        </View>
                    </Grafico>
                    <Grafico>
                        <PieChart
                            valueAccessor={({ item }) => item.amount}
                            data={data}
                            spacing={0}
                            outerRadius={'100%'}
                            innerRadius="55%"
                            style={styles.grafico}
                        >
                            <Labels/>
                        </PieChart>

                        <View style={{position: 'absolute', right: 15, top: 100}}>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[0]}]}></View>
                                <Text style={styles.quadradoText}>Locados</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[1]}]}></View>
                                <Text style={styles.quadradoText}>Reservados</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[2]}]}></View>
                                <Text style={styles.quadradoText}>Cancelados</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[3]}]}></View>
                                <Text style={styles.quadradoText}>Devolvidos</Text>
                            </View>
                        </View>
                    </Grafico>
                    <Grafico style={{flexDirection: 'column'}}>
                        <Text style={styles.graficoLinhaTitulo}>Lucro do mês por carro (R$) </Text>
                        <View style={{width: '75%', height: '90%', backgroundColor: 'transparent', position: 'absolute', bottom: 10, left: -15}}>
                            <View style={{flexDirection: 'row', height: '100%', paddingHorizontal: 30}}>
                                <View style={{marginRight: 10, width: 25, alignItems: 'flex-end', height: '100%'}}>
                                    <View style={{width: '100%', height: '16%'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', position: 'absolute', top: 0, right: 0}}>5.000</Text>
                                        <View style={styles.linhaGrafico}></View>
                                    </View>
                                    <View style={{width: '100%', height: '16%'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', position: 'absolute', top: 17 * 1.18 + '%', right: 0}}>4.000</Text>
                                        <View style={[styles.linhaGrafico, {top: 15}]}></View>
                                    </View>
                                    <View style={{width: '100%', height: '16%'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', position: 'absolute', top: 17 * 2.28 + '%', right: 0}}>3.000</Text>
                                        <View style={[styles.linhaGrafico, {top: 22}]}></View>
                                    </View>
                                    <View style={{width: '100%', height: '16%'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', position: 'absolute', top: 17 * 3.28 + '%', right: 0}}>2.000</Text>
                                        <View style={[styles.linhaGrafico, {top: 29}]}></View>
                                    </View>
                                    <View style={{width: '100%', height: '16%'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', position: 'absolute', top: 17 * 4.38 + '%', right: 0}}>1.000</Text>
                                        <View style={[styles.linhaGrafico, {top: 36}]}></View>
                                    </View>
                                    <View style={{width: '100%', height: '16%'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', position: 'absolute', top: 17 * 5.48 + '%', right: 0}}>0</Text>
                                        <View style={[styles.linhaGrafico, {top: 43}]}></View>
                                    </View>

                                    
                                </View>
                                {
                                graficValues.map((value, index) => (
                                    <View key={index}
                                            style={{width: 100 / graficValues.length + '%', marginHorizontal: 1}}
                                    >
                                        <View
                                        style={[styles.graficoLinha, {backgroundColor: 'transparent'}]}
                                    >
                                            <View style={{position: 'absolute', 
                                                        bottom: 5, 
                                                        width: '100%', 
                                                        backgroundColor: value.cor, 
                                                        height: value.valor,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderTopLeftRadius: 3,
                                                        borderTopRightRadius: 3

                                        
                                        }}><Text style={{fontWeight: 'bold', color: 'white'}}>{value.valor}</Text></View>
                                        </View>
                                    </View>
                                    
                                ))
                            }</View>
                            <View style={{position: 'absolute', right: -105, top: 70}}>
                                <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                    <View style={[styles.quadrado, {backgroundColor: graficValues[0].cor}]}></View>
                                    <Text style={styles.quadradoText}>Corsa</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                    <View style={[styles.quadrado, {backgroundColor: graficValues[1].cor}]}></View>
                                    <Text style={styles.quadradoText}>HB20</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                    <View style={[styles.quadrado, {backgroundColor: graficValues[2].cor}]}></View>
                                    <Text style={styles.quadradoText}>Savero</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                    <View style={[styles.quadrado, {backgroundColor: graficValues[2].cor}]}></View>
                                    <Text style={styles.quadradoText}>Hylux</Text>
                                </View>
                                
                            </View>
                        </View>
                    </Grafico>
                    <Grafico style={{flexDirection: 'column'}}>

                        <Text style={styles.graficoLinhaTitulo}>Consumo de energia</Text>
                        <View style={{width: '75%', height: '90%', backgroundColor: 'transparent', position: 'absolute', bottom: 10, left: -15}}>
                            <View style={{flexDirection: 'row', height: '100%', paddingHorizontal: 30}}>
                                <View style={{marginRight: 10, width: 25, alignItems: 'flex-end', height: '100%', backgroundColor: 'transparent'}}>
                                    <View style={{position: 'absolute', top: 0, right: 0, backgroundColor: 'transparent'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', alignItems: 'center'}}>10</Text>
                                    </View>
                                    <View style={[styles.linhaGraficoDois, {}]}></View>
                                    <View style={{position: 'absolute', bottom: '72%', right: 0, backgroundColor: 'transparent'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', alignItems: 'center'}}>7.5</Text>
                                    </View>
                                    <View style={[styles.linhaGraficoDois, {top: '25.3%'}]}></View>
                                    <View style={{position: 'absolute', bottom: 50 - 2.5 + '%', right: 0, backgroundColor: 'transparent'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', alignItems: 'center'}}>5</Text>
                                    </View>
                                    <View style={[styles.linhaGraficoDois, {top: '50%'}]}></View>
                                    <View style={{position: 'absolute', bottom: '22%', right: 0, backgroundColor: 'transparent'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', alignItems: 'center'}}>2.5</Text>
                                    </View>
                                    <View style={[styles.linhaGraficoDois, {top: '75%'}]}></View>
                                    <View style={{position: 'absolute', bottom: 0, right: 0, backgroundColor: 'transparent'}}>
                                        <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold', alignItems: 'center'}}>0</Text>
                                    </View>
                                    <View style={[styles.linhaGraficoDois, {top: '97.5%'}]}></View>
                                </View>
                                {
                                    graficLinhaDoisValue.map((value, index) => (
                                        <View key={index}
                                                style={{width: 100 / graficLinhaDoisValue.length + '%', marginHorizontal: 1}}
                                        >
                                            <View
                                            style={[styles.graficoLinha, {backgroundColor: 'transparent'}]}
                                        >
                                                <View style={{position: 'absolute', 
                                                            bottom: 5, 
                                                            width: '100%', 
                                                            backgroundColor: value.cor, 
                                                            height: value.valor,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderTopLeftRadius: 3,
                                                            borderTopRightRadius: 3

                                            
                                        }}></View>
                                        </View>
                                    </View>
                                        
                                    ))
                                }
                            </View>
                            
                         </View>
                    </Grafico>
                </GraficoContainer>
            </Main>    
        </ScrollView>
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
        color: '#fff'
    },
    vazio: {
        backgroundColor: "#34598A",
    },
    iconeSwip: {
        fontSize: 20,
        color: '#1B4274',
    },
    buttonStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginHorizontal: 4
    },
    searchIcon: {
        color: '#fff',
        fontSize: 20
    },
    complemento: {
        width: '0.5%',
        backgroundColor: 'white',
        height: '100%',
    },
    linha: {
        height: 2,
        width: '100%',
        marginTop: 10,
        backgroundColor: '#1B4274',
        borderRadius: 10,
    },
    iconePlusMajor: {
        fontSize: 18,
        color: '#34598A'
    },
    quadrado: {
        backgroundColor: 'black',
        height: 17,
        width: 17,
        marginRight: 5,
    },
    quadradoText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1B4274'
    },
    grafico: {
        height: 180,
        position: 'absolute',
        left: 50,
        top: 50
    },
    graficoLinhaTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0A356D',
        marginBottom: 5
    },
    graficoLinha: {
        marginHorizontal: 1, 
        backgroundColor: '#0e0e0e', 
        height: '100%',
        width: '100%',
    },
    linhaGrafico: {
        width: '775%',
        backgroundColor: 'lightgray',
        height: 1,
        position: 'absolute',
        left: 30, 
        top: 8
    },
    linhaGraficoDois: {
        width: '775%',
        backgroundColor: 'lightgray',
        height: 1,
        position: 'absolute',
        left: 30, 
        top: 8
    }
});