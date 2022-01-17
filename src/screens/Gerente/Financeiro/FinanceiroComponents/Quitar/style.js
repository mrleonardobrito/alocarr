import styled from "styled-components";

export const QuitarHeader = styled.View`
    height: 45px;
    background-color: #ECECEC;
    width: 100%;
    padding: 0 10px 0 10px
    display: flex;
    justify-content: center;
    position: relative;
`;

export const HeaderText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: gray;
`;

export const HeaderButton = styled.TouchableOpacity`
    position: absolute;
    right: 0px;
    height: 100%;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const QuitarMain = styled.View`
    padding: 15px 0 15px 10px;
    background-color: white;
`;

export const MainSection = styled.View`
    width: 30%;
`;

export const SectionTextButton = styled.Text`
    color: ${props => props.theme.corTitulo};
    font-weight: bold;
    font-size: 15px
`;

export const SectionButton = styled.TextInput`
    border: 1px solid gray;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    margin: 10px 0 0 0;
    font-size: 16px;
    padding: 0 7px 0 7px;
`;

export const QuitarFooter = styled.View`
    height: 45px;
    background-color: #ECECEC;
    width: 100%;
    padding: 0 10px 0 10px
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
`;

export const QuitarFooterButton = styled.TouchableOpacity`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    width: 70px;
    border-radius: 3px;
`;
export const CancelarButton = styled.TouchableOpacity`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 90px;
    border-radius: 3px;
`;
