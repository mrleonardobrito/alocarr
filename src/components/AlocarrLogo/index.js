import React from 'react';
import { Image } from 'react-native';

const AlocarrLogo = ({ color = '#fff', size}) => {
    const hermesLogo = require('../../assets/logo.png')

    return  <Image source={hermesLogo} style={{tintColor: color, height: size, width: size}}/>;
}

export default AlocarrLogo;