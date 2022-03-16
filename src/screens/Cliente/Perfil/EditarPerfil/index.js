import React, { useState, useContext } from 'react';
import { View, StatusBar, StyleSheet, Pressable } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'
import HamburguerMenu from '../../../../components/Cliente/UserNavHeader/HamburguerMenu';
import { cores } from '../../../../utils/cores'
import { 
    Container, 
    DataInput, 
    DataInputContent, 
    DataInputLabel, 
    EditarImagemButton, 
    FormularioWrapper, 
    Header, 
    ImagemPerfil, 
    ImagemPerfilCircle, 
    Main, 
    MainScroll,
    NomePerfil, 
    PageLabel, 
    PerfilTop, 
    SalvarButton, 
    SalvarButtonLabel, 
    Wrapper 
} from './styles';
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import * as ImagePicker from 'expo-image-picker'
import AuthContext from '../../../../contexts/auth';


const EditarPerfil = ({ navigation }) => {
    const { user, updateUser } = useContext(AuthContext)

    const scrollY = useSharedValue(0);
    
    const [avatar, setAvatar] = useState(user.avatar)
    const [nome, setNome] = useState(user.nome)
    const [genero, setGenero] = useState(user.genero)
    const [telefone, setTelefone] = useState(user.telefone)
    const [email, setEmail] = useState(user.email)
    const [endereco, setEndereco] = useState(user.endereco)
  
    async function handleUpdate(){
        const response = await updateUser({
            id: user.id,
            avatar: avatar,
            nome: nome, 
            genero: genero, 
            telefone: telefone, 
            email: email, 
            senha: user.senha,
            endereco: endereco 
        })

        navigation.navigate("Perfil")
    }
    
    const PickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })
        console.log(result)
        if(!result.cancelled){
            setAvatar(result)
        }
    }

    const scrollImageAnimation = useAnimatedStyle(() => {
    return {
            transform: [
            {
                scale: interpolate(scrollY.value, [0, 130], [1, 0.6])
            },
            {
                translateY: interpolate(scrollY.value, [0, 130], [0, 39])
            }]
        }
    })
  
    return (
      <Container>
          <Header>
              <PageLabel>Editando Perfil</PageLabel>
          </Header>
          <MainScroll
            onScroll={(event) => {
                scrollY.value = event.nativeEvent.contentOffset.y;
            }}
            showsVerticalScrollIndicator={false}
          >
            <Main>
                <Wrapper>
                    <PerfilTop>
                        <Pressable>
                            <ImagemPerfilCircle style={scrollImageAnimation}>
                                <ImagemPerfil source={{ uri: avatar.uri ? avatar.uri: 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png' }}/>
                                <EditarImagemButton onPress={PickImage}>
                                    <FontAwesome name='pencil' size={20} color={cores.cliente.primary}/>
                                </EditarImagemButton>
                            </ImagemPerfilCircle>
                        </Pressable>
                    </PerfilTop>
                    <FormularioWrapper>
                        <DataInput>
                            <DataInputLabel>Nome</DataInputLabel> 
                            <NomePerfil
                                value={nome}
                                onChangeText={text => setNome(text)}
                            ></NomePerfil>
                        </DataInput>
                        <DataInput>
                            <DataInputLabel>Gênero</DataInputLabel> 
                            <DataInputContent
                                value={genero}
                                onChangeText={text => setGenero(text)}
                            ></DataInputContent>
                        </DataInput> 
                        <DataInput>
                            <DataInputLabel>Número de Telefone</DataInputLabel>
                            <DataInputContent
                                value={telefone}
                                onChangeText={text => setTelefone(text)}
                                keyboardType={'number-pad'}
                            ></DataInputContent>
                        </DataInput>
                        <DataInput>
                            <DataInputLabel>E-mail</DataInputLabel> 
                            <DataInputContent
                                value={email}
                                onChangeText={text => setEmail(text)}
                            ></DataInputContent>
                        </DataInput> 
                        <DataInput>
                            <DataInputLabel>Senha</DataInputLabel>
                            <DataInputContent
                                editable={false}
                            >••••••</DataInputContent>
                        </DataInput> 
                        <DataInput>
                            <DataInputLabel>Endereço</DataInputLabel>
                            <DataInputContent
                                value={endereco}
                               onChangeText={text => setEndereco(text)}
                            ></DataInputContent>
                        </DataInput>  
                    </FormularioWrapper>
                    <SalvarButton onPress={handleUpdate}>
                        <SalvarButtonLabel>Salvar</SalvarButtonLabel>
                    </SalvarButton>
                </Wrapper>
            </Main>
          </MainScroll>
      </Container>
  );
}

export default EditarPerfil;