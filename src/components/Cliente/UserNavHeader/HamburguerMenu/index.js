import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { MenuIcon } from '../styles';

const HamburguerMenu = ({ navigation, size=32, color='#fff', ...itemProps }) => {
  
  return (
    <MenuIcon onPress={() => navigation.toggleDrawer()} style={{ borderRightWidth: 0, ...itemProps}}>
        <Icon name='menu' size={size} style={{color: color}} />
    </MenuIcon>
  )
}

export default HamburguerMenu;