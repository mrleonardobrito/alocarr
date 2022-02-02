import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Menu } from '../styles';

const HamburguerMenu = ({ navigation }) => {
  return (
    <Menu onPress={() => navigation.toggleDrawer()}>
        <Icon name='bars' size={32} style={{color: '#fff'}}/>
    </Menu>
  )
}

export default HamburguerMenu;