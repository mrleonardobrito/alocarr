import React from 'react';
import { Image } from 'react-native';

const AlocarrLogo = ({ color = '#fff', size, ...itemProps}) => {
    const hermesLogo = require('../../assets/logo.png')

    return  <Image source={hermesLogo} style={{tintColor: color, height: size, width: size, ...itemProps}}/>;
}

export default AlocarrLogo;