import React, { useState } from 'react';
import Animated from 'react-native-reanimated'
import precos from '../../../../utils/precos'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { 
    RideOption, 
    RideOptionText,
    RideContainer,
    OpenTravel,
    MinValue,
    ValuePerHour,
    AditionalValue,
    StartButton,
    StartLabel,
    SelectionBalls,
    ValueContainer,
    SelectPayment,
} from './styles';
import { Dimensions, StyleSheet } from 'react-native';
import { cores } from '../../../../utils/cores';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.95;
const ITEM_SPACING = (width - ITEM_WIDTH)/2;
const DOT_SIZE = 8;

const OpcoesPreco = () => {
  const precosScroll = React.useRef(new Animated.Value(0)).current;

  const onScrollEndHandler = (event) => {
    const value = event.nativeEvent.contentOffset.x
    const index = Math.round(value/CARIMAGE_WIDTH)
    setPrecoIndex(index)
  }
    return (
        <RideOption>
        <RideOptionText>SELECIONE UMA OPÇÃO DE VIAGEM:</RideOptionText>
        <Animated.FlatList 
          data={precos}
          decelerationRate='fast'
          snapToInterval={ITEM_WIDTH}
          contentContainerStyle={{
            height: 190,
            paddingHorizontal: ITEM_SPACING
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: {x: precosScroll }}}],
            { useNativeDriver: true }
          )}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <SelectPayment width={ITEM_WIDTH}>
              <RideContainer>
                <OpenTravel>VIAGEM ABERTA</OpenTravel>
                <MinValue>Valor Mínimo: {item.valorMin}</MinValue>
                <ValueContainer>
                  <Icon name="check-circle-outline" color="#00ff00" size={20} />
                  <ValuePerHour>por {item.valorPorHora}/hora</ValuePerHour>
                </ValueContainer>
                <AditionalValue>+{item.valorAdicional}/km</AditionalValue>
              </RideContainer>
            </SelectPayment> 
            )
          }}
          horizontal
        />
        <SelectionBalls>
          {
            precos.map((_, index) => {
              const inputRange = [
                (index - 1) * ITEM_WIDTH,
                index * ITEM_WIDTH,
                (index + 1) * ITEM_WIDTH
              ]
              
              return <Animated.View 
                        style={{
                          width: DOT_SIZE,
                          height: DOT_SIZE,
                          marginRight: DOT_SIZE/2,
                          borderRadius: DOT_SIZE/2,
                          // backgroundColor: precosScroll.interpolate({
                          //   inputRange,
                          //   outputRange: [
                          //     cores.cliente.marked1,
                          //     cores.cliente.primary,
                          //     cores.cliente.marked1
                          //   ]
                          // })
                        }} 
                        key={index}
                      />
            })
          }
        </SelectionBalls>
        <StartButton>
          <StartLabel>Iniciar Reserva</StartLabel>
        </StartButton>
      </RideOption>
      )
}

const styles = StyleSheet.create({
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    marginRight: DOT_SIZE/2,
    borderRadius: DOT_SIZE/2,
    backgroundColor: cores.cliente.marked1
  }
})

export default OpcoesPreco;