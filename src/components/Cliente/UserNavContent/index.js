import React from 'react';

import { Container, ItemContainer, NavName, VerticalLine, SearchContainer, SearchInput, BottomContainer, BottomItem, Main, PerfilContainer, UserImage, LargerNavName, HorizontalLine} from './styles';
import UserNavHeader from '../UserNavHeader';
import { cores } from '../../../utils/cores'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserNavContent = ({ navigation, route }) => {
    const [isConnected, setIsConnected] = React.useState(false)
    const perfilImage = require('../../../assets/default-user-avatar-300x300.png')
    if(!isConnected){
        return (
            <Container>
                <UserNavHeader color={cores.cliente.secondary} navigation={navigation}/>
                <Main>
                <SearchContainer>
                    <Icon name="search" size={30} style={{color: cores.cliente.primary}}/>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchContainer>
                <ItemContainer
                    onPress={() => navigation.navigate('LoginRouter', {screen: 'Login'})}
                >
                    <Icon name="door-open"  size={27} style={{color: cores.cliente.background2}}/>
                    <NavName>Login</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Carros")}
                >
                    <Icon name="car" size={30} style={{color: cores.cliente.background2}}/>
                    <NavName>Carros</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Home")}
                >
                    <Icon name="cog" size={30} style={{ color: cores.cliente.background2}}/>
                    <NavName>Configurações</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => setIsConnected(true)}
                >
                    <Icon name="car-side" size={30} style={{ color: cores.cliente.background2}}/>
                    <NavName>Minhas Reservas</NavName>
                </ItemContainer>
            </Main>
            <BottomContainer>
                <BottomItem>
                    <Icon name="question-circle" size={30} style={{ color: cores.cliente.background2}}/>
                    <NavName>Ajuda</NavName>
                </BottomItem>
                <BottomItem>
                    <Icon name="file-alt" size={30} style={{ color: cores.cliente.background2}}/>
                    <NavName>Termos de Uso</NavName>
                </BottomItem>
            </BottomContainer>
            </Container>
        );
    }

    return (
        <Container>
            <UserNavHeader color={cores.cliente.button} navigation={navigation}/>
            <Main>
                <SearchContainer>
                    <Icon name="search" size={30} style={{color: cores.cliente.primary}}/>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchContainer>
                <ItemContainer
                    onPress={() => navigation.navigate('PerfilRouter', { name: 'Perfil', params: {}})}
                >
                    <Icon name="user-alt"  size={30} style={{color: cores.cliente.background2}}/>
                    <NavName>Perfil</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Carros")}
                >
                    <Icon name="car" size={30} style={{color: cores.cliente.background2}}/>
                    <NavName>Carros</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Home")}
                >
                    <Icon name="cog" size={30} style={{ color: cores.cliente.background2}}/>
                    <NavName>Configurações</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => navigation.navigate("Reserva")}
                >
                    <Icon name="car-side" size={30} style={{ color: cores.cliente.background2}}/>
                    <NavName>Minhas Reservas</NavName>
                </ItemContainer>
            </Main>
            <BottomContainer>
                <BottomItem>
                    <Icon name="question-circle" size={30} style={{ color: cores.cliente.marked1}}/>
                    <NavName>Ajuda</NavName>
                </BottomItem>
                <BottomItem>
                    <Icon name="file-alt" size={30} style={{ color: cores.cliente.marked1}}/>
                    <NavName>Termos de Uso</NavName>
                </BottomItem>
            </BottomContainer>
            <PerfilContainer>
                <UserImage source={perfilImage}/>
                <LargerNavName>Emanuel Vilela</LargerNavName>
                <TouchableOpacity onPress={() => setIsConnected(false)}>
                    <Icon
                        name="door-open"
                        color={cores.cliente.text1}
                        style={{margin: 20}}
                        size={20}
                    />
                </TouchableOpacity>
            </PerfilContainer>
        </Container>
    );
}

export default UserNavContent;