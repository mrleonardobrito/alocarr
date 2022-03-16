import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Cliente/Home';
import LoggedInContent from '../components/Cliente/UserNavContent/LoggedContent';
import CarrosCliente from '../screens/Cliente/Carros';
import Reserva from '../screens/Cliente/Reserva';
import Perfil from '../screens/Cliente/Perfil';
import EditarPerfil from '../screens/Cliente/Perfil/EditarPerfil';

const Stack = createStackNavigator()
const UserDrawer = createDrawerNavigator()

const PerfilRouter = () => {
    return (
      <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name="Perfil" 
        component={Perfil} 
      />
      <Stack.Screen 
        name="EditarPerfil" 
        component={EditarPerfil}
      />
    </Stack.Navigator>
    )
  }

const UserRouter = () => {
    return (
      <UserDrawer.Navigator 
        initialRouteName="Home" 
        screenOptions={{headerShown: false}}
        drawerContent={(props) => <LoggedInContent {...props} />}  
      >
        <UserDrawer.Screen name="Home" component={Home}/>
        <UserDrawer.Screen name="Carros" component={CarrosCliente}/>
        <UserDrawer.Screen name="Reserva" component={Reserva}/>
        <UserDrawer.Screen name="PerfilRouter" component={PerfilRouter} />
      </UserDrawer.Navigator>
    );
  }

export default UserRouter;