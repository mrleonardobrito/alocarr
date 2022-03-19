import React, { useContext } from 'react';

import AuthContext from '../../../../contexts/auth';

import { Container, ItemContainer, NavName, SearchContainer, SearchInput, BottomContainer, Main, PerfilContainer, UserImage, LargerNavName, Header} from '../styles';
import UserNavHeader from '../../UserNavHeader';
import { cores } from '../../../../utils/cores'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { Alert, TouchableOpacity } from 'react-native'

const LoggedInContent = ({ navigation, route }) => {
    const { user, signOut } = useContext(AuthContext)

    function logOutHandler() {
        Alert.alert('Confirmação.', 'Tem certeza que desejas sair de sua conta?', [
            {
                text: 'Sim',
                onPress: () => {
                    signOut()
                }
            },
            {
                text: 'Não',
                onPress: () => 0
            }
        ])
    }

    const [searchContent, setSearchContent] = React.useState('Pesquise...')
    return (
        <Container>
            <Header>
                    <UserNavHeader color={"#35598B"} navigation={navigation} hamburguerSize={22} withHamburguer/>
                </Header>
            <Main>
                <SearchContainer>
                    <Icon name="search" size={25} color={cores.cliente.primary}/>
                    <SearchInput 
                        value={searchContent}
                        onChangeText={(text) => setSearchContent(text)}
                        placeholder="Pesquise..."
                        placeholderTextColor={cores.cliente.primary}
                    />
                </SearchContainer>
                <ItemContainer
                    onPress={() => navigation.navigate('PerfilRouter', { name: 'Perfil', params: {}})}
                >
                    <Icon name="user-alt"  size={30} style={{color: cores.cliente.text1}}/>
                    <NavName>Perfil</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Carros", { id: 0 })}
                >
                    <Icon name="car" size={30} style={{color: cores.cliente.text1}}/>
                    <NavName>Carros</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => {}}
                >
                    <FontAwesome5 name="clipboard-list" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Minhas Reservas</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => {}}
                >
                    <Icon name="cog" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Configurações</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => {}}
                >
                    <Icon name="question-circle" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Ajuda</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => {}}
                >
                    <Icon name="file-alt" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Termos de Uso</NavName>
                </ItemContainer>
            </Main>
            <BottomContainer>
            <PerfilContainer>
                <TouchableOpacity onPress={logOutHandler}>
                    <Entypo
                        name="log-out"
                        color={cores.cliente.text1}
                        style={{ marginLeft: 7 }}
                        size={30}
                    />
                </TouchableOpacity>
                <LargerNavName>{user.nome}</LargerNavName>
                <UserImage source={user.avatar}/>
            </PerfilContainer>
            </BottomContainer>
        </Container>
    );
}

export default LoggedInContent;