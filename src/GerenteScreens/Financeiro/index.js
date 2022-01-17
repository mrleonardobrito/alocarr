/* Expo, React */

import React, {useEffect, useReducer, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Animated, Pressable, Alert } from 'react-native';

/* VectorIcons */

import Icon from 'react-native-vector-icons/FontAwesome5';

/* ReactNavigation */

import { useNavigation } from "@react-navigation/core";

/* StyledComponents */

import { Header, H1Section, H1, IconSection, ZapIcon, BarsIcon } from '../Gerente/style'
import { 
    ResumoButton, ResumoIcon, ResumoText, FinanceiroButtonContainer,
    FuncaoContainer, AdicionarButton, QuitarButton, ExcluirButton,
    TextButton, FuncaoIcon, FuncContainer, FinancasContainer, SearchDiv,
    SearchInput, SearchTextInput, SearchButton, SituacoesDiv, SituacoesItem,
    SitItemRight, SitItemLeft, ItemText, ItemTextRight, ItemBolinha,
    ItemBolinha2, Footer, Main, Entradas
} from './style';

import {
    QuitarHeader, HeaderText, HeaderButton, QuitarMain, MainSection, 
    SectionTextButton, SectionButton, QuitarFooter, CancelarButton, 
    QuitarFooterButton
} from '../Financeiro/FinanceiroComponents/Quitar/style'

import {
    ExcluirHeader, ExcluirFooter, ExcluirMain, ExcluirFooterButtonCancel,
    ExcluirFooterButtonConfirm, ExcluirMainInput, ExcluirHeaderButton,

} from '../Financeiro/FinanceiroComponents/Excluir/style';


import HeaderOb from '../../components/Header';

import Modal from "react-native-modal";
import Quitar from "./FinanceiroComponents/Quitar";
import { SafeAreaView } from "react-native-safe-area-context";

import dados from "./Adicionar/dados";

import {  MotiView, AnimatePresence} from 'moti';


export default function({route}){

    const navigation = useNavigation();
    const pageName = 'Financeiro';


    // Modais
    const [visible, setVisible] = useState(false);
    const [visibleTwo, setVisibleTwo] = useState(false);

    const [altura, setAltura] = useState(90);
    const [largura, setLargura] = useState(new Animated.Value(0));

    const [searchText, setSearchText] = useState();
    const [excluirText, setExcluirText] = useState('');

    const [list, setList] = useState(dados);


    const valorEntradas = [400, 300.9];
    const situacao = 1;

    const array = [1,2,3,4,5];

    //Flatlist 

    useEffect(()=> {
        if(searchText === ""){
            setList(dados);
        }else{
            setList(dados.filter(item => {
                
                if(item.sacador.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
                    return true;
                } else{
                    return false;
                }
            }));
        }
    }, [searchText]);

    const [contasVisible, toggle] = useReducer((s)=> !s, false)

    function conferirResumoIcon(){
        if(contasVisible == false){
            return <Icon name="plus" style={styles.iconePlusMajor}></Icon>
        }
        else{
            return <Icon name="minus" style={styles.iconePlusMajor}></Icon>

        }
    }

    function conferirSituacao(situacao){
        if(situacao == 1){
            return <ItemBolinha2></ItemBolinha2>
        }
        if(situacao == 2){
            return <ItemBolinha2 style={{backgroundColor: '#7ED957'}}></ItemBolinha2>
        }
        if(situacao == 3){
            return <ItemBolinha2 style={{backgroundColor: '#FFDE59'}}></ItemBolinha2>
        }else{
            return <ItemBolinha2></ItemBolinha2>

        }
    }

    function removerItem(){


        Alert.alert("Confirmação", "Tem certeza que quer excluir o item de código " + excluirText + "?" , [
            {
                text: 'Sim',
                onPress: () => {
                    Alert.alert('Excluído com sucesso.', 'O item foi excluído.');
                    list.splice(excluirText, 1);
                    console.log(list)
                    
                }
            },
            {
                text: 'Não',
                onPress: () => {Alert.alert('Cancelado com sucesso!', 'O item não foi excluído.')}

            }
        ])
        
        setVisibleTwo(false);
    }

    function Shape(){
        return(
            <MotiView
            from={{
                opacity: 0,
                height: 0,
                marginBottom: 0
              }}
              animate={{
                opacity: 1,
                height: 350,
                marginBottom: 15
              }}
            exit={{
              opacity: 0,
              height: 0,
              marginBottom: 0
            }}
            transition={
              {
                type: 'timing',
                duration: 900,
              }
            }
            style={styles.shape}
          >

            <Entradas>
                <View style={{backgroundColor: '#A9F9B6', height: '35%', borderTopLeftRadius: 3, borderTopRightRadius: 3}}>
                    <MotiView style={styles.quadradoEntradas}><Icon name="plus" style={{fontSize: 20, color: 'white'}}/></MotiView>
                    <Text style={styles.textoEntradas}>Entradas</Text>
                </View>
                <View>
                    <Text style={styles.valorEntradas}>R$ {valorEntradas[0]}</Text>
                </View>
            </Entradas>
            <Entradas>
                <View style={{backgroundColor: '#E5A1A1', height: '35%', borderTopLeftRadius: 3, borderTopRightRadius: 3}}>
                    <View style={[styles.quadradoEntradas, {backgroundColor: '#C80505'}]}><Icon name="minus" style={{fontSize: 20, color: 'white'}}/></View>
                    <Text style={[styles.textoEntradas, {color: '#C80505'}]}>Saídas</Text>
                </View>
                <View>
                    <Text style={styles.valorEntradas}>R$ {valorEntradas[1]}</Text>
                </View>
            </Entradas>
            <Entradas>
                <View style={{backgroundColor: '#A0C4F2', height: '35%', borderTopLeftRadius: 3, borderTopRightRadius: 3}}>
                    <View style={[styles.quadradoEntradas, {backgroundColor: '#0469ED'}]}><Icon name="check" style={{fontSize: 20, color: 'white'}}/></View>
                    <Text style={[styles.textoEntradas, {color: '#0469ED'}]}>Saldo</Text>
                </View>
                <View>
                    <Text style={styles.valorEntradas}>R$ {Number(valorEntradas[0] - valorEntradas[1]).toFixed(2)}</Text>
                </View>
            </Entradas>
          </MotiView>
        )
    }

    return(
        <ScrollView>
            <HeaderOb pageName={pageName}/>
            <Main>
                <FinanceiroButtonContainer>
                   
                
                <AnimatePresence>{contasVisible && <Shape />}</AnimatePresence>
                    

                    <ResumoButton onPress={toggle}>
                        <ResumoText>Resumos</ResumoText>
                        <ResumoIcon>
                            {conferirResumoIcon()}

                        </ResumoIcon>
                    </ResumoButton>
                    <FuncaoContainer>
                        <ExcluirButton style={styles.buttonStyle} onPress={()=> {setVisibleTwo(true)}}>
                            <FuncContainer>
                                <FuncaoIcon><Icon name="times" style={styles.iconePlusMinor}></Icon></FuncaoIcon>
                                <TextButton>Excluir</TextButton>
                            </FuncContainer>
                        </ExcluirButton>
                        <AdicionarButton style={styles.buttonStyle} onPress={()=> navigation.navigate('Adicionar')}>
                            <FuncContainer>
                                <FuncaoIcon><Icon name="plus" style={styles.iconePlusMinor}></Icon></FuncaoIcon>
                                <TextButton>Adicionar</TextButton>
                            </FuncContainer>
                        </AdicionarButton>
                        <QuitarButton style={styles.buttonStyle} onPress={()=> {setVisible(true)}}>
                            <FuncContainer>
                                <FuncaoIcon><Icon name="dollar-sign" style={styles.iconePlusMinor}/></FuncaoIcon>
                                <TextButton>Quitar</TextButton>
                            </FuncContainer>
                        </QuitarButton>

                        <Modal 
                            isVisible={visible} 
                            onBackdropPress={()=> setVisible(false)}
                            swipeDirection='left'
                            backdropTransitionInTiming={1000}
                            backdropTransitionOutTiming={1000}
                            animationInTiming={900}
                            animationOutTiming={900}
                            onSwipeComplete={()=> setVisible(false)}
                            onSwipeCancel={()=> setVisible(true)}
                            >
                            <View style={styles.modal}>
                                <QuitarHeader>
                                    <HeaderText>Quitar parcela</HeaderText>
                                    <HeaderButton onPress={()=> setVisible(false)}><Icon name="times" style={styles.iconClose}></Icon></HeaderButton>
                                </QuitarHeader>
                                <QuitarMain>
                                    <View style={{display:'flex', flexDirection: 'row', marginTop: 4}}>
                                        <MainSection style={{width: '30%'}}>
                                            <SectionTextButton style={{fontSize: 15}}>Recebido em: </SectionTextButton>
                                            <SectionButton placeholder="Digite aqui..."/>
                                        </MainSection>
                                        <MainSection style={{marginLeft: 25, width: '70%'}}>
                                            <SectionTextButton>Recebimento: </SectionTextButton>
                                            <SectionButton placeholder="Digite aqui..." style={{width: 180}}/>
                                        </MainSection>
                                    </View>
                                    <View  style={{display:'flex', flexDirection: 'row', marginTop: 20}}>
                                        <MainSection style={{marginRight: 10}}>
                                            <SectionTextButton>Desconto: </SectionTextButton>
                                            <SectionButton placeholder="Digite aqui..."/>
                                        </MainSection>
                                        <MainSection style={{marginRight: 10}}>
                                            <SectionTextButton>Juros: </SectionTextButton>
                                            <SectionButton placeholder="Digite aqui..."/>
                                        </MainSection>
                                        <MainSection>
                                            <SectionTextButton>Valor pago: </SectionTextButton>
                                            <SectionButton placeholder="Digite aqui..."/>
                                        </MainSection>
                                    </View>
                                </QuitarMain>
                                <QuitarFooter>
                                    <QuitarFooterButton 
                                    style={{marginRight: 10}}><Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}
                                    onPress={()=> setVisible(false)}
                                    >Quitar</Text></QuitarFooterButton>
                                    <CancelarButton><Text 
                                    style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}
                                    onPress={()=> setVisible(false)}
                                    >Cancelar</Text></CancelarButton>
                                </QuitarFooter>
                            </View>
                        </Modal>
                        <Modal isVisible={visibleTwo} 
                            onBackdropPress={()=> setVisibleTwo(false)}
                            swipeDirection='left'
                            backdropTransitionInTiming={1000}
                            backdropTransitionOutTiming={1000}
                            animationInTiming={900}
                            animationOutTiming={900}
                            onSwipeComplete={()=> setVisibleTwo(false)}
                            onSwipeCancel={()=> setVisibleTwo(true)}>
                            
                            <View>
                                <ExcluirHeader>
                                    <ExcluirHeaderButton onPress={()=> {setVisibleTwo(false)}}><Icon name='times' style={{fontSize: 27}}/></ExcluirHeaderButton>
                                </ExcluirHeader>
                                <ExcluirMain>
                                    <Text style={{fontSize: 17}}>Selecione o código que quer <Text style={{color: 'red'}}>excluir</Text>:</Text>
                                    <ExcluirMainInput style={{paddingLeft: 10}} onChangeText={(text)=> setExcluirText(text)}></ExcluirMainInput>
                                </ExcluirMain>
                                <ExcluirFooter>
                                    <ExcluirFooterButtonConfirm style={{marginRight: 10}} onPress={()=> removerItem()}>
                                        <Text style={styles.excluirFooterButton}>Confirmar</Text>
                                    </ExcluirFooterButtonConfirm>
                                    <ExcluirFooterButtonCancel onPress={()=> {
                                        setVisibleTwo(false);
                                        Alert.alert('A operação foi cancelada')
                                        }}>
                                        <Text style={styles.excluirFooterButton}>Cancelar</Text>
                                    </ExcluirFooterButtonCancel>
                                </ExcluirFooter>
                            </View>

                        </Modal>
                    </FuncaoContainer>
                </FinanceiroButtonContainer>
                <FinancasContainer>
                    <SearchDiv>
                        <SearchInput>
                            <SearchButton ><Icon name="search" style={styles.searchIcon}/></SearchButton>
                            <SearchTextInput placeholder="Pesquise pelo nome..." color="#fff" placeholderTextColor="#fff" onChangeText={(text)=> setSearchText(text)}></SearchTextInput>
                        </SearchInput>
                        <View style={styles.linha}></View>
                    </SearchDiv>
                    
                        <FlatList 
                        nestedScrollEnabled
                        data={list}
                        keyExtractor={((_, index) => index.toString())}
                        renderItem={({item})=>

                        <SituacoesDiv centerContent={true}>
                            <SituacoesItem>
                                <SitItemLeft>
                                    <ItemText>Código: {item.id}</ItemText>
                                    <ItemText>Sacador: {item.sacador}</ItemText>
                                    <ItemText>Data de Vencimento: {item.dataVenc}</ItemText>
                                    <ItemText>Valor: {item.valor}</ItemText>
                                    <ItemText>Data de Pagamento: {item.dataPaga}</ItemText>
                                </SitItemLeft>
                                <View style={styles.complemento}></View>
                                <SitItemRight>
                                    {conferirSituacao(item.situacao)}
                                    <ItemTextRight>Desconto: {item.desconto}</ItemTextRight>
                                    <ItemTextRight>Juros: {item.juros}</ItemTextRight>
                                    <ItemTextRight>Valor pago: {item.valorPago}</ItemTextRight>
                                    <ItemTextRight>Forma de pagamento: {item.formaPago}</ItemTextRight>
                                </SitItemRight>
                            </SituacoesItem>
                        </SituacoesDiv>     

                        }/>
                    
                </FinancasContainer>
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
    modal: {
        borderRadius: 6,
    },
    iconClose: {
        fontSize: 25,
        color: 'gray'
    },
    excluirFooterButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    shape: {
        height: 250,
        width: '100%',
        borderRadius: 5,
        marginRight: 10,
    },
    quadradoEntradas: {
        height: 24, 
        width: 24, 
        backgroundColor: '#008037', 
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '18%',
        left: '2%'
    },
    textoEntradas: {
        color: '#0C8D43',
        fontWeight: 'bold',
        fontSize: 18,
        position: 'absolute',
        right: 15,
        top: 5
    },
    valorEntradas: {
        fontSize: 22,
        position: 'absolute',
        right: 15,
        top: 18,
        fontWeight: 'bold',
        color: '#34598A'
    }
});