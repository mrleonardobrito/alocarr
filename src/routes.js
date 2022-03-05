import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Gerente from './screens/Gerente/Gerente'
import Graficos from './screens/Gerente/Graficos'
import Dados from './screens/Gerente/Dados'
import Financeiro from './screens/Gerente/Financeiro'
import Adicionar from './screens/Gerente/Financeiro/Adicionar'
import Excluir from './screens/Gerente/Financeiro/FinanceiroComponents/Excluir'
import Quitar from './screens/Gerente/Financeiro/FinanceiroComponents/Quitar'
import Carros from './screens/Gerente/Carros'
import Detalhes from './screens/Gerente/Carros/Detalhes'
import EditarDetalhes from './screens/Gerente/Carros/Detalhes/EditarDetalhes';
import Cadastro1 from './screens/Cadastro/Cadastro1'
import Cadastro2 from './screens/Cadastro/Cadastro2'
import Cadastro3 from './screens/Cadastro/Cadastro3'
import Cadastro4 from './screens/Cadastro/Cadastro4'
import Cadastro5 from './screens/Cadastro/Cadastro5'
import Colaboradores from './screens/Gerente/Colaboradores';
import Login from './screens/Login'

import AdmDrawerContent from './components/AdmDrawerContent'
import Home from './screens/Cliente/Home';
import UserNavContent from './components/Cliente/UserNavContent';
import Reserva from './screens/Cliente/Reserva'
import CarrosCliente from './screens/Cliente/Carros'
import Perfil from './screens/Cliente/Perfil';
import EditarPerfil from './screens/Cliente/Perfil/EditarPerfil';

const UserDrawer = createDrawerNavigator()
const Stack = createStackNavigator()
const AdmDrawer = createDrawerNavigator()

const PerfilRouter = () => {
  return (
    <Stack.Navigator
    initialRouteName="Perfil"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen 
      name="Perfil" 
      component={Perfil} 
      initialParams={{ 
        avatar: require('./assets/default-user-avatar-300x300.png'),
        nome: 'Adailton Neves', 
        genero: 'Masculino', 
        telefone: '+55 (82) 99999-9999', 
        email: 'exemplo@gmail.com', 
        endereco: 'Rua Dom Pedro II, 102, Arapiraca-AL' 
      }}/>
    <Stack.Screen 
      name="EditarPerfil" 
      component={EditarPerfil}
    />
  </Stack.Navigator>
  )
}

const UserNavigation = () => {
  return (
    <UserDrawer.Navigator 
      initialRouteName="Home" 
      screenOptions={{headerShown: false}}
      drawerContent={(props) => <UserNavContent {...props} />}  
    >
      <UserDrawer.Screen name="Home" component={Home}/>
      <UserDrawer.Screen name="Carros" component={CarrosCliente}/>
      <UserDrawer.Screen name="Reserva" component={Reserva}/>
      <UserDrawer.Screen name="LoginRouter" component={LoginRouter} />
      <UserDrawer.Screen name="PerfilRouter" component={PerfilRouter} />
    </UserDrawer.Navigator>
  );
}

const AdmNavigation = () => {
  return (
    <AdmDrawer.Navigator 
      initialRouteName="Colaboradores" 
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <AdmDrawerContent {...props}/>}
    >
      <AdmDrawer.Screen name="Gerente" component={Gerente}/>
      <AdmDrawer.Screen name="Graficos" component={Graficos}/>
      <AdmDrawer.Screen name="Dados" component={Dados} />
      <AdmDrawer.Screen name="Financeiro" component={Financeiro} />
      <AdmDrawer.Screen name="Adicionar" component={Adicionar}/>
      <AdmDrawer.Screen name="Excluir" component={Excluir}/>
      <AdmDrawer.Screen name="Quitar" component={Quitar}/>
      <AdmDrawer.Screen name="Carros" component={Carros}/>
      <AdmDrawer.Screen name="Detalhes" component={Detalhes}/>
      <AdmDrawer.Screen name="Colaboradores" component={Colaboradores}/>
      <AdmDrawer.Screen name="EditarDetalhes" component={EditarDetalhes}/>
      <AdmDrawer.Screen name="LoginRouter" component={LoginRouter}/>


    </AdmDrawer.Navigator>
  )
}

const LoginRouter = () => {
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
    <Stack.Screen name="UserNavRouter" component={UserNavigation} />
    <Stack.Screen name="Login" component={Login}/>
  </Stack.Navigator>
  )
}

export const gerente = [
  {
    nome: 'Linaldo Ferreira Florencio',
    email: 'assandoumcaramelo@gmail.com',
    senha: '260808'
  }
]

const Router = () => {
  const [isGerente, setIsGerente] = React.useState(true)

  return <AdmNavigation />
  return <UserNavigation />
}

export default Router;