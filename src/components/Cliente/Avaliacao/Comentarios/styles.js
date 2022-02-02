import styled from 'styled-components/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Linha } from '../../Collapsible/styles';

export const ComentariosContainer = styled.ScrollView`
    height: 290px;
`;
export const ComentarioContainer = styled.View`

`;
export const CometarioHeader = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 5px;
`
export const InformacoesPerfil = styled.View`
    flex-direction: row;
    width: 70%;
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
    margin-right: 40%;
    margin-bottom: 5px;
    font-size: 12pt;
    font-family: 'Arial';
    font-weight: bold;
    color: ${props => props.theme.cliente.text1};
`
export const DataComentario = styled.Text`
    font-size: 10pt;
    font-family: 'Arial';
    font-weight: bold;
    color: ${props => props.theme.cliente.text1};
`
export const LikeIcon = styled(AntDesign)`
    color: ${props => props.theme.cliente.text1};
`
export const LikeNumber = styled.Text`
    font-size: 8pt;
    font-family: 'Arial';
    color: ${props => props.theme.cliente.text1};
`
export const OptionsIcon = styled(SimpleLineIcons)`
    color: #aaa;
    float: right;
`
export const ComentarioContent = styled.Text`
    width: 83%;
    right: 15px;
    margin-right: 8px;
    flex-wrap: wrap;
    font-size: 10pt;
    font-family: 'Arial';
    align-self: flex-end;
    text-align: justify;
    color: ${props => props.theme.cliente.text1};
`
export const LinhaComentario = styled(Linha)`
    width: 95%;
    margin: 10px;
    align-self: center;
`
