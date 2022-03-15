import React, {useState} from "react";
import * as Print from 'expo-print';
import {shareAsync} from "expo-sharing";

import Header from '../../../components/Header'

import { TextInput, TouchableOpacity, View, Text } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";

export default function({navigation}){

    const [selectedPrinter, setSelectedPrinter] = React.useState();

    const arrayPessoas = [
        {nome: "Emanuel Vilela", cargo: "CEO", departamento: "Administrativo", cargaHoraria: "9 horas", dataAdmissao: "19/09/22"},
        {nome: "Joel Neto", cargo: "Co-CEO", departamento: "Administrativo", cargaHoraria: "9 horas", dataAdmissao: "19/09/22"},
        {nome: "Leonardo Ferreira", cargo: "CEO", departamento: "Administrativo", cargaHoraria: "9 horas", dataAdmissao: "19/09/22"},
        {nome: "Samuel", cargo: "CEO", departamento: "Administrativo", cargaHoraria: "9 horas", dataAdmissao: "19/09/22"},

    ];

    const print = async () => {
        await Print.printAsync({
            html: criarTabelaDinamica(),
            printerUrl: selectedPrinter?.url, 
        });
    }

    const criarTabelaDinamica = () => {
        var tabela = '';
        for(let i in arrayPessoas){
            const item = arrayPessoas[i];
            tabela = tabela + `
            <div class="tabelas">
                <div class="p">${item.nome}</div>
                <div class="p">${item.cargo}</div>
                <div class="p">${item.departamento}</div>
                <div class="p">${item.cargaHoraria}</div>
                <div class="p">${item.dataAdmissao}</div>
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

    return(
        <View style={{backgroundColor: '#011631', flex: 1}}>
            <StatusBar hidden/>
            <Header pageName="Colaboradores"/>
            <View style={{padding: 10}}>
                <View style={{height: 35, backgroundColor: '#285084', borderRadius: 5, flexDirection: 'row'}}>
                    <TouchableOpacity style={{width: '15%', height: '100%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 5, borderTopLeftRadius: 5}}><Icon name="search" style={{color: 'white', fontSize: 19}}/></TouchableOpacity>
                    <TextInput placeholder="Pesquise pelo nome..." style={{paddingLeft: 10, width: '85%', color: 'white'}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 30, marginTop: 7}}>
                    <TouchableOpacity style={{backgroundColor: '#285084', height: '100%', width: '40%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                            <Icon name="plus" style={{color: 'white', fontSize: 13, marginRight: 5}}/>
                        </View>
                        <Text style={{color: 'white', fontSize: 12}}>Lista de colaboradores</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#285084', height: '100%', width: '29%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="plus" style={{color: 'white', fontSize: 13, marginRight: 5}}/>
                        <Text style={{color: 'white', fontSize: 13}}>Colaborador</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={print}
                    style={{backgroundColor: '#285084', height: '100%', width: '28%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="file" style={{color: 'white', fontSize: 11, marginRight: 5, backgroundColor: 'gray'}}/>
                        <Text style={{color: 'white', fontSize: 13}}>Relatorio PDF</Text>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <View style={{backgroundColor: '#285084', borderRadius: 5, padding: 10, flexDirection: 'row', marginTop: 7}}>
                        <View style={{width: '90%'}}>
                            <View style={{width: '100%', borderBottomWidth: 1, backgroundColor: 'transparent', borderColor: 'gray'}}><Text style={{color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 3}}>Emanuel Vilela de Souza</Text></View>
                            <View style={{marginTop: 5, flexDirection: 'row'}}>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Cargo: CEO</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Admissão: 17/02/2022</Text>
                                </View>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Departamento: Comercial</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Banco de horas: 8</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{width: '10%', height: '40%', alignItems: 'flex-end'}}><IconMaterial name="dots-vertical" style={{fontSize: 19, color: 'white'}}/></TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: '#285084', borderRadius: 5, padding: 10, flexDirection: 'row', marginTop: 7}}>
                        <View style={{width: '90%'}}>
                            <View style={{width: '100%', borderBottomWidth: 1, backgroundColor: 'transparent', borderColor: 'gray'}}><Text style={{color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 3}}>Leonardo Ferreira de Brito</Text></View>
                            <View style={{marginTop: 5, flexDirection: 'row'}}>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Cargo: Co-CEO</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Admissão: 17/02/2022</Text>
                                </View>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Departamento: Comercial</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Banco de horas: 8</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{width: '10%', height: '40%', alignItems: 'flex-end'}}><IconMaterial name="dots-vertical" style={{fontSize: 19, color: 'white'}}/></TouchableOpacity>
                    </View>
                    
                </View>
            </View>

        </View>
    );
}