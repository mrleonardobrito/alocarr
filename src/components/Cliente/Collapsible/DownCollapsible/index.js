import React, { useState, useEffect } from 'react';
import { View, Pressable, Text } from 'react-native';
import Animated from 'react-native-reanimated'

const DownCollapsible = React.forwardRef(
  (
    {
      children,
      isExpanded = false,
      ...restProps
    }, 
    ref
  ) => {
    const [open, setOpen] = useState(isExpanded)

    useEffect(() => {
      setOpen(isExpanded)
    }, [isExpanded])

    let header = null
    let body = null

    React.Children.forEach(children, child => {
      if (child.type === DownCollapsibleHeader) {
        header = child;
        console.log(header.props.children)
      } else if (child.type === DownCollapsibleBody) {
        body = child;
      }
    });

    if(header === null){
      header = (
        <Text>Eu sou a senhora Marocas</Text>
      )
    }

    if(body === null){
      body = (
        <Text>Eu sou a senhora Marocas</Text>
      )
    }

    return (
      <View ref={ref} {...restProps}>
        <Pressable onPress={setOpen(!open)}>
          {header}
        </Pressable>
        {open && body}
      </View>
    )
  }
)

const DownCollapsibleHeader = React.forwardRef(({children, ...restProps}, ref) => {
  return (
    <View ref={ref} {...restProps}>
      {children}
    </View>
  );
});

const DownCollapsibleBody = React.forwardRef(({children, ...restProps}, ref) => {
  return (
    <View ref={ref} {...restProps}>
      {children}
    </View>
  );
});

export {DownCollapsible, DownCollapsibleHeader, DownCollapsibleBody};