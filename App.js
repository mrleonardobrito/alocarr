import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'react-native'

import { cores } from './src/utils/cores'

export default function App() {
  const [fontsLoaded] = useFonts({
    'AlfaSlabOne': require('./src/assets/fonts/AlfaSlabOne-Regular.ttf'),
    'Saira-Stencil-One': require('./src/assets/fonts/SairaStencilOne-Regular.ttf'),
    'OpenSans-ExtraBold': require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
    'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
      <NavigationContainer>
        <ThemeProvider theme={cores}>
          <Router/>
        </ThemeProvider>
      </NavigationContainer>
  );
}


  
