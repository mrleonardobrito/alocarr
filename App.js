/* Expo, React */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* VectorIcons, StyledComponents */

import Icon from 'react-native-vector-icons/FontAwesome5';
import { ThemeProvider } from 'styled-components/native';
import 'react-native-gesture-handler';


/* Screens */

import Cadastro from './src/CadastroScreens/Cadastro';
import Cadastro2 from './src/CadastroScreens/Cadastro2/index';
import Cadastro3 from './src/CadastroScreens/Cadastro3/index';
import Cadastro4 from './src/CadastroScreens/Cadastro4/index';
import Cadastro5 from './src/CadastroScreens/Cadastro5/index';
import Gerente from './src/GerenteScreens/Gerente/index';
import Financeiro from './src/GerenteScreens/Financeiro/index';
import Adicionar from './src/GerenteScreens/Financeiro/Adicionar';
import Excluir from './src/GerenteScreens/Financeiro/FinanceiroComponents/Excluir';
import Dados from './src/GerenteScreens/Dados';
import CustomDrawer from './src/components/Drawer/CustomDrawer';
import Graficos from './src/GerenteScreens/Graficos/index';
import Header from './src/components/Header';
import Quitar from './src/GerenteScreens/Financeiro/FinanceiroComponents/Quitar';
import Carros from './src/GerenteScreens/Carros';
import Detalhes from './src/GerenteScreens/Carros/Detalhes';

/* ReactNavigation */

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const cores = {
  mainColor: '#34598A',
  corTitulo: '#1B4274',
  corInputTitle: '#5B8AC4',

  negrito: 'bold',
  tamanhoDaBola: '10px',
  tamanhoFontInput: '17px',

  headerHeight: '60px',

  headerColor: '#fff',
  headerColorWhite: '#fff',
  
  fontSize: 'font-size: 18px;',
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={cores}>
        <Drawer.Navigator initialRouteName="Graficos" drawerContent={CustomDrawer}>
          <Drawer.Screen name="Gerente" component={Gerente} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Financeiro" component={Financeiro} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Adicionar" component={Adicionar} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Quitar" component={Quitar} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Excluir" component={Excluir} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Dados" component={Dados} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Graficos" component={Graficos} 
          options={{headerShown: false}}/>
           <Drawer.Screen name="Cadastro" component={Cadastro} 
          options={{headerShown: false}}/>
           <Drawer.Screen name="Cadastro2" component={Cadastro2} 
          options={{headerShown: false}}/>
           <Drawer.Screen name="Cadastro3" component={Cadastro3} 
          options={{headerShown: false}}/>
           <Drawer.Screen name="Cadastro4" component={Cadastro4} 
          options={{headerShown: false}}/>
           <Drawer.Screen name="Cadastro5" component={Cadastro5} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Carros" component={Carros} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Detalhes" component={Detalhes} 
          options={{headerShown: false}}/>
        </Drawer.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}


  
