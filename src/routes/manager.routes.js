import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import AdmDrawerContent from '../components/AdmDrawerContent'
import Gerente from '../screens/Gerente/Gerente'
import Graficos from '../screens/Gerente/Graficos'
import Dados from '../screens/Gerente/Dados'
import Financeiro from '../screens/Gerente/Financeiro'
import FinanceiroCarros from '../screens/Gerente/Financeiro/FinanceiroCarros'
import Adicionar from '../screens/Gerente/Financeiro/Adicionar'
import Excluir from '../screens/Gerente/Financeiro/FinanceiroComponents/Excluir'
import Quitar from '../screens/Gerente/Financeiro/FinanceiroComponents/Quitar'
import Carros from '../screens/Gerente/Carros'
import AdicionarCarro from '../screens/Gerente/AdicionarCarro/AdicionarCarro';
import Detalhes from '../screens/Gerente/Carros/Detalhes'
import EditarDetalhes from '../screens/Gerente/Carros/Detalhes/EditarDetalhes';
import DetalhesFinanceiroCarro from '../screens/Gerente/Financeiro/FinanceiroCarros/DetalhesFinanceiroCarro';
import Colaboradores from '../screens/Gerente/Colaboradores';
import LoginRouter from './login.routes';

const AdmDrawer = createDrawerNavigator()

const AdmRouter = () => {
    return (
      <AdmDrawer.Navigator 
        initialRouteName="Gerente" 
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <AdmDrawerContent {...props}/>}
      >
        <AdmDrawer.Screen name="Gerente" component={Gerente}/>
        <AdmDrawer.Screen name="Graficos" component={Graficos}/>
        <AdmDrawer.Screen name="Dados" component={Dados} />
        <AdmDrawer.Screen name="Financeiro" component={Financeiro} />
        <AdmDrawer.Screen name="FinanceiroCarros" component={FinanceiroCarros} />
        <AdmDrawer.Screen name="DetalhesFinanceiroCarro" component={DetalhesFinanceiroCarro} />
        <AdmDrawer.Screen name="Adicionar" component={Adicionar}/>
        <AdmDrawer.Screen name="Excluir" component={Excluir}/>
        <AdmDrawer.Screen name="Quitar" component={Quitar}/>
        <AdmDrawer.Screen name="Carros" component={Carros}/>
        <AdmDrawer.Screen name="Detalhes" component={Detalhes}/>
        <AdmDrawer.Screen name="Colaboradores" component={Colaboradores}/>
        <AdmDrawer.Screen name="EditarDetalhes" component={EditarDetalhes}/>
        <AdmDrawer.Screen name="AdicionarCarro" component={AdicionarCarro}/>
  
      </AdmDrawer.Navigator>
    )
  }

  export default AdmRouter;