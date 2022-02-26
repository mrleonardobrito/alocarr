import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
export const Header = styled(Animated.View)`
    width: 100%;
    height: 12%;
    flex-direction: row;
    align-items: flex-end;
    padding: 20px 20px;
    justify-content: space-between;
    background-color: ${props => props.theme.cliente.primary};
`
export const PageLabel = styled(Animated.Text)`
    font-size: 36px;
    margin-bottom: 10px;
    font-family: 'AlfaSlabOne';
    color: ${props => props.theme.cliente.text1};
`
export const MainScroll = styled(Animated.ScrollView)`
    flex: 1;
    z-index: 1;
`
export const Main = styled.View`
    flex: 1;
    z-index: 3;
    justify-content: flex-end;
`
export const Wrapper = styled.View`
    flex: 1;
    margin-top: 130px;
    background-color: ${props => props.theme.cliente.primary};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 25px;
`
export const PerfilTop = styled.View`
    margin-top: -23%;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
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
    background-color: ${props => props.theme.cliente.primary};
`
export const ImagemPerfil = styled.View`
    width: 95%;
    height: 95%;
    border-radius: 200px;
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
export const NomePerfil = styled.Text`
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
export const DataInputContent = styled.Text`
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
export const DataHelpContent = styled.Text`
    font-size: 16px;
    font-family: 'AlfaSlabOne';
    padding-top: 16px;
    padding-bottom: 16px;
    color: ${props => props.theme.cliente.text1};
    text-decoration: underline;
`