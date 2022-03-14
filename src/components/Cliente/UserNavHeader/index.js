import React from 'react';
import AlocarrLogo from '../../AlocarrLogo';
import { cores } from '../../../utils/cores'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Divisoria, Flag, FlagCountry, Header, LogoWrapper, Menu, MenuIcon, Title } from './styles';
import HamburguerMenu from './HamburguerMenu';


const UserNavHeader = ({ color, navigation, withMenu, withHamburguer, hamburguerSize = 26 }) => {
  
  const country = {
    brazil: {
      flag: require('../../../assets/brazil-flag.png'),
      language: "PT-BR|R$"
    }
  }

  if(withMenu){
    withHamburguer = false
  }
  
  const brazilFlag = require('../../../assets/brazil-flag.png')

  return (
    <Header color={color}>
      <LogoWrapper onPress={() =>  navigation.navigate('Home')}>
        <AlocarrLogo color={cores.cliente.text1} size={50}/>
        <Title>ALOCCAR</Title>
      </LogoWrapper>
      {
       withMenu && (
        <Menu>
          <MenuIcon>
           <Icon name="whatsapp" size={26} style={{color: '#fff'}}/>
          </MenuIcon>
          
          <Divisoria></Divisoria>

          <MenuIcon>
           <Flag source={brazilFlag}/>
           <FlagCountry>{country.brazil.language}</FlagCountry>
          </MenuIcon>

          <Divisoria></Divisoria>

          <HamburguerMenu navigation={navigation} size={hamburguerSize} top={4}/>
        </Menu>
      )
      }

      {
        withHamburguer && (
          <HamburguerMenu navigation={navigation} size={hamburguerSize} top={3}/>
        )
      }
  </Header>
  );
}

export default UserNavHeader;