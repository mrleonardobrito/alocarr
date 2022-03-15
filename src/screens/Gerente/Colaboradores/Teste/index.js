import React, {useReducer} from "react";

import { View, Text,TouchableOpacity, Button, StyleSheet, Platform } from "react-native";
import * as Print from 'expo-print';
import {shareAsync} from "expo-sharing";


// salve leo, essa variável html é só pq tem como eu compartilhar o pdf pelos apps, aí deixei aqui caso eu use
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
        <div class="tabelas">
            <div class="p">Emanuel Vilela</div>
            <div class="p">CEO</div>
            <div class="p">Administração</div>
            <div class="p">9 horas</div>
            <div class="p">19/09/22</div>
        </div>
        <div class="tabelas">
            <div class="p">Leonardo Ferreira</div>
            <div class="p">CEO</div>
            <div class="p">Administração</div>
            <div class="p">9 horas</div>
            <div class="p">19/09/22</div>
        </div>
        <div class="tabelas">
            <div class="p">Joel Neto</div>
            <div class="p">CEO</div>
            <div class="p">Administração</div>
            <div class="p">9 horas</div>
            <div class="p">19/09/22</div>
        </div>
    </div>
</body>
</html>`


export default function(){


    const arrayPessoas = [
        {nome: "Emanuel Vilela", cargo: "CEO", departamento: "Administrativo", cargaHoraria: "9 horas", dataAdmissao: "19/09/22"},
        {nome: "Joel Neto", cargo: "CEO", departamento: "Administrativo", cargaHoraria: "9 horas", dataAdmissao: "19/09/22"},
        {nome: "Leonardo Ferreira", cargo: "CEO", departamento: "Administrativo", cargaHoraria: "9 horas", dataAdmissao: "19/09/22"},

    ];
        
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
                <div class="tabelas">
                    <div class="p">Emanuel Vilela</div>
                    <div class="p">CEO</div>
                    <div class="p">Administração</div>
                    <div class="p">9 horas</div>
                    <div class="p">19/09/22</div>
                </div>
                ${tabela}
            </div>
        </body>
        </html>`
        ;
            return html;
        }

    const [selectedPrinter, setSelectedPrinter] = React.useState();

    const print = async () => {
        await Print.printAsync({
            html: criarTabelaDinamica(),
            printerUrl: selectedPrinter?.url, 
        });
      }
    
      const printToFile = async () => {
        const { uri } = await Print.printToFileAsync({
          html
        });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
      }
    
      const selectPrinter = async () => {
        const printer = await Print.selectPrinterAsync();
        setSelectedPrinter(printer);
      }


    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0e0e0e'}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={print} style={{height: 50, width: 100, backgroundColor: 'red'}}>

                </TouchableOpacity>
                <View style={styles.spacer} />
                <Button title='Enviar por' onPress={printToFile}/>
                {Platform.OS === 'ios' &&
                    <>
                    <View style={styles.spacer} />
                    <Button title='Selecione um app' onPress={selectPrinter}/>
                    <View style={styles.spacer} />
                    {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
                    </>
                }
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
