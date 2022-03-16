import styled from 'styled-components/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Linha } from '../../Collapsible/styles';
import Modal from 'react-native-modal';

export const ComentariosContainer = styled.ScrollView`
    width: 100%;
    z-index: 1; 
`;
export const ComentarioContainer = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.cliente.marked1};
    position: relative;
    padding: 0 5px 10px 0;
`;
export const CometarioHeader = styled.View`
    flex-direction: row;
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;  
`
export const InformacoesPerfil = styled.View`
    width: 75%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`
export const Options = styled.View`
    flex-direction: row;
`
export const InformacoesComentario = styled.View`
     flex-direction: row;
`
export const FotoPerfil = styled.Image`
    border-radius: 21px;
    height: 42px;
    width: 42px;
`
export const NomePerfil = styled.Text`
    width: 100%;
    margin-bottom: 5px;
    font-size: 16px;
    font-family: 'OpenSans-SemiBold';
    font-weight: bold;
    color: ${props => props.theme.cliente.text1};
`
export const DataComentario = styled.Text`
    font-size: 13px;
    font-weight: bold;
    padding-left: 5px;
    text-align: left;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.text1};
`
export const LikeIcon = styled(AntDesign)`
`
export const LikeNumber = styled.Text`
    font-size: 10px;
    font-family: '';
    color: ${props => props.theme.cliente.text1};
`
export const OptionsIcon = styled(SimpleLineIcons)`
    color: #aaa;
`
export const ComentarioContent = styled.Text`
    width: 83%;
    right: 15px;
    margin-right: 8px;
    flex-wrap: wrap;
    font-size: 13px;
    font-family: 'OpenSans-SemiBold';
    align-self: flex-end;
    text-align: justify;
    color: ${props => props.theme.cliente.text1};
`
export const OptionsModal = styled(Modal)``
export const OptionsContainer = styled.View`
    height: 40%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`
export const Option = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.cliente.marked1};
`
export const OptionLabel = styled.Text`
    font-size: 12px;
    color: #ff0000;
`