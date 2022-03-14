import React from 'react';

import { Container, ItemContainer, NavName, VerticalLine, SearchContainer, SearchInput, BottomContainer, BottomItem, Main, PerfilContainer, UserImage, LargerNavName, Header} from './styles';
import UserNavHeader from '../UserNavHeader';
import { cores } from '../../../utils/cores'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome5, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

const UserNavContent = ({ navigation, route }) => {
    const [isConnected, setIsConnected] = React.useState(false)
    const [searchContent, setSearchContent] = React.useState('Pesquise...')
    const perfilImage = require('../../../assets/user-image.png')
    if(!isConnected){
        return (
            <Container>
                <StatusBar/>
                <Header>
                    <UserNavHeader color={"#35598B"} navigation={navigation} hamburguerSize={22} withHamburguer/>
                </Header>
                <Main>
                    <SearchContainer>
                        <Icon name="search" size={25} color={cores.cliente.primary}/>
                        <SearchInput 
                            placeholder="Pesquise..."
                            placeholderTextColor={cores.cliente.primary}
                        />
                    </SearchContainer>
                    <ItemContainer
                        onPress={() => navigation.navigate('LoginRouter', {screen: 'Login'})}
                    >
                        <MaterialCommunityIcons name="car-door"  size={30} style={{color: cores.cliente.text1}}/>
                        <NavName>Login</NavName>
                    </ItemContainer>
                    <ItemContainer
                        onPress={() => navigation.navigate("Carros")}
                    >
                        <Icon name="car" size={30} style={{color: cores.cliente.text1}}/>
                        <NavName>Carros</NavName>
                    </ItemContainer>
                    <ItemContainer
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Icon name="cog" size={30} style={{ color: cores.cliente.text1}}/>
                        <NavName>Configurações</NavName>
                    </ItemContainer>
                </Main>
            <BottomContainer>
                <BottomItem>
                    <Icon name="question-circle" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Ajuda</NavName>
                </BottomItem>
                <BottomItem>
                    <Icon name="file-alt" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Termos de Uso</NavName>
                </BottomItem>
            </BottomContainer>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                    <UserNavHeader color={"#35598B"} navigation={navigation} hamburguerSize={22} withHamburguer/>
                </Header>
            <Main>
                <SearchContainer>
                    <Icon name="search" size={25} color={cores.cliente.primary}/>
                    <SearchInput 
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
                    onPress={() => navigation.navigate("Carros")}
                >
                    <Icon name="car" size={30} style={{color: cores.cliente.text1}}/>
                    <NavName>Carros</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => setIsConnected(true)}
                >
                    <FontAwesome5 name="clipboard-list" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Minhas Reservas</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Home")}
                >
                    <Icon name="cog" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Configurações</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Home")}
                >
                    <Icon name="question-circle" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Ajuda</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Home")}
                >
                    <Icon name="file-alt" size={30} style={{ color: cores.cliente.text1}}/>
                    <NavName>Termos de Uso</NavName>
                </ItemContainer>
            </Main>
            <BottomContainer>
            <PerfilContainer>
                <TouchableOpacity onPress={() => setIsConnected(false)}>
                    <Entypo
                        name="log-out"
                        color={cores.cliente.text1}
                        style={{ marginLeft: 7 }}
                        size={30}
                    />
                </TouchableOpacity>
                <LargerNavName>Emanuel Vilela</LargerNavName>
                <UserImage source={perfilImage}/>
            </PerfilContainer>
            </BottomContainer>
        </Container>
    );
}

export default UserNavContent;