import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
// import Router from './src/routes'
import Routes from './src/routes';
import AppLoading from 'expo-app-loading'
import { cores } from './src/utils/cores'
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    'AlfaSlabOne': require('./src/assets/fonts/AlfaSlabOne-Regular.ttf'),
    'Saira-Stencil-One': require('./src/assets/fonts/SairaStencilOne-Regular.ttf'),
    'OpenSans-ExtraBold': require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
    'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-HebrewBold': require('./src/assets/fonts/opensanshebrew-bold.ttf'),
    'OpenSans-SauceBold': require('./src/assets/fonts/OpenSauceOne-SemiBold.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
      <NavigationContainer>
        <AuthProvider>
          <ThemeProvider theme={cores}>  
            <Routes/>
          </ThemeProvider>
        </AuthProvider>
      </NavigationContainer>
  );
}


  
