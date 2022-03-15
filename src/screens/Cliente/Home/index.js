import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Switch, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { cores } from '../../../utils/cores';
import { AgeInput, AgeInputContainer, Header, AvaliacaoGeral, Container, DataText, DevolucaoContainer, Footer, FooterOption, FooterOptions, FooterOptionsContainer, InputContainer, Linha, LinhaReserva, LocalPicker, LocalPickerItem, Main, MesmoLocal, Navigation, NomeOperacao, NomePesquisar, Operacao, OperationBox, Pesquisar, Propaganda, Subtitulo, SubtituloLongo, SubtituloReserva, Wrapper } from './styles';

import UserNavHeader from '../../../components/Cliente/UserNavHeader'
import DateNTimePicker from '../../../components/Cliente/DateNTimePicker'
import AlocarrLogo from '../../../components/AlocarrLogo'
import NotaGeral from '../../../components/Cliente/Avaliacao/NotaGeral'
import Barras from '../../../components/Cliente/Avaliacao/Barras'
import Comentarios from '../../../components/Cliente/Avaliacao/Comentarios'
import {Collapsible, CollapsibleHeader, CollapsibleBody} from '../../../components/Cliente/Collapsible'
import Vantagem from '../../../components/Cliente/Vantagem'
import { LogoWrapper, Title } from '../../../components/Cliente/UserNavHeader/styles';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { MotiView, useAnimationState } from 'moti';

const Home = ({ navigation }) => {
  const fadeInDown = useAnimationState({
    from: {
      opacity: 0,
      translateY: 15,
    },
    to: {
      opacity: 1,
      translateY: 0,
    },
  })

  const animationTrigger = (show) => {
    if(show){
      fadeInDown.transitionTo('to')
    }
  }

  useEffect(() => {
    animationTrigger(true)
  }, [])

  return (
    <Container>
    <StatusBar translucent/>
    <UserNavHeader navigation={navigation} color={cores.cliente.secondary} withMenu/>
    <Wrapper>
      <Main>
      <OperationBox 
       type='primary'
       delay= {800}
       state={fadeInDown}
      >
        <SubtituloReserva>Começar uma reserva</SubtituloReserva>
        <LinhaReserva />
        <Operacao>
          <NomeOperacao>Retirada:</NomeOperacao>
          <LocationPicker />
          <DateNTimePicker />
        </Operacao>
        <Operacao>
          <DevolucaoContainer>
            <NomeOperacao>Devolução:</NomeOperacao>
            <MesmoLocal>
              <NomeOperacao>Mesmo Local:</NomeOperacao>
              <SameLocalSwitch />
            </MesmoLocal>
          </DevolucaoContainer>
          <DateNTimePicker />
          <AgePicker />
        </Operacao>
        <Pesquisar><NomePesquisar>Pesquisar</NomePesquisar></Pesquisar>
      </OperationBox>
      <Propaganda
        delay= {800}
        state={fadeInDown}
      >
        <SubtituloReserva>Propaganda</SubtituloReserva>
      </Propaganda>
      {/* <OperationBox 
        type='primary'
        delay= {800}
        state={fadeInDown}
      >
        <Subtitulo>Avaliação de Clientes</Subtitulo>
        <Linha/>
        <AvaliacaoGeral>
          <NotaGeral/>
          <Barras/>   
        </AvaliacaoGeral>
        <LinhaReserva/>
        <Comentarios/>
      </OperationBox> */}
      <OperationBox 
        type='secondary'
        delay= {800}
        state={fadeInDown}
      >
        <SubtituloLongo>Requisitos para alugar um veículo</SubtituloLongo>
        <Linha/>
        <Collapsible title='Idade mínima' contentHeight={150} textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'/>
        <Collapsible title='Carteira Nacional de Habilitação(CNH)' contentHeight={150}  textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'/>
        <Collapsible title='Documentos de identificação e CPF' contentHeight={150}  textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'/>
        <Collapsible title='Cartão de Crédito' contentHeight={150} textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'/>
        <Collapsible title='Importante' contentHeight={150} textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'/>
      </OperationBox>
      <OperationBox 
        type='primary'
        delay= {800}
        state={fadeInDown}
      >
        <Subtitulo>Principais Seguros Disponíveis</Subtitulo>
        <Linha></Linha>
        <Collapsible title='Not Included' contentHeight={170} textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'/>
        <Collapsible title='Not Included' contentHeight={170} textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'/>
        <Collapsible title='Not Included' contentHeight={170} textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'/>
        <Collapsible title='Not Included' contentHeight={170} textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'/>
      </OperationBox>
      <OperationBox 
        type='secondary'
        delay= {800}
        state={fadeInDown}
      >
        <Subtitulo>Saiba mais sobre a Aloccar</Subtitulo>
        <Linha/>
      </OperationBox>
      <OperationBox 
        type='primary'
        delay= {800}
       state={fadeInDown}
      >
        <Subtitulo>Vantagens do Aloccar</Subtitulo>
        <Linha />
        <Vantagem
          nomeIcone='money-bill-wave'
          titulo='Melhor preço garantido!'
          texto='A Aloccar garante os melhores preços de Arapiraca e região'
        />
        <Vantagem
          nomeIcone='handshake'
          titulo='Mais de 10 lojas'
          texto='Além de Arapiraca, estamos em mais sete cidades diferentes no estado de Alagoas'
        />
        <Vantagem
          nomeIcone='users'
          titulo='Atendimento'
          texto='Equipe especializada em atendimento ao cliente, disponíveis 7 dias por semana'
        />
      </OperationBox>
    </Main>
    <Navigation>
        Aluguel de carros {'>'} Locadora {'>'} Aloccar
    </Navigation>
    <Footer>
      <LogoWrapper>
        <AlocarrLogo color={cores.cliente.text1} size={50}/>
        <Title>ALOCCAR</Title>
      </LogoWrapper>
      <LinhaReserva/>
      <FooterOptionsContainer>
        <FooterOptions>
          <FooterOption>Digite Aqui Digite</FooterOption>
          <FooterOption>Digite Aqui Digite</FooterOption>
        </FooterOptions>
        <FooterOptions>
          <FooterOption>Digite Aqui Digite</FooterOption>
          <FooterOption>Digite Aqui Digite</FooterOption>
        </FooterOptions>
        <FooterOptions>
          <FooterOption>Digite Aqui Digite</FooterOption>
          <FooterOption>Digite Aqui Digite</FooterOption>
        </FooterOptions>
        <FooterOptions>
          <FooterOption>Digite Aqui Digite</FooterOption>
          <FooterOption>Digite Aqui Digite</FooterOption>
        </FooterOptions>
        <FooterOptions>
          <FooterOption>Digite Aqui Digite</FooterOption>
          <FooterOption>Digite Aqui Digite</FooterOption>
        </FooterOptions>
        <FooterOptions>
          <FooterOption>Digite Aqui Digite</FooterOption>
          <FooterOption>Digite Aqui Digite</FooterOption>
        </FooterOptions>
        <FooterOptions>
          <FooterOption>Digite Aqui Digite</FooterOption>
          <FooterOption>Digite Aqui Digite</FooterOption>
        </FooterOptions>
        <FooterOptions>
          <FooterOption>Digite Aqui Digite</FooterOption>
          <FooterOption>Digite Aqui Digite</FooterOption>
        </FooterOptions>
      </FooterOptionsContainer>
    </Footer>
    </Wrapper>
  </Container>
  );

}

const AgePicker = () => {
  return (
    <InputContainer>
      <FontAwesome 
        name="user" 
        color={cores.cliente.button}
        style={{paddingRight: 10, paddingLeft: 5}} 
        size={30}
      />
      <AgeInputContainer>
        <DataText>Qual sua idade?</DataText>
        <AgeInput keyboardType="number-pad" placeholder="xx"/>  
      </AgeInputContainer>
    </InputContainer>
  )
}

const LocationPicker = () => {
  const enderecos = {
    casa: "Rua Estudante Paavo França,202,Arapiraca-AL",
    garagem: "Rua Prof Walter Bezerra,331,Arapiraca-AL"
  }
  const [selectedValue, setSelectedValue] = useState("casa");
  
  return (
    <InputContainer> 
      <Icon 
        name='map-marker-alt' 
        style={{color: cores.cliente.button, paddingRight: 5, marginLeft: 3, width: 30}} 
        size={25}/>
        <LocalPicker
          
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }>
          <Picker.Item value="casa" label={enderecos.casa} style={styles.locationPickerItem}/>
          <Picker.Item value="garagem" label={enderecos.garagem} style={styles.locationPickerItem}/>
        </LocalPicker>
    </InputContainer>
  )
}

const SameLocalSwitch = () => {
  const [isSameLocal, setIsSameLocal] = useState(false);
  const toggleSwitch = () => setIsSameLocal(previousState => !previousState);

  return (
    <Switch
      trackColor={{ false: "#767577", true: "#f6f6f6" }}
      thumbColor={isSameLocal ? "#00e663" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isSameLocal}
    />
  )
}

const styles = StyleSheet.create({
  locationPickerItem: { fontSize: 12.3, fontFamily: "OpenSans-SemiBold"}
})

export default Home;