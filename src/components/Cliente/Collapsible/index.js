import { motify, MotiView } from 'moti';
import React, { useState } from 'react';
import { Arrow, Container, TitleContainer, Title, Linha, Descricao, StyledIcon } from './styles';

const Collapsible = (props) => {
  const [monted, setMonted] = useState(false);
  const [descritionHeight, setDescritionHeight] = useState(0)
  const SetinhaAnimada = motify(StyledIcon)();
  return (
    <Container onPress={() => {setMonted(!monted)}}>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Arrow onPress={() => {setMonted(!monted)}}>
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
        </Arrow>
      </TitleContainer>
      <Linha></Linha>
        {
          monted ? (
            <MotiView 
              from={{
                opacity: 0,
                top: -10,
                height: descritionHeight
              }}
              animate={{
                opacity: 1,
                top: 0, 
                height: descritionHeight
              }}
              transition={{
                type:'timing',
                duration: 300
              }}
            >
              <Descricao onLayout={(event) => { 
                const {x, y, height, width} = event.nativeEvent.layout
                setDescritionHeight(height+10)
              }}>{props.textContent}</Descricao>
            </MotiView>
          ) : (null)
        }
    </Container>
  );
}

export default Collapsible;