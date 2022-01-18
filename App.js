import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes'

const cores = {
  cliente: {
    primary: '#34598A',
    secondary: '#002B64',
    background:'#fff',
    background2: '#ECE7E7',
    text1: '#fff',
    text2: '#000',
    logoColor: '#fff',
    contrastant: '#fff',
    button: '#4b7cbd',
    marked1: '#949494',
    marked2: '#002B64',
    marked3: '#ABCFFF'
},
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

export default function App() {
  return (
      <NavigationContainer>
        <ThemeProvider theme={cores}>
          <Router/>
        </ThemeProvider>
      </NavigationContainer>
  );
}


  
