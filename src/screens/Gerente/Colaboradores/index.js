// React Components
import React, {useState, useReducer, useEffect} from "react";

// React-Native Components
import { TextInput, TouchableOpacity, View, Text, ScrollView, StyleSheet, FlatList } from "react-native";

// Expo Components
import * as Print from 'expo-print';
import {shareAsync} from "expo-sharing";
import { StatusBar } from "expo-status-bar";

// App Components
import Header from '../../../components/Header';

// Libs Components
import Icon  from "react-native-vector-icons/FontAwesome";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { AnimatePresence, MotiView } from "moti";

// Data
import colaboradoresArray from "./AdicionarColaborador/colaboradoresArray";

export default function({navigation}){

    // constantes

    const [selectedPrinter, setSelectedPrinter] = React.useState();

    const dataAdmissao = new Date();
    
    const [visibleAbaPDF, toggleAbaPDF] = useReducer((s)=> !s, false);
    const [visibleAbaAddColaborador, toggleAbaAddColaborador] = useReducer((s)=> !s, false);

    const [textoPesquisa, setTextoPesquisa] = useState();
    

    // arrays


    const [list, setList] = useState(colaboradoresArray);

    useEffect(()=> {
        if(textoPesquisa === ""){
            setList(colaboradoresArray);
        }else{
            setList(colaboradoresArray.filter(item => {
                if(item.nome.indexOf(textoPesquisa) > -1){
                    return true;
                } else{
                    return false;
                }
            }));
        }
    }, [textoPesquisa]);

    /*
    useEffect(()=> {
        if(textoPesquisa === ""){
            setList(colaboradoresArray);
        }else{
            setList(colaboradoresArray.filter(item => {
                if(item.nome.toLowerCase().indexOf(textoPesquisa.toLowerCase()) > -1){
                    return true;
                } else{
                    return false;
                }
            }));
        }
    }, [textoPesquisa]);
    */
    //

    // funções


    const print = async () => {
        await Print.printAsync({
            html: criarTabelaDinamica(),
            printerUrl: selectedPrinter?.url, 
        });
    }

    const printToFile = async () => {
        const { uri } = await Print.printToFileAsync({
          html: criarTabelaDinamica()
        });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }

    const criarTabelaDinamica = () => {
        var tabela = '';
        for(let i in colaboradoresArray){
            const item = colaboradoresArray[i];
            tabela = tabela + `
            <div class="tabelas">
                <div class="p" id="nome">${item.nome}</div>
                <div class="p" id="nome">${item.cargo}</div>
                <div class="p" id="nome">${item.departamento}</div>
                <div class="p" id="nome">${item.cargaHoraria}</div>
                <div class="p" id="nome">${item.dataAdmissao}</div>
            </div>`
        }
        
        
        const html = `<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Colaboradores</title>
            <style>
                body{
                    margin: 0;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 40px;
                    flex-direction: column;
                }
                #nome{
                    font-size: 10px;
                }
                #container-colaboradores{
                    height: 60px;
                    width: 80%;
                    border: 1px solid black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                }
                h1{
                    font-size: 30px;
                    font-family: Arial, Helvetica, sans-serif;
                    margin: 0;
                }
                img{
                    margin: 0;
                }
                #container-titulos{
                    width: 80%;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 2px solid gray;
                    margin-bottom: 20px;
                    text-align: center;
                }
                #container-titulos > p{
                    font-family: Arial, Helvetica, sans-serif;
                    width: 20%;
                }
                #container-tabela{
                    width: 80%;
                }
                .tabelas{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    text-align: center;
                }
                .tabelas > .p{
                    width: 20%;
                    align-items: flex-start;
                    background-color: lightgray;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
        
            </style>
        </head>
        <body>
            <div id="container-colaboradores">
                <img src="../../../../../../img/logo.png" style="height: 50px; width: 50px;">
                <h1>Aloccar</h1>
            </div>
            <div id="container-titulos">
                <p>Nome</p>
                <p>Cargo</p>
                <p>Dept.</p>
                <p>Carga horária</p>
                <p>Admissão</p>
            </div>
            <div id="container-tabela">
                ${tabela}
            </div>
        </body>
        </html>`
        ;
            return html;
        }

        function AbaPDF(){
            return (
                <MotiView 
                from={{
                    height: 0,
                    opacity: 0,
                    marginBottom: 0
                }}
                animate={{
                    height: 40,
                    opacity: 1,
                    marginBottom: 10
                }}
                exit={{
                    height: 0,
                    opacity: 0,
                    marginBottom: 0
                }}
                transition={{
                      type: 'timing',
                      duration: 700,
                }}
                style={{flexDirection: 'row', justifyContent: 'space-between'}}
                >
                    <TouchableOpacity style={styles.pdfButton} onPress={print}>
                        <View style={{width: '70%', alignItems: 'center'}}><Text style={{color: '#fff'}}>Baixar PDF</Text></View>
                        <View style={{width: '30%', alignItems: 'center'}}><Icon style={styles.fontePadrao} name="download"/></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.pdfButton, {width: "58.5%"}]} onPress={printToFile}>
                        <View style={{width: '80%', alignItems: 'center'}}><Text style={{color: '#fff'}}>Compartihar PDF</Text></View>
                        <View style={{width: '20%', alignItems: 'center'}}><Icon style={styles.fontePadrao}  name="share-alt"/></View>
                    </TouchableOpacity>
                </MotiView>
            )
        }

        function AbaAddColaborador(){
            return (
                <MotiView 
                from={{
                    delay: 5,
                    height: 0,
                    opacity: 0,
                    marginBottom: 0
                }}
                animate={{
                    height: 40,
                    opacity: 1,
                    marginBottom: 10
                }}
                exit={{
                    height: 0,
                    opacity: 0,
                    marginBottom: 0
                }}
                transition={{
                    type: 'timing',
                    duration: 700,
                }}
                style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent', borderRadius: 5}}
                >
                   <TouchableOpacity style={[styles.botaoColaborador, {width: '40%'}]} onPress={() => salvarColaborador()}>
                       <Text style={[styles.fontePadrao, {fontSize: 13, margin: 0, color: 'lightgreen'}]}>Adicionar</Text>
                    </TouchableOpacity>
                   <TouchableOpacity style={[styles.botaoColaborador, {width: '29%'}]}>
                       <Text style={[styles.fontePadrao, {fontSize: 13, margin: 0, color: '#FF6961'}]}>Remover</Text>
                    </TouchableOpacity>
                   <TouchableOpacity style={[styles.botaoColaborador, {width: '28%'}]}>
                       <Text style={[styles.fontePadrao, {fontSize: 13, margin: 0, color: '#993399'}]}>Demitir</Text>
                    </TouchableOpacity>

                </MotiView>
            )
        }

        function openAbaPDF(){
            toggleAbaPDF();

            if(visibleAbaAddColaborador){
                toggleAbaAddColaborador();
            }
    
        }
        function openAbaColaborador(){
            toggleAbaAddColaborador();

            if(visibleAbaPDF){
                toggleAbaPDF();
            }
        }

    return(
        <View style={{backgroundColor: '#011631', flex: 1}}>
            <StatusBar hidden/>
            <Header pageName="Colaboradores"/>
            <ScrollView style={{paddingHorizontal: 10, marginTop: 10}}>
                <View style={{height: 35, backgroundColor: '#285084', borderRadius: 5, flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => pesquisarColaborador()}
                     style={{width: '15%', height: '100%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 5, borderTopLeftRadius: 5}}><Icon name="search" style={{color: 'white', fontSize: 19}}/></TouchableOpacity>
                    <TextInput
                    onChangeText={(texto) => setTextoPesquisa(texto)}
                    placeholderTextColor="#fff"
                    placeholder="Pesquise pelo nome..." style={{paddingLeft: 10, width: '85%', color: 'white'}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 30, marginTop: 7, marginBottom: 10}}>
                    <TouchableOpacity style={{backgroundColor: '#285084', height: '100%', width: '40%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                            <Icon name="plus" style={{color: 'white', fontSize: 13, marginRight: 5}}/>
                        </View>
                        <Text style={{color: 'white', fontSize: 10}}>Lista de colaboradores</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('AdicionarColaborador')}
                    style={{backgroundColor: '#285084', height: '100%', width: '29%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="plus" style={{color: 'white', fontSize: 13, marginRight: 5}}/>
                        <Text style={{color: 'white', fontSize: 10}}>Colaborador</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => openAbaPDF()}
                    style={{backgroundColor: '#285084', height: '100%', width: '28%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <IconAnt name="pdffile1" style={{color: 'white', fontSize: 11, marginRight: 5, backgroundColor: 'transparent'}}/>
                        <Text style={{color: 'white', fontSize: 10}}>Relatorio PDF</Text>
                    </TouchableOpacity>
                </View>
                <AnimatePresence>
                    {visibleAbaPDF && <AbaPDF />}
                    {visibleAbaAddColaborador && <AbaAddColaborador />}

                </AnimatePresence>
                <View style={{}}>
                    {
                        colaboradoresArray.map((item, index) => { return <View style={{backgroundColor: '#285084', borderRadius: 5, padding: 10, flexDirection: 'row', marginTop: 7}}>
                        <View style={{width: '90%'}}>
                            <View style={{width: '100%', borderBottomWidth: 1, backgroundColor: 'transparent', borderColor: 'gray'}}><Text style={{color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 3}}>{item.nome}</Text></View>
                            <View style={{marginTop: 5, flexDirection: 'row'}}>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Cargo: {item.cargo}</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Admissão: {item.dataAdmissao}</Text>
                                </View>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Departamento: {item.departamento}</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Banco de horas: {item.bancoDeHoras}</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{width: '10%', height: '40%', alignItems: 'flex-end'}}><IconMaterial name="dots-vertical" style={{fontSize: 19, color: 'white'}}/></TouchableOpacity>
                    </View>
                        })
                    }

                
                    <View style={{height: 100}}>

                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    pdfButton: {
        width: '40%', 
        height: '100%', 
        backgroundColor: '#3766A4', 
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    fontePadrao: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        marginLeft: 5
    },
    inputPequeno: {
        width: '83%',
        height: 30,
        backgroundColor: '#3766A4',
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 5,
        color: '#fff',

    },
    botaoColaborador: {
        height: '100%', 
        borderRadius: 5, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#3766A4'
    }
});