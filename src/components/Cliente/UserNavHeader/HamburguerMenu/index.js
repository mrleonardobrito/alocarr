import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Menu } from '../styles';

const HamburguerMenu = ({ navigation, size=32, color='#fff' }) => {
  
  return (
    <Menu onPress={() => navigation.toggleDrawer()}>
        <Icon name='bars' size={size} style={{color: color}}/>
    </Menu>
  )
}

export default HamburguerMenu;