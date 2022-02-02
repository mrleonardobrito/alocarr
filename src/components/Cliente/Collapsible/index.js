import { motify, MotiView, useAnimationState } from 'moti';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Arrow, Container, TitleContainer, Title, Linha, Descricao, StyledIcon } from './styles';

const Collapsible = (props) => {
  const [monted, setMonted] = useState(false);
  const SetinhaAnimada = motify(StyledIcon)();
  return (
    <Container>
      <Pressable onPress={() => {setMonted(!monted)}}>
        <SetinhaAnimada
          name="right"
          size={20}
          from={{
            rotate: monted ? "0deg" : "90deg"
          }}
          animate={{
            rotate: monted ? "90deg" : "0deg"
          }}
          transition={{
            type: "timing",
            duration: 300
          }}
        />
      </Pressable>
    </Container>
  );
}

export default Collapsible;