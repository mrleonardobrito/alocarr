/* Expo, React */

import { StatusBar } from 'expo-status-bar';

import React, {useReducer, useState, useEffect} from 'react';

/* VectorIcons */

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconConfig from 'react-native-vector-icons/FontAwesome';
import IconDot from 'react-native-vector-icons/Entypo'

import {MotiView, AnimatePresence} from 'moti';

/* StyledComponents */

import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import { 
    DrawerContainer, DrawerHeader, DrawerMain, DrawerFooter, DrawerHeaderTitle,
    CloseIcon, SearchInput, SearchContainer, SearchButton, ItemsContainer, ItemMain,
    ItemText, ItemIcon, FooterIcon, FooterImage, FooterUserName, ItemHelpMain, DrawerFooterContainer,
    ItemIconFooter, Luffy
} from './style';

const APP_NAME = 'Alocarr';
const pageName = 'Gerente';

import logoALocarr from '../../../img/logo.png'

export default function AdmDrawerContent({navigation}){

    function logo(){
        return <Image source={logoALocarr} style={{height: 40, width: 40}}/>
    }

    const localizacao = 'Arapiraca Garden Shopping';

    function confLogout(){
        console.log(APP_NAME)
        Alert.alert('Confirmação.', 'Tem certeza que desejas sair de sua conta?', [
            {
                text: 'Sim',
                onPress: () => {
                    navigation.navigate('LoginRouter');
                }
            },
            {
                text: 'Não',
                onPress: () => 0
            }
        ])

    }

    function verificarOpen(){
        if(visibleCadastroEspeci){
            console.log('Cadastro')
            toggleFinanceiro(false);
            toggleLocacoes(false);
        }
        if(visibleFinanceiro){
            console.log('Fina')
            toggleCadastroEspeci(true);
            toggleLocacoes(true);
        }
        if(visibleLocacoes){
            console.log('Loca')
            toggleCadastroEspeci(true);
            toggleFinanceiro(true);
        }
    }

    const [visibleCadastroEspeci, toggleCadastroEspeci] = useReducer((s)=> !s, false);
    const [visibleFinanceiro, toggleFinanceiro] = useReducer((s)=> !s, false);
    const [visibleLocacoes, toggleLocacoes] = useReducer((s)=> !s, false);


    
    function CadastrosGerais(){
        return(
            <MotiView
            from={{
                opacity: 0,
                height: 0,
                marginBottom: 0
              }}
            animate={{
                opacity: 1,
                height: 110,
                marginBottom: 0
              }}
            exit={{
                opacity: 0,
                height: 0,
                marginBottom: 0
            }}
            transition={
              {
                type: 'timing',
                duration: 700,
              }
            }

            style={{paddingLeft: 30}}

            >
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/3 + '%', alignItems: 'center'}}
                onPress={() => navigation.navigate('Carros')}
                >
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Veículos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/3 + '%', alignItems: 'center'}}
                onPress={() => navigation.navigate('Colaboradores')}
                >
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Colaboradores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/3 + '%', alignItems: 'center'}}>
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Fornecedor</Text>
                </TouchableOpacity>
            </MotiView>
        )}

    function Financeiro(){
        return(
            <MotiView
            from={{
                opacity: 0,
                height: 0,
                marginBottom: 0
              }}
            animate={{
                opacity: 1,
                height: 110,
                marginBottom: 0
              }}
            exit={{
                opacity: 0,
                height: 0,
                marginBottom: 0
            }}
            transition={
              {
                type: 'timing',
                duration: 700,
              }
            }

            style={{paddingLeft: 30}}

            >
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/3 + '%', alignItems: 'center'}}
                onPress={() => navigation.navigate('Financeiro')}
                >
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Veículos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/3 + '%', alignItems: 'center'}}>
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Colaboradores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/3 + '%', alignItems: 'center'}}>
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Fornecedor</Text>
                </TouchableOpacity>
            </MotiView>
        );
    }

    function Locacoes(){
        return(
            <MotiView
            from={{
                opacity: 0,
                height: 0,
                marginBottom: 0
              }}
            animate={{
                opacity: 1,
                height: 110,
                marginBottom: 0
              }}
            exit={{
                opacity: 0,
                height: 0,
                marginBottom: 0
            }}
            transition={
              {
                type: 'timing',
                duration: 700,
              }
            }

            style={{paddingLeft: 30}}

            >
                <TouchableOpacity 
                style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/4 + '%', alignItems: 'center'}}>
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Acessórios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/4 + '%', alignItems: 'center'}}>
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Multas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/4 + '%', alignItems: 'center'}}>
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Documentos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'transparent', height: 100/4 + '%', alignItems: 'center'}}>
                    <IconDot name='dot-single' style={[styles.itemFonte, {fontSize: 28, backgroundColor: 'transparent'}]}/>
                    <Text style={[styles.fonte, {fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}]}>Locados</Text>
                </TouchableOpacity>
            </MotiView>
        );
    }

    function Indicador(value){
        if(value == false){
            return(
                <MotiView 
                from={{rotate: '90deg'}}
                animate={{rotate: '0deg'}}
                exit={{rotate: '90deg'}}
                transition={{type: 'timing',duration: 800}}
                style={{marginLeft: 10, backgroundColor: 'transparent', justifyContent: 'center'}}>
                    <Icon name="angle-right" style={styles.itemFonte}/>
                </MotiView>
            )
        }
        if(value){
            return(
                <MotiView 
                from={{rotate: '0deg'}}
                animate={{rotate: '90deg'}}
                exit={{rotate: '0deg'}}
                transition={{type: 'timing',duration: 800}}
                style={{marginLeft: 10, backgroundColor: 'transparent', justifyContent: 'center'}}>
                    <Icon name="angle-right" style={styles.itemFonte}/>
                </MotiView>
            )
        }
    }

    const [decidir, setDecidir] = useState(false);

    function openAnimation(value){
        if(value == 1){
            return(<CadastrosGerais />);
        }
        if(value == 2){
            return(<Financeiro />);
        }
        if(value == 3){
            return(<Locacoes />);
        }
    }

    return(
        <DrawerContainer>
            
            <DrawerHeader style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Gerente')} style={{marginTop: 5}}><DrawerHeaderTitle>{logo()}<Text style={{fontSize: 23, color: '#fff', fontWeight: 'bold'}}>{pageName}</Text></DrawerHeaderTitle></TouchableOpacity>
                <CloseIcon onPress={()=> navigation.closeDrawer()} st><Icon name="times" style={styles.fonte}/></CloseIcon>
            </DrawerHeader>
            <DrawerMain style={{backgroundColor: '#295084', justifyContent: 'space-between'}}>
                <View>
                    <SearchContainer>
                        <SearchButton><Icon name="search" style={styles.fonteSearch}/></SearchButton>
                        <SearchInput placeholderTextColor="#fff" placeholder="Pesquisar..." style={{color: '#fff'}}/>
                    </SearchContainer>
                    <ItemsContainer>
                        <ItemMain onPress={() => navigation.navigate('Graficos')}>
                            <ItemIcon><Icon name="chart-bar" style={styles.itemFonte}/></ItemIcon>
                            <ItemText>Estatísticas</ItemText>
                        </ItemMain>
                        <ItemMain onPress={toggleCadastroEspeci}>
                            <ItemIcon><Icon name="cash-register" style={styles.itemFonte}/></ItemIcon>
                            <ItemText>Cadastro gerais</ItemText>
                            <AnimatePresence>
                                {Indicador(visibleCadastroEspeci)}
                            </AnimatePresence>
                        </ItemMain>
                        <AnimatePresence>
                        {visibleCadastroEspeci && openAnimation(1)}
                        </AnimatePresence>
                        <ItemMain onPress={toggleFinanceiro}>
                            <ItemIcon><Icon name="money-bill-wave" style={styles.itemFonte}/></ItemIcon>
                            <ItemText>Financeiro</ItemText>
                            <AnimatePresence>
                                {Indicador(visibleFinanceiro)}
                            </AnimatePresence>
                        </ItemMain>
                        <AnimatePresence>
                        {visibleFinanceiro && openAnimation(2)}
                        </AnimatePresence>
                        <ItemMain onPress={toggleLocacoes}>
                            <ItemIcon><Icon name="car" style={styles.itemFonte}/></ItemIcon>
                            <ItemText>Locações</ItemText>
                            <AnimatePresence>
                                {Indicador(visibleLocacoes)}
                            </AnimatePresence>
                        </ItemMain>
                        <AnimatePresence>
                        {visibleLocacoes && openAnimation(3)}
                        </AnimatePresence>
                        <ItemMain onPress={() => navigation.navigate('Carros')}>
                            <ItemIcon><IconConfig name="gear" style={styles.itemFonte}/></ItemIcon>
                            <ItemText>Configurações</ItemText>
                        </ItemMain>
                    </ItemsContainer>
                </View>
                <View>
                    <ItemHelpMain onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${localizacao}`)}>
                        <ItemIconFooter><Icon name="question-circle" style={styles.itemFonte}/></ItemIconFooter>
                        <ItemText>Ajuda</ItemText>
                    </ItemHelpMain>
                </View>
            </DrawerMain>                
            <DrawerFooter>
                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 5, paddingRight: 10, height: 100}}>
                    <View style={{alignItems: 'flex-start', flexDirection: 'row', alignItems: 'center'}}>
                        <Luffy
                        source={require('./luffy.jpg')}
                        style={{borderWidth: 2, borderColor: 'white'}}
                        />
                        <FooterUserName>Linaldo Brito</FooterUserName>
                    </View>
                    <TouchableOpacity onPress={()=> confLogout()} style={{justifyContent: 'space-evenly'}}><FooterIcon><Icon name="sign-out-alt" style={styles.footerIcon}/></FooterIcon></TouchableOpacity>
                </View>
            </DrawerFooter>
        </DrawerContainer>
    );
}

const styles = StyleSheet.create({
    fonte: {
        fontSize: 20,
        color: "#fff",
    },
    fonteSearch: {
        fontSize: 25,
        color: '#fff'
    },
    itemFonte: {
        fontSize: 19,
        color: "#fff"
    },
    footerIcon: {
        fontSize: 30,
        color: "#fff"
    },
    shape: {
        height: 245,
        width: '100%',
        borderRadius: 5,
        marginRight: 10,
    },
});