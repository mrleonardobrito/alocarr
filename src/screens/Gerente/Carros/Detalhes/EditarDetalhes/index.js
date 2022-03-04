import React, {useReducer} from "react";
import {View, Text, TouchableOpacity} from 'react-native'

import { AnimatePresence, MotiView } from "moti";


export default function(){

    const [visible, toggle] = useReducer((s)=> !s, false)

    function animar(){
        if(visible == false){
            return <View style={{width: '100%', height: '20%', backgroundColor: 'lightblue', justifyContent: 'center', paddingHorizontal: 15, justifyContent: 'flex-end'}}>
                        <MotiView 
                            style={{height: 100, backgroundColor: 'blue', width: 100, marginBottom: 5, borderRadius: 100}}
                            from={{translateX: 125, translateY: 0}} 
                            animate={{translateX: 0, translateY: 0}} 
                            transition={{ type: 'timing',duration: 1000,}}
                        ></MotiView>
                    </View>
        }
        if(visible){
            return <View style={{width: '100%', height: '20%', backgroundColor: 'lightblue', justifyContent: 'center', paddingHorizontal: 15, justifyContent: 'flex-end'}}>
                        <MotiView 
                            style={{height: 100, backgroundColor: 'blue', width: 100, marginBottom: 5, borderRadius: 100}}
                            from={{translateX: 0, translateY: 0}} 
                            animate={{translateX: 125}} 
                            exit={{translateX: 0, translateY: 0}}
                            transition={{ type: 'timing',duration: 1000,}}
                        ></MotiView>
                    </View>
        }
    }

    return(
        <View style={{flex: 1, padding: 15}}>
            <AnimatePresence>
                {animar()}
            </AnimatePresence>
            <TouchableOpacity style={{height: 50, width: '100%', backgroundColor: 'lightgreen', alignItems: 'center', justifyContent: 'center'}}
            onPress={toggle}>
                <Text>Animar</Text>
            </TouchableOpacity>
        </View>
    );
}