import React, {useState, useEffect} from 'react';
import {View, Pressable} from 'react-native';
import { Arrow, Container, Descricao, Linha, StyledIcon, Title, TitleContainer } from './styles';

import { motify, MotiView, useAnimationState } from 'moti';

const Collapsible = React.forwardRef(
  (
    {
      title,
      textContent,
      contentHeight = 100,
      isExpanded = false,
      children,
      ...restProps
    },
    ref,
  ) => {
    const [show, setShow] = useState(isExpanded);

    const rotateAnimation = useAnimationState({
      open: {
        rotate: '0deg'
      },
      closed: {
        rotate: '90deg'
      }
    })

    const rollInOut = useAnimationState({
      closed: {
        opacity: 1,
        top: 0, 
        height: contentHeight
      },
      open: {
        opacity: 0,
        top: -10,
        height: 0
      }
    })

    const onPressHandler = () => {
      setShow(!show)
      if(show){
        rotateAnimation.transitionTo('open')
        rollInOut.transitionTo('open')
      }else{
        rotateAnimation.transitionTo('closed')
        rollInOut.transitionTo('closed')
      }
    }

    useEffect(() => {
      setShow(isExpanded);
    }, [isExpanded]);
    
    let header = null;
    let body = null;
    
    React.Children.forEach(children, child => {
      if (child.type === CollapsibleHeader) {
        header = child;
      } else if (child.type === CollapsibleBody) {
        body = child;
      }
    });
    
    if (header === null) {
      header = (
        <>
          <TitleContainer>
            <Title>{title  ? title : "Insira texto aqui"}</Title>
            <Arrow onPress={onPressHandler}>
              <MotiView
                state={rotateAnimation}
                transition={{
                  type: 'timing', 
                  duration: 200
                }}
              >
                <StyledIcon
                  name='right'
                  size={20}
                />
              </MotiView>  
            </Arrow>    
          </TitleContainer>
          <Linha/>
        </>
      )
    } 
    
    if (body === null) {
      body = (
        <Descricao>{textContent ? textContent : "Insira um texto aqui"}</Descricao>
      )
    } 
      
    return (
      <Container ref={ref} {...restProps}>
        <Pressable
          onPress={onPressHandler}
        >
          {header}
        </Pressable>
        <MotiView 
          state={rollInOut}
          transition={{
            type:'timing',
            duration: 300
          }}
        >
        {show && body}
        </MotiView>
      </Container>
    );
  }
);

const CollapsibleHeader = React.forwardRef(({children, ...restProps}, ref) => {
  return (
    <View ref={ref} {...restProps}>
      {children}
    </View>
  );
});

const CollapsibleBody = React.forwardRef(({children, ...restProps}, ref) => {
  return (
    <View ref={ref} {...restProps}>
      {children}
    </View>
  );
});

export {Collapsible, CollapsibleHeader, CollapsibleBody};