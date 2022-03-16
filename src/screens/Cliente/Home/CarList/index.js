import { colorKeys, useAnimationState } from 'moti';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Icons from '@expo/vector-icons';
import { AboutCar, CarBox, CarGas, CarImage, CarInformations, CarName, CarPrice, CarPriceLabel, DetailContainer, DetailIcon, DetailLabel, DetailsCar, ListCars, ReservaButton, ReservaButtonLabel } from './styles';
import carros from '../../../../utils/carros';

// import { Container } from './styles';

const useFadeInUp = () => {
    return useAnimationState({
        from: {
            opacity: 0,
            translateY: 15,
        },
        to: {
            opacity: 1,
            translateY: 0,
        },
    })
}

const useFadeInLeft = () => {
    return useAnimationState({
        from: {
            opacity: 0,
            translateX: -15,
        },
        to: {
            opacity: 1,
            translateX: 0,
        },
    })
}

const useFadeInRight = () => {
    return useAnimationState({
        from: {
            opacity: 0,
            translateX: 15,
        },
        to: {
            opacity: 1,
            translateX: 0,
        },
    })
}

const CarList = () => {
    const [maxQuant, setMaxQuant] = useState(15)

    return (
        <ListCars>
            {carros.map((carro, index) => {
                if(index < maxQuant){
                    return <CarItem carro={carro} key={index} id={index}/>
                }
            })}
            {
               maxQuant < carros.length ? (
                    <TouchableOpacity onPress={() => setMaxQuant(maxQuant + 5)}><Text>+</Text></TouchableOpacity>
               ) : (
                    <TouchableOpacity onPress={() => setMaxQuant(15)}><Text>-</Text></TouchableOpacity>
               )
            }
        </ListCars>
    );
}

const CarItem = ({ carro, id }) => {
    const fadeInUp = useFadeInUp()
    const fadeInLeft = useFadeInLeft()
    const fadeInRight = useFadeInRight()

    const animationTrigger = (show) => {
        if(show){
            fadeInUp.transitionTo('to')
            fadeInLeft.transitionTo('to')
            fadeInRight.transitionTo('to')
        }
    }

    useEffect(() => {
        animationTrigger(true)
    }, [])

    const getDetails = (carro) => {
        const details = new Array(4)
        
        details.push([<Icons.Entypo name='gauge' size={22} color='#fff'/>, "KM livre(ilimitado)"])

        if(carro.motor){
            details.push([<Icons.MaterialCommunityIcons name='engine' size={23} color='#fff'/>, "Motor " + carro.motor])
        }
        if(carro.cambio){
            details.push([<Icons.MaterialCommunityIcons name='alpha-r-circle' size={22} color='#fff'/>, carro.cambio.charAt(0).toUpperCase() + carro.cambio.slice(1)])
        }  
        if(carro.arCondicionado){
            details.push([<Icons.FontAwesome name='snowflake-o' size={23} color='#fff'/>, "Ar condicionado"])
        }

        return details;
    }

    const palarasCarro = carro.nome.split(' ')
    const carroNome = palarasCarro.length >= 2 ? palarasCarro.splice(0, 2).join(' ') : palarasCarro[0];

    const BOX_DELAY = id < 6 ? 500 + (id*70) : 500 + (6*70) 
    const INFORMATIONS_DELAY = id < 6 ? 700 + (id*70) : 700 + (6*70)
    const CARIMAGE_DELAY = id < 6 ? 900 + (id*70) : 900 + (6*70)

    return (
        <CarBox 
            type='primary'
            state={fadeInUp}
            delay={BOX_DELAY}
            transition={{
                type: 'timing'
            }}
        >
            <AboutCar>
                <CarInformations
                    state={fadeInLeft}
                    delay={INFORMATIONS_DELAY}
                    transition={{
                        type: 'timing'
                    }}
                >
                    <CarName tamanho={carroNome.length}>{carroNome}</CarName>
                    <CarGas>{carro.combustivel.toUpperCase()}</CarGas>
                    <CarPriceLabel>A partir de</CarPriceLabel>
                    <CarPrice>R$98,91</CarPrice>
                </CarInformations>
                <CarImage 
                    source={carro.imagem}
                    state={fadeInRight}
                    delay={CARIMAGE_DELAY}
                    transition={{
                        type: 'timing'
                    }}
                />
            </AboutCar>
            <DetailsCar>
                {getDetails(carro).map((detail, index) => {
                    console.log(detail[1].toString().length)
                    return (
                        <DetailContainer key={index}>
                            <DetailIcon>{detail[0]}</DetailIcon>
                            <DetailLabel lenght={detail[1].length}>{detail[1]}</DetailLabel>
                        </DetailContainer>
                    )
                })}
            </DetailsCar>
            <ReservaButton>
                <ReservaButtonLabel>Começar uma Reserva</ReservaButtonLabel>
                <Icons.AntDesign name='right' size={22} color={"#3E6699"}/>
            </ReservaButton>
        </CarBox>
    )
}

export default CarList;