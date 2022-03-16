import React, { useContext } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons'
import HamburguerMenu from '../../../components/Cliente/UserNavHeader/HamburguerMenu';
import { cores } from '../../../utils/cores'
import { 
    Container, 
    DataHelpContent, 
    DataInput, 
    DataInputContent, 
    DataInputLabel, 
    EditarPerfilButton, 
    EditarPerfilLabel, 
    FormularioWrapper, 
    Header, 
    ImagemPerfil, 
    ImagemPerfilCircle, 
    Main, 
    MainScroll,
    NomePerfil, 
    PageLabel, 
    PerfilTop, 
    Wrapper 
} from './styles';
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from '../../../contexts/auth'

const Perfil = ({ navigation, route }) => {
    const { user } = useContext(AuthContext)

    const scrollY = useSharedValue(0);

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
    const scrollHeaderAnimation = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(scrollY.value, [0, 50], [cores.cliente.primary, cores.cliente.secondary])    
        }
    })
  return (
      <Container>
          <Header style={scrollHeaderAnimation}>
              <PageLabel>Perfil</PageLabel>
              <HamburguerMenu navigation={navigation}/>
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
                        <ImagemPerfilCircle style={scrollImageAnimation}>
                            <ImagemPerfil source={{ uri: user.avatar.uri ? user.avatar.uri : 'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png' }}/>
                        </ImagemPerfilCircle>
                        <EditarPerfilButton onPress={() => navigation.navigate('PerfilRouter', {screen: 'EditarPerfil'})}>
                            <EditarPerfilLabel>Editar Perfil</EditarPerfilLabel>
                        </EditarPerfilButton>    
                    </PerfilTop>
                    <FormularioWrapper>
                        <NomePerfil>{user.nome}</NomePerfil>
                        <DataInput>
                            <DataInputContent>
                                <Ionicons name='speedometer' size={22} color={'#fff'} style={{ paddingRight: 10 }}/>
                                <DataInputContent>  Quilometragem: 10.987km</DataInputContent>
                            </DataInputContent>
                        </DataInput>
                        <DataInput>
                            <DataInputLabel>Gênero</DataInputLabel> 
                            <DataInputContent>{user.genero}</DataInputContent>
                        </DataInput> 
                        <DataInput>
                            <DataInputLabel>Número de Telefone</DataInputLabel>
                            <DataInputContent>{user.telefone}</DataInputContent>
                        </DataInput>
                        <DataInput>
                            <DataInputLabel>E-mail</DataInputLabel> 
                            <DataInputContent>{user.email}</DataInputContent>
                        </DataInput> 
                        <DataInput>
                            <DataInputLabel>Senha</DataInputLabel>
                            <DataInputContent>{'••••••'}</DataInputContent>
                        </DataInput> 
                        <DataInput>
                            <DataInputLabel>Endereço</DataInputLabel>
                            <DataInputContent>{user.endereco}</DataInputContent>
                        </DataInput>  
                        <DataInput>
                            <TouchableOpacity>
                                <DataInputContent>
                                    <AntDesign name='google' size={20} color={'#fff'}  />
                                    <DataInputContent>  Vincular Conta ao Google</DataInputContent>
                                </DataInputContent>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <DataInputContent>
                                    <AntDesign name='facebook-square' size={20} color={'#fff'}  style={{ marginRight: 10 }}/>
                                    <DataInputContent>  Vincular Conta ao Facebook</DataInputContent>
                                </DataInputContent>
                            </TouchableOpacity>     
                        </DataInput>
                        <TouchableOpacity>
                            <DataHelpContent>FAQ e Suporte</DataHelpContent>
                        </TouchableOpacity>
                    </FormularioWrapper>
                </Wrapper>
            </Main>
          </MainScroll>
      </Container>
  );
}

export default Perfil;