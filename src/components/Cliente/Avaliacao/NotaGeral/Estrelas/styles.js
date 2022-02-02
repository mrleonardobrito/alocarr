import Icon from 'react-native-vector-icons/FontAwesome';
import styled from "styled-components/native";

export const EstrelasContainer = styled.View`
    flex-direction: row;
`;
export const EstrelaQuebradaContainer = styled.View`
    height: 22px;
    width: 22px;
    margin-right: 2px;
`;
export const EstrelasAtras = styled(Icon)`
    position: absolute;
`;
export const EstrelaQuebrada = styled(Icon)`
    position: relative;
    z-index: 1;
`;