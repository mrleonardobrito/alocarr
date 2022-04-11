import React, { useState, useReducer } from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import {CarroView, Carro, BotaoEditar} from './style'

import Header from '../../../../components/Header'

import duster from '../img/carro_duster.png';

import Stars from 'react-native-stars'

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFF from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/core";


import dusterFront from '../../../../../car_photos/renault_duster/duster_front.jpg'
import dusterBack from '../../../../../car_photos/renault_duster/duster_back.jpg'
import dusterDrift from '../../../../../car_photos/renault_duster/duster_drift.jpg'

import { TextInputMask } from 'react-native-masked-text';

import { MotiView, MotiImage, AnimatePresence } from 'moti';

import { Picker } from '@react-native-picker/picker';

import automovel from '../../../../utils/carros';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native-web';

const {width} = Dimensions.get("window");


const starColor = '#' + '91B4E3'

export default function({route}){


    const [pickerArCond, pickerArCondToggle] = useReducer((s)=> !s, false);
    const [pickerVidro, pickerVidroToggle] = useReducer((s)=> !s, false);
    const [pickerTravaElet, pickerTravaToggle] = useReducer((s)=> !s, false);
    const [pickerAlarme, pickerAlarmeToggle] = useReducer((s)=> !s, false);
    const [pickerBancoCouro, pickerBancoCouroToggle] = useReducer((s)=> !s, false);
    const [pickerRetrovisorElet, pickerRetrovisorEletToggle] = useReducer((s)=> !s, false);

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState(['Ford', 'Ferrari']);
    const [ano, setAno] = useState('');
    const [grupo, setGrupo] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [chassi, setChassi] = useState('');
    const [combustivel, setCombustivel] = useState('');
    const [cor, setCor] = useState('');
    const [valorPagoCarro, setValorPagoCarro] = useState('');
    const [valorReposicao, setValorReposicao] = useState('');
    const [valorLocacao, setValorLocacao] = useState('');
    const [cilindrada, setCilindrada] = useState('');
    const [codGPS, setCodGPS] = useState('');
    const [cambio, setCambio] = useState('');
    const [numeroSerie, setNumeroSerie] = useState('');
    const [fornecedor, setFornecedor] = useState('');
    const [local, setLocal] = useState('');
    const [obs, setObs] = useState('');
    const [obsCarac, setObsCarac] = useState('');

    const [ultimaRevisao, setUltimaRevisao] = useState('');
    const [proximaRevisao, setProximaRevisao] = useState('');
    const [trocaDeOleo, setTrocaDeOleo] = useState('');
    const [motor, setMotor] = useState('');
    const [numPassageiros, setNumPassageiros] = useState('');
    const [numMalas, setNumMalas] = useState('');
    const [numPortas, setNumPortas] = useState('');
    const [numMarchas, setNumMarchas] = useState('');
    const [descCarro, setDescCarro] = useState('');
    const [quilometragem, setQuilometragem] = useState('');

    const [corDefault, setCorDefault] = useState('#0e0e0e');
    const corDefaultBad = 'red';
    
    const [corNome, setCorNome] = useState(corDefault);
    const [corCor, setCorCor] = useState(corDefault);
    const [corDesc, setCorDesc] = useState(corDefault);
    const [corUltRevisao, setCorUltRevisao] = useState(corDefault);
    const [corProxRevisao, setCorProxRevisao] = useState(corDefault);
    const [corQuilometragem, setCorQuilometragem] = useState(corDefault);
    const [corCodGPS, setCorCodGPS] = useState(corDefault);
    const [corPlaca, setCorPlaca] = useState(corDefault);
    const [corCombustivel, setCorCombustivel] = useState(corDefault);
    const [corTrocaDeOleo, setCorTrocaDeOleo] = useState(corDefault);
    const [corMotor, setCorMotor] = useState(corDefault);
    const [corChassi, setCorChassi] = useState(corDefault);
    const [corNumPassageiro, setCorNumPassageiros] = useState(corDefault);
    const [corNumMalas, setCorNumMalas] = useState(corDefault);
    const [corNumPortas, setCorNumPortas] = useState(corDefault);
    const [corNumMarchas, setCorNumMarchas] = useState(corDefault);

    const borderChange = () => {
        
        validaNome();
        validaDesc();
        validaUltRevisao();
        validaProxRevisao();
        validaMotor();
        validaChassi();
        validaNumPassageiros();
        validaPlaca();
        validaQuilometragem();
        validaCodGPS();
        validaCombustivel();
        validaTrocaDeOleo();
        validaNumPortas();
        validaNumMalas();
        validaNumMarchas();
        validaCor();
    }

    //caso algum campo seja enviado vazio, ele o poe vermelho
    const validaNome = () => {if(nome == ''){
        setCorNome(corDefaultBad);
        return console.log('Nome');
        }
    }
    const validaDesc = () => {if(descCarro == ''){
        setCorDesc(corDefaultBad);
        return console.log('Descrição');
        }
    }
    const validaUltRevisao = () => {if(ultimaRevisao == ''){
        setCorProxRevisao(corDefaultBad);
        return console.log('Ultima Revisão');
        }
    }
    const validaProxRevisao = () => {if(proximaRevisao == ''){
        setCorUltRevisao(corDefaultBad);
        return console.log('Próxima Revisão');
        }
    }
    const validaQuilometragem = () => {if(quilometragem == ''){
        setCorQuilometragem(corDefaultBad);
        return console.log('Quilometragem');
        }
    }
    const validaCodGPS = () => {if(codGPS == ''){
        setCorCodGPS(corDefaultBad);
        return console.log('Código GPS');
        }
    }
    const validaCombustivel= () => {if(combustivel == ''){
        setCorCombustivel(corDefaultBad);
        return console.log('Combustível');
        }
    }
    const validaTrocaDeOleo= () => {if(trocaDeOleo == ''){
        setCorTrocaDeOleo(corDefaultBad);
        return console.log('Troca De Oleo');
        }
    }
    const validaPlaca = () => {if(placa == ''){
        setCorPlaca(corDefaultBad);
        return console.log('Placa');
        }
    }
    const validaMotor = () => {if(motor == ''){
        setCorMotor(corDefaultBad);
        return console.log('Motor');
        }
    }
    const validaNumPassageiros = () => {if(numPassageiros == ''){
        setCorNumPassageiros(corDefaultBad);
        return console.log('Passageiros');
        }
    }
    const validaChassi = () => {if(chassi == ''){
        setCorChassi(corDefaultBad);
        return console.log('Chassi');
        }
    }
    const validaCor = () => {if(cor == ''){
        setCorCor(corDefaultBad);
        return console.log('Cor');
        }
    }
    const validaNumPortas = () => {if(numPortas == ''){
        setCorNumPortas(corDefaultBad);
        return console.log('Número de Portas');
        }
    }
    const validaNumMalas = () => {if(numMalas == ''){
        setCorNumMalas(corDefaultBad);
        return console.log('Numero de Malas');
        }
    }
    const validaNumMarchas = () => {if(numMarchas == ''){
        setCorNumMarchas(corDefaultBad);
        return console.log('Número de Marchas');
        }
    }

    // caso o campo esteja vazio de início, ele fica neutro. caso ele seja preenchido, fica verde

    const corValorNome = () => {
        if(nome == ' ' || nome == 0){return corNome}
        else{return 'green'}
    }
    const corValorDesc = () => {
        if(descCarro == ' ' || descCarro == 0){return corDesc}
        else{return 'green'}
    }
    const corValorUltRevisao = () => {
        if(ultimaRevisao == ' ' || ultimaRevisao == 0){return corUltRevisao}
        else{return 'green'}
    }
    const corValorProxRevisao = () => {
        if(proximaRevisao == ' ' || proximaRevisao == 0){return corProxRevisao}
        else{return 'green'}
    }
    const corValorQuilometragem = () => {
        if(quilometragem == ' ' || quilometragem == 0){return corQuilometragem}
        else{return 'green'}
    }
    const corValorCodGPS = () => {
        if(codGPS == ' ' || codGPS == 0){return corCodGPS}
        else{return 'green'}
    }
    const corValorCombustivel = () => {
        if(combustivel == ' ' || combustivel == 0){return corCombustivel}
        else{return 'green'}
    }
    const corValorTrocaDeOleo = () => {
        if(trocaDeOleo == ' ' || trocaDeOleo == 0){return corTrocaDeOleo}
        else{return 'green'}
    }
    const corValorPlaca = () => {
        if(placa == ' ' || placa == 0){return corPlaca}
        else{return 'green'}
    }
    const corValorMotor = () => {
        if(motor == ' ' || motor == 0){return corMotor}
        else{return 'green'}
    }
    const corValorPassa = () => {
        if(numPassageiros == ' ' || numPassageiros == 0){return corNumPassageiro}
        else{return 'green'}
    }
    const corValorChassi = () => {
        if(chassi == ' ' || chassi == 0){return corChassi}
        else{return 'green'}
    }
    const corValorCor = () => {
        if(cor == ' ' || cor == 0){return corCor}
        else{return 'green'}
    }
    const corValorNumMalas = () => {
        if(numMalas == ' ' || numMalas == 0){return corNumMalas}
        else{return 'green'}
    }
    const corValorNumPortas = () => {
        if(numPortas == ' ' || numPortas == 0){return corNumPortas}
        else{return 'green'}
    }
    const corValorNumMarchas = () => {
        if(numMarchas == ' ' || numMarchas == 0){return corNumMarchas}
        else{return 'green'}
    }


    const pageName = 'Detalhes';
    const [decidir, setDecidir] = useState(1);
    const navigation = useNavigation();

  
    
    const [colorTrueEspeci, setColorTrueEspeci] = useState(true);
    const [colorTrueDeta, setColorTrueDeta] = useState(false);
    const [colorTrueAva, setColorTrueAva] = useState(false);


    const idCarro = route.params.id;

    const crr = automovel[idCarro];

    const avaluation = () => {
        return console.log(umaEstrela(),duasEstrela());
    }
    
    function umaEstrela(){
        return crr.avaliacao[0];
    }
    function duasEstrela(){
        return crr.avaliacao[1];
    }
    function tresEstrela(){
        return crr.avaliacao[2];
    }
    function quatroEstrela(){
        return crr.avaliacao[3];
    }
    function cincoEstrela(){
        return crr.avaliacao[4];
    }

    
    const starValue = 7;

    const calculaStarValue = umaEstrela() + duasEstrela() + tresEstrela() + quatroEstrela() + cincoEstrela();

    const marchasSituacaoC = ', com ' + crr.especificacoes.numMarchas + ' marchas'

    function marchasSituacao(){
        if(crr.especificacoes.manual){
            return marchasSituacaoC;
        }else{
            return '';
        }
    }
    function decidirCambio(){
        if(crr.especificacoes.manual){
            return 'Manual';
        }
        if(crr.especificacoes.manual == false){
            return 'Automático';
        }
        return console.log(crr.especificacoes.manual)
    }

    function mediaStars(){
        const starPercent = (cincoEstrela() * 100) / calculaStarValue;
        return starPercent.toFixed(2);
    }
    function mediaStars2(){
        const starPercent = (quatroEstrela() * 100) / calculaStarValue;
        return starPercent.toFixed(2);
    }function mediaStars3(){
        const starPercent = (tresEstrela() * 100) / calculaStarValue;
        return starPercent.toFixed(2);
    }function mediaStars4(){
        const starPercent = (duasEstrela() * 100) / calculaStarValue;
        return starPercent.toFixed(2);
    }function mediaStars5(){
        const starPercent = (umaEstrela() * 100) / calculaStarValue;
        return starPercent.toFixed(2);
    }

    function colorConferirEspeci(){
        if(colorTrueEspeci == false){
            return <TouchableOpacity onPress={() => conferirAbaUm()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'transparent'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Especificações</Text></View>
                    </TouchableOpacity>
        }else{
            return <TouchableOpacity onPress={() => conferirAbaUm()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1, backgroundColor: '#5379AB'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Especificações</Text></View>
                    </TouchableOpacity>

        }
    }
    
    function colorConferirDeta(){
        if(colorTrueDeta == false){
            return <TouchableOpacity onPress={() => conferirAbaDois()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'transparent'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Detalhes</Text></View>
                    </TouchableOpacity>
        }else{
            return <TouchableOpacity onPress={() => conferirAbaDois()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1, backgroundColor: '#5379AB'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Detalhes</Text></View>
                    </TouchableOpacity>

        }
    }
    function colorConferirAva(){
        if(colorTrueAva == false){
            return <TouchableOpacity onPress={() => conferirAbaTres()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'transparent'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Avaliações</Text></View>
                    </TouchableOpacity>
        }else{
            return <TouchableOpacity onPress={() => conferirAbaTres()} style={{alignItems: 'center', justifyContent: 'center', width: 100/3 + '%', flex: 1, backgroundColor: '#5379AB'}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}><Text style={{color: 'white', fontWeight: 'bold'}}>Avaliações</Text></View>
                    </TouchableOpacity>

        }
    }
    function conferirAbaUm(){
        setDecidir(1);
        setColorTrueEspeci(true)

        if(colorTrueDeta == false){
            setColorTrueDeta(false)
        }
        if(colorTrueDeta){
            setColorTrueDeta(false)
        }

        if(colorTrueAva == false){
            setColorTrueAva(false)
        }
        if(colorTrueAva){
            setColorTrueAva(false)
        }
    }

    function conferirAbaDois(){
        setDecidir(2);
        setColorTrueDeta(true)

        if(colorTrueEspeci == false){
            setColorTrueEspeci(false)
        }
        if(colorTrueEspeci){
            setColorTrueEspeci(false)
        }

        if(colorTrueAva == false){
            setColorTrueAva(false)
        }
        if(colorTrueAva){
            setColorTrueAva(false)
        }
    }

    function conferirAbaTres(){
        setDecidir(3);
        setColorTrueAva(true)

        if(colorTrueEspeci == false){
            setColorTrueEspeci(false)
        }
        if(colorTrueEspeci){
            setColorTrueEspeci(false)
        }

        if(colorTrueDeta == false){
            setColorTrueDeta(false)
        }
        if(colorTrueDeta){
            setColorTrueDeta(false)
        }
    }


    function decidirAba(decidir){
        if(decidir == 1){
            return <View style={{backgroundColor: '#5379AB', flex: 1}}>
                <View style={{height: '53%'}}>
                    <View style={{backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, paddingTop: 20}}>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='users' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>{crr.especificacoes.numPassageiros} Passageiros</Text>
                        </View>
                        <View style={{width: 100, alignItems: 'center'}}>
                            <Icon name='cog' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>{decidirCambio()}</Text>
                        </View>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='briefcase' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>{crr.especificacoes.numMalas} Malas</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 15, paddingTop: 20}}>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='snowflake' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>Ar-condiconado</Text>
                        </View>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='door-open' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>{crr.especificacoes.numPortas} Portas</Text>
                        </View>
                        <View style={{width: 100/3 + '%', alignItems: 'center'}}>
                            <Icon name='cogs' style={{fontSize: 22, color: 'white'}}/>
                            <Text style={{fontSize: 11, color: 'white', fontWeight: 'bold'}}>Motor {crr.motor}</Text>
                            <Text>{avaluation()}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'transparent', padding: 10}}>
                    <ScrollView horizontal pagingEnabled style={{flex: 1, flexDirection: 'row'}}> 
                        <Image source={crr.imagem} style={{height: '100%', width: width / 2.1, resizeMode: 'contain'}}/> 
                        <Image source={crr.imagem} style={{height: '100%', width: width / 2.1, resizeMode: 'contain'}}/>                
                        <Image source={crr.imagem} style={{height: '100%', width: width / 2.1, resizeMode: 'contain'}}/>                
                    </ScrollView>
                </View>
                
            </View>
        }
        if(decidir == 2){
            return <View style={{backgroundColor: '#5379AB', flex: 1}}>
                <View>
                    <View style={{padding: 10}}>
                        <View style={{flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'space-between'}}>
                            <View style={{width: '50%', alignItems: 'flex-start'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>Cor: {crr.detalhes.cor}</Text>
                            </View>
                            <View style={{width: '50%', alignItems: 'flex-end'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>Modelo: {crr.modelo}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'space-between', marginTop: 5, marginBottom: 5}}>
                            <View style={{width: '40%', alignItems: 'flex-start'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>Ano: {crr.detalhes.ano}</Text>
                            </View>
                            <View style={{width: '60%', alignItems: 'flex-end'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>Combustível: {crr.combustivel}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 2, width: '100%', backgroundColor: 'lightgray'}}></View>
                    <View style={{padding: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 0}}>{decidirCambio()}{marchasSituacao()}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 10}}>Ar-condicionado</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 10}}>Trava elétrica</Text>
                    </View>
                    <View style={{height: 2, width: '100%', backgroundColor: 'lightgray'}}></View>
                    <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 0}}>Chassi: {crr.detalhes.chassi}</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 7}}>Última revisão: {crr.detalhes.ultimaRevisao}</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 7}}>Prox. revisão: {crr.detalhes.proximaRevisao}</Text>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 0}}>Troca de óleo: em {crr.detalhes.trocaDeOleo}km</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white', marginTop: 7}}>Cod. GPS: {crr.codGPS}</Text>
                        </View>
                    </View>
                </View>
            </View>
        }
        if(decidir == 3){
            return <View style={{backgroundColor: '#5379AB', flex: 1, padding: 10}}>
                <View style={{height: '35%', width: '100%', flexDirection: 'row'}}>
                    <View style={{height: '100%', width: '35%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <Text style={{fontSize: 30, color: 'white', marginTop: 2}}>{(mediaStars() / 100 * 5).toFixed(1)}</Text>
                        <Stars
                            default={mediaStars() / 100 * 5}
                            half={true}
                            starSize={20}
                            count={5}
                            fullStar={<IconF name='star' style={{fontSize: 20, color: '#ABCFFF'}}/>}
                            emptyStar={<IconF name='star-o' style={{fontSize: 20, color: '#ABCFFF'}}/>}
                            halfStar={<IconF name='star-half-empty' style={{fontSize: 20, color: '#ABCFFF'}}/>}

                        ></Stars>
                        <Text style={{fontSize: 16, color: 'white'}}>{calculaStarValue}</Text>
                    </View>
                    <View style={{height: '100%', width: '65%', backgroundColor: 'transparent', justifyContent: 'space-evenly'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>5</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: mediaStars() + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>4</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: mediaStars2() + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>3</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: mediaStars3() + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>2</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: mediaStars4() + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: 2, height: 100/5 + '%'}}>
                            <Text style={{fontSize: 11, color: 'white',}}>1</Text>
                            <View style={{width: '90%', height: '40%', backgroundColor: 'white', borderRadius: 10}}>
                                <View style={{height: '100%', width: mediaStars5() + '%', backgroundColor: '#ABCFFF', borderRadius: 10}}></View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{width: '100%', flexDirection: 'row', paddingTop: 5, marginTop: 10}}>
                    <View style={{width: '10%', alignItems: 'center'}}>
                        <View style={{height: 40, width: 40, backgroundColor: 'red', borderRadius: 60, borderColor: 'white', borderWidth: 1}}>
                            <Image source={require('../../../../../img/usopp.jpg')} style={{width: '100%', height: '100%', borderRadius: 100}} />
                        </View>
                    </View>
                    <View style={{width: '75%', backgroundColor: 'transparent', flexDirection: 'row', marginTop: 5}}>
                        <View style={{height: '35%', width: '50%', alignItems: 'flex-start', marginLeft: 5}}>
                            <View><Text style={{fontSize: 13, color: 'white'}}>Gabriel Favroir</Text></View>
                            <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 3}}>
                                <Stars
                                    default={starValue}
                                    half={true}
                                    starSize={9}
                                    count={5}
                                    fullStar={<IconF name='star' style={{fontSize: 9, color: '#ABCFFF'}}/>}
                                    emptyStar={<IconF name='star-o' style={{fontSize: 9, color: '#ABCFFF'}}/>}
                                    halfStar={<IconF name='star-half-empty' style={{fontSize: 9, color: '#ABCFFF'}}
                                    />}></Stars>
                                <View><Text style={{fontSize: 10, color: 'white', fontWeight: 'bold', marginLeft: 5}}>02 de janeiro</Text></View>
                            </View>
                        </View>
                    </View>
                    <View style={{width: '15%', backgroundColor: 'transparent', paddingTop: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{height: 40, width: 25, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'transparent', marginTop: 6}}>
                            <IconFF name='thumbs-up-sharp' style={{fontSize: 18, color: 'white'}}></IconFF>
                            <Text style={{fontSize: 11, color: 'white'}}>111</Text>
                        </View>
                        <View style={{height: 40, width: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}}>
                            <IconF name='ellipsis-v' style={{fontSize: 18, color: 'white'}}></IconF>
                        </View>
                    </View>
                </View>
                <View style={{padding: 5, marginLeft: 40, width: '85%'}}>
                    <Text style={{color: 'white', fontSize: 11}}>
                        No alto daquele cume
                        Plantei uma roseira
                        O vento no cume bate
                        A rosa no cume cheira

                        Quando vem a chuva fina
                        Salpicos no cume caem
                        Formigas no cume entram
                        Abelhas do cume saem

                        Quando cai a chuva grossa
                        A água do cume desce
                        O barro do cume escorre
                        O mato no cume cresce.
                    </Text>
                </View>
            </View>
        }
    }

    const [contasVisible, toggle] = useReducer((s)=> !s, 0)

    function animarPerfil(){
        if(contasVisible){
            return <MotiView style={{height: '100%', width: '100%', zIndex: 3}} 
                        from={{translateX: 0, translateY: 0}} 
                        animate={{translateX: width/3.2}} 
                        transition={{ type: 'timing',duration: 900}}>
                
                        <AnimatePresence>
                            <CarroView style={{marginTop: '49%'}}><MotiImage source={crr.imagem} 
                            style={{ width: '95%', height: '55%'}}
                            from={{scale: 1}} 
                            animate={{scale: 1.5}} 
                            exit={{scale: 1}}
                            transition={{ type: 'timing', duration: 900}}
                        /></CarroView>
                        </AnimatePresence>
                    </MotiView>
        }
        if(contasVisible == false){
            return <MotiView style={{height: '100%', width: '100%'}} 
                        from={{translateX: width/3.2, translateY: 0}} 
                        animate={{translateX: 0, translateY: 0}} 
                        transition={{ type: 'timing', duration: 500}}>
                
                            <CarroView style={{marginTop: '49%'}}><MotiImage source={crr.imagem} 
                                style={{ width: '95%', height: '55%'}}
                                from={{scale: 1.5}} 
                                animate={{scale: 1}} 
                                transition={{ type: 'timing', duration: 600}}
                            /></CarroView>
                    </MotiView>
        }
    }
    
    function decidirDetalhes(){
        if(contasVisible == false){
            return (
               <View style={{flex: 1}}>
                   <View style={{height: '32%', padding: 10, marginBottom: 15}}>
                        <BotaoEditar style={{alignSelf: 'flex-end'}} onPress={toggle}><Text style={{fontWeight: 'bold', color: 'white', fontSize: 13}}>Editar dados</Text></BotaoEditar>
                        <View style={{paddingLeft: 5}}>
                            <Text style={{fontSize: 23, fontWeight: 'bold'}}>{crr.nome}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, alignItems: 'flex-end'}}><View style={styles.textView}><Icon name='car' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Placa: {crr.placa}</Text></View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}><View style={styles.textView}><Icon name='tachometer-alt' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Quilometragem: {crr.quilometragem}km</Text></View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}><View style={styles.textView}><Icon name='calendar' style={styles.icon}></Icon></View><Text style={{color: 'gray', marginTop: 5}}>Proxima revisão: {crr.detalhes.proximaRevisao}</Text></View>
                        </View>
                    </View>
                    <View style={{flex: 1}}>

                        <View style={{flexDirection: 'row', width: '100%', backgroundColor: '#34598A', height: '10%'}}>
                            {colorConferirEspeci()}
                            {colorConferirDeta()}
                            {colorConferirAva()}
                        </View>
                        {decidirAba(decidir)}

                        
                        <View style={{justifyContent: 'center', backgroundColor: '#5379AB', padding: 7, height: '15%'}}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('Carros')}
                            style={{backgroundColor: 'white', height: '100%', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#5379AB'}}>Voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
               </View> 
            )
        }
        // Tela de Editar o Carro
        else{
            return <View style={{padding: 10, marginBottom: 15, flex: 1}}>
                    <TouchableOpacity onPress={toggle} style={{height: 35, width: '29%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF8B8B', borderRadius: 100, alignSelf: 'flex-end'}}>
                        <MotiView>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Cancelar</Text>
                        </MotiView>
                    </TouchableOpacity>
                    <ScrollView style={{backgroundColor: 'transparent', marginTop: 20, paddingHorizontal: 10}}>
                        <View style={{marginBottom: 10}}>
                            <Text style={[styles.textoTitulo, {marginBottom: 5, marginLeft: 10}]}>Nome do carro* </Text>
                            <TextInput
                            onChangeText={(text) => setNome(text)}
                            placeholder='Digite aqui...' 
                            style={[styles.input, {borderColor: corValorNome()}]}/>
                        </View>
                        <View style={{marginBottom: 10}}>
                            <Text style={[styles.textoTitulo, {marginBottom: 5, marginLeft: 10}]}>Descrição do carro </Text>
                            <TextInput
                            onChangeText={(text) => setDescCarro(text)}
                            placeholder='Digite aqui...' 
                            style={[styles.input, {borderColor: corValorDesc()}]}/>
                        </View>
                        <View style={{width: '100%', paddingHorizontal: 15, marginTop: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{width: '40%'}}>
                                    <Text style={{color: '#285084', fontWeight: 'bold', marginBottom: 2, marginLeft: 5}}>Última revisão*</Text>
                                    <TextInputMask
                                    type={'datetime'}
                                    options={{
                                      format: 'DD/MM/YYYY'
                                    }}
                                    value={ultimaRevisao}
                                    onChangeText={(text) => setUltimaRevisao(text)}
                                    placeholder='XX/XX/XXXX'
                                    style={[styles.input, {borderColor:  corValorUltRevisao()}]}/>
                                </View>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textoTitulo}>Proxima revisão*</Text>
                                    <TextInputMask
                                    type={'datetime'}
                                    options={{
                                      format: 'DD/MM/YYYY'
                                    }}
                                    value={proximaRevisao}
                                    onChangeText={(text) => setProximaRevisao(text)}
                                    placeholder='XX/XX/XXXX' 
                                    style={[styles.input, {borderColor:  corValorProxRevisao()}]}/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 15}}>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textoTitulo}>Quilometragem*</Text>
                                    <TextInput 
                                    onChangeText={(text) => setQuilometragem(text)}
                                    placeholder='Digite aqui...' 
                                    style={[styles.input, {borderColor: corValorQuilometragem()}]}/>
                                </View>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textoTitulo}>Código GPS*</Text>
                                    <TextInput 
                                    onChangeText={(text) => setCodGPS(text)}
                                    placeholder='Digite aqui...' 
                                    style={[styles.input, {borderColor: corValorCodGPS()}]}/>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{borderBottomColor:  corValorCombustivel(), borderTopColor: 'white', borderLeftColor: 'white', borderRightColor: 'white', borderWidth: 1, paddingBottom: 5}}>
                                <Text style={{color: '#285084', fontWeight: 'bold', marginBottom: 0, marginLeft: 5}}>Combustível*</Text>
                                <Picker 
                                pickerStyleType={true}
                                selectedValue={combustivel}
                                onValueChange={(text) => setCombustivel(text)}
                                style={{height: 20, marginBottom: 20}}>
                                    <Picker.Item label='Etanol' value='Etanol' style={{color: 'gray'}} />
                                    <Picker.Item label='Diesel' value='Diesel' style={{color: 'gray'}} />
                                    <Picker.Item label='Gasolina' value='Gasolina' style={{color: 'gray'}} />
                                </Picker>
                            </View>
                            <View style={{marginTop: 10}}>
                                <Text style={{color: '#285084', fontWeight: 'bold', marginBottom: 2, marginLeft: 5}}>Próxima troca de óleo*</Text>
                                <TextInputMask
                                type={'datetime'}
                                options={{
                                  format: 'DD/MM/YYYY'
                                }}
                                value={trocaDeOleo}
                                onChangeText={(text) => setTrocaDeOleo(text)}
                                placeholder='XX/XX/XXXX' 
                                style={[styles.input, {borderColor:  corValorTrocaDeOleo()}]}/>
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={{color: '#285084', fontWeight: 'bold', marginBottom: 2, marginLeft: 10, fontSize: 20}}>Imagens</Text>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={{color: '#285084', fontWeight: 'bold', marginBottom: 2, marginLeft: 10, fontSize: 20}}>Especificações</Text>
                            <View style={{width: '100%', paddingHorizontal: 15, marginTop: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textoTitulo}>Placa*</Text>
                                    <TextInput
                                    value={placa}
                                    onChangeText={(text) => setPlaca(text)}
                                    placeholder='XXXXXXX'
                                    style={[styles.input, {borderColor: corValorPlaca(placa)}]}/>
                                </View>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textoTitulo}>Motor*</Text>
                                    <TextInput
                                    value={motor}
                                    onChangeText={(text) => setMotor(text)}
                                    placeholder='XXXXXX'
                                    style={[styles.input, {borderColor: corValorMotor(motor)}]}/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 15}}>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textoTitulo}>Cor*</Text>
                                    <TextInput 
                                    onChangeText={(text) => setCor(text)}
                                    placeholder='Digite aqui...'
                                    style={[styles.input, {borderColor: corValorCor(cor)}]}/>
                                </View>
                                <View style={{width: '40%'}}>
                                    <Text style={styles.textoTitulo}>Chassi*</Text>
                                    <TextInput 
                                    onChangeText={(text) => setChassi(text)}
                                    placeholder='Digite aqui...' 
                                    style={[styles.input, {borderColor: corValorChassi(chassi)}]}/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 15}}>
                                <View style={{width: '30%'}}>
                                    <Text style={styles.textoTitulo}>Malas*</Text>
                                    <TextInputMask
                                    type='only-numbers'
                                    placeholder='00' 
                                    value={numMalas}
                                    onChangeText={(text) => setNumMalas(text)}
                                    style={[styles.input, {borderColor: corValorNumMalas(numMalas)}]}/>
                                </View>
                                <View style={{width: '30%'}}>
                                    <Text style={styles.textoTitulo}>Portas*</Text>
                                    <TextInputMask
                                    type='only-numbers'
                                    placeholder='00' 
                                    value={numPortas}
                                    onChangeText={(text) => setNumPortas(text)}
                                    style={[styles.input, {borderColor: corValorNumPortas(numPortas)}]}/>
                                </View>
                                <View style={{width: '30%'}}>
                                    <Text style={styles.textoTitulo}>Marchas*</Text>
                                    <TextInputMask
                                    type='only-numbers'
                                    placeholder='00' 
                                    value={numMarchas}
                                    onChangeText={(text) => setNumMarchas(text)}
                                    style={[styles.input, {borderColor: corValorNumMarchas(numMarchas)}]}/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 15}}>
                                <View style={{width: '30%'}}>
                                    <Text style={styles.textoTitulo}>Passageiros*</Text>
                                    <TextInputMask
                                    type='only-numbers'
                                    placeholder='00' 
                                    value={numPassageiros}
                                    onChangeText={(text) => setNumPassageiros(text)}
                                    style={[styles.input, {borderColor: corValorPassa(numPassageiros)}]}/>
                                </View>
                            </View>
                        </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity
                    onPress={() => borderChange()}
                    style={{height: 40, width: '100%', backgroundColor: '#295084', marginTop: 5, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Salvar modificações</Text>
                    </TouchableOpacity>
            </View>
        }
    }

    return(
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <StatusBar hidden/>
            <Header pageName={pageName}/>
            <View style={styles.profileHeader}>
                <View style={{width: 100, height: 100}}>
                    <AnimatePresence>
                        {animarPerfil()}
                    </AnimatePresence>
                </View>
            </View>
            {decidirDetalhes()}
            
        </View>
    );
}

const styles = StyleSheet.create({
    profileHeader: { 
        height: '12%',
        backgroundColor: '#002B64',
        justifyContent: 'flex-end',
        paddingLeft: 15,
    },
    icon: {
        color: 'gray', 
        marginRight: 10, 
        fontSize: 20
    },
    textView: {
        width: 40,
        alignItems: 'center'
    },
    textoTitulo: {
        color: '#285084',
        fontWeight: 'bold', 
        marginBottom: 2,
        marginLeft: 5
    },
    input: {
        borderRadius: 5, 
        height: 35, 
        width: '100%', 
        borderWidth: 1, 
        paddingLeft: 10
    },
    
});