import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
export const Header = styled(Animated.View)`
    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: flex-end;
    padding: 20px 20px;
    justify-content: space-between;
    background-color: ${props => props.theme.cliente.text1};
`
export const PageLabel = styled(Animated.Text)`
    font-size: 30px;
    font-family: 'AlfaSlabOne';
    color: ${props => props.theme.cliente.primary};
`
export const MainScroll = styled(Animated.ScrollView)`
    flex: 1;
    z-index: 1;
`
export const Main = styled.View`
    flex: 1;
    z-index: 3;
`
export const Wrapper = styled.View`
    flex: 1;
    background-color: ${props => props.theme.cliente.primary};
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 25px;
`
export const PerfilTop = styled.View`
    width: 100%;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const FormularioWrapper = styled.View`
    margin-top: 20px;
`
export const ImagemPerfilCircle = styled(Animated.View)`
    width: 150px;
    height: 150px;
    border-radius: 200px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.cliente.text1};
`
export const ImagemPerfil = styled.Image`
    top: 14px;
    width: 95%;
    height: 95%;
    border-radius: 200px;
    background-color: ${props => props.theme.cliente.text1};
`
export const EditarImagemButton = styled.TouchableOpacity`
    padding: 5px;
    align-self: flex-end;
    bottom: 20px;
    right: 5px;
    border-radius: 15px;
    background-color: ${props => props.theme.cliente.text1};
`
export const EditarPerfilButton = styled.TouchableOpacity`
    width: 40%;
    height: 35px;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: ${props => props.theme.cliente.text1};
`
export const EditarPerfilLabel = styled.Text`
    font-size: 13px;
    font-family: 'OpenSans-ExtraBold';
    color: ${props => props.theme.cliente.primary};
`
export const NomePerfil = styled.TextInput`
    font-size: 26px;
    padding: 5px 10px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.text1};
`
export const DataInput = styled.View`
    width: 100%;
    padding-top: 15px;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #fff;
`
export const DataInputContent = styled.TextInput`
    padding: 5px;
    font-size: 13px;
    font-family: 'OpenSans-SemiBold';
    color: ${props => props.theme.cliente.text1};
    margin-left: 10px;
`
export const DataInputLabel = styled.Text`
    font-size: 13px;
    font-family: 'OpenSans-ExtraBold';
    color: ${props => props.theme.cliente.text1};
`
export const SalvarButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 10px;
    border: 2px solid;
    border-color: #fff;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`
export const SalvarButtonLabel = styled.Text`
    font-size: 20px;
    font-family: 'OpenSans-ExtraBold';
    color: ${props => props.theme.cliente.text1};
`