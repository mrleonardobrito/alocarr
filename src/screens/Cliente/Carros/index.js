import React, { useState } from 'react';
import carros from '../../../utils/carros';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Image, ScrollView, View } from 'react-native';
import Animated from 'react-native-reanimated'

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

const CarrosCliente = ({ navigation }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const backgroundImage = require('../../../assets/screen-carros-header.png')
  const [carro, setCarro] = useState(carros[0])

  const onScrollEndHandler = (event) => {
    const value = event.nativeEvent.contentOffset.x
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
            data={carros}
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
            {carros.map((carro, index) => {
              const inputRange = [
                (index - 1) * CARIMAGE_WIDTH,
                index * CARIMAGE_WIDTH,
                (index + 1) * CARIMAGE_WIDTH
              ]
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [.4, 1, .4]
              })
              return <Animated.Image source={carro.imagem} style={[styles.image, { opacity }]} key={index}/>
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