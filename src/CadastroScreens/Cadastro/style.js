import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #34598A;
    padding: 35px 20px 35px 20px;
    align-items: center;
    position: relative;
`;
export const BotaoProximo = styled.TouchableOpacity`
    width: 100%;
    background-color: #fff;
    height: 35px;
    border-radius: 8px;
    position: absolute;
    bottom: 30px;
`;
export const TextoBotao = styled.Text`
   font-weight: bold;
   color: #34598A;
   align-self: center;
   line-height: 35px;
`;
export const Progressor = styled.View`
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    height: 5px;
    position: relative;
`;
export const Bola1 = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 360px;
    background-color: #fff;
    position: absolute;
    top: -2.5px;
    left: 0;
`;
export const Bola2 = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 360px;
    background-color: #fff;
    position: absolute;
    top: -2.5px;
    left: 25%;
`;
export const Bola3 = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 360px;
    background-color: #fff;
    position: absolute;
    top: -2.5px;
    left: 50%;
`;
export const Bola4 = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 360px;
    background-color: #fff;
    position: absolute;
    top: -2.5px;
    left: 75%;
`;
export const Bola5 = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 360px;
    background-color: #fff;
    position: absolute;
    top: -2.5px;
    left: 97%;
`;
export const Conteudo = styled.View`
    margin-top: 50px;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
`;
export const Titulo = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
`;

export const Requerimentos = styled.View`
    padding: 0 10px 0 10px
`;
export const ReqContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;  
    margin-top: 30px;
`;

export const IconText = styled.Text`
    margin-left: 15px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const IconSubText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    margin-left: 15px;
    color: #fff;
`;
