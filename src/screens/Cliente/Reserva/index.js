import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Zocial';
import { Entypo } from '@expo/vector-icons'
import HamburguerMenu from '../../../components/Cliente/UserNavHeader/HamburguerMenu';
import Collapsible from '../../../components/Cliente/Collapsible'

import { 
  BackgroundImage,
  CarImage,
  CarroEscolhido,
  CombustivelCarro,
  Container, 
  FormasDePagamento, 
  Header,
  HeaderTitle, 
  InformacoesCarro, 
  Linha, 
  Main, 
  NomeCarro, 
  OperationBox,
  PagamentoVisaoGeral,
  PrecoGeral,
  PrecoPorDia,
  ProgressionBar,
  Progressor,
  ProgressorIndex,
  SalvarButton,
  SalvarOrcamento,
  ValorTotal,
  ValorTotaLabel,
  VisaoGeral
} from './styles';

const Reserva = ({ navigation }) => {
  const styledImage = require('../../../assets/screen-reserva-header.png');
  const carImage = require('../../../assets/carros/rsz_carro_1.png');
  
  return (
      <Container>
        <StatusBar style="auto" trasnslucent/>
        <Header>
          <HeaderTitle>Configure sua reserva</HeaderTitle>
          <HamburguerMenu navigation={navigation} size={26}/>
        </Header>
        <Main>
          <ProgressionBar>
              <ProgressorIndex />
              <Progressor/>
          </ProgressionBar>
          <OperationBox>
            <CarroEscolhido>
              <BackgroundImage source={styledImage} style={{ resizeMode: 'cover' }}>
              <InformacoesCarro>
                <NomeCarro>Grand Siena</NomeCarro>
                <CombustivelCarro>GASOLINA / ETANOL</CombustivelCarro>
                <SalvarButton>
                  <Icon name='email' size={16} color={'#ffff'} />
                  <SalvarOrcamento>Salvar Orçamento</SalvarOrcamento>
                </SalvarButton>
              </InformacoesCarro>
              <CarImage source={carImage}></CarImage>  
              </BackgroundImage>
            </CarroEscolhido>
            <VisaoGeral>
              <ValorTotal>
                <ValorTotaLabel>Valor Total</ValorTotaLabel>
                <FormasDePagamento>Formas De Pagamento <Entypo name='credit-card' size={12} color='#D2E5AE'/></FormasDePagamento>
              </ValorTotal>
              <PagamentoVisaoGeral>
                <PrecoPorDia>Preço por 1 dia</PrecoPorDia>
                <PrecoGeral>R$98,91</PrecoGeral>
              </PagamentoVisaoGeral>
            </VisaoGeral>
            <Collapsible title='Incluso na reserva' textContent='oi eu sou seu cu'></Collapsible>
          </OperationBox> 
        </Main>
      </Container>
  );
}

export default Reserva;