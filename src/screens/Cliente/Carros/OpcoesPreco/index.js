import React, { useState, useRef } from 'react';
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
    Balls,
    ValueContainer,
    SelectPayment,
} from './styles';
import { Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.95;
const ITEM_SPACING = (width - ITEM_WIDTH)/2;
const DOT_SIZE = 8;

const OpcoesPreco = () => {
  const precosScroll = React.useRef(new Animated.Value(0)).current;

  const [precoIndex, setPrecoIndex] = useState(0)

  const onScrollEndHandler = (event) => {
    const value = event.nativeEvent.contentOffset.x
    const index = Math.round(value/ITEM_WIDTH)
    setPrecoIndex(index)
  }

  const precoChanged = useRef(({ preco }) => {
    // setPrecoIndex(preco[0].index)
  }).current

  const precoRef = useRef(null)

  return (
      <RideOption>
      <RideOptionText>SELECIONE UMA OPÇÃO DE VIAGEM:</RideOptionText>
      <Animated.FlatList 
        data={precos}
        decelerationRate='fast'
        snapToInterval={ITEM_WIDTH}
        contentContainerStyle={{
          height: 180,
          paddingHorizontal: ITEM_SPACING
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: {x: precosScroll }}}],
          { useNativeDriver: false }
        )}
        onScrollEnd={onScrollEndHandler}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onViewableItemsChanged={precoChanged}
        keyExtractor={(value, index) => value.id.toString()}
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
      <Paginator data={precos} scrollX={precosScroll}/>
      <StartButton>
        <StartLabel>Iniciar Reserva</StartLabel>
      </StartButton>
    </RideOption>
    )
}

const Paginator = ({ data, scrollX }) => {
  return (
    <SelectionBalls>
      {
        data.map((value, index) => {

          const inputRange = [(index - 1) * width, index * width, (index + 1) * width]

          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: ["#d3e0f2", "#416593", "#d3e0f2"],
            extrapolate: 'clamp'
          })
          
          return <Balls key={value.id} style={[{ backgroundColor: dotColor }]}></Balls>
        })
      }
    </SelectionBalls>
  )
}

export default OpcoesPreco;