import React from 'react';

import { Container, ItemContainer, NavName, SearchContainer, SearchInput, BottomContainer, BottomItem, Main, Header} from '../styles';
import UserNavHeader from '../../UserNavHeader';
import { cores } from '../../../../utils/cores'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const LoginContent = ({ navigation, route }) => {
    const [searchContent, setSearchContent] = React.useState('Pesquise...')

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
                        value={searchContent}
                        onChangeValue={(text) => setSearchContent(text)}
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
                    onPress={() => navigation.navigate("Carros", { id: 0 })}
                >
                    <Icon name="car" size={30} style={{color: cores.cliente.text1}}/>
                    <NavName>Carros</NavName>
                </ItemContainer>
                <ItemContainer
                    onPress={() => {}}
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

export default LoginContent;