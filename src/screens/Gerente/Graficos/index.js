/* Expo, React */

import React, { useReducer} from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'

/* ReactNavigation */

import { useNavigation } from "@react-navigation/core";

/* VectorIcons, StyledComponents*/

import { Header, H1Section, H1, IconSection, ZapIcon, BarsIcon } from '../Gerente/style'
import { Main, GraficoContainer, Grafico, ViewCirculo } from './style';

import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderOb from '../../../components/Header';
import { MotiView, AnimatePresence } from "moti";

import Svg, { Circle } from 'react-native-svg'

import { PieChart } from 'react-native-svg-charts'

const corGraficoLinha = '#03295B';

const graficLinhaValues = [
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
        valor: 230
    },
]

const graficLinhaDoisValue = [
    {
        cor: corGraficoLinha,
        valor: 170,
        valorPassado: 180,
    },
    {
        cor: corGraficoLinha,
        valor: 100,
        valorPassado: 100 / 2,
    },
    {
        cor: corGraficoLinha,
        valor: 130,
        valorPassado: 130 / 2,
    },
    {
        cor: corGraficoLinha,
        valor: 200,
        valorPassado: 200 / 2,
    },
    {
        cor: corGraficoLinha,
        valor: 110,
        valorPassado: 110 / 2,
    },
    {
        cor: corGraficoLinha,
        valor: 40,
        valorPassado: 40 / 2,
    },
    {
        cor: corGraficoLinha,
        valor: 85,
        valorPassado: 85 / 2,
    }
]


export default function({route}){

    const pageName = 'Gráficos';

    const navigation = useNavigation();

    const coresGrafico = ['#31356E', '#2F5F98', '#2D8BBA','#41B8D5'];

    const [visible, setVisible] = useReducer((s)=> !s, false)

    function verIcon(){
         if(visible){
            return <Icon name="minus" style={{color: 'white', fontSize: 23}} /> 
        }if(visible == false){
            return <Icon name="plus" style={{color: 'white', fontSize: 23}} /> 

        }
    }

    const dataCirculo = [
        {
            key: 1,
            amount: 50,
            svg: { fill: '#41B8D5' },
        },
        {
            key: 2,
            amount: 50,
            svg: { fill: '#2F5F98' }
        },
        {
            key: 3,
            amount: 40,
            svg: { fill: '#2D8BBA' }
        },
        {
            key: 4,
            amount: 95,
            svg: { fill: '#31356E' }
        },
    ];
    const dataCirculoDois = [
        {
            key: 1,
            amount: 30,
            svg: { fill: '#41B8D5' },
        },
        {
            key: 2,
            amount: 40,
            svg: { fill: '#2F5F98' }
        },
        {
            key: 3,
            amount: 70,
            svg: { fill: '#2D8BBA' }
        },
        {
            key: 4,
            amount: 25,
            svg: { fill: '#31356E' }
        },
    ];

    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[ 0 ]}
                    y={pieCentroid[ 1 ]}
                    fill={'red'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    stroke={'black'}
                    strokeWidth={0.2}
                >
                    {data.amount}
                </Text>
            )
        })
    }

    return(
        <ScrollView>
            <HeaderOb pageName={pageName}/>
            <Main>
                <GraficoContainer>
                    <Grafico style={{flexDirection: 'column'}}>
                        <Text style={styles.graficoLinhaTitulo}>Status locação - ultimos 30 dias</Text>
                        <View style={{width: '100%', alignItems: 'flex-start', height: '100%'}}>
                            <PieChart 
                            style={{height: '65%', width: '65%', marginTop: 15}}
                            data={dataCirculo}
                            spacing={40}
                            innerRadius={'50%'}
                            valueAccessor={({ item }) => item.amount}
                            >
                                <Labels />
                            </PieChart>
                        </View>
                        
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
                        <Text style={styles.graficoLinhaTitulo}>Status locação - ultimos 30 dias</Text>

                        <View style={{width: '100%', alignItems: 'flex-start', height: '100%'}}>
                            <PieChart 
                            style={{height: '65%', width: '65%', marginTop: 15}}
                            data={dataCirculoDois}
                            spacing={40}
                            innerRadius={'50%'}
                            valueAccessor={({ item }) => item.amount}
                            >
                                <Labels />
                            </PieChart>
                        </View>
                        <View style={{position: 'absolute', right: 15, top: 100}}>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[0]}]}></View>
                                <Text style={styles.quadradoText}>Emanuel</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[1]}]}></View>
                                <Text style={styles.quadradoText}>Linaldo</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[2]}]}></View>
                                <Text style={styles.quadradoText}>Joel</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                <View style={[styles.quadrado, {backgroundColor: coresGrafico[3]}]}></View>
                                <Text style={styles.quadradoText}>Leonardo</Text>
                            </View>
                        </View>
                    </Grafico>



                    <Grafico style={{flexDirection: 'column'}}>
                        <Text style={styles.graficoLinhaTitulo}>Lucro do mês por carro (R$) </Text>

                        <View style={{backgroundColor: 'transparent', width: '100%', height: '90%', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View name="valor-grafico" style={{width: '10%', height: '100%', backgroundColor: 'transparent', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: 6, marginTop: 5}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>5.000</Text>
                                </View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>4.000</Text></View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>3.000</Text></View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>2.000</Text></View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>1.000</Text></View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>0</Text></View>
                            </View>

                            <View style={{height: '100%', width: 10, backgroundColor: 'transparent', position: 'absolute', width: '65%', left: '10%', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 12}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                            </View>


                            <View name="linha-grafico" style={{width: '65%', height: '100%', flexDirection: 'row', zIndex: 5, backgroundColor: 'transparent'}}>
                                   {
                                        graficLinhaValues.map((value, index) => 
                                        <View key={index} style={{height: '100%', width: 100 / graficLinhaValues.length + '%', paddingHorizontal: 2, flexDirection: 'row', alignItems: 'flex-end'}}>
                                            <View style={{
                                                        width: '100%',
                                                        backgroundColor: value.cor, 
                                                        height: value.valor,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderTopLeftRadius: 3,
                                                        borderTopRightRadius: 3}}>
                                            <Text style={{fontWeight: 'bold', color: 'white'}}>{value.valor}</Text>
                                            </View>
                                        </View>)
                                    }
                            </View>
                            <View name="cores-grafico" style={{width: '25%', height: '100%', paddingLeft: 20}}>
                                <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center', marginTop: '86%'}}>
                                    <View style={[styles.quadrado, {backgroundColor: graficLinhaValues[0].cor}]}></View>
                                    <Text style={styles.quadradoText}>Corsa</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                    <View style={[styles.quadrado, {backgroundColor: graficLinhaValues[1].cor}]}></View>
                                    <Text style={styles.quadradoText}>HB20</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                    <View style={[styles.quadrado, {backgroundColor: graficLinhaValues[2].cor}]}></View>
                                    <Text style={styles.quadradoText}>Savero</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginBottom: 5, alignItems: 'center'}}>
                                    <View style={[styles.quadrado, {backgroundColor: graficLinhaValues[2].cor}]}></View>
                                    <Text style={styles.quadradoText}>Hylux</Text>
                                </View>
                            </View>
                        </View>
                    </Grafico>

                    
                    <Grafico style={{flexDirection: 'column'}}>
                        <Text style={styles.graficoLinhaTitulo}>Consumo de energia - KWh/m²</Text>

                        <View style={{backgroundColor: 'transparent', width: '100%', height: '90%', flexDirection: 'row'}}>
                            <View name="valor-grafico" style={{width: '10%', height: '100%', backgroundColor: 'transparent', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: 6, marginTop: 5}}>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>10</Text></View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>7,5</Text></View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>5</Text></View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>2,5</Text></View>
                                <View><Text style={{fontSize: 10, color: '#2D8BBA', fontWeight: 'bold',}}>0</Text></View>
                            </View>

                            <View style={{height: '100%', width: 10, backgroundColor: 'transparent', position: 'absolute', width: '65%', left: '10%', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 12}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                                <View style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}></View>
                            </View>


                            <View name="linha-grafico" style={{width: '65%', height: '100%', flexDirection: 'row', zIndex: 5, backgroundColor: 'transparent'}}>
                                   {
                                        graficLinhaDoisValue.map((value, index) => 
                                        <View key={index} style={{height: '100%', width: 100 / graficLinhaDoisValue.length + '%', paddingHorizontal: 2, flexDirection: 'row', alignItems: 'flex-end'}}>
                                            <View style={{width: '100%', alignItems: 'center'}}>
                                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#03295B'}}>{value.valor}</Text>
                                            <View style={{
                                                        width: '100%',
                                                        backgroundColor: value.cor, 
                                                        height: value.valor,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'flex-end',
                                                        borderTopLeftRadius: 3,
                                                        borderTopRightRadius: 3}}>
                                                            <AnimatePresence>
                                                            {visible && <MotiView
                                                                        from={{
                                                                            backgroundColor: '#5379AB', height: 0, width: '100%', opacity: 0.5,
                                                                        }}
                                                                        animate={{
                                                                            backgroundColor: '#5379AB', height: value.valorPassado, width: '100%', opacity: 0.5,
                                                                        }}
                                                                        exit={{
                                                                            backgroundColor: '#5379AB', height: 0, width: '100%', opacity: 0.5,

                                                                        }}
                                                                        transition={{
                                                                            type: 'timing',
                                                                            duration: 1300,
                                                                        }}
                                                                        style={{
                                                                            borderTopLeftRadius: 3,
                                                                            borderTopRightRadius: 3
                                                                        }}
                                                                    >
                                                                    </MotiView>}
                                                            </AnimatePresence>
                                            </View>
                                            </View>
                                        </View>)
                                    }
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', paddingLeft: 17, alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => setVisible(true)}
                                style={{backgroundColor: '#03295B', height: 50, width: 50, borderRadius: 60, alignItems: 'center', justifyContent: 'center'}}>
                                        {verIcon()}
                                </TouchableOpacity> 
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