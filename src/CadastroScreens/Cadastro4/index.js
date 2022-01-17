/* Expo, React */

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* VectorIcons, StyledComponents */

import { Ionicons } from '@expo/vector-icons'

import {
    Estilo, Progressor, Bola1, Bola2, Bola3, Bola4, Bola5, SliderComplemento,
    SliderComplementoLinha, TituloContainer, TitleInputEntrada, InputEntrada, DadosContainer,
    BotaoContainer, BotaoProximo, BotaoVoltar, TextoBotao, TituloDados
} from '../Cadastro2/style';

import { 
    SenhaContainer, SenhaInputContainer, SenhaInput, MostrarSenha, ConfirmarSenhaContainer, 
    AvisoText, AvisoTextAviso, AvisoContainer
 } from './style';

/* ReactNavigation */

 
 import {useNavigation} from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 const Stack = createNativeStackNavigator();



export default function({navigation}){
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const [senha, setSenha] = useState('');


    return(
        <Estilo>
            <StatusBar hidden/>

            <Progressor>
                <Bola1>
                    <SliderComplemento></SliderComplemento>
                    <SliderComplementoLinha></SliderComplementoLinha>
                </Bola1>
                <Bola2>
                    <SliderComplemento></SliderComplemento>
                    <SliderComplementoLinha></SliderComplementoLinha>
                </Bola2>
                <Bola3>
                    <SliderComplemento></SliderComplemento>
                    <SliderComplementoLinha></SliderComplementoLinha>
                </Bola3>
                <Bola4>
                    <View style={styles.bolinha}></View>
                </Bola4>
                <Bola5></Bola5>
            </Progressor>

            <DadosContainer>
                <TituloContainer>
                    <TituloDados>Faça sua senha</TituloDados>
                </TituloContainer>

                <SenhaContainer>
                    <TitleInputEntrada>Senha*</TitleInputEntrada>

                    <SenhaInputContainer>
                        <SenhaInput 
                        placeholder="Insira sua senha..." 
                        placeholderTextColor="#b4b4b4"
                        value={input}
                        onChangeText={(texto) => setInput(texto)}
                        secureTextEntry={hidePass}

                        />
                        <MostrarSenha onPress={ () => setHidePass(!hidePass)}>
                            {
                                hidePass ?
                                    <Ionicons name="eye" style={styles.eyeIcon}></Ionicons>
                                :
                                    <Ionicons name="eye-off" style={styles.eyeIcon}></Ionicons>
                            }
                            
                        </MostrarSenha>
                    </SenhaInputContainer>
                    <ConfirmarSenhaContainer>
                        <TitleInputEntrada>Confirmar senha*</TitleInputEntrada>
                        <InputEntrada 
                        placeholder="Digite novamente sua senha..." 
                        placeholderTextColor="#b4b4b4" 
                        secureTextEntry={true} 
                        onChangeText={senha => setSenha(senha)}
                        defaultValue={senha}
                        />
                    </ConfirmarSenhaContainer>
                    <Text>{senha.split(' ').map((word) => word && '🍕').join(' ')}</Text>
                    <Text>{senha}</Text>
                </SenhaContainer>
            </DadosContainer>

            <AvisoContainer>
                <AvisoText>Ao clicar em <AvisoTextAviso>Próximo</AvisoTextAviso>, você estará concordando com os termos de uso.</AvisoText>
            </AvisoContainer>

            <BotaoContainer>

                <BotaoProximo onPress={()=> navigation.navigate('Cadastro3') }>
                    <TextoBotao>Voltar</TextoBotao>
                </BotaoProximo>

                <BotaoProximo onPress={()=> navigation.navigate('Cadastro5') }>
                    <TextoBotao>Próximo</TextoBotao>
                </BotaoProximo>

            </BotaoContainer>
        </Estilo>
    );
}

const styles = StyleSheet.create({
    bolinha: {
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: 'black',
        alignSelf: 'center',
        position: 'absolute',
        top: -5
    },
    eyeIcon: {
        color: '#0e0e0e',
        fontSize: 25,
        
    }
  });