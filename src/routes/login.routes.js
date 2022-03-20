import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro1 from '../screens/Cadastro/Cadastro1'
import Cadastro2 from '../screens/Cadastro/Cadastro2'
import Cadastro3 from '../screens/Cadastro/Cadastro3'
import Cadastro4 from '../screens/Cadastro/Cadastro4'
import Cadastro5 from '../screens/Cadastro/Cadastro5'
import Login from '../screens/Login'

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Cliente/Home';
import LoginContent from '../components/Cliente/UserNavContent/LoginContent';
import CarrosCliente from '../screens/Cliente/Carros'

const Stack = createStackNavigator()
const UserDrawer = createDrawerNavigator()

const LoginRouter = () => {
    return (
      <UserDrawer.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        drawerContent={(props) => <LoginContent {...props} />}  
      >
        <UserDrawer.Screen name="Home" component={Home}/>
        <UserDrawer.Screen name="Carros" component={CarrosCliente}/>
        <UserDrawer.Screen name="LoginRouter" component={LoginRoute} />
      </UserDrawer.Navigator>
    );
  }

const LoginRoute = () => {
    return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Cadastro1" component={Cadastro1}/>
      <Stack.Screen name="Cadastro2" component={Cadastro2}/>
      <Stack.Screen name="Cadastro3" component={Cadastro3}/>
      <Stack.Screen name="Cadastro4" component={Cadastro4}/>
      <Stack.Screen name="Cadastro5" component={Cadastro5}/>
      <Stack.Screen name="UserNavRouter" component={LoginRouter} />
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
    )
  }

export default LoginRouter;