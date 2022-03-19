import React, { useState, useEffect, useRef } from 'react';
import carros from '../../../utils/carros';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Image, ScrollView, View } from 'react-native';
import Animated, { EasingNode, Extrapolate } from 'react-native-reanimated'

import InformacoesCarro from './InformacoesCarro';
import OpcoesPreco from './OpcoesPreco';

import { 
  BackgroundImage,
  CarouselCarros,
  Container, 
  Header, 
  ListView,
} from './styles';

const { width, height } = Dimensions.get('screen');
const CARIMAGE_HEIGHT = width > 915 ? 283 : height * 0.23;
const CARIMAGE_WIDTH = width > 915 ? 483 : width * 0.80;
const CARIMAGE_SPACING = (width - CARIMAGE_WIDTH)/2;

const CarrosCliente = ({ route, navigation }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const backgroundImage = require('../../../assets/screen-carros-header.png')
  const index = route.params.id ? route.params.id : 0; 
  const [carro, setCarro] = useState(carros[index])

  const scrollRef = useRef(null)

  useEffect(() => {
    // scrollX.setValue(index * CARIMAGE_WIDTH) 
    scrollRef.current?.scrollTo({
      x: index * CARIMAGE_WIDTH,
      animated: true,
    })

    setCarro(carros[route.params.id])
  }, [route.params.id])

  const onScrollEndHandler = (event) => {
    const value = event.nativeEvent.contentOffset.x || 0
    const index = Math.round(value/CARIMAGE_WIDTH)
    setCarro(carros[index])
  }

  return (
    <Container>
      <StatusBar style="auto" translucent/>
      <Header>
        <BackgroundImage source={backgroundImage} />
        <ListView top={CARIMAGE_HEIGHT * 0.7} height={CARIMAGE_HEIGHT}>
          <CarouselCarros
            ref={scrollRef}  
            data={carros}
            scrollTo={{ x: index * CARIMAGE_WIDTH}}
            decelerationRate='fast' 
            snapToInterval={CARIMAGE_WIDTH}
            contentContainerStyle={{
              paddingHorizontal: CARIMAGE_SPACING,
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              { useNativeDriver: true}
            )}
            onMomentumScrollEnd={onScrollEndHandler}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEnabled
            horizontal
          >
            {carros.map((value, index) => {
                const inputRange = [
                  (index - 1) * CARIMAGE_WIDTH,
                  index * CARIMAGE_WIDTH,
                  (index + 1) * CARIMAGE_WIDTH
                ]
                
                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [.4, 1, .4]
                })
              return <Animated.Image source={value.imagem} style={[styles.image, { opacity }]} key={index}/>
            })}
          </CarouselCarros>
        </ListView>
      </Header>
      <InformacoesCarro carro={carro}/>
      <OpcoesPreco />
    </Container>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    height: CARIMAGE_HEIGHT,
  },
  image: {
    height: CARIMAGE_HEIGHT,
    width: CARIMAGE_WIDTH,
  },
})

export default CarrosCliente;