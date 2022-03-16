import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking } from 'react-native';

import { cores } from '../../../../utils/cores';

import { 
    AdicionalInformations, 
    DevolutionContainer, 
    CarInformation, 
    ParkAdress,
    CarModel, 
    ParkName, 
    CarName, 
    Data, 
    Ride,
    AdicionalItem,
    Park,
} from './styles';  

const InformacoesCarro = ({ carro }) => {

  const garagemLocation = "Rua Walter Bezerra,331"
  const novaGaragem = "Rua Paavo Fraça,202 - Nova Esperança"

  const linkinToMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${novaGaragem}`
    const canOpenURL = Linking.canOpenURL(url)
    if(canOpenURL){
      Linking.openURL(url)
    }else{
      alert('Não consegui abrir a url')
    }
  }

    return (
      <CarInformation>
        <CarName>{carro.nome}</CarName>
        <CarModel>{carro.modelo}</CarModel>
        <AdicionalInformations>
          <AdicionalItem>
            <Icon 
              name="gas-station"
              size={22}
              color="#00ff00"
            />
            <Data>50%</Data>
          </AdicionalItem>
          <AdicionalItem>
            <Icon 
              name="alpha-r-circle"
              size={22}
              color={cores.cliente.marked1}
            />
            <Data>{carro.cambio.split(' ')[0]}</Data>
          </AdicionalItem>
          <AdicionalItem>
            <Icon 
              name="engine"
              size={22}
              color={cores.cliente.marked1}
            />
            <Data>{carro.motor}</Data>
          </AdicionalItem>
        </AdicionalInformations>
        <DevolutionContainer>
          <Park>
            <ParkName>Park 438</ParkName>
            <ParkAdress>Rua Paavo Fraça,202 - Nova Esperança</ParkAdress>
          </Park>
          <Ride onPress={linkinToMaps}>
            <Icon 
              name="walk"
              size={20}
              color="#000"
            />
            <Icon 
              name="arrow-right"
              size={12}
              color="#000"
            />
          </Ride>
        </DevolutionContainer>
      </CarInformation>  
    );
}

export default InformacoesCarro;