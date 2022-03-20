import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { cores } from './src/utils/cores'
import { AuthProvider } from './src/contexts/auth';
import AnimatedSplash from "react-native-animated-splash-screen";
import AppLoading from 'expo-app-loading';

export default function App() {

  const [isLoaded, setIsLoaded] = useState(false)

  const [fontsLoaded] = Font.useFonts({
    'AlfaSlabOne': require('./src/assets/fonts/AlfaSlabOne-Regular.ttf'),
    'Saira-Stencil-One': require('./src/assets/fonts/SairaStencilOne-Regular.ttf'),
    'OpenSans-ExtraBold': require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
    'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-HebrewBold': require('./src/assets/fonts/opensanshebrew-bold.ttf'),
    'OpenSans-SauceBold': require('./src/assets/fonts/OpenSauceOne-SemiBold.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  const onLayoutRootView = async () => {
    await SplashScreen.hideAsync();
    setIsLoaded(true)  
  }

  return (
      <NavigationContainer onReady={onLayoutRootView}>
        <AuthProvider>
          <ThemeProvider theme={cores}>  
            <AnimatedSplash
              translucent={true}
              isLoaded={isLoaded}
              logoImage={require("./src/assets/Aloccar.png")}
              backgroundColor={"#fff"}
              logoHeight={80}
              logoWidth={300}
            >
              <Routes />
            </AnimatedSplash>
          </ThemeProvider>
        </AuthProvider>
      </NavigationContainer>
  );
}


  
