import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { comentarios } from '../../../../utils/avaliacoes';
import Estrelas from '../NotaGeral/Estrelas';
import { ComentarioContainer, ComentarioContent, ComentariosContainer, CometarioHeader, DataComentario, FotoPerfil, InformacoesComentario, InformacoesPerfil, LikeIcon, LikeNumber, LinhaComentario, NomePerfil, Options, OptionsIcon } from './styles';

const Comentarios = () => {
  return (
      <ComentariosContainer
        scrollEnabled
      >
          {comentarios.map((value, index) => {
              return <Comentario data={value} key={index}/>
          })}
      </ComentariosContainer>
  )
}

const Comentario = ({ data }) => {

    return (
        <ComentarioContainer>
            <CometarioHeader>
                <FotoPerfil source={data.fotoPerfil}/>
                <InformacoesPerfil>    
                    <NomePerfil>{data.usuario}</NomePerfil>
                    <Estrelas index={data.avaliacao} iconSize={15}/>
                    <DataComentario>{data.dataAvaliacao}</DataComentario> 
                </InformacoesPerfil>
                <Options>  
                    <TouchableOpacity onPress={() => {}}>
                        <LikeIcon name='like1' size={22}></LikeIcon>
                        <LikeNumber>{data.numeroLikes}</LikeNumber> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <OptionsIcon name='options-vertical' size={22}></OptionsIcon>
                    </TouchableOpacity>
                </Options>
            </CometarioHeader>
            <ComentarioContent>{data.comentario}</ComentarioContent>
            <LinhaComentario></LinhaComentario>
        </ComentarioContainer>
    )
}

export default Comentarios;