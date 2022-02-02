import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { EstrelaQuebrada, EstrelaQuebradaContainer, EstrelasAtras, EstrelasContainer } from './styles';
import { View } from 'react-native'
 
const Estrelas = ({
    index,
    iconSize = 22
}) => {    
    const estrelas = []

    let isQuebrado = (index * 10) % 10 > 0;
    for(let i = 0; i < 5; i++){
        let inteiras = Math.floor(index - 1);

        if(i <= inteiras){
            estrelas.push(<Icon name='star' size={iconSize} color='#ABCFFF' style={{ marginRight: 2 }}/>)
        }else{
            if(isQuebrado){
                estrelas.push(
                    <EstrelaQuebradaContainer>
                        <EstrelaQuebrada name='star-half' size={iconSize} color='#ABCFFF' style={{ marginRight: 2 }}/>
                        <EstrelasAtras name='star' size={iconSize} color='#fff' style={{ marginRight: 2 }}/>
                    </EstrelaQuebradaContainer>
                )
                isQuebrado = false
            }else{
                estrelas.push(<Icon name='star' size={22} color='#fff' style={{ marginRight: 2 }}/>)
            }
        }
    }

    return (    
        <EstrelasContainer>{estrelas.map((value, index) => {
            return <View key={index}>{value}</View>
        })}</EstrelasContainer>
    )
}

export default Estrelas;