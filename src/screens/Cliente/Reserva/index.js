import React, { useState } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Zocial';
import HamburguerMenu from '../../../components/Cliente/UserNavHeader/HamburguerMenu';
import { 
  BackgroundImage,
  CarImage,
  CarroEscolhido,
  CombustivelCarro,
  Container, 
  Header,
  HeaderTitle, 
  InformacoesCarro, 
  Main, 
  NomeCarro, 
  OperationBox,
  ProgressionBar,
  Progressor,
  ProgressorIndex,
  SalvarButton,
  SalvarOrcamento
} from './styles';

const Reserva = ({ navigation }) => {
  const styledImage = require('../../../assets/screen-carros-header.png');
  const carImage = require('../../../assets/carros/rsz_carro_1.png');
  const [pageProgression, setPageProgression] = useState(0)
  
  const onLayout = (event) => {
    const {x, y, height, width} = event.nativeEvent.layout
  }

  return (
      <Container>
        <Header>
          <HeaderTitle>Configure sua reserva</HeaderTitle>
          <HamburguerMenu navigation={navigation} size={26}/>
        </Header>
        <Main onLayout={onLayout}>
          <ProgressionBar>
              <ProgressorIndex />
              <Progressor/>
          </ProgressionBar>
          <OperationBox>
            <CarroEscolhido>
              <BackgroundImage source={styledImage}/>
              <InformacoesCarro>
                <NomeCarro>Grand Siena</NomeCarro>
                <CombustivelCarro>GASOLINA / ETANOL</CombustivelCarro>
                <SalvarButton>
                  <Icon name='email' size={12} color={'#ffff'} style={{ padding: 5 }}/>
                  <SalvarOrcamento>Salvar Orçamento</SalvarOrcamento>
                </SalvarButton>
              </InformacoesCarro>
              <CarImage source={carImage}></CarImage>  
            </CarroEscolhido>
          </OperationBox> 
        </Main>
      </Container>
  );
}

export default Reserva;