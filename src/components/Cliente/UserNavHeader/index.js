import React from 'react';
import AlocarrLogo from '../../AlocarrLogo';
import { cores } from '../../../utils/cores'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Header, LogoWrapper, Menu, Title } from './styles';
import HamburguerMenu from './HamburguerMenu';


const UserNavHeader = (props) => {

  return (
    <Header color={cores.cliente.secondary}>
    {props.withMenu && (
      <HamburguerMenu navigation={props.navigation}/>
    )}
    <LogoWrapper>
      <AlocarrLogo color={cores.cliente.text1} size={50}/>
      <Title>ALOCARR</Title>
    </LogoWrapper>
    {
    props.withMenu && (
        <Menu>
          <Icon name="whatsapp" size={32} style={{color: '#fff'}}/>
        </Menu>
    )
    }
  </Header>
  );
}

export default UserNavHeader;