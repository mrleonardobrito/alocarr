import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { comentarios } from '../../../../utils/avaliacoes';
import Estrelas from '../NotaGeral/Estrelas';
import { ComentarioContainer, ComentarioContent, ComentariosContainer, CometarioHeader, DataComentario, FotoPerfil, InformacoesComentario, InformacoesPerfil, LikeIcon, LikeNumber, LinhaComentario, NomePerfil, Option, OptionLabel, Options, OptionsContainer, OptionsIcon, OptionsModal } from './styles';
import { View, Button, Text } from 'react-native';
import Modal from 'react-native-modal'

const Comentarios = ({ deleteComentario }) => {
    const [coments, setComents] = useState(comentarios)

    function deleteComentario(id) {
        setComents(coments.map((value, index) => {
            if(value.id === id){
                coments.splice(index)
            }
        }))
    }

    return (
        <ComentariosContainer scrollEnabled>
            {coments.map((value, index) => {
                return value ? (<Comentario data={value} key={value.id} id={value.id} deletar={(itemId) => deleteComentario(itemId)} />) : <View><Text>Não renderizado</Text></View>
            })}
        </ComentariosContainer>
    )
}

const Comentario = ({ data, id, deletar }) => {
    const [showOptions, setShowOptions] = useState(false)

    const comentarioRef = useRef(null)
    const comentarioID = id

    function toggleOptions(event) {
        setShowOptions(!showOptions)
    }

    function deleteComentario(event) {
        deletar(comentarioID)
        setShowOptions(!showOptions)    
    }
    
    return (
        <ComentarioContainer ref={comentarioRef}>
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
                    <TouchableOpacity onPress={toggleOptions}>
                        <OptionsIcon name='options-vertical' size={22}></OptionsIcon>
                    </TouchableOpacity>
                    <OptionsModal 
                        isVisible={showOptions}
                        onSwipeComplete={toggleOptions}
                        swipeDirection="down"
                    >
                        <OptionsContainer>
                            <Option onPress={deleteComentario}>
                                <OptionLabel>Deletar</OptionLabel>
                            </Option>
                        </OptionsContainer>
                    </OptionsModal>
                </Options>
            </CometarioHeader>
            <ComentarioContent>{data.comentario}</ComentarioContent>
        </ComentarioContainer>
    )
}

export default Comentarios;