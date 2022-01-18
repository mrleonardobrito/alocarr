import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { 
    LoginView, 
    Underlined,
    Header, 
    LinkHome, 
    SloganContainer,  
    HermesSlogan,
    Main, 
    LoginContainer, 
    TextLogin, 
    EntrarButton,
    EntrarLabel,
    Footer,
    Detail,
    FooterDetail,
    Marked,
    CarrosButton,
    FooterInformations,
    InputContainer,
    Input,
    StyledHermesLogo,
    StyledAlocarrLogo,
} from './styles';

const Login = ({ navigation, route, handleSubmit }) => {

    const [hidepass, setHidepass] = useState(true)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <LoginView>
            <Header>
                <CarrosButton onPress={() => navigation.navigate('UserNavRouter', { screen: 'Carros' })}><LinkHome>ver carros disponíveis <Icon name='long-arrow-right'></Icon></LinkHome></CarrosButton>
                <SloganContainer>
                    <StyledAlocarrLogo size={64}/>
                    <HermesSlogan>  <Underlined>VAI</Underlined> DE HERMES!</HermesSlogan>
                </SloganContainer> 
            </Header>
            <Main>
                <LoginContainer>
                    <TextLogin>Acesse conta existente</TextLogin>
                    <InputContainer>
                        <Input
                            value={email}
                            keyboardType='email-address'
                            onChangeText={(value) => setEmail(value)} 
                            placeholder='Email ou número de telefone' 
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            value={senha}
                            placeholder='Senha'
                            secureTextEntry={hidepass}
                            onChangeText={(value) => setSenha(value)} 
                        />
                        <TouchableOpacity onPress={() => setHidepass(!hidepass)}>
                            <Icon name={hidepass ? 'eye-slash': 'eye'} size={20} />
                        </TouchableOpacity>
                    </InputContainer>
                    <EntrarButton onPress={handleSubmit}>
                        <EntrarLabel>Entrar</EntrarLabel>
                    </EntrarButton>
                    <Detail>Esqueceu seus dados de login? <Marked>Obtenha ajuda para entrar</Marked></Detail>
                </LoginContainer>
            </Main>
            <Footer>
                <FooterInformations>
                    <FooterDetail>Não tem uma conta? </FooterDetail>
                    <TouchableOpacity  onPress={() => navigation.navigate('Cadastro1')}><Marked>Cadastre-se</Marked></TouchableOpacity>
                </FooterInformations>
            </Footer>
        </LoginView>
    )
}

export default Login;