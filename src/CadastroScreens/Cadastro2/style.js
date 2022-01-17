import styled from 'styled-components/native';

export const Estilo = styled.View`
    padding: 35px 20px 35px 20px;
    flex: 1;
    align-items: center;
`; 

export const BotaoContainer = styled.View`
    width: 100%;
    height: 35px;
    border-radius: 8px;
    position: absolute;
    bottom: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 0 0 0 0;
`;

export const BotaoProximo = styled.TouchableOpacity`
    width: 48%;
    height: 35px;
    border-radius: 8px;
    background-color: ${props => props.theme.mainColor};
    margin-left: 5px;
`;

export const BotaoVoltar = styled.TouchableOpacity`
    width: 48%;
    height: 35px;
    border-radius: 8px;
    background-color: ${props => props.theme.mainColor};
    margin-right: 5px;

`;

export const TextoBotao = styled.Text`
   font-weight: bold;
   color: #fff;
   align-self: center;
   line-height: 35px;
`;
export const Progressor = styled.View`
    width: 100%;
    background-color: ${props => props.theme.mainColor};
    border-radius: 5px;
    height: 5px;
    position: relative;
    margin-bottom: 35px
`;
export const Bola1 = styled.View`
    width: ${props => props.theme.tamanhoDaBola};
    height: ${props => props.theme.tamanhoDaBola};
    border-radius: 360px;
    background-color: ${props => props.theme.mainColor};
    position: absolute;
    top: -2.5px;
    left: 0;
`;
export const Bola2 = styled.View`
    width: ${props => props.theme.tamanhoDaBola};
    height: ${props => props.theme.tamanhoDaBola};
    border-radius: 360px;
    background-color: ${props => props.theme.mainColor};
    position: absolute;
    top: -2.5px;
    left: 25%;
`;
export const Bola3 = styled.View`
    width: ${props => props.theme.tamanhoDaBola};
    height: ${props => props.theme.tamanhoDaBola};
    border-radius: 360px;
    background-color: ${props => props.theme.mainColor};
    position: absolute;
    top: -2.5px;
    left: 50%;
`;
export const Bola4 = styled.View`
    width: ${props => props.theme.tamanhoDaBola};
    height: ${props => props.theme.tamanhoDaBola};
    border-radius: 360px;
    background-color: ${props => props.theme.mainColor};
    position: absolute;
    top: -2.5px;
    left: 75%;
`;
export const Bola5 = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 360px;
    background-color: ${props => props.theme.mainColor};
    position: absolute;
    top: -2.5px;
    left: 98.5%;
`;

export const DadosContainer = styled.View`
    width: 100%;
`;

export const TituloContainer = styled.View`
    padding-right: 15px;
    margin-bottom: 30px;
    width: 100%;
`;

export const TituloDados = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.corTitulo};
`;

export const SubTituloDados = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #4E83C0;
`;
export const Dados = styled.View`
    height: 15px;
    width: 100%;
`;

export const InputEntrada = styled.TextInput`
    width: 100%;
    height: 35px;
    border: 2px solid transparent;
    border-bottom-color: #b4b4b4;
    padding: 7px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const TitleInputEntrada = styled.Text`
    color: ${props => props.theme.corInputTitle};
    font-weight: ${props => props.theme.negrito};
    margin-bottom: 5px;
    font-size: ${props => props.theme.tamanhoFontInput};
`;

export const SliderComplemento = styled.View`
    height: ${props => props.theme.tamanhoDaBola};
    width: ${props => props.theme.tamanhoDaBola};
    background-color: ${props => props.theme.corInputTitle};
    border-radius: 50px;
`;

export const SliderComplementoLinha = styled.View`
    height: 5px;
    width: 80px;
    background-color: ${props => props.theme.corInputTitle};
    position: absolute;
    bottom: 2.4px;
    left: 2px;
`;