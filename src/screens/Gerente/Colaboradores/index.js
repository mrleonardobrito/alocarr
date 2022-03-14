import React from "react";

import Header from '../../../components/Header'

import { TextInput, TouchableOpacity, View, Text } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

export default function(){
    return(
        <View style={{backgroundColor: '#011631', flex: 1}}>
            <Header pageName="Colaboradores"/>
            <View style={{padding: 10}}>
                <View style={{height: 35, backgroundColor: '#285084', borderRadius: 5, flexDirection: 'row'}}>
                    <TouchableOpacity style={{width: '15%', height: '100%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 5, borderTopLeftRadius: 5}}><Icon name="search" style={{color: 'white', fontSize: 19}}/></TouchableOpacity>
                    <TextInput placeholder="Pesquise pelo nome..." style={{paddingLeft: 10, width: '85%', color: 'white'}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 30, marginTop: 7}}>
                    <TouchableOpacity style={{backgroundColor: '#285084', height: '100%', width: '40%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                            <Icon name="plus" style={{color: 'white', fontSize: 13, marginRight: 5}}/>
                        </View>
                        <Text style={{color: 'white', fontSize: 12}}>Lista de colaboradores</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#285084', height: '100%', width: '29%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="plus" style={{color: 'white', fontSize: 13, marginRight: 5}}/>
                        <Text style={{color: 'white', fontSize: 13}}>Colaborador</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#285084', height: '100%', width: '28%', flexDirection: 'row', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon name="file" style={{color: 'white', fontSize: 11, marginRight: 5, backgroundColor: 'gray'}}/>
                        <Text style={{color: 'white', fontSize: 13}}>Relatorio PDF</Text>
                    </TouchableOpacity>
                </View>
                <View style={{}}>
                    <View style={{backgroundColor: '#285084', borderRadius: 5, padding: 10, flexDirection: 'row', marginTop: 7}}>
                        <View style={{width: '90%'}}>
                            <View style={{width: '100%', borderBottomWidth: 1, backgroundColor: 'transparent', borderColor: 'gray'}}><Text style={{color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 3}}>Emanuel Vilela de Souza</Text></View>
                            <View style={{marginTop: 5, flexDirection: 'row'}}>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Cargo: CEO</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Admissão: 17/02/2022</Text>
                                </View>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Departamento: Comercial</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Banco de horas: 8</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{width: '10%', height: '40%', alignItems: 'flex-end'}}><IconMaterial name="dots-vertical" style={{fontSize: 19, color: 'white'}}/></TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: '#285084', borderRadius: 5, padding: 10, flexDirection: 'row', marginTop: 7}}>
                        <View style={{width: '90%'}}>
                            <View style={{width: '100%', borderBottomWidth: 1, backgroundColor: 'transparent', borderColor: 'gray'}}><Text style={{color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 3}}>Leonardo Ferreira de Brito</Text></View>
                            <View style={{marginTop: 5, flexDirection: 'row'}}>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Cargo: Co-CEO</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Admissão: 17/02/2022</Text>
                                </View>
                                <View style={{width: '50%'}}>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Departamento: Comercial</Text>
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Banco de horas: 8</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{width: '10%', height: '40%', alignItems: 'flex-end'}}><IconMaterial name="dots-vertical" style={{fontSize: 19, color: 'white'}}/></TouchableOpacity>
                    </View>
                    
                </View>
            </View>

        </View>
    );
}